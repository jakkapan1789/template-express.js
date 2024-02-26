const sql = require("mssql");
const database = require("../configs/database");

const find = (req, res) => {
  sql
    .connect(database)
    .then((pool) => {
      return pool.request().query("SELECT TOP 1 * FROM TABLE");
    })
    .then((result) => {
      sql.close();
      const selectedValue = result.recordset[0];
      if (selectedValue) {
        res.status(200).json(result.recordset);
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      res.status(500).send("Internal Server Error");
    });
};

module.exports = {
  find,
};
