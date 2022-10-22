const nekopoi = require("./dist/commonjs/index.cjs");
const { GetRecent, Search, GetId, ListAll } = new nekopoi();

let page = 1,
  type = "jav";
ListAll(1, "jav").then(async (data) => {
  data ? console.log(data[0]) : console.log("function ListAll");
});

GetId(23239).then(async (data) => {
  data ? console.log(data) : console.log('function GetId')
});
GetRecent().then(async (data) => {
  data ? console.log(data[0]) : console.log('function GetRecent')
});

let limit = 5
Search("love", limit).then(async (data) => {
  data ? console.log(data[0]) : console.log('function Search')
});
