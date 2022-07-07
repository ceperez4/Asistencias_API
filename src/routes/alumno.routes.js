import { Router } from "express";

import {getAlumnos,createAlumnos,getAlumnoById,deleteAlumnoById,updateAlumnoById} from './../controllers/alumno.controller';


const router = Router();

router.get('/alumnos',getAlumnos);

router.post('/alumnos',createAlumnos);

router.get('/alumno/:id',getAlumnoById);

router.delete('/alumno/:id',deleteAlumnoById);

router.put('/alumno/:id',updateAlumnoById);


export default router;