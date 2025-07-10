import express from "express";
import { SongRepositoryImpl } from "../../infrastructure/persistence/repositoryImpl/SongRepositoryImpl";
import { CreateSong } from "../../application/usecases/Song/CreateSong";
import { GetAllSongs } from "../../application/usecases/Song/GetAllSongs";
import { UpdateSong } from "../../application/usecases/Song/UpdateSong";
import { DeleteSong } from "../../application/usecases/Song/DeleteSong";

const router = express.Router();
const repo = new SongRepositoryImpl();
const createSong = new CreateSong(repo);
const getAllSongs = new GetAllSongs(repo);
const updateSong = new UpdateSong(repo);
const deleteSong = new DeleteSong(repo);

router.get("/", async (req, res) => {
  res.json("SONG");
  
});

router.post("/create", async (req, res) => {
  const song = await createSong.execute(req.body);
  res.json(song);

});

router.get("/getAll", async (req, res) => {
  const songs = await getAllSongs.execute();
  res.json(songs);
});

router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const updateResult = await updateSong.execute(id, req.body);
  res.json(updateResult);
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const deleteResult = await deleteSong.execute(id);
  res.json(deleteResult);
});


// router.post("/bulkCreate", async (req, res) => {
//   try {
//     const insertedSongs = [];

//     for (const song of songsData) {

//         const created = await createSong.execute({
//           title: song.title,
//           lyrics: song.lyrics,
//           author: ""
//         });
//         insertedSongs.push(created);
//       }
    

//     res.status(201).json({
//       message: `${insertedSongs.length} chansons insérées`,
//       songs: insertedSongs,
//     });
//   } catch (error) {
//     console.error("❌ Erreur lors du bulk insert :", error);
//     res.status(500).json({ message: "Erreur serveur lors du bulk insert" });
//   }
// });



export default router;
