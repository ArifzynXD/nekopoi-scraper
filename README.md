<a name="readme-top"></a>
<br />

<h3 align="center">Simple</h3>
<div align="center">
  <a href="#">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">NekoPoi Scraper API</h3>
</div>

### Note

Our beloved nekopoi admin has change something so I change the code a bit

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
    const nekopoi = require("nekopoi-scraper");
    const { GetRecent, Search, GetId } = new nekopoi();
    ```
  - ESM
    ```js
    import nekopoi from "nekopoi-scraper";
    const { GetRecent, Search, GetId } = new nekopoi();
    ```
- Get hentai by query
  ```js
  import nekopoi from "nekopoi-scraper";
  const { Search } = new nekopoi();

  let query = "love";
  Search(query).then(async (data) => {
    console.log(data);
  });
  ```
  - Output
    ```js
    [
      {
        id: 23916,
        date: 'August 30, 2022',
        title: 'SSNI-447 Erotic Love Slope Way Of View Sexual Desire Dada Leak Erotic Past Nuki Rolled Service 170 Minutes VIP Course',
        image: 'https://nekopoi.care/wp-content/uploads/2022/08/SSNI-447-Erotic-Love-Slope-Way-Of-View-Sexual-Desire-Dada-Leak-Erotic-Past-Nuki-Rolled-Service-170-Minutes-VIP-Course-Nekopoi-150x150.jpg',
        type: 'post'
      },
      ....
    ]
    ```
- Get latest/recent hentai

  ```js
  import nekopoi from "nekopoi-scraper";
  const { GetRecent } = new nekopoi();

  GetRecent().then(async (data) => {
    console.log(data);
  });
  ```

  - Output
    ```js
      [
        {
          id: 21910,
          title: 'Ero Ishi: Seijun Bishoujo wo Kotoba Takumi ni Hametai Houdai',
          image: 'https://nekopoi.care/wp-content/uploads/2022/01/Ero-Ishi1.jpg',
          description: 'Menceritakan dokter kelamin yang sekaligus juga penjahat kelamin yang membodoh-bodohi cewek SMA.'
        },
        ....
      ]
    ```

- Get detail by id

  ```js
  import nekopoi from "nekopoi-scraper";
  const { GetId } = new nekopoi();

  GetId(21910).then(async (data) => {
    console.log(data);
  });
  ```

  - Output
    ```js
    {
      id: 21910,
      date: '2022-09-01 00:00:40',
      title: 'Ero Ishi: Seijun Bishoujo wo Kotoba Takumi ni Hametai Houdai',
      description: 'Menceritakan dokter kelamin yang sekaligus juga penjahat kelamin yang membodoh-bodohi cewek SMA.',
      image: 'https://nekopoi.care/wp-content/uploads/2022/01/Ero-Ishi1-150x150.jpg',
      info_meta: {
        aliases: 'エロ医師 ~清純美少女を言葉巧みにハメたい放題~',
        episode: '4',
        status: 'Completed',
        tayang: 'Jan 28, 2022',
        produser: 'PoRO',
        genre: [
          [Object], [Object],
          [Object], [Object],
          [Object], [Object],
          [Object], [Object],
          [Object]
        ],
        durasi: '21 min',
        skor: '6.89'
      },
      episode: [
        {
          id: 21911,
          date: 'February 1, 2022',
          title: 'Ero Ishi: Seijun Bishoujo wo Kotoba Takumi ni Hametai Houdai Episode 1 Subtitle Indonesia',
          image: 'https://nekopoi.care/wp-content/uploads/2022/01/vlcsnap-2022-01-31-23h52m28s333-150x150.png'
        },
        {
          id: 22262,
          date: 'April 2, 2022',
          title: 'Ero Ishi: Seijun Bishoujo wo Kotoba Takumi ni Hametai Houdai Episode 2 Subtitle Indonesia',
          image: 'https://nekopoi.care/wp-content/uploads/2022/04/vlcsnap-2022-04-01-23h49m10s577-150x150.png'
        },
        {
          id: 22924,
          date: 'July 1, 2022',
          title: 'Ero Ishi: Seijun Bishoujo wo Kotoba Takumi ni Hametai Houdai Episode 3 Subtitle Indonesia',
          image: 'https://nekopoi.care/wp-content/uploads/2022/07/vlcsnap-2022-07-01-06h41m31s382-150x150.png'
        },
        {
          id: 23994,
          date: 'September 1, 2022',
          title: '[NEW Release] Ero Ishi: Seijun Bishoujo wo Kotoba Takumi ni Hametai Houdai Episode 4 Subtitle Indonesia',
          image: 'https://nekopoi.care/wp-content/uploads/2022/09/vlcsnap-2022-09-01-19h30m32s717-150x150.png'
        }
      ]
    }
    ```
  - Output if id is episode
    ```js
      id: 23239,
      title: "[JAV SUB INDO] HAVD-875 The Hips That Won't Stop Even Though She Loves Her Husband. The Young Wife Who Is Addicted To The Big Cocks Of The Brothers Next Door",
      content: '<strong>Movie ID : </strong>HAVD-875\r\n' +
        '\r\n' +
        '<strong>Producers :</strong> HIBINO\r\n' +
        '\r\n' +
        '<strong>Artist :</strong> Kudou Misa\r\n' +
        '\r\n' +
        '<strong>Genre :</strong> Creampie, Solowork, Big Tits, NTR, MILF\r\n' +
        '\r\n' +
        '<strong>Duration :</strong> 125 menit\r\n' +
        '\r\n' +
        '<strong>Size : 360P :</strong> 324mb <strong>|   480P :</strong> 461mb <strong>|   720P :</strong> 921mb\r\n' +
        '<h3 data-blogger-escaped-style="clear: both; text-align: left;">Catatan: Silakan Download Melalui  "<span style="color: #7641ab;">DROP</span>" JIKA INGIN <span style="color: #339966;">AKSES MUDAH</span> <span style="color: #ff6600;">TANPA PERLU MELEWATI/MELALUI IKLAN</span></h3>',
      image: 'https://nekopoi.care/wp-content/uploads/2022/07/1havd875pl.jpg',
      stream: [ { link: 'https://dood.pm/xxxx' } ],
      download: [
        { type: '360p', links: [Array] },
        { type: '480p', links: [Array] },
        { type: '720p', links: [Array] }
      ]
    }
    ```

## Contact

David - [@david.stefen](https://instagram.com/david.stefen)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
