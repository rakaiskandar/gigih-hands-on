import Home from "./page/app/Home"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Search from "./page/app/Search";
import Layout from "./page/app/Layout";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home/>}/>
          <Route path="/search" element={<Search />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
