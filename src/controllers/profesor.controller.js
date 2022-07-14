import { getConnection, sql, queries } from '../database/';

export const getProfesores = async (req, res) => {

  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllProfesores);

    res.json(result.recordset);

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }

}


export const createProfesor = async (req, res) => {

  const { CI_PROFESOR, NOMBRE_PROFESOR, APELLIDO_PROFESOR, CELULAR_PROFESOR, PROFESION_PROFESOR } = req.body;

  if (CI_PROFESOR == null || NOMBRE_PROFESOR == null || APELLIDO_PROFESOR == null || CELULAR_PROFESOR == null || PROFESION_PROFESOR == null) {
    return res.status(400).json({ msg: 'Bad Request. Please Fill all fields' })
  }

  try {
    const pool = await getConnection();
    await pool.request()
      .input('CI_PROFESOR', sql.Numeric, CI_PROFESOR)
      .input('NOMBRE_PROFESOR', sql.Char, NOMBRE_PROFESOR)
      .input('APELLIDO_PROFESOR', sql.Char, APELLIDO_PROFESOR)
      .input('CELULAR_PROFESOR', sql.Numeric, CELULAR_PROFESOR)
      .input('PROFESION_PROFESOR', sql.Char, PROFESION_PROFESOR)
      .query(queries.addNewProfesor);
    res.json({ CI_PROFESOR, NOMBRE_PROFESOR, APELLIDO_PROFESOR, CELULAR_PROFESOR, PROFESION_PROFESOR });

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }


}

export const getProfesorById = async (req, res) => {

  const {id} = req.params;
  
  try {
    const pool = await getConnection();
    const result = await pool.request()
    .input('Id',id)
    .query(queries.getProfesorById);
    console.log(result)
    res.send(result.recordset[0]);

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }


}



export const deleteProfesorById = async (req, res) => {

  const {id} = req.params;
  
  try {
    const pool = await getConnection();
    const result = await pool.request()
    .input('Id',id)
    .query(queries.deleteProfesorById);

    console.log('Profesor eliminado')
    res.sendStatus(204);

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }


}


export const updateProfesorById = async (req, res) => {

  const {id} = req.params;
  
  const { CI_PROFESOR, NOMBRE_PROFESOR, APELLIDO_PROFESOR, CELULAR_PROFESOR, PROFESION_PROFESOR } = req.body;

  if (CI_PROFESOR == null || NOMBRE_PROFESOR == null || APELLIDO_PROFESOR == null || CELULAR_PROFESOR == null || PROFESION_PROFESOR == null) {
    return res.status(400).json({ msg: 'Bad Request. Please Fill all fields' })
  }


  try {
    const pool = await getConnection();
    const result = await pool.request()
    .input('Id', sql.Int, id)
    .input('CI_PROFESOR', sql.Numeric, CI_PROFESOR)
    .input('NOMBRE_PROFESOR', sql.Char, NOMBRE_PROFESOR)
    .input('APELLIDO_PROFESOR', sql.Char, APELLIDO_PROFESOR)
    .input('CELULAR_PROFESOR', sql.Numeric, CELULAR_PROFESOR)
    .input('PROFESION_PROFESOR', sql.Char, PROFESION_PROFESOR)
    .query(queries.updateProfesorById);

    res.json({ CI_PROFESOR, NOMBRE_PROFESOR, APELLIDO_PROFESOR, CELULAR_PROFESOR, PROFESION_PROFESOR });
 

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }


}

export const getProfesorMateria = async (req, res) => {

  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getProfesorMateria);

    res.json(result.recordset);

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }

}



export const getProfesorNumeroEstudiantes = async (req, res) => {

  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getProfesorNumeroEstudiantes);

    res.json(result.recordset);

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }

}




export const getMateriaPorNombreProfesor = async (req, res) => {

  const {nombreapellido} = req.params;
  const NOMBRE_PROFESOR = nombreapellido.split(' ')[0];
  const APELLIDO_PROFESOR = nombreapellido.split(' ')[1];

  
  try {
    const pool = await getConnection();
    const result = await pool.request()
    .input('NOMBRE_PROFESOR', sql.Char,NOMBRE_PROFESOR)
    .input('APELLIDO_PROFESOR', sql.Char,APELLIDO_PROFESOR)
    .query(queries.getMateriaPorNombreProfesor);

    res.json(result.recordset);

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }

 
}
