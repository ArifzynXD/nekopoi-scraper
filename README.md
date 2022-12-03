<a name="readme-top"></a>
<br />

<h3 align="center">Simple</h3>
<div align="center">
  <a href="#">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">NekoPoi Scraper API</h3>
<img alt="npm" src="https://img.shields.io/npm/dw/nekopoi-scraper">
<a href="https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2Fxct007%2Fnekopoi-scraper"><img src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fxct007%2Fnekopoi-scraper&countColor=%232ccce4&style=flat" /></a>
</div>

### Note

Try it

### How To Use

1. Install Packages
   ```sh
   npm install nekopoi-scraper
   ```
   or
   ```sh
   yarn add nekopoi-scraper
   ```
2. Example

- Import packages
  - cjs
    ```js
    const { Search, getRecent, list, getId } = require("nekopoi-scraper");
    ```
  - ESM
    ```js
    import { Search, getRecent, list, getId } from 'nekopoi-scraper'
    ```
- <details><summary><b>Get hentai by query</b></summary>
    
    ```js
    import { Search } from "nekopoi-scraper";

  const query = "love";
  Search(query).then(async (data) => {
    console.log(data);
  });

  ````
  - Output
  ```js
  [
    {
      "id": 23916,
      "date": "August 30, 2022",
      "title": "SSNI-447 Erotic Love Slope Way Of View Sexual Desire Dada Leak Erotic Past Nuki Rolled Service 170 Minutes VIP Course",
      "image": "https://nekopoi.care/wp-content/uploads/2022/08/SSNI-447-Erotic-Love-Slope-Way-Of-View-Sexual-Desire-Dada-Leak-Erotic-Past-Nuki-Rolled-Service-170-Minutes-VIP-Course-Nekopoi-150x150.jpg",
      "type": "post"
    },
    ...
  ]
  ````

  </details>

- <details><summary><b>Get latest/recent hentai</b></summary>

  ```js
  import { getRecent } from "nekopoi-scraper";

  getRecent().then(async (data) => {
    console.log(data);
  });
  ```

  - Output

  ```js
  [
    {
      "id": 21910,
      "title": "Ero Ishi: Seijun Bishoujo wo Kotoba Takumi ni Hametai Houdai",
      "image": "https://nekopoi.care/wp-content/uploads/2022/01/Ero-Ishi1.jpg",
      "description": "Menceritakan dokter kelamin yang sekaligus juga penjahat kelamin yang membodoh-bodohi cewek SMA."
    },
    ...
  ]
  ```

  </details>

- <details><summary><b>Get hentai detail by id</b></summary>

  ```js
  import { getId } from "nekopoi-scraper";

  getId(21910).then(async (data) => {
    console.log(data);
  });
  ```

  - Output

  ```js
  {
    "id": 21910,
    "date": "2022-09-01 00:00:40",
    "title": "Ero Ishi: Seijun Bishoujo wo Kotoba Takumi ni Hametai Houdai",
    "description": "Menceritakan dokter kelamin yang sekaligus juga penjahat kelamin yang membodoh-bodohi cewek SMA.",
    "image": "https://nekopoi.care/wp-content/uploads/2022/01/Ero-Ishi1-150x150.jpg",
    "info_meta": {
      "aliases": "エロ医師 ~清純美少女を言葉巧みにハメたい放題~",
      "episode": "4",
      "status": "Completed",
      "tayang": "Jan 28, 2022",
      "produser": "PoRO",
      "genre": [
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object]
      ],
      "durasi": "21 min",
      "skor": "6.89"
    },
    "episode": [
      {
        "id": 21911,
        "date": "February 1, 2022",
        "title": "Ero Ishi: Seijun Bishoujo wo Kotoba Takumi ni Hametai Houdai Episode 1 Subtitle Indonesia",
        "image": "https://nekopoi.care/wp-content/uploads/2022/01/vlcsnap-2022-01-31-23h52m28s333-150x150.png"
      },
      ...
    ]
  }
  ```

  - Output if **id** is episode

  ```js
  {
    "id": 23239,
    "title":
      "[JAV SUB INDO] HAVD-875 The Hips That Won't Stop Even Though She Loves Her Husband. The Young Wife Who Is Addicted To The Big Cocks Of The Brothers Next Door",
    "content":
      "...",
    "image": "https://nekopoi.care/wp-content/uploads/2022/07/1havd875pl.jpg",
    "stream": [{ "link": "https://dood.pm/xxxx" }],
    "download": [
      { "type": "360p", "links": [Array] },
      { "type": "480p", "links": [Array] },
      { "type": "720p", "links": [Array] },
    ],
  }
  ```

  </details>

- <details><summary><b>Get List all hentai</b></summary>

  ```js
  import { list } from "nekopoi-scraper";

  const page = 1;
  const type = ["jav", "hentai"];
  list(page, type[0]).then(async (data) => {
    console.log(data);
  });
  ```

  - Output

  ```js
  [
    {
      "id": 20908,
      "date": "October 11, 2021",
      "title": "362SCOH-047 [Creampie] Let a carefully selected beautiful girl cosplay and conceive my child [Tokisaki]",
      "image": "https://nekopoi.care/wp-content/uploads/2021/10/93644-150x150.jpg",
      "type": "post"
    }
    ...
  ]
  ```

## Contact

David - [@david.stefen](https://instagram.com/david.stefen)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
