const axios = require('axios')

class nekopoi {
    constructor() { }
    GetRecent() {
        return new Promise(async(resolve, reject) => {
            axios.get("https://api.itsrose.my.id/dewasa/nekopoi/latest").then(({data}) => {
                resolve(data)
            }).catch((er) => {
                resolve({
                    status: false,
                    message: "wkwk"
                })
            })
        })
    }
    Search(query) {
        return new Promise((resolve, reject) => {
            axios.get("https://api.itsrose.my.id/dewasa/nekopoi/search?query=" + query).then(({data}) => {
                resolve(data)
            }).catch((er) => {
                resolve({
                    status: false,
                    message: "wkwk"
                })
            })
        })
    }
    GetId(Id) {
        return new Promise((resolve, reject) => {
            axios.get("https://api.itsrose.my.id/dewasa/nekopoi/detail?id=" + Id).then(({data}) => {
                resolve(data)
            }).catch((er) => {
                resolve({
                    status: false,
                    message: "wkwk"
                })
            })
        })
    }
}
module.exports = nekopoi
