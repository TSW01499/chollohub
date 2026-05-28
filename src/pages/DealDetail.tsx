import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Flame, MessageCircle } from "lucide-react";

import { useDeals } from "@/context/DealsContext";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function DealDetail() {

  const { id } = useParams();
  const { getDealById } = useDeals();

  const deal = id ? getDealById(id) : undefined;


  if (!deal) {
    return (
      <main className="min-h-screen bg-background px-4 py-8">
        <section className="mx-auto max-w-4xl">
          <Card>
            <CardContent className="p-6 text-left">
              <h1 className="text-2xl font-bold">Chollo no encontrado</h1>
              <p className="mt-2 text-muted-foreground">
                El chollo que buscas no existe o ha sido eliminado.
              </p>

              <Button className="mt-4" asChild>
                <Link to="/">Volver al inicio</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background px-4 py-8">
      <section className="mx-auto max-w-4xl">
        <Button variant="ghost" className="mb-4" asChild>
          <Link to="/">
            <ArrowLeft size={16} className="mr-2" />
            Volver
          </Link>
        </Button>

        <Card className="overflow-hidden text-left">
          {deal.imageUrl && (
            <img
              src={deal.imageUrl}
              alt={deal.title}
              className="h-72 w-full object-cover"
            />
          )}

          <CardHeader>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{deal.category}</Badge>

              {deal.discount && (
                <Badge variant="outline">-{deal.discount}%</Badge>
              )}

              <span className="ml-auto flex items-center gap-1 text-sm text-orange-500">
                <Flame size={16} />
                {deal.score}
              </span>
            </div>

            <CardTitle className="text-2xl">{deal.title}</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-red-500">
                {deal.currentPrice.toFixed(2)} €
              </span>

              {deal.oldPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  {deal.oldPrice.toFixed(2)} €
                </span>
              )}
            </div>

            <p className="text-muted-foreground">{deal.description}</p>

            <div className="flex flex-wrap gap-2">
              {deal.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  #{tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MessageCircle size={16} />
              Publicado por {deal.authorName}
            </div>

            <Button asChild>
              <a href={deal.url} target="_blank" rel="noreferrer">
                Ir a la oferta
                <ExternalLink size={16} className="ml-2" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}