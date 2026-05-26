import type { Deal } from "@/types/deal.types";

export const mockDeals: Deal[] = [
  {
    id: "1",
    title: "Monitor gaming 27 pulgadas Full HD 165Hz",
    description:
      "Monitor gaming con buena tasa de refresco, ideal para jugar y trabajar.",
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
  },
  {
    id: "2",
    title: "Auriculares inalámbricos con cancelación de ruido",
    description:
      "Auriculares Bluetooth con buena autonomía y cancelación activa de ruido.",
    currentPrice: 59.99,
    oldPrice: 99.99,
    discount: 40,
    url: "https://example.com",
    imageUrl: "https://placehold.co/600x400",
    category: "Electrónica",
    tags: ["auriculares", "bluetooth", "audio"],
    authorId: "user2",
    authorName: "Usuario Demo",
    positiveVotes: 18,
    negativeVotes: 1,
    score: 17,
    status: "published",
    createdAt: new Date(),
  },
];