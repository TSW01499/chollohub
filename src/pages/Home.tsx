import { DealCard } from "@/components/deals/DealCard";
import { mockDeals } from "@/data/mockDeals";

export function Home() {
  return (
    <main className="min-h-screen bg-background px-4 py-8">
      <section className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            CholloHub
          </h1>
          <p className="mt-2 text-muted-foreground">
            Descubre, comparte y valora las mejores ofertas de la comunidad.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockDeals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </section>
    </main>
  );
}