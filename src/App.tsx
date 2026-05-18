import { useState } from 'react'
import './App.css'
import { DealCard } from "@/components/deals/DealCard";
import type { Deal } from "@/types/deal.types";


const exampleDeal: Deal = {
  id: "1",
  title: "Monitor gaming 27 pulgadas en oferta",
  description: "Monitor con buena tasa de refresco y descuento interesante.",
  currentPrice: 149.99,
  oldPrice: 229.99,
  discount: 35,
  url: "https://example.com",
  imageUrl: "https://placehold.co/600x400",
  category: "Informática",
  tags: ["monitor", "gaming", "oferta"],
  authorId: "user1",
  authorName: "Adrián",
  positiveVotes: 24,
  negativeVotes: 2,
  score: 22,
  status: "published",
  createdAt: new Date(),
};


function App() {
  return (
    <main className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-sm">
        <DealCard deal={exampleDeal} />
      </div>
    </main>
  );
}

export default App;
