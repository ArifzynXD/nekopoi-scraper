/**
 *
 * Fauzi anj
 *
 **/

const axios = require("axios");

class nekopoi {
  constructor() {}
  ListAll(page, type) {
    return new Promise(async (res, rej) => {
      let Data,
        types = ["hentai", "jav"],
        scheme = "https" + "://" + "api" + ".usamin" + ".cc/";
      page ? page : (page = 1);
      types.includes(type) ? type : (type = "hentai");
      try {
        await axios
          .request({
            url:
              scheme +
              "330cceade91a6a9cd30fb8042222ed56/nekopoiandroid/listall?letter=0-9&type=" +
              type +
              "&page=" +
              page,
            method: "GET",
            headers: {
              token:
                "JxBqD2ABN9P7ib8n0VmmgXCK7GYbqQg16KlDBtmKb71YLusKHNconNglUDNM4S8b",
              accept: "application/json",
              appbuildcode: "1622092501",
              appsignature:
                "QZceaZC9Nkrf4Bjsof03OyGO8OvaEZEVDxFoklX7GsbU1VT9dzfWBlqEsqU35ujuM8swvIcvNVujtII9",
              "accept-encoding": "gzip",
              "user-agent": "okhttp/4.9.0",
            },
          })
          .then(({ data }) => {
            Data = data.result;
          });
      } catch (_error) {
        Data = false;
      } finally {
        res(Data);
      }
    });
  }
  GetRecent() {
    return new Promise(async (res, rej) => {
      let Data,
        scheme = "https" + "://" + "api" + ".usamin" + ".cc/";
      try {
        await axios
          .request({
            url:
              scheme + "330cceade91a6a9cd30fb8042222ed56/nekopoiandroid/recent",
            method: "GET",
            headers: {
              token:
                "JxBqD2ABN9P7ib8n0VmmgXCK7GYbqQg16KlDBtmKb71YLusKHNconNglUDNM4S8b",
              accept: "application/json",
              appbuildcode: "1622092501",
              appsignature:
                "QZceaZC9Nkrf4Bjsof03OyGO8OvaEZEVDxFoklX7GsbU1VT9dzfWBlqEsqU35ujuM8swvIcvNVujtII9",
              "accept-encoding": "gzip",
              "user-agent": "okhttp/4.9.0",
            },
          })
          .then(({ data }) => {
            Data = [];
            for (let i of data.carousel) {
              Data.push({
                id: i.id,
                title: i.title,
                image: i.image,
                description: i.description,
              });
            }
          });
      } catch (_error) {
        Data = false;
      } finally {
        res(Data);
      }
    });
  }
  Search(query, limit) {
    return new Promise(async (res, rej) => {
      let Data,
        scheme = "https" + "://" + "api" + ".usamin" + ".cc/";
      limit ? limit : (limit = 10);
      try {
        await axios
          .request({
            url:
              scheme +
              "330cceade91a6a9cd30fb8042222ed56/nekopoiandroid/search?q=" +
              query +
              "&page=1",
            method: "GET",
            headers: {
              token:
                "JxBqD2ABN9P7ib8n0VmmgXCK7GYbqQg16KlDBtmKb71YLusKHNconNglUDNM4S8b",
              accept: "application/json",
              appbuildcode: "1622092501",
              appsignature:
                "QZceaZC9Nkrf4Bjsof03OyGO8OvaEZEVDxFoklX7GsbU1VT9dzfWBlqEsqU35ujuM8swvIcvNVujtII9",
              "accept-encoding": "gzip",
              "user-agent": "okhttp/4.9.0",
            },
          })
          .then(({ data }) => {
            Data = data.result.filter((val, i) => i < limit);
          });
      } catch (_error) {
        Data = false;
      } finally {
        res(Data);
      }
    });
  }
  GetId(Id) {
    return new Promise((resolve, reject) => {
      let scheme = "https" + "://" + "api" + ".itsrose" + ".my.id/";
      axios
        .get(scheme + "dewasa/nekopoi/detail?id=" + Id)
        .then(({ data }) => {
          resolve(data.result);
        })
        .catch((er) => {
          resolve({
            status: false,
            message: "wkwk",
          });
        });
    });
  }
}
module.exports = nekopoi;
