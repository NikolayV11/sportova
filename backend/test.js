const mysql = require("mysql2");
const CONFIG = require("./config");
const pool = mysql.createConnection(CONFIG);

// типы в ..._description
const infoTable = {
  id: `BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT`,
  description: `VARCHAR(1000)`,
  urlImg: `VARCHAR(250)`,
  equipment: `VARCHAR(250)`,
  attention: `VARCHAR(250)`,
  "type of installation": ` VARCHAR(250)`,
  "max load": `INT`,
  material: `VARCHAR(250)`,
  dimensions: `VARCHAR(250)`,
  "packing parameters": `VARCHAR(250)`,
  "crossbar diameter": `VARCHAR(250)`,
  "distance between": `VARCHAR(250)`,
  guarantee: `INT`,
  "profile color": `VARCHAR(250)`,
  "crossbar color": `VARCHAR(250)`,
};

// добавление данных в таблицы ..._description
function addDataDescription(data) {
  pool.query(
    `INSERT INTO ${data.path}(\`description\`, \`urlImg\`, \`equipment\`, \`attention\`, \`type of installation\`, \`max load\`, \`material\`, \`dimensions\`, \`packing parameters\`, \`crossbar diameter\`, \`distance between\`, \`guarantee\`,\`profile color\`,\`crossbar color\`) VALUES(\"${data.description}\",\"${data.urlImg}\",\"${data.equipment}\",\"${data.attention}\",\"${data["type of installation"]}\",${data["max load"]},\"${data.material}\",\"${data.dimensions}\",\"${data["packing parameters"]}\",\"${data["crossbar diameter"]}\",\"${data["distance between"]}\",${data.guarantee},\"${data["profile color"]}\",\"${data["crossbar color"]}\")`,
    function (err, results, fields) {
      console.log(err);
      console.log(results); // собственно данные
      console.log(fields); // мета-данные полей
    },
  );

  pool.end();
}

// данные в таблицы ..._description
const dataTable = {
  path: "horizontal_bars_description",
  description:
    "Турник напольный 5 в 1 , быстро собирается и быстро разбирается , выполнен из метала , высота турника мах 230 см  мин 190 см ,мах нагрузка на турник 150кг , на скамью со стойками 350 кг , так же регулируется высота крепления для штанги .",
  urlImg:
    "horizontal_bars_5.jpg, horizontal_bars_6.jpg, horizontal_bars_7.jpg, horizontal_bars_8.jpg",
  equipment:
    "Антискользящее покрытие, Возможность тренировки рук, Выбор интенсивности тренировки, Нескользящее покрытие ручек, Разные положения для хвата, Складная конструкция, Целевые тренировки",
  attention: "NULL",
  "type of installation": "Переносной",
  "max load": 150,
  material: "металл",
  dimensions: "турник напольный + скамья для жима",
  "packing parameters": " 1380х1320х2260 мм (ДхШхВ)",
  "crossbar diameter": "28",
  "distance between": "NULL",
  guarantee: 1,
  "profile color": "#E3F7F9, #000000",
  "crossbar color": "#fff, #000",
};

addDataDescription(dataTable);
