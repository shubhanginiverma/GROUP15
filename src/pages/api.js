
const getArticles = async topic => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${topic}&sortBy=publishedAt&apiKey=4a22f768c0064a09982aeef81e196dd4`
  )
  const json = await response.json()
  return json
}
export default getArticles
