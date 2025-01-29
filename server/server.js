const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth/auth-routes");
dotenv.config();

const PORT = process.env.PORT || 5001;
mongoose
  .connect(
    `mongodb+srv://subodhpoudel1001:Admin123@cluster0.czxx4.mongodb.net/`
  )
  .then(() => console.log("Mongo Db Connected Successfully"));

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
  console.log(`Server is listingin on Port ${PORT}`);
});
