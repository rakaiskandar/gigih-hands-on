import Name from './components/Name'

function App() {

  const data = [
    {
      name: "Hellen Keller",
      isGender: "female"
    },
    {
      name: "Marie Curie",
      isGender: "female"
    },
    {
      name: "Albert Einstein",
      isGender: "male"
    }
  ]

  return (
    <div>
      {data.map((item, i) => (
        <Name 
        key={i}
        name={item.name}
        isGender={item.isGender}
        />
      ))}
    </div>
  )
}

export default App
