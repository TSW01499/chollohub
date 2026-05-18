export type UserRole = "admin" | "user" | "readonly";

export type UserStatus = "active" | "blocked" | "limited";

export interface AppUser {
  uid: string;
  displayName: string;
  email: string;
  photoURL?: string;
  role: UserRole;
  status: UserStatus;
  createdAt: Date;
}