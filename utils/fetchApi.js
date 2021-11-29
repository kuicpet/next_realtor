import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'
{
  /**
    var options = {
  method: 'GET',
  url: 'https://bayut.p.rapidapi.com/auto-complete',
  params: {query: 'abu dhabi', hitsPerPage: '25', page: '0', lang: 'en'},
  headers: {
    'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': '858b5fdf14mshd6b41216305fe10p1e5c5ejsnc6ba44b4a3a1'
  }
};
*/
}

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '858b5fdf14mshd6b41216305fe10p1e5c5ejsnc6ba44b4a3a1',
    },
  })

  return data
}
