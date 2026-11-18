import express from "express";
import { fileURLToPath } from "node:url";

const app = express();
app.get("/api/health", (_request, response) => response.json({ status: "ok", runtime: "node" }));
app.use(express.static(fileURLToPath(new URL("./public", import.meta.url))));
app.listen(Number(process.env.PORT || 3000), "0.0.0.0");
