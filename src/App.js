import React, { useState, useEffect} from 'react'
import styles from './components/styles.css'
import axios from 'axios'
import CharacterGrid from './components/characters/CharacterGrid'
import Navigation from './components/Navigation'
import Search from './components/Search'
import Footer from './components/Footer'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios (
        `https://www.breakingbadapi.com/api/characters?name=${query}`
        )

      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <>
    <Navigation />
    <Search getQuery={(q) => setQuery(q)}/>
    <CharacterGrid isLoading={isLoading} items={items}/>
    <Footer />
    </>
  );
}

export default App
