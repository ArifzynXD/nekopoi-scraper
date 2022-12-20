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

### How To Use

## Basic

1. Install Packages
   ```sh
   npm install nekopoi-scraper
   ```
   or using `yarn`
   ```sh
   yarn add nekopoi-scraper
   ```
2. Import packages

- `CommonJS`
  ```js
  /** Export name
  search or Search
  latest or getRecent
  detail or getId
  list
   */
  const { Search, getRecent, list, getId } = require("nekopoi-scraper");
  ```
- `ESM`
  ```js
  /** Export name
  search or Search
  latest or getRecent
  detail or getId
  list
   */
  import { Search, getRecent, list, getId } from "nekopoi-scraper";
  ```

## Example

<details><summary><b>Get hentai by query</b></summary>
    
```js
import { Search } from "nekopoi-scraper";

const query = "love";
const limit = 10; // limit output. default 10
Search(query, limit).then(async (data) => {
console.log(data);
});

````
Output
```js
  [
    {
      "id": Number,
      "date": String,
      "title":String,
      "image": String,
      "type": String,
    },
    ...
  ]
````

</details>

<details><summary><b>Get latest/recent hentai</b></summary>

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
    id: Number,
    title: String,
    image: String,
    description: String,
  },
];
```

</details>

<details><summary><b>Get hentai detail by id</b></summary>

```js
import { getId } from "nekopoi-scraper";

getId(21910).then(async (data) => {
  console.log(data);
});
```

- Output

```js
  {
    "id": Number,
    "date": String,
    "title": String,
    "description": String,
    "image": String,
    "info_meta": {
      "aliases": String,
      "episode": String,
      "status": String,
      "tayang": String,
      "produser": String,
      "genre": String,
      "durasi": String,
      "skor": String,
    },
    "episode": [
      {
        "id": Number,
        "date": String,
        "title": String,
        "image": String,
      },
      ...
    ]
  }
```

- Output if **id** is episode

```js
  {
    "id":Number,
    "title": String,
    "image": String,
    "series": {
      "id": Number,
      "title": String,
      "content": String,
      "image": String,
      "genre": String,
    }
    "stream": [
      {
        "link": String
      },
      ...
    ],
    "download": [
      {
        "type": String,
        "links": [
           "name": String,
           "link": String
        ]
      },
      ...
    ],
  }
```

</details>

<details><summary><b>Get List all hentai</b></summary>

```js
import { list } from "nekopoi-scraper";

const type = "jav"; // available "jav", "hentai"
const page = 1; // optional
list(type, page).then(async (data) => {
  console.log(data);
});
```

- Output

```js
  [
    {
      "id": Number,
      "date": String,
      "title": String,
      "image": String,
      "type":String,
    }
    ...
  ]
```

</details>

## TODO

- [x] Make code more readable
- [ ] Etc.

## Contact

David - [@david.stefen](https://instagram.com/david.stefen)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
