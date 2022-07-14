
import { getConnection, sql, queries } from '../database/';

export const getAsistencias = async (req, res) => {

  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllAsistencias);

    res.json(result.recordset);

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }

}


export const createAsistencia = async (req, res) => {

  const { ID_ALUMNO, ID_MATERIA, FECHA_ASISTENCIA } = req.body;
  let {ASISTENCIA} = req.body;
  if (ID_ALUMNO == null || ID_MATERIA == null || FECHA_ASISTENCIA == null) {
    return res.status(400).json({ msg: 'Bad Request. Please Fill all fields' })
  }
  if(ASISTENCIA != 1){
    ASISTENCIA = '';
  }


  try {
    const pool = await getConnection();
    await pool.request()
      .input('ID_ALUMNO', sql.Int, ID_ALUMNO)
      .input('ID_MATERIA', sql.Int, ID_MATERIA)
      .input('FECHA_ASISTENCIA', sql.Date, FECHA_ASISTENCIA)
      .input('ASISTENCIA', sql.Bit, ASISTENCIA)
      .query(queries.addNewAsistencia);
    res.json({ ID_ALUMNO, ID_MATERIA, FECHA_ASISTENCIA, ASISTENCIA });

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }


}

export const getAsistenciaById = async (req, res) => {

  const {id} = req.params;
  
  try {
    const pool = await getConnection();
    const result = await pool.request()
    .input('Id',id)
    .query(queries.getAsistenciaById);
    console.log(result)
    res.send(result.recordset[0]);

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }


}



export const deleteAsistenciaById = async (req, res) => {

  const {id} = req.params;
  
  try {
    const pool = await getConnection();
    const result = await pool.request()
    .input('Id',id)
    .query(queries.deleteAsistenciaById);

    console.log('Asistencia eliminado')
    res.sendStatus(204);

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }


}


export const updateAsistenciaById = async (req, res) => {

  const {id} = req.params;
  
  const { ID_ALUMNO, ID_MATERIA, FECHA_ASISTENCIA } = req.body;
  let {ASISTENCIA} = req.body;

  if (ID_ALUMNO == null || ID_MATERIA == null || FECHA_ASISTENCIA == null ) {
    return res.status(400).json({ msg: 'Bad Request. Please Fill all fields' })
  }

  if(ASISTENCIA != 1){
    ASISTENCIA = '';
  }

  try {
    const pool = await getConnection();
    const result = await pool.request()
    .input('Id', sql.Int, id)
    .input('ID_ALUMNO', sql.Int, ID_ALUMNO)
    .input('ID_MATERIA', sql.Int, ID_MATERIA)
    .input('FECHA_ASISTENCIA', sql.Date, FECHA_ASISTENCIA)
    .input('ASISTENCIA', sql.Bit, ASISTENCIA)
    .query(queries.updateAsistenciaById);

    res.json({ ID_ALUMNO, ID_MATERIA, FECHA_ASISTENCIA, ASISTENCIA });
 

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }


}
/* ------------------*/

export const getAsistenciasPorFecha = async (req, res) => {

  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAsistenciaPorFecha);

    res.json(result.recordset);

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }

}


export const getAsistenciasPorMateria = async (req, res) => {

  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAsistenciaPorMateria);

    res.json(result.recordset);

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }

}

export const getInasistenciasPorAlumnoMateria = async (req, res) => {

  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getInasistenciaAlumnoMateria);

    res.json(result.recordset);

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }

}