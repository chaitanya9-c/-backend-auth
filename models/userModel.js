const pool = require("../db");

const findUserByEmail = async (email) => {
  const result = await pool.query(
    "SELECT * FROM users WHERE email = $1",
    [email]
  );

  return result.rows[0];
};

const findUserByMobile = async (mobile_number) => {
  const result = await pool.query(
    "SELECT * FROM users WHERE mobile_number = $1",
    [mobile_number]
  );

  return result.rows[0];
};

const createUser = async (
  first_name,
  last_name,
  email,
  mobile_number,
  gender,
  date_of_birth,
  password
) => {
  const result = await pool.query(
    `INSERT INTO users
    (first_name,last_name,email,mobile_number,gender,date_of_birth,password)
    VALUES ($1,$2,$3,$4,$5,$6,$7)
    RETURNING *`,
    [
      first_name,
      last_name,
      email,
      mobile_number,
      gender,
      date_of_birth,
      password,
    ]
  );

  return result.rows[0];
};

module.exports = {
  findUserByEmail,
  findUserByMobile,
  createUser,
};