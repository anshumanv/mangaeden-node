import axios from 'axios';
import { API } from './constants';
import { getMangaList } from './mangaList';

/**
 * Get info about a manga with a given manga ID
 * param - mangaId: ID of a manga to fetch info about
 * return - promise which resolves into the manga data
 */
export const getMangaInfo = async (mangaId: string): Promise<any> => {
  const mangaInfo = await axios.get(`${API}/manga/${mangaId}`);
  return mangaInfo;
};

/**
 * Get manga chapter with a given ID
 * param - chapterId: ID of a chapter to fetch info about
 * return - promise which resolves into the chapter data
 */
export const getChapter = async (chapterId: string): Promise<any> => {
  const chapters = await axios.get(`${API}/chapter/${chapterId}`);
  return chapters;
};

// export const searchManga = async (query: string): Promise<any> => {
//   const mangas = await getMangaList();
//   console.log(mangas);
// }
