import axios from 'axios';

export default class DataService {
  static async getCharacters(filter, page = 1) {
    const species = filter.species ? `&species=${filter.species}` : ''; 
    const status = filter.status ? `&status=${filter.status}` : ''; 
    const gender = filter.gender ? `&gender=${filter.gender}` : '';
    const link = `https://rickandmortyapi.com/api/character/?page=${page}${species}${status}${gender}`;

    try {
      const response = await axios.get(link);
      return response;
    } catch (e) {
      console.log(e);
    }
  }

  static async getEpisodes(page) {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/episode/?page=${page + 1}`);
      return response;
    } catch (e) {
      console.log(e);
    }
  }

  static async getLocations() {
    try {
      const response = await axios.get("https://rickandmortyapi.com/api/character");
      return response;
    } catch (e) {
      console.log(e);
    }
  }
  static async getCharactersCount() {
    const response = await axios.get("https://rickandmortyapi.com/api/character");
    return response.data.info.count;
  }
  static async getCharactersPagesCount() {
    const response = await axios.get("https://rickandmortyapi.com/api/character")
    return response.data.info.pages;
  }
}