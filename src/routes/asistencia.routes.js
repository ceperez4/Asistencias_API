import { Router } from "express";

import {getAsistencias, createAsistencia, getAsistenciaById, deleteAsistenciaById, updateAsistenciaById, getAsistenciasPorFecha, getAsistenciasPorMateria, getInasistenciasPorAlumnoMateria} from './../controllers/asistencia.controller';


const router = Router();

router.get('/asistencias', getAsistencias);

router.post('/asistencia', createAsistencia);

router.get('/asistencia/:id', getAsistenciaById);

router.delete('/asistencia/:id', deleteAsistenciaById);

router.put('/asistencia/:id', updateAsistenciaById);


router.get('/asistencia-fecha', getAsistenciasPorFecha);

router.get('/asistencia-materia', getAsistenciasPorMateria);

router.get('/asistencia-inasistencia-materia-alumno', getInasistenciasPorAlumnoMateria);

export default router;