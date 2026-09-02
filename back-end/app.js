require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const customerRouter = require("./routes/customer");
app.use("/api/customers", customerRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

main().catch(console.error);
async function main() {
  const connectionString = process.env.MONGO_URI;
  if (!connectionString) {
    console.error("MONGO_URI environment variable is not defined!");
    return;
  }
  await mongoose.connect(connectionString);
  mongoose.set("strictQuery", true);
}

// module.exports = app;
