const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

let db;

async function startServer() {
    await client.connect();
    db = client.db("studentNotesDB");
    console.log("MongoDB Connected");

    app.listen(3000, () => {
        console.log("Server running on http://localhost:3000");
    });
}

startServer();


// ADD NOTE
app.post("/notes", async (req, res) => {
    const note = req.body;
    note.created_date = new Date().toISOString().split("T")[0];

    const result = await db.collection("notes").insertOne(note);
    res.json(result);
});


// VIEW NOTES
app.get("/notes", async (req, res) => {
    const notes = await db.collection("notes").find().toArray();
    res.json(notes);
});


// UPDATE NOTE
app.put("/notes/:id", async (req, res) => {
    const id = req.params.id;

    const result = await db.collection("notes").updateOne(
        { _id: new ObjectId(id) },
        { $set: req.body }
    );

    res.json(result);
});


// DELETE NOTE
app.delete("/notes/:id", async (req, res) => {
    const id = req.params.id;

    const result = await db.collection("notes").deleteOne({
        _id: new ObjectId(id)
    });

    res.json(result);
});