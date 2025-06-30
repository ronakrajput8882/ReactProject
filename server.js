/*const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const sequelize = require("./utils/db");

const app = express();
const PORT = process.env.PORT || 5000;

const userRoutes = require("./routes/users");

require("./models/User");
require("./models/Product");

dotenv.config();
app.use(cors());
app.use(express.json());


app.get("/ping", (req, res) => {
  res.send("pong");
});


sequelize
  .sync()
  .then(() => console.log("✅ MySQL Connected and Synced"))
  .catch((err) => console.error("❌ MySQL Error:", err));



app.use("/api/users", userRoutes);


const productRoutes = require("./models/Product");
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`🌐 Server running on http://localhost:${PORT}`);
});
*/
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sequelize = require("./utils/db");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

require("./models/User");
require("./models/Product");

const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.get("/ping", (req, res) => res.send("pong"));

sequelize
  .sync()
  .then(() => {
    console.log("✅ MySQL Connected and Synced");
    app.listen(PORT, () =>
      console.log(`🌐 Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error("❌ MySQL Error:", err));
