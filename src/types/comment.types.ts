export type CommentStatus = "published" | "hidden" | "deleted";

export interface Comment {
  id: string;
  dealId: string;
  authorId: string;
  authorName: string;
  text: string;
  status: CommentStatus;
  createdAt: Date;
}