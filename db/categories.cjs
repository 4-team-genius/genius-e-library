const client = require('./client.cjs');

const createCategory = async(categoryName) => {
  try {
    const { rows } = await client.query(`
      INSERT INTO categories (name)
      VALUES ('${categoryName}')
      RETURNING *;
    `);

    return rows[0];
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
  createCategory
}