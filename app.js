const express = require("express");
const cors = require("cors");

const {HttpError} = require("./helpers");

const contactsRouter = require("./routes/api/contacts");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
    throw HttpError(404, "Not found!");
})

app.use((err, req, res, next) => {
    const { status = 500, message = "Server error!" } = err;
    res.status(status).json({ message })
})

module.exports = app;