const path = require("path");
const fs = require("fs");
const uniqid = require("uniqid");
var db = [];

module.exports = (app) => {
  app.get("/api/notes", (req, res) =>
    res.sendFile(path.join(__dirname + "/" + "db", "db.json"))
  );

  app.post("/api/notes", (req, res) => {
    const newCharacter = req.body;
    newCharacter.id = uniqid();
    db.push(newCharacter);
    console.log(db);
    fs.writeFile(__dirname + "/db/db.json", JSON.stringify(db), (err) => {
      if (err) console.log(err);
    });
    res.sendFile(path.join(__dirname, "notes.html"));
  });

  app.delete("/api/notes/:id", (req, res) => {
    const chosen = req.params.id;

    db = db.filter((note) => {
      return note.id != chosen;
    });
    fs.writeFile(__dirname + "/db/db.json", JSON.stringify(db), (err) => {
      if (err) console.log(err);
    });

    return res.sendFile(path.join(__dirname, "notes.html"));
  });
};
