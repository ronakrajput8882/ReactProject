const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const Product = sequelize.define(
  "Product",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.TEXT,
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    image: DataTypes.STRING,
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    category: DataTypes.STRING,
    soldCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    timestamps: true,
    tableName: "products",
  }
);

module.exports = Product;
