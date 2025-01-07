import express from "express";
import "dotenv/config";
import connection from "./config/mongoConnection.js";
import authRoutes from "./routes/auth.route.js";

const app = express();
const PORT = process.env.PORT || 3000;

//Mongodb connection
connection();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
