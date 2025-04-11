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

const getCategories = async() => {
  console.log('GETTING CATEGORIES...');
  const { rows } = await client.query(`
    SELECT * FROM categories;
  `);

  return rows;
}

module.export = {
  createCategory,
  getCategories
}