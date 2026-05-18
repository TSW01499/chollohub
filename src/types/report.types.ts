export type ReportStatus = "pending" | "reviewed" | "rejected";

export type ReportContentType = "deal" | "comment" | "user";

export interface Report {
  id: string;
  contentType: ReportContentType;
  contentId: string;
  reason: string;
  reporterId: string;
  status: ReportStatus;
  createdAt: Date;
}