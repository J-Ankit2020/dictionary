import React, { useState } from "react"
import  NavBar  from "./components/NavBar";
import Search from "./components/Search";
import Content from "./components/Content"
function App() {
  
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const [darkMode, setDarkMode] = useState(true);
function darkModeHandler() {
  const newMode = !darkMode;
    setDarkMode(newMode);
    const body = document.querySelector('body');
    if(newMode && !body.classList.contains('dark')) body.classList.add('dark');
    else if(!newMode && body.classList.contains('dark')) body.classList.remove('dark');
}

async function fetchData(searchText){
  setIsLoading(true);
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`);
  const data = await response.json();
  setData(data[0]);
  setIsLoading(false);
  console.log(data)
}



  return (
    <div className={`w-screen h-screen dark:bg-[#121313] bg-white`}>    
      <NavBar darkModeHandler={darkModeHandler}/>
      <Search fetchData={fetchData}/>
      <Content isLoading = {isLoading} data={data}/>
        </div>
  )
}

export default App;
