import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { addPlayer, deletePlayer, getAllPlayers, updatePlayer } from "./src/players.js";

const app = express();
app.use(cors());
app.use(express.json());


app.get('/hello', (req, res) => {
  res.send("Hello There!!!");
})

app.post('/players', addPlayer);
app.get('/players', getAllPlayers);
app.delete('/players/:playerId', deletePlayer);
app.patch('/players/:playerId', updatePlayer);


export const apiId = functions.https.onRequest(app);