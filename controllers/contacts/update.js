const fs = require("fs/promises");
const path = require("path");

const { listContacts } = require("./list");
const contactsPath = path.join(__dirname, "../../db/contacts.json");

const updateContact = async (data) => {
    const contacts = await listContacts();
    const idx = contacts.findIndex(item => item.id == data.id);
    const contact = contacts.find(item => item.id == data.id);
    contacts.splice(idx, 1);

    const updatedContact = {
        ...contact,
        ...data
    }

    contacts.push(updatedContact);

    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

    return updatedContact || null;
}

module.exports = {
    updateContact
}