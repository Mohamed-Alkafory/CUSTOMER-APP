const express = require("express");
const router = express.Router();
const Customer = require("../models/customer");

// Get all customers
router.get("/", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get Customer by ID
router.get("/:id", async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    res.status(200).json(customer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Create a new customer
router.post("/", async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Update Customer
router.put("/:id", async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(customer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete Customer
router.delete("/:id", async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    res.status(200).json(customer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
