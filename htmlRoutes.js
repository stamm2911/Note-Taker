const path = require("path");

module.exports = (app) => {
    
    app.get("/notes", (req, res) =>
    res.sendFile(path.join(__dirname, "notes.html"))
    );
    
    app.get("/assets/js/index.js", (req, res) =>
    res.sendFile(path.join(__dirname + "/assets/js/", "index.js"))
    );
    
    app.get("/assets/css/styles.css", (req, res) =>
    res.sendFile(path.join(__dirname + "/assets/css/", "styles.css"))
    );
    
    app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
};
