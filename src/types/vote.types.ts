export type VoteValue = 1 | -1;

export interface Vote {
  id: string;
  dealId: string;
  userId: string;
  value: VoteValue;
  createdAt: Date;
}