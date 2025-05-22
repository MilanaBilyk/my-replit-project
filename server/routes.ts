import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for future functionality
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Text-to-speech settings endpoint (for future use)
  app.get('/api/tts/settings', (req, res) => {
    res.json({
      defaultRate: 0.9,
      defaultPitch: 1,
      defaultLang: 'ru-RU'
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
