const express = require("express");

const contacts = require("../../controllers/contacts/index");

const router = express.Router();

router.get("/", async (req, res) => {
    console.log("Get all!")
    res.json(await contacts.listContacts());
})

router.get("/:id", async (req, res) => {
    console.log("Get by id!");
    const { id } = req.params;
    const searchedUser = await contacts.getContactById(id);
    res.json(searchedUser);
})

router.post("/", async (req, res) => {
    console.log("Add user!");
    const { name, phone, email } = req.body;
    const newUser = await contacts.addContact({name, phone, email});
    res.json(newUser);
})

router.patch("/:id", async (req, res) => {
    console.log("Update user!");
    const { id } = req.params;
    const { name, phone, email } = req.body;
    const updatedUser = await contacts.updateContact({id, name, phone, email});
    res.json(updatedUser);
})

router.delete("/:id", async (req, res) => {
    console.log("Removed!");
    const {id} = req.params;
    const removedUser = await contacts.removeContact(id);
    res.json(removedUser);
})

module.exports = router;