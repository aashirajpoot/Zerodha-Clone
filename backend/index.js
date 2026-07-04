require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3001;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

// ========================= ADD POSITIONS =========================

app.get("/addPositions", async (req, res) => {
  try {
    const tempPositions = [
      {
        product: "CNC",
        name: "EVEREADY",
        qty: 2,
        avg: 316.27,
        price: 312.35,
        net: "+0.58%",
        day: "-1.24%",
        isLoss: true,
      },
      {
        product: "CNC",
        name: "JUBLFOOD",
        qty: 1,
        avg: 3124.75,
        price: 3082.65,
        net: "+10.04%",
        day: "-1.35%",
        isLoss: true,
      },
    ];

    await PositionsModel.insertMany(tempPositions);

    res.send("Positions Added");
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

// ========================= GET HOLDINGS =========================

app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

// ========================= GET POSITIONS =========================

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

// ========================= GET ORDERS =========================

app.get("/allOrders", async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

// ========================= BUY STOCK =========================

app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    // Save order
    const newOrder = new OrdersModel({
      name,
      qty: Number(qty),
      price: Number(price),
      mode,
    });

    await newOrder.save();

    // Find holding
    let holding = await HoldingsModel.findOne({ name });

    if (holding) {
      const oldQty = Number(holding.qty);
      const newQty = Number(qty);

      const totalQty = oldQty + newQty;

      const totalInvestment =
        oldQty * Number(holding.avg) +
        newQty * Number(price);

      holding.qty = totalQty;
      holding.avg = totalInvestment / totalQty;
      holding.price = Number(price);

      await holding.save();
    } else {
      const newHolding = new HoldingsModel({
        name,
        qty: Number(qty),
        avg: Number(price),
        price: Number(price),
        net: "0%",
        day: "0%",
        isLoss: false,
      });

      await newHolding.save();
    }

    res.status(200).json({
      success: true,
      message: "Order Placed Successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Failed to place order",
    });
  }
});

// ========================= DATABASE CONNECTION =========================

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB Connection Error");
    console.error(err);
  });