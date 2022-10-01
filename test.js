const {
  ListAll,
  GetRecent,
  GetSeries,
  GetPost,
  Search
} = require('nekopoi-scrapper')

ListAll(1, 'hentai').then(async(data) => {console.log(data)})

GetRecent().then(async(data) => {console.log(data)})

GetSeries(23916).then(async(data) => {console.log(data)})

ListAll(21911).then(async(data) => {console.log(data)})

Search('love').then(async(data) => {console.log(data)})
