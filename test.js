const { getRecent, Search, getId, list } = require("./dist/cjs/index.js");

list(1, 'hentai').then(async (data) => {
  console.log(data)
});
