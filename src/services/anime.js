const axios = require('axios')
const uri = require('../uri.json').uri

/**
 *
 * @param {number|string} id - The ID of the anime you are trying to get
 */
const get = (id) => {
  return new Promise((resolve, reject) => {
    if (typeof id === 'undefined') {
      reject(new Error('[Foxify]: No ID provided'))
    }

    axios.get(`${uri}/anime/${id}`)
      .then(response => resolve(response.data))
      .catch(e => reject(e))
  })
}

/**
 * Return all anime from Anifox
 * @param {integer} limit - Limit the search results
 */
const getAll = (limit) => {
  return new Promise((resolve, reject) => {
    let request
    if (typeof limit === 'number' && typeof limit !== 'undefined') {
      request = axios.get(`${uri}/anime?limit=${limit}`)
    } else {
      request = axios.get(`${uri}/anime`)
    }
    request
      .then(response => resolve(response.data))
      .catch(e => reject(e))
  })
}

/**
 * Return all anime filtered by genre
 *  * @param {string} type - The type of show you want to filter by "TV", "TVNew", "TVCon", "ONAs", "OVAs", "Specials" or "Movies".
 */
const getAllType = (type, limit) => {
  return new Promise((resolve, reject) => {
    let request
    if (typeof limit !== 'undefined') {
      request = axios.get(`${uri}/anime/type/${type}?limit=${limit}`)
    } else {
      request = axios.get(`${uri}/anime/type/${type}`)
    }
    request
    .then(response => resolve(response.data))
    .catch(e => reject(e))
  })
}

/**
 * Return the currently airing anime
 */
const getAiring = () => {
  return new Promise((resolve, reject) => {
    axios.get(`${uri}/anime/season/airing`)
      .then(response => resolve(response.data))
      .catch(e => reject(e))
  })
}

/**
 * Return search query
 * @param {string} term - Search term you want to query
 */
const search = (term) => {
  return new Promise((resolve, reject) => {
    axios.get(`${uri}/anime/search/${term}`)
      .then(response => resolve(response.data))
      .catch(e => reject(e))
  })
}

module.exports = {
  get,
  getAiring,
  getAll,
  search,
  getAllType
}
