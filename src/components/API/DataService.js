import axios from 'axios';

export default class DataService {
  static async getCharacters(filter, page) {
    const species = filter.species ? `&species=${filter.species}` : ''; 
    const status = filter.status ? `&status=${filter.status}` : ''; 
    const gender = filter.gender ? `&gender=${filter.gender}` : '';
    const link = `https://rickandmortyapi.com/api/character/?page=${page}${species}${status}${gender}`;

    try {
      const response = await axios.get(link);
      return response.data.results;
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  static async getEpisodes(page) {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/episode/?page=${page}`);
      return response.data.results;
    } catch (e) {
      console.log(e);
    }
  }

  static async getLocations(page) {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/location/?page=${page}`);
      return response.data.results;
    } catch (e) {
      console.log(e);
    }
  }

  static async getUnitsCount(target) {
    const response = await axios.get(`https://rickandmortyapi.com/api/${target}`);
    return response.data.info.count;
  }

  static async getPagesCount(target) {
    const response = await axios.get(`https://rickandmortyapi.com/api/${target}`);
    const count = response.data.info.pages; 
    return count;
  }
}