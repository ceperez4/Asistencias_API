import { Router } from "express";

import {getAlumnos,createAlumnos,getAlumnoById,deleteAlumnoById,updateAlumnoById,getFaltasPorAlumno, getFaltasPorAlumnoFecha, getAlumnoFaltaNumero} from './../controllers/alumno.controller';


const router = Router();

router.get('/alumnos',getAlumnos);

router.post('/alumnos',createAlumnos);

router.get('/alumno/:id',getAlumnoById);

router.delete('/alumno/:id',deleteAlumnoById);

router.put('/alumno/:id',updateAlumnoById);




router.get('/alumno-faltas-materia/:name',getFaltasPorAlumno);

router.get('/alumno-faltas-fecha',getFaltasPorAlumnoFecha);

router.get('/alumno-faltas/:falta',getAlumnoFaltaNumero);

export default router;