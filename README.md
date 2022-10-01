<a name="readme-top"></a>
<br />
<div align="center">
  <a href="#">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">NekoPoi Scrapper</h3>
</div>

### How To Use
Simply 
1. install Packages
   ```sh
   npm install nekopoi-scrapper
   or
   yarn add nekopoi-scrapper
   ```
2. Example
    ```js
    const {
      ListAll,
      GetRecent,
      GetSeries,
      GetPost,
      Search
   } = require('nekopoi-scrapper')
   
   
   // Get Hentai by query
   
   let query = 'love'
   Search(query).then(async(data) => {console.log(data)})
   
   /*
    Example
    output :
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
   */

   // Get all list  
   
   let page = 1
   let type = "hentai"
   
   ListAll(page, type).then(async(data) => {console.log(data)})
   
   /*
    example 
    output : 
    [
      {
        id: 159,
        date: 'July 14, 2016',
        title: '3Ping Lovers!☆Ippu Nisai no Sekai e Youkoso♪ The Animation',
        image: 'https://nekopoi.care/wp-content/uploads/2016/07/77440-150x150.jpg',
        type: 'hentai'
      },
      ....
    ]
   */
   
   // Get latest/recent hentai
   
   GetRecent().then(async(data) => {console.log(data)})
   
   /*
    Example
    output :
    [
      {
        id: 21910,
        title: 'Ero Ishi: Seijun Bishoujo wo Kotoba Takumi ni Hametai Houdai',
        image: 'https://nekopoi.care/wp-content/uploads/2022/01/Ero-Ishi1.jpg',
        description: 'Menceritakan dokter kelamin yang sekaligus juga penjahat kelamin yang membodoh-bodohi cewek SMA.'
      },
      ....
    ]
   */
   
   // Get series by id from recent
   
   GetSeries(21910).then(async(data) => {console.log(data)})
   
   /*
    Example
    output :
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

   */
   
   // Get post/episode by id from Search/Series result
   
   GetPost(21911).then(async(data) => {console.log(data)})
   
   /*
   Example 
   output : 
   {
      id: 21911,
      title: '...',
      content: '...',
      image: '...',
      stream: [
        { 
          link: '...'
        }
      ],
     download: [
        {
            type: '360p', 
            links: [Array] 
        },
        { 
            type: '480p', 
            links: [Array] 
        },
        { 
            type: '720p',
            links: [Array] 
        },
        { 
            type: '1080p',
            links: [Array]
        }
      ]
    }
    */
   ```
   
## Contact

David - [@david.stefen](https://instagram.com/david.stefen)
