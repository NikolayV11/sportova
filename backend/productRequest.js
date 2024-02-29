const syncMysql = require("sync-mysql");
const CONFIG = require("./config");

// запрос на сервер MySQL получение всех таблиц
function getTablesMySQL(path) {
  const connection = new syncMysql(CONFIG);

  let queryTables = `SHOW TABLES`;

  const Tables = connection.query(queryTables);

  let resultTables = Tables.filter((item) => item.Tables_in_sportova === path);

  if (resultTables.length > 0) return true;

  return false;
}

// запрос на сервер MySQL получение таблицы
module.exports = function getDataSQL(path) {
  console.log(path);
  if (getTablesMySQL(path)) {
    const connection = new syncMysql(CONFIG);

    let query = `SELECT ${path}.*, ${path}_discount.discount FROM ${path}_discount
     RIGHT OUTER JOIN ${path} ON ${path}.id = ${path}_discount.${path}_id`;

    const result = connection.query(query);

    return result;
  }
  return false;
};
