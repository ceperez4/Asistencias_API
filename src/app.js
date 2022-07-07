import express from "express";
import config from "./config";
import alumnosRoutes from "./routes/alumno.routes";
import profesorRoutes from "./routes/profesor.routes";
import materiaRoutes from "./routes/materia.routes";
import asitenciaRoutes from "./routes/asistencia.routes";
import cors from "cors";
import morgan from "morgan";


const app = express();


//configuraciones 
app.set('port', config.port);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//rutas
app.use(alumnosRoutes);
app.use(profesorRoutes);
app.use(materiaRoutes);
app.use(asitenciaRoutes);


export default app;