const express = require("express");
const Opiskelija = require("../models/opiskelija");

const router = express.Router();

// GET all documents
router.get("/getall", async (req, res) => {
  try {
    const opiskelijat = await Opiskelija.find();
    res.status(200).json(opiskelijat);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch items" });
  }
});

// GET a single document by ID
router.get("/:id", async (req, res) => {
  try {
    const opiskelijat = await Opiskelija.findById(req.params.id);
    res.status(200).json(opiskelijat);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch item" });
  }
});

// POST a new document
router.post("/add", async (req, res) => {
  try {
    const { name, email, age, group } = req.body;

    const uusiOpiskelija = new Opiskelija({
      name: name,
      email: email,
      age: age,
      group: group,
    });

    await uusiOpiskelija.save();

    console.log("Student Added:", uusiOpiskelija);

    res.status(201).json(uusiOpiskelija);
  } catch (error) {
    console.error("Error while adding student:", error);
    res.status(500).json({ error: "Failed to add item" });
  }
});

// PATCH (update) a document by ID
router.patch("/update/:id", async (req, res) => {
  try {
    const { name, email, age, group } = req.body;

    const updatedOpiskelija = await Opiskelija.findByIdAndUpdate(
      req.params.id,
      { name, email, age, group },
      { new: true }
    );
    res.status(200).json(updatedOpiskelija);
  } catch (error) {
    res.status(500).json({ error: "Failed to update item" });
  }
});

// DELETE a document by ID
router.delete("/delete/:id", async (req, res) => {
  try {
    const opiskelijat = await Opiskelija.findByIdAndDelete(req.params.id);

    console.log("Student Deleted :", opiskelijat);
    res.status(200).json(opiskelijat);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete item" });
  }
});

module.exports = router;
