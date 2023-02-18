import Dashboard from "./Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDetails from "./UserDetails/UserDetails";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Post from "./Post/Post";
import { createContext } from "react";
import Gallery from "./Gallery/Gallery";
import ToDo from "./ToDo/ToDo";
const DataContext = createContext();
function App() {
  //function to fetch data
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("https://panorbit.in/api/users.json");
    const usersInfo = await response.data.users;
    setData(usersInfo);
    console.log(data);
  };

  //useEffect hook to call fectData function

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <DataContext.Provider value={data}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Dashboard />}></Route>
            <Route
              exact
              path="/userDetailsPage"
              element={<UserDetails />}
            ></Route>
            <Route exact path="/post" element={<Post />}></Route>
            <Route exact path="/profile" element={<UserDetails />}></Route>
            <Route exact path="/gallery" element={<Gallery />}></Route>
            <Route exact path="/todo" element={<ToDo />}></Route>
          </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    </div>
  );
}

export default App;
export { DataContext };
