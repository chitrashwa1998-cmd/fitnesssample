import express from "express";
import { setupVite, serveStatic, log } from "./vite";
import { createServer } from "http";

const app = express();

(async () => {
  const server = createServer(app);

  // Setup Vite only in development
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // Port & Host configuration
  const port = parseInt(process.env.PORT || "5000", 10);

  // Windows-safe host
  const isWindows = process.platform === "win32";
  const host = process.env.RENDER === "true" ? "0.0.0.0" : isWindows ? "127.0.0.1" : "0.0.0.0";

  // Start server
  server.listen(
    { port, host },
    () => {
      log(`serving on http://${host}:${port}`);
    }
  );
})();
