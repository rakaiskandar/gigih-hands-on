import { useEffect, useState } from 'react'

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch("http://localhost:3000/api/songs/top");

        const result = await data.json();

        setSongs(result);
      } catch (e) {
        console.log("Cannot fetch data", e.message);
      }
    }
    
    getData();
  }, [])

  return (
    <div style={{ padding: 12}}>
      <h1>List of Songs</h1>
      { songs && songs.map((item, i) => (
        <div style={{ display: 'flex', flexDirection: "column", gap: 5}} key={item.id}>
          <h3 style={{ display: "flex", flexDirection: "column" }}>Artist: {item.artist}</h3>
          <h4 style={{ fontWeight: 400 }}>Song: {item.title}</h4>
        </div>
      ))}
    </div>
  )
}

export default App
