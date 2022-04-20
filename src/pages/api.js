const NEWS_API_KEY = "4a22f768c0064a09982aeef81e196dd4"
// import { NEWS_API_KEY } from "./config"

export const getBitcoinArticles = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
  )
  const json = await response.json()
  return json
}

export const getArticles = async topic => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${topic}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
  )
  const json = await response.json()
  return json
}
