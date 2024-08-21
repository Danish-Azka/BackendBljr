import express from "express";
const app = express()
import bodyParser from "body-parser";
import router from "./route/mahasiswaRoute.js";
import dotenv from "dotenv"
dotenv.config();
const PORT = process.env.PORT;

app.use(bodyParser.json())

// app.put("/update", (req, res) => {
//     const nim = req.query.nim;
//     const {nama_mahasiswa,jurusan, alamat} = req.body
//     if(nim || nama_mahasiswa,jurusan, alamat){
//         const query = `UPDATE mahasiswa SET nama_mahasiswa = "${nama_mahasiswa}", jurusan = "${jurusan}", alamat="${alamat}" WHERE nim = ${nim} `;
//         db.query(query, (error, result) => {
//             if(error) res.status(400).send(error.message);
//             res.json(result)
//         })
//     }
// })


app.use("/", router)

app.listen(PORT, () => {
    console.log("server jalan cuyyy")
})