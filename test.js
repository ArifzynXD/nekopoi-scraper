const nekopoi = require("./dist/commonjs/index.cjs");
const { GetRecent, Search, GetId, ListAll } = new nekopoi();

let page = 1,
  type = "jav";
ListAll(1, "jav").then(async (data) => {
  data.length > 1 ? console.log("ListAll") : console.error("function ListAll");
});

GetId(23239).then(async (data) => {
  data.length > 1 ? console.log("GetId") : console.error("function GetId");
});

GetRecent().then(async (data) => {
  data.length > 1
    ? console.log("GetRecent")
    : console.error("function GetRecent");
});

let limit = 5;
Search("love", limit).then(async (data) => {
  data.length > 1 ? console.log("Search") : console.error("function Search");
});
