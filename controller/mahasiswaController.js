import db from "../connection.js"

const getMahasiswa = (req, res) => {

    const sql ="SELECT * FROM mahasiswa";

    db.query(sql, (error, result) => {
        res.send(result)
    });
};

const getMahasiswaByNim = (req, res)=> {

    const nim = req.query.nim;
    
    const sql = ` SELECT * FROM mahasiswa WHERE nim = ${nim}`

    db.query(sql, (error, result) => {

        res.json(result)
    });
   
};

const postMahasiswa = (req, res) => {
    const {nim, nama_mahasiswa, jurusan, alamat} =req.body
    const sql = "INSERT INTO mahasiswa (nim, nama_mahasiswa, jurusan, alamat) VALUES (?, ?, ?, ?)"
    db.query(sql, [nim, nama_mahasiswa, jurusan, alamat], (error, result) => {
        res.json(result)
    })
}

const deleteMahasiswa = (req, res) => {
    const nim = req.query.nim
    const sql = "DELETE FROM mahasiswa WHERE nim = ?"
    db.query(sql, [nim], (error, result) => {
        if(error) {
            res.status(400)
            res.send(error)
        }
        res.status(200)
        res.send("kehapus yeyyyyy")
    })
}

const editMahasiswa = (req, res) => {
    const nim = req.query.nim;
    const {nama_mahasiswa,jurusan, alamat} = req.body
    if(nim || nama_mahasiswa,jurusan, alamat){
        const query = `UPDATE mahasiswa SET nama_mahasiswa = "${nama_mahasiswa}", jurusan = "${jurusan}", alamat="${alamat}" WHERE nim = ${nim} `;
        db.query(query, (error, result) => {
            if(error) res.status(400).send(error.message);
            res.json(result)
        })
    }
}

export {getMahasiswa, getMahasiswaByNim, postMahasiswa, deleteMahasiswa, editMahasiswa}