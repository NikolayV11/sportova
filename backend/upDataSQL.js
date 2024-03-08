const syncMysql = require("sync-mysql");
const CONFIG = require("./config");

// function testF(dataBD) {
//   const connection = new syncMysql(CONFIG);
//   // let query = `INSERT INTO ${dataBD.path}(title, email) VALUES(${dataBD.title}, ${dataBD.email})`;
//   let query = `INSERT INTO test(title, email) VALUES(${dataBD.title},${dataBD.email}))`;
//   const result = connection.query(query);
// }

// const test = {
//   path: "test",
//   title: "test",
//   email: "email test",
// };

// testF(test);
// function tet() {
//   const connection = new syncMysql(CONFIG);
//   let query = "INSERT INTO test(title, email) VALUES('focus','di')";
//   const result = connection.query(query);
//   console.log(result);
// }
// tet();
function addDataSQLBD(dataBD) {
  const connection = new syncMysql(CONFIG);
  let query = `INSERT INTO \"${dataBD.path}\"('description', 'urlImg', 'equipment','attention','type of installation','max load', 'material', 'dimensions', 'packing parameters', 'crossbar diameter', 'distance between', 'guarantee') VALUES(\"${dataBD.description}\",\"${dataBD.urlImg}\",\"${dataBD.equipment}\",\"${dataBD.attention}\",\"${dataBD["type of installation"]}\",\"${dataBD["max load"]}\",\"${dataBD.material}\",\"${dataBD.dimensions}\",\"${dataBD["packing parameters"]}\",\"${dataBD["crossbar diameter"]}\",\"${dataBD["distance between"]}\",\"${dataBD.guarantee}\")`;
  console.log(query);
  const result = connection.query(query);
}

const data1 = {
  path: "weightlifting_description",
  description:
    "Гантели для силовых тренировок, для занятий спортом, кроссфитом, тяжелой атлетикой, для тренировок дома, незаменимый аксессуар при занятиях фитнесом и аэробикой. Специализация бренда: товары для фитнеса и спорта, аэробика, тяжелая атлетика, кроссфит, пауэрлифтинг, бодибилдинг, силовые тренировки, бег, ходьба, йога.Гантели виниловые, пластиковые, обрезиненные, неопреновые, разборные, сборные, детские, женские, мужские; гири чугунные и обрезиненные в различных весах и цветовых решениях – все эти необходимые аксессуары для тела мечты и поддержания физической формы представлены в одном месте.",
  urlImg: "weightlifting_1.jpg, weightlifting_2.jpg, weightlifting_3.jpg, weightlifting_4.jpg",
  equipment:
    "4шт х 1,25 кг; 4шт х 1,5 кг; 4шт х 2,0 кг; 4шт х 2,5 кг, 2 гантельных грифа, прямой гриф для штанги+ гриф для ролика + EZ образный гриф",
  attention: null,
  "type of installation": null,
  "max load": 15,
  material: "Пластик",
  dimensions:
    "4шт х 1,25 кг; 4шт х 1,5 кг; 4шт х 2,0 кг; 4шт х 2,5 кг, 2 гантельных грифа, прямой гриф для штанги+ гриф для ролика + EZ образный гриф",
  "packing parameters": "20см , 24см, 60см",
  "crossbar diameter": "20",
  "distance between": "60",
  guarantee: 2,
};
addDataSQLBD(data1);
// console.log(data1["crossbar diameter"]);
// `const data2 = {
//   path: "weightlifting_description",
//   description: "",
//   urlImg: "",
//   equipment,
//   attention: "",
//   "type of installation": "",
//   "max load": "",
//   material: "",
//   dimensions: "",
//   "packing parameters": "",
//   "crossbar diameter": "",
//   "distance between": "",
//   guarantee: "",
// };
// const data3 = {
//   path: "weightlifting_description",
//   description: "",
//   urlImg: "",
//   equipment,
//   attention: "",
//   "type of installation": "",
//   "max load": "",
//   material: "",
//   dimensions: "",
//   "packing parameters": "",
//   "crossbar diameter": "",
//   "distance between": "",
//   guarantee: "",
// };
// const data4 = {
//   path: "weightlifting_description",
//   description: "",
//   urlImg: "",
//   equipment,
//   attention: "",
//   "type of installation": "",
//   "max load": "",
//   material: "",
//   dimensions: "",
//   "packing parameters": "",
//   "crossbar diameter": "",
//   "distance between": "",
//   guarantee: "",
// };
// const data5 = {
//   path: "weightlifting_description",
//   description: "",
//   urlImg: "",
//   equipment,
//   attention: "",
//   "type of installation": "",
//   "max load": "",
//   material: "",
//   dimensions: "",
//   "packing parameters": "",
//   "crossbar diameter": "",
//   "distance between": "",
//   guarantee: "",
// };
// const data6 = {
//   path: "weightlifting_description",
//   description: "",
//   urlImg: "",
//   equipment,
//   attention: "",
//   "type of installation": "",
//   "max load": "",
//   material: "",
//   dimensions: "",
//   "packing parameters": "",
//   "crossbar diameter": "",
//   "distance between": "",
//   guarantee: "",
// };
// const data7 = {
//   path: "weightlifting_description",
//   description: "",
//   urlImg: "",
//   equipment,
//   attention: "",
//   "type of installation": "",
//   "max load": "",
//   material: "",
//   dimensions: "",
//   "packing parameters": "",
//   "crossbar diameter": "",
//   "distance between": "",
//   guarantee: "",
// };
// const data8 = {
//   path: "weightlifting_description",
//   description: "",
//   urlImg: "",
//   equipment,
//   attention: "",
//   "type of installation": "",
//   "max load": "",
//   material: "",
//   dimensions: "",
//   "packing parameters": "",
//   "crossbar diameter": "",
//   "distance between": "",
//   guarantee: "",
// };
// const data9 = {
//   path: "weightlifting_description",
//   description: "",
//   urlImg: "",
//   equipment,
//   attention: "",
//   "type of installation": "",
//   "max load": "",
//   material: "",
//   dimensions: "",
//   "packing parameters": "",
//   "crossbar diameter": "",
//   "distance between": "",
//   guarantee: "",
// };
// `;
