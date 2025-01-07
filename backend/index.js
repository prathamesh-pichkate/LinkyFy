import express from "express";
import "dotenv/config";
import connection from "./config/mongoConnection.js";
import authRoutes from "./routes/auth.route.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

//Mongodb connection
connection();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors());

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
