const db = require("../db/dbConfig.js");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById
};

async function insert(user) {
  return db("users")
    .insert(user, "id")
    .then(thing => {
      return findById(thing[0]);
    });
}

async function update(id, changes) {
  return null;
}

// async function remove(id) {
//   try {
//     const user = await findById(id);
//     await db("users")
//       .where({ id })
//       .del();
//     return res.status(200).json(user);
//   } catch (err) {
//     console.log("remove failed", err);
//     res.status(500).json({ error: "delete failed" });
//   }
// }

function remove(id) {
  return db("users")
    .where({ id })
    .del();
}

function getAll() {
  return db("users");
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
