import { useState } from "react";
import Priority from "./components/Priority";

function App() {
  const [filterItem, setFilterItem] = useState("");

  const priority = [
    {
      name: "Complete task",
      isStarred: true
    },
    {
      name: "Learn programming",
      isStarred: true
    },
    {
      name: "Read article in Medium",
      isStarred: false
    },
    {
      name: "Analyze code in Github",
      isStarred: false
    }
  ];
  
  return (
    <div className="flex flex-col p-10 justify-center gap-4">
      <p className="font-bold text-3xl">Star Your Priority</p>
      <div className="flex h-10">
        <input type="text" className="inputStyle" placeholder="Search your priority" 
        onChange={(e) => setFilterItem(e.target.value)}/>
      </div>
      {priority.filter(item => {
        if(filterItem === ""){
          return item;
        } else if(item.name.toLowerCase().includes(filterItem.toLocaleLowerCase())) {
          return item;
        }
      }).map((item, i) => (
        <Priority 
        key={i}
        index={i + 1}
        name={item.name}
        isStarred={item.isStarred}
        />
      ))}
    </div>
  )
}

export default App
