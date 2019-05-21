# mangaeden-node

> A Node.js API wrapper over [mangaeden](https://www.mangaeden.com/api/) API.


### Usage

```sh
npm i mangaeden-node
```

OR if you prefer yarn
```sh
yarn add mangaeden-node
```

Once installed you can just use any of the functions exposed by this package listed below.

All functions return a promise which resolves to the requested data.


### Manga List

##### getMangaList

```node
const { getMangaList } from 'mangaeden-node'

getMangaList().then(stuff => console.log(stuff.data.manga))

// [...] ~6800 manga data

```

##### getMangaListByPage

Params: page - Page number to fetch 500 mangas from

```node
const { getMangaListByPage } from 'mangaeden-node'

getMangaListByPage(5).then(stuff => console.log(stuff.data.manga))

// [...] ~500 manga data on page 5

```

##### getMangaListByPage

Params: page - Page number to fetch 500 mangas from

```node
const { getMangaListByPage } from 'mangaeden-node'

getMangaListByPage(5).then(stuff => console.log(stuff.data.manga))

// [...] 500 mangas data on page 5

```

##### getMangaListByPageAndSize

Params:  
* page - Page number to fetch certain number of mangas from
* size - Number of mangas to fetch (25 < size > 1000)

```node
const { getMangaListByPageAndSize } from 'mangaeden-node'

getMangaListByPageAndSize(5, 30).then(stuff => console.log(stuff.data.manga))

// [...] 30 manga data on page 5

```


### Manga Data

##### getMangaInfo

Params:  
* mangaId - Fetch manga info for a particular manga ID

```node
const { getMangaInfo } from 'mangaeden-node'

getMangaInfo().then(stuff => console.log(stuff.data))

// {...} Object containing manga data for the supplied manga ID

```

##### getChapter

Params:  
* chapterId - Fetch chapter info for a particular chapter ID

```node
const { getChapter } from 'mangaeden-node'

getChapter().then(stuff => console.log(stuff.data))

// {...} Object containing chapter data for the supplied chapter ID

```

## Author

[Anshuman Verma](https://github.com/anshumanv)

[<img src="https://image.flaticon.com/icons/svg/185/185961.svg" width="35" padding="10">](https://twitter.com/Anshumaniac12)
[<img src="https://image.flaticon.com/icons/svg/185/185964.svg" width="35" padding="10">](https://linkedin.com/in/anshumanv12)
[<img src="https://image.flaticon.com/icons/svg/185/185981.svg" width="35" padding="10">](https://www.facebook.com/anshumanv12)

