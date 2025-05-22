import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull(),
  displayName: text("display_name"),
  preferences: jsonb("preferences").$type<{
    font: string;
    fontSize: number;
    backgroundColor: string;
    speechRate: number;
  }>(),
});

// Text adaptation schema
export const adaptedTexts = pgTable("adapted_texts", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  title: text("title").notNull(),
  originalText: text("original_text").notNull(),
  adaptedText: text("adapted_text").notNull(),
  adaptationSettings: jsonb("adaptation_settings").$type<{
    font: string;
    colorBlocks: boolean;
    syllableSplit: boolean;
  }>(),
  createdAt: text("created_at").notNull(),
});

// Exercise results schema
export const exerciseResults = pgTable("exercise_results", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  exerciseType: text("exercise_type").notNull(),
  score: integer("score").notNull(),
  timeSpent: integer("time_spent").notNull(),
  completedAt: text("completed_at").notNull(),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
  displayName: true,
  preferences: true,
});

export const insertAdaptedTextSchema = createInsertSchema(adaptedTexts).pick({
  userId: true,
  title: true,
  originalText: true,
  adaptedText: true,
  adaptationSettings: true,
  createdAt: true,
});

export const insertExerciseResultSchema = createInsertSchema(exerciseResults).pick({
  userId: true,
  exerciseType: true,
  score: true,
  timeSpent: true,
  completedAt: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertAdaptedText = z.infer<typeof insertAdaptedTextSchema>;
export type AdaptedText = typeof adaptedTexts.$inferSelect;
export type InsertExerciseResult = z.infer<typeof insertExerciseResultSchema>;
export type ExerciseResult = typeof exerciseResults.$inferSelect;
