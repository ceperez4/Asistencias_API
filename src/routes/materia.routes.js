import { Router } from "express";

import {getMaterias, createMateria, getMateriaById, deleteMateriaById, updateAlumnoById,getMateriaMasFaltas,getMateriaListado,getMateriaMasAsiatencias} from './../controllers/materia.controller';


const router = Router();

router.get('/materias',getMaterias);

router.post('/materia', createMateria);

router.get('/materia/:id', getMateriaById);

router.delete('/materia/:id', deleteMateriaById);

router.put('/materia/:id', updateAlumnoById);

router.get('/materias-mas-faltas',getMateriaMasFaltas);

router.get('/materia-listado/:materia', getMateriaListado);

router.get('/materias-mas-asistencias',getMateriaMasAsiatencias);




export default router;