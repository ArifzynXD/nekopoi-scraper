const nekopoi = require("./index.js");
const { GetRecent, Search, GetId } = new nekopoi();

GetId(22189).then(async (data) => {
  console.log(data);
});

GetRecent().then(async (data) => {
  console.log(data);
});

Search("love").then(async (data) => {
  console.log(data);
});
