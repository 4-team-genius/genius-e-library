const client = require('./client.cjs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createUser = async (newEmail, newPassword) => {
  try {
    const encryptedPassword = await bcrypt.hash(newPassword, 10);
    await client.query(`
      INSERT INTO users (email, password, verified, registration_date)
      VALUES ('${newEmail}', '${encryptedPassword}', false, CURRENT_TIMESTAMP);
    `);
  } catch (err) {
    console.log(err);
  }
}

const getUser = async(inputEmail, inputPassword) => {
  const { rows } = await client.query(`
    SELECT * FROM users
    WHERE email='${inputEmail}';
  `);

  const user = rows[0];

  if(!user) {
    throw Error('Errors in Email and Password');
  } else {
    const hashedPassword = user.password;

    const isPasswordMatch = await bcrypt.compare(inputPassword, hashedPassword);
    
    if(isPasswordMatch) {
      const assignedToken = await jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
      return assignedToken;
    } else {
      throw Error('Errors in Email and password');
    }
  }
}

const getUserByToken = async(token) => {
  const { userId } = await jwt.verify(token, process.env.JWT_SECRET);
  
  const { rows } = await client.query(`
    SELECT id, email FROM users WHERE id=${userId};
  `);

  const user = rows[0];
  return user;
}

module.exports = {
  createUser,
  getUser,
  getUserByToken
}
