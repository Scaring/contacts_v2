const fs = require("fs/promises");
const { listContacts } = require("./list");
const path = require("path");
const contactsPath = path.join(__dirname, "../../db/contacts.json");

const removeContact = async (contactId) => {
    const contacts = await listContacts();
    const idx = contacts.findIndex(item => item.id == contactId);
    const [deleted] = contacts.splice(idx, 1);

    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

    return deleted;
}

module.exports = {
    removeContact
}