
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Profile from "./components/Home/Profile"
import Settings from "./components/Home/Settings";
import Blog from "./components/Home/Blog"

import Message from './components/Home/Message';
import Home from './components/Home/Home';
import { createContext } from 'react';



export const UserContext = createContext()


function App() {
  const user = "anil"

  return (
    <div>
      <UserContext.Provider value={user}>


        <Routes>
          <Route path='/Home' element={<Home />}>
            <Route index element={<Profile />} />
            <Route path="/Home/message" element={<Message />} />
            <Route path="/Home/settings" element={<Settings />} />
            <Route path="/Home/blog" element={<Blog />} />
          </Route>
        </Routes>
      </UserContext.Provider>


    </div>
  );
};

export default App;