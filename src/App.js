import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import List from "./students/List";
import View from "./students/View";
import Edit from "./students/Edit";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<List/>} />
          <Route exact path="/home" element={<Home/>} />
        
          <Route exact path="/edit/:id" element={<Edit/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
