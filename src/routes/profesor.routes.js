import { Router } from "express";

import {getProfesores, createProfesor, getProfesorById, deleteProfesorById, updateProfesorById, getProfesorMateria, getProfesorNumeroEstudiantes,getMateriaPorNombreProfesor} from './../controllers/profesor.controller';


const router = Router();

router.get('/profesores',getProfesores);

router.post('/profesor', createProfesor);

router.get('/profesor/:id', getProfesorById);

router.delete('/profesor/:id', deleteProfesorById);

router.put('/profesor/:id', updateProfesorById);



router.get('/profesores-materias',getProfesorMateria);

router.get('/profesores-numero-alumnos',getProfesorNumeroEstudiantes);

router.get('/profesores-nombre/:nombreapellido',getMateriaPorNombreProfesor);


export default router;