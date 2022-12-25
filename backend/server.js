// backend code goes here
import express from "express";
import { createServer as createViteServer } from "vite";
import { Server } from "socket.io";
import http from "http";
import WebSocket, { WebSocketServer } from "ws";
const app = express();

// const wss = new WebSocketServer({ port: 8080 });

// wss.on("connection", function connection(ws) {
//   ws.on("message", function message(data, isBinary) {
//     console.log(data);
//     wss.clients.forEach(function each(client) {
//       if (client.readyState === WebSocket.OPEN) {
//         client.send(data, { binary: isBinary });
//       }
//     });
//   });
// });

app.use(express.json());
app.use(function (req, res, next) {
  console.log("middleware");
  req.testing = "testing";
  return next();
});

app.get("/hi", (req, res) => {
  try {
    console.log("hits");
    res.status(200).json({ data: "Hello World!" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
});

async function createServer() {
  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: {
      middlewareMode: true,
    },
    appType: "custom", // don't include Vite's default HTML handling middlewares
  });
  // Use vite's connect instance as middleware
  app.use(vite.middlewares);

  app.use("*", async (req, res) => {
    // Since `appType` is `'custom'`, should serve response here.
    // Note: if `appType` is `'spa'` or `'mpa'`, Vite includes middlewares to handle
    // HTML requests and 404s so user middlewares should be added
    // before Vite's middlewares to take effect instead
  });
  app.listen(5173);
}

createServer();
