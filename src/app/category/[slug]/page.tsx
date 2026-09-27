import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, products } from "@/lib/mock-data";
import { ProductCard } from "@/components/product-card";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter((product) => {
    const productCategory = category.name
      .toLowerCase()
      .replace(/&/g, "")
      .replace(/\s+/g, "-");

    if (productCategory === "vps-hosting") {
      return product.category === "VPS";
    }

    if (productCategory === "tradingview-indicators") {
      return product.category === "Indicator" && product.platform === "TradingView";
    }

    if (productCategory === "mt5-indicators") {
      return product.category === "Indicator" && product.platform === "MT5";
    }

    if (productCategory === "ea-bots") {
      return product.category === "EA";
    }

    if (productCategory === "trading-systems") {
      return product.category === "Trading System";
    }

    if (productCategory === "trading-tools") {
      return product.category === "Tool";
    }

    return false;
  });

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Category</div>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-white">
            {category.icon} {category.name}
          </h1>
          <p className="mt-3 max-w-2xl text-slate-300">{category.description}</p>
        </div>

        <Link
          href="/products"
          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-emerald-400/40 hover:text-emerald-200"
        >
          Browse all products
        </Link>
      </div>

      <div className="mb-8 grid gap-4 rounded-3xl border border-white/10 bg-[#0b1118] p-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
          <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Products</div>
          <div className="mt-2 text-2xl font-bold text-white">{categoryProducts.length}</div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
          <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Average rating</div>
          <div className="mt-2 text-2xl font-bold text-white">
            {categoryProducts.length
              ? (
                  (categoryProducts.reduce((total, product) => total + product.rating, 0) / categoryProducts.length).toFixed(1)
                )
              : "0.0"}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
          <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Starting at</div>
          <div className="mt-2 text-2xl font-bold text-white">
            ${Math.min(...categoryProducts.map((product) => product.price), 0) || 0}
          </div>
        </div>
      </div>

      {categoryProducts.length ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categoryProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-[2rem] border border-dashed border-white/10 bg-[#0b1118] p-10 text-center text-slate-300">
          No products are currently assigned to this category in the demo catalog.
        </div>
      )}
    </main>
  );
}
