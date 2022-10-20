import nekopoi from "./dist/esm/index.mjs";
const { GetRecent, Search, GetId } = new nekopoi();

GetId(23239).then(async (data) => {
  data ? console.log(data) : console.log('function GetId')
});
GetRecent().then(async (data) => {
  data ? console.log(data[0]) : console.log('function GetRecent')
});

let limit = 5
Search("love", limit).then(async (data) => {
  data ? console.log(data[1]) : console.log('function Search')
});
