import { db } from "./dbConnect.js";

const coll = db.collection('players');

// ADD player

export async function addPlayer(req, res) {
  const player = req.body;
  await coll.add(player);
  
  res.status(201).send({message: "player added"});
}

// GET players
export async function getAllPlayers(req, res){
  const playerColl = await coll.get()
  const playerList = playerColl.docs.map(player => ({...player.data(), id: player.id}));

  res.status(200).send(playerList);
}

//DELETE player
export async function deletePlayer(req, res) {
  const {playerId} = req.params;
  
  await coll.doc(playerId).delete();
  res.status(202).send({message: "player deleted"});
}

//UPDATE player

export async function updatePlayer(req, res) {
  const {playerId} = req.params;
  const playerObj = req.body;
  
  await coll.doc(playerId).update(playerObj);
  res.status(202).send({message: "player updated"});
}