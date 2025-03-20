import { boolean, integer, pgTable, varchar } from "drizzle-orm/pg-core";

import { type InferInsertModel, type InferSelectModel } from "drizzle-orm";

export const usersTable = pgTable("user", {
  firstName: varchar("first_name", { length: 255 }).notNull(),
  id: integer("id").primaryKey(),
  isPremium: boolean("is_premium").default(false).notNull(),
  languageCode: varchar("language_code", { length: 255 }).default("en").notNull(),
  lastName: varchar("last_name", { length: 255 }),
  photoUrl: varchar("photo_url", { length: 255 }),
  username: varchar("username", { length: 255 }),
});

export type User = InferSelectModel<typeof usersTable>;
export type NewUser = InferInsertModel<typeof usersTable>;
