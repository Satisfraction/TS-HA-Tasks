const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
const schema = mongoose.Schema;

// MongoDB Verbindung herstellen
mongoose.connect('mongoDB link hier einfügen :P', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Verbindung mit MongoDB hergestellt'),
    app.listen(port, () => {
        console.log('Server läuft auf Port ' + port);
    });
});

app.get('/', (req, res) => {
    res.send('Willkommen!');
})


// Task Schema herstellen
const taskSchema = new schema({
    Titel: {type: String, required: true},
    Beschreibung: {type: String, maxLenght: 200},
    Erstellungsdatum: {type: Date, default: Date.now},
    Stichtag: {type: Date},
    Status: {type: String, default: 'offen', enum: ['offen', 'in Bearbeitung', 'erledigt']}
});

// Task Model erstellen
const tasks = mongoose.model('TS-Tasks', taskSchema, 'tasks');

app.use(express.json());

// GET tasks aus der DB holen
app.get('/tasks', (req, res) => {
    tasks.find()
  .then(tasks => {
    res.json(tasks);
  })
  .catch(error => {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  });

});

// POST tasks hinzufügen
app.post('/tasks', (req, res) => {
    const task = new tasks({
      Titel: req.body.Titel,
      Beschreibung: req.body.Beschreibung,
      Stichtag: req.body.Stichtag,
      Status: req.body.Status
    });
    task.save()
      .then(savedTask => {
        res.json(savedTask);
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
      });
  });
