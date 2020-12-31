import Express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import firebase from 'firebase';
import { v4 as uuidv4 } from 'uuid';

const server = new Express();
const logger = morgan('combined');

const firebaseConfig = {
  apiKey: "AIzaSyDIie-_ZVVMlPpA3E6k7PdR-9vJSz3xltk",
  authDomain: "noteslist-74676.firebaseapp.com",
  databaseURL: "https://noteslist-74676-default-rtdb.firebaseio.com",
  projectId: "noteslist-74676",
  storageBucket: "noteslist-74676.appspot.com",
  messagingSenderId: "542630526659",
  appId: "1:542630526659:web:28566d97a918d23d40ac76",
  measurementId: "G-KD3HVGGZXV"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

server.use(logger);
server.use(cors());

const host = '0.0.0.0'
const port = 7000

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.get('/notes', (req, res) => {
  try {
    db.ref('notes').once('value')
      .then(function(snapshot) {
        res.send(snapshot.val());
      })
  } catch (error) {
    console.log("Failed with error: " + error);
    res.send(error);
  }
});

server.post('/notes', (req, res) => {
    const { title, description } = req.body;
    const id = uuidv4();
    db.ref(`/notes/${id}`).set({ id, title, description, date: Date.now() }, function(error) {
      if (error) {
        console.log("Failed with error: " + error);
        res.send(error);
      } else {
        res.sendStatus(201);
      }
    })
});

server.delete('/notes/:id', (req, res) => {
  const { id } = req.params;
  db.ref(`/notes/${id}`).remove(function(error) {
    if (error) {
      console.log("Failed with error: " + error);
      res.send(error);
    } else {
      res.sendStatus(201);
    }
  })
});

server.listen(port, host, () =>
  console.log(`Server listens http://${host}:${port}`)
)

export default server;
