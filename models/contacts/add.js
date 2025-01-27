const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");
const { listContacts } = require("./list");
const contactsPath = path.join(__dirname, "../../db/contacts.json");

const addContact = async (data) => {
  const contacts = await listContacts();
  const added = contacts.find(item => item.name == data.name);
  const isUnique = added ? false : true;

  if (!isUnique) return "Contact allready exists!";

  const newContact = {
    ...data,
    id: nanoid()
  }

  contacts.push(newContact);

  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

  return newContact;
}

module.exports = {
  addContact
};