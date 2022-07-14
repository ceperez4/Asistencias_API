
import { getConnection, sql, queries } from '../database/';

export const getMaterias = async (req, res) => {

  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllMaterias);

    res.json(result.recordset);

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }

}


export const createMateria = async (req, res) => {

  const { ID_PROFESOR, NOMBRE_MATERIA } = req.body;

  if (ID_PROFESOR == null || NOMBRE_MATERIA == null ) {
    return res.status(400).json({ msg: 'Bad Request. Please Fill all fields' })
  }

  try {
    const pool = await getConnection();
    await pool.request()
      .input('ID_PROFESOR', sql.Int, ID_PROFESOR)
      .input('NOMBRE_MATERIA', sql.Char, NOMBRE_MATERIA)
      .query(queries.addNewMateria);
    res.json({ ID_PROFESOR, NOMBRE_MATERIA });

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }


}

export const getMateriaById = async (req, res) => {

  const {id} = req.params;
  
  try {
    const pool = await getConnection();
    const result = await pool.request()
    .input('Id',id)
    .query(queries.getMateriaById);
    console.log(result)
    res.send(result.recordset[0]);

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }


}



export const deleteMateriaById = async (req, res) => {

  const {id} = req.params;
  
  try {
    const pool = await getConnection();
    const result = await pool.request()
    .input('Id',id)
    .query(queries.deleteMateriaById);

    console.log('Materia eliminada')
    res.sendStatus(204);

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }


}


export const updateAlumnoById = async (req, res) => {

  const {id} = req.params;
  
  const { ID_PROFESOR, NOMBRE_MATERIA } = req.body;

  if (ID_PROFESOR == null || NOMBRE_MATERIA == null) {
    return res.status(400).json({ msg: 'Bad Request. Please Fill all fields' })
  }


  try {
    const pool = await getConnection();
    const result = await pool.request()
    .input('Id', sql.Int, id)
    .input('ID_PROFESOR', sql.Int, ID_PROFESOR)
    .input('NOMBRE_MATERIA', sql.Char, NOMBRE_MATERIA)
    .query(queries.updateMateriaById);

    res.json({ ID_PROFESOR, NOMBRE_MATERIA });
 

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }


}

export const getMateriaMasFaltas = async (req, res) => {

  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getMateriaMasFaltas);

    res.json(result.recordset);

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }

}


export const getMateriaListado = async (req, res) => {

  const {materia} = req.params;
  
  try {
    const pool = await getConnection();
    const result = await pool.request()
    .input('NOMBRE_MATERIA',sql.Char,materia)
    .query(queries.getMateriaListado);
    console.log(result)
    res.send(result.recordset);

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }


}


export const getMateriaMasAsiatencias = async (req, res) => {

  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getMateriaMasAsiatencias);

    res.json(result.recordset);

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }

}