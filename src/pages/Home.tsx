import { DealCard } from "@/components/deals/DealCard";
import { useDeals } from "@/context/DealsContext";

export function Home() {
  const { deals } = useDeals();

  return (
    <main className="min-h-screen bg-background px-4 py-8">
      <section className="mx-auto max-w-6xl">
        <div className="mb-8 text-left">
          <h1 className="text-3xl font-bold tracking-tight">CholloHub</h1>
          <p className="mt-2 text-muted-foreground">
            Descubre, comparte y valora las mejores ofertas de la comunidad.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </section>
    </main>
  );
}