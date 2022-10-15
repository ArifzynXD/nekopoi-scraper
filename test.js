const {
  GetRecent,
  Search,
  GetId
} = require('./original/nekopoi.js')

GetId(22189).then(async(data) => {console.log(data)})

GetRecent().then(async(data) => {console.log(data)})

Search('love').then(async(data) => {console.log(data)})
