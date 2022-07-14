
import { getConnection, sql, queries } from '../database/';

export const getAlumnos = async (req, res) => {

  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllAlumnos);

    res.json(result.recordset);

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }

}


export const createAlumnos = async (req, res) => {

  const { CI_ALUMNO, NOMBRE_ALUMNO, APELLIDO_ALUMNO, CELULAR_ALUMNO } = req.body;

  if (CI_ALUMNO == null || NOMBRE_ALUMNO == null || APELLIDO_ALUMNO == null || CELULAR_ALUMNO == null) {
    return res.status(400).json({ msg: 'Bad Request. Please Fill all fields' })
  }

  try {
    const pool = await getConnection();
    await pool.request()
      .input('CI_ALUMNO', sql.Numeric, CI_ALUMNO)
      .input('NOMBRE_ALUMNO', sql.Char, NOMBRE_ALUMNO)
      .input('APELLIDO_ALUMNO', sql.Char, APELLIDO_ALUMNO)
      .input('CELULAR_ALUMNO', sql.Numeric, CELULAR_ALUMNO)
      .query(queries.addNewAlumno);
    res.json({ CI_ALUMNO, NOMBRE_ALUMNO, APELLIDO_ALUMNO, CELULAR_ALUMNO });

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }


}

export const getAlumnoById = async (req, res) => {

  const {id} = req.params;
  
  try {
    const pool = await getConnection();
    const result = await pool.request()
    .input('Id',id)
    .query(queries.getAlumnoById);
    console.log(result)
    res.send(result.recordset[0]);

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }


}



export const deleteAlumnoById = async (req, res) => {

  const {id} = req.params;
  
  try {
    const pool = await getConnection();
    const result = await pool.request()
    .input('Id',id)
    .query(queries.deleteAlumnoById);

    console.log('Alumno eliminado')
    res.sendStatus(204);

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }


}


export const updateAlumnoById = async (req, res) => {

  const {id} = req.params;
  
  const { CI_ALUMNO, NOMBRE_ALUMNO, APELLIDO_ALUMNO, CELULAR_ALUMNO } = req.body;

  if (CI_ALUMNO == null || CI_ALUMNO == null || APELLIDO_ALUMNO == null || CELULAR_ALUMNO == null) {
    return res.status(400).json({ msg: 'Bad Request. Please Fill all fields' })
  }


  try {
    const pool = await getConnection();
    const result = await pool.request()
    .input('Id', sql.Int, id)
    .input('CI_ALUMNO', sql.Numeric, CI_ALUMNO)
    .input('NOMBRE_ALUMNO', sql.Char, NOMBRE_ALUMNO)
    .input('APELLIDO_ALUMNO', sql.Char, APELLIDO_ALUMNO)
    .input('CELULAR_ALUMNO', sql.Numeric, CELULAR_ALUMNO)
    .query(queries.updateAlumnoById);

    res.json({ CI_ALUMNO, NOMBRE_ALUMNO, APELLIDO_ALUMNO, CELULAR_ALUMNO });
 

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }


}


export const getFaltasPorAlumno = async (req, res) => {

  const {name} = req.params;
  
  try {
    const pool = await getConnection();
    const result = await pool.request()
    .input('NOMBRE_ALUMNO', sql.Char,name)
    .query(queries.getFaltasPorAlumno);
    console.log(result)
    res.send(result.recordset);

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }


}

export const getFaltasPorAlumnoFecha = async (req, res) => {

  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getFaltasPorAlumnoFecha);

    res.json(result.recordset);

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }

}



export const getAlumnoFaltaNumero = async (req, res) => {

  const {falta} = req.params;
  
  try {
    const pool = await getConnection();
    const result = await pool.request()
    .input('falta', sql.Int,falta)
    .query(queries.getAlumnoFaltaNumero);
    console.log(result)
    res.send(result.recordset);

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }


}