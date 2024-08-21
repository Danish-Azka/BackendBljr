import express from "express";
import { deleteMahasiswa, editMahasiswa, getMahasiswa, getMahasiswaByNim, postMahasiswa } from "../controller/mahasiswaController.js";

const router = express.Router();

router.get("/", getMahasiswa)
router.get("/find", getMahasiswaByNim)
router.post("/create", postMahasiswa)
router.delete("/delete", deleteMahasiswa)
router.put("/update", editMahasiswa)

export default router