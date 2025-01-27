const contacts = require("../models/contacts");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
    const allContacts = await contacts.listContacts();
    res.json(allContacts);
}

const getById = async (req, res) => {
    const { id } = req.params;
    const searchedUser = await contacts.getContactById(id);

    if (!searchedUser) throw HttpError(404, "Not found!");

    res.json(searchedUser);
}

const post = async (req, res) => {
    const newUser = await contacts.addContact(req.body);
    res.status(201).json(newUser);
}

const update = async (req, res) => {
    const { id } = req.params;
    const { name, phone, email } = req.body;
    const updatedUser = await contacts.updateContact({ id, name, phone, email });

    if (!updatedUser) {
        throw HttpError(404, "Not found!");
    }

    res.json(updatedUser);
}

const remove = async (req, res) => {
    const { id } = req.params;

    const removedUser = await contacts.removeContact(id);

    if (!removedUser) {
        throw HttpError(404, "Not found!");
    }

    res.json(removedUser);
}

module.exports = {
    getAll: ctrlWrapper(getAll),
    getById: ctrlWrapper(getById),
    post: ctrlWrapper(post),
    update: ctrlWrapper(update),
    remove: ctrlWrapper(remove)
}