import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function CreateDeal() {
  return (
    <main className="min-h-screen bg-background px-4 py-8">
      <section className="mx-auto max-w-3xl">
        <Button variant="ghost" className="mb-4" asChild>
          <Link to="/">
            <ArrowLeft size={16} className="mr-2" />
            Volver
          </Link>
        </Button>

        <Card className="text-left">
          <CardHeader>
            <CardTitle className="text-2xl">Publicar nuevo chollo</CardTitle>
            <p className="text-sm text-muted-foreground">
              Comparte una oferta interesante con la comunidad de CholloHub.
            </p>
          </CardHeader>

          <CardContent>
            <form className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="title">Título del chollo</Label>
                <Input
                  id="title"
                  placeholder="Ej: Monitor gaming 27 pulgadas en oferta"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descripción</Label>
                <Textarea
                  id="description"
                  placeholder="Describe brevemente la oferta..."
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="currentPrice">Precio actual</Label>
                  <Input
                    id="currentPrice"
                    type="number"
                    step="0.01"
                    placeholder="149.99"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="oldPrice">Precio anterior</Label>
                  <Input
                    id="oldPrice"
                    type="number"
                    step="0.01"
                    placeholder="229.99"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="url">Enlace a la oferta</Label>
                <Input
                  id="url"
                  type="url"
                  placeholder="https://tienda.com/oferta"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="imageUrl">URL de imagen</Label>
                <Input
                  id="imageUrl"
                  type="url"
                  placeholder="https://imagen.com/producto.jpg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Categoría</Label>
                <Input
                  id="category"
                  placeholder="Informática, electrónica, hogar..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Etiquetas</Label>
                <Input
                  id="tags"
                  placeholder="monitor, gaming, oferta"
                />
              </div>

              <Button type="submit" className="w-full">
                Publicar chollo
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}