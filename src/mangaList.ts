import axios from 'axios';
import { API } from './constants';

// Get list of all mangas
export const getMangaList = (): Promise<any> => {
  const mangaList = axios.get(`${API}/list/0`);
  // TODO: mod later to return actual data rather than a promise 🤔
  return mangaList;
};

// Same as above but returns only 500 manga's information
// from manga X*500 to (X+1)*500, where X is the page fetched from the GET parameter 'p'
export const getMangaListByPage = async (page: number): Promise<any> => {
  const mangaList = await axios.get(`${API}/list/0/?p=${page}`);
  return mangaList;
};

// Manga List split in pages with variable page size
// 25 < size < 1000
// returns manga list promise from (page * size) to (page + 1) * size
export const getMangaListByPageAndSize = async (page: number, size: number): Promise<any> => {
  const mangaList = await axios.get(`${API}/list/0/?p=${page}&l=${size}`);
  return mangaList;
};
