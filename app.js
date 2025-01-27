const express = require("express");

const contactsRouter = require("./routes/api/contacts");

const app = express();

app.use(express.json());

app.use("/api/contacts", contactsRouter);

module.exports = app;