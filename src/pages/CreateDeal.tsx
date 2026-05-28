import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { useDeals } from "@/context/DealsContext";


import type { Deal } from "@/types/deal.types";

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

interface CreateDealForm {
  title: string;
  description: string;
  currentPrice: string;
  oldPrice: string;
  url: string;
  imageUrl: string;
  category: string;
  tags: string;
}

const initialForm: CreateDealForm = {
  title: "",
  description: "",
  currentPrice: "",
  oldPrice: "",
  url: "",
  imageUrl: "",
  category: "",
  tags: "",
};

export function CreateDeal() {
  const [form, setForm] = useState<CreateDealForm>(initialForm);
  const [error, setError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const navigate = useNavigate();
  const { addDeal } = useDeals();


  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { id, value } = event.target;

    setForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  }


  function calculateDiscount(currentPrice: number, oldPrice?: number) {
    if (!oldPrice || oldPrice <= currentPrice) {
      return undefined;
    }

    return Math.round(((oldPrice - currentPrice) / oldPrice) * 100);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setSuccessMessage("");

    if (!form.title.trim()) {
      setError("El título del chollo es obligatorio.");
      return;
    }

    if (!form.description.trim()) {
      setError("La descripción es obligatoria.");
      return;
    }

    if (!form.currentPrice.trim()) {
      setError("El precio actual es obligatorio.");
      return;
    }

    if (!form.url.trim()) {
      setError("El enlace a la oferta es obligatorio.");
      return;
    }

    if (!form.category.trim()) {
      setError("La categoría es obligatoria.");
      return;
    }

    const currentPrice = Number(form.currentPrice);
    const oldPrice = form.oldPrice ? Number(form.oldPrice) : undefined;

    if (Number.isNaN(currentPrice) || currentPrice <= 0) {
      setError("El precio actual debe ser un número mayor que 0.");
      return;
    }

    if (oldPrice !== undefined && (Number.isNaN(oldPrice) || oldPrice <= 0)) {
      setError("El precio anterior debe ser un número mayor que 0.");
      return;
    }

    const tags = form.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);

    const discount = calculateDiscount(currentPrice, oldPrice);

    const newDeal: Deal = {
      id: crypto.randomUUID(),
      title: form.title.trim(),
      description: form.description.trim(),
      currentPrice,
      oldPrice,
      discount,
      url: form.url.trim(),
      imageUrl: form.imageUrl.trim() || undefined,
      category: form.category.trim(),
      tags,
      authorId: "demo-user",
      authorName: "Usuario demo",
      positiveVotes: 0,
      negativeVotes: 0,
      score: 0,
      status: "published",
      createdAt: new Date(),
    };


    addDeal(newDeal);

    setSuccessMessage("Chollo publicado correctamente.");
    setForm(initialForm);

    navigate(`/deals/${newDeal.id}`);

  }

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
            {error && (
              <div className="mb-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            {successMessage && (
              <div className="mb-4 rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                {successMessage}
              </div>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="title">Título del chollo</Label>
                <Input
                  id="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Ej: Monitor gaming 27 pulgadas en oferta"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descripción</Label>
                <Textarea
                  id="description"
                  value={form.description}
                  onChange={handleChange}
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
                    min="0"
                    value={form.currentPrice}
                    onChange={handleChange}
                    placeholder="149.99"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="oldPrice">Precio anterior</Label>
                  <Input
                    id="oldPrice"
                    type="number"
                    step="0.01"
                    min="0"
                    value={form.oldPrice}
                    onChange={handleChange}
                    placeholder="229.99"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="url">Enlace a la oferta</Label>
                <Input
                  id="url"
                  type="url"
                  value={form.url}
                  onChange={handleChange}
                  placeholder="https://tienda.com/oferta"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="imageUrl">URL de imagen</Label>
                <Input
                  id="imageUrl"
                  type="url"
                  value={form.imageUrl}
                  onChange={handleChange}
                  placeholder="https://imagen.com/producto.jpg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Categoría</Label>
                <Input
                  id="category"
                  value={form.category}
                  onChange={handleChange}
                  placeholder="Informática, electrónica, hogar..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Etiquetas</Label>
                <Input
                  id="tags"
                  value={form.tags}
                  onChange={handleChange}
                  placeholder="monitor, gaming, oferta"
                />
                <p className="text-xs text-muted-foreground">
                  Separa las etiquetas con comas.
                </p>
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