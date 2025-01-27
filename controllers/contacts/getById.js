const { listContacts } = require("./list");

const getContactById = async (contactId) => {
    const contacts = await listContacts();
    const contact = contacts.find(item => item.id == contactId);
    return contact || null;
}

module.exports = {
    getContactById
}