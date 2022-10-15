const axios = require('axios')

const GetRecent = async() => {
    return new Promise(async(resolve, reject) => {
        let Data
        try {
            await axios.get("https://api.itsrose.my.id/dewasa/nekopoi/latest").then((data) => {
                Data = data
                Status = true
            })
        } catch (_error) {
            Status = false
        } finally {
            resolve(Data)
        }
    }
}
const Search = async(query) => {
    return new Promise((resolve, reject) => {
        await axios.get("https://api.itsrose.my.id/dewasa/nekopoi/search?query=" + query).then((data) => {
            resolve(data)
        }).catch((_error) => {
            resolve({
                status: false,
                message: "wkwk"
            })
        })
    }
}
const GetId = async(Id) => {
    return new Promise(async(resolve, reject) => {
        let Data
        try {
            await axios.get("https://api.itsrose.my.id/dewasa/nekopoi/detail?id=" + id).then((data) => {
                Data = data
            })
        } catch (_error) {
            resolve({
                status: false,
                message: "wkwk"
            })
        } finally {
            resolve(Data)
        }
    })
}

module.exports = {
    GetRecent,
    Search,
    GetId
}
