export type DealStatus = "published" | "hidden" | "deleted";

export interface Deal {
  id: string;
  title: string;
  description: string;
  currentPrice: number;
  oldPrice?: number;
  discount?: number;
  url: string;
  imageUrl?: string;
  category: string;
  tags: string[];
  authorId: string;
  authorName: string;
  positiveVotes: number;
  negativeVotes: number;
  score: number;
  status: DealStatus;
  createdAt: Date;
  updatedAt?: Date;
}