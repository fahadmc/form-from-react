
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Profile from "./components/Home/Profile"
import Settings from "./components/Home/Settings";
import Blog from "./components/Home/Blog"

import Message from './components/Home/Message';

import Home from './components/Home/Home';
import Lb1 from './components/home/lb1';
import Lb2 from './components/home/Lb2';
import Lb3 from './components/home/Lb3';
import Lb4 from './components/home/Lb4';
import Lb5 from './components/home/Lb5';
import Lb6 from './components/home/Lb6';


import Lp1 from './components/home/Lp1';
import Lp2 from './components/home/Lp2';
import Lp3 from './components/home/Lp3';
import Lp4 from './components/home/Lp4';
import Lp5 from './components/home/Lp5';
import Lp6 from './components/home/Lp6';

import Lc1 from './components/home/Lc1';
import Lc2 from './components/home/Lc2';
import Lc3 from './components/home/Lc3';
import Lc4 from './components/home/Lc4';
import Lc5 from './components/home/Lc5';
import Lc6 from './components/home/Lc6';

import { createContext } from 'react';




export const UserContext = createContext()


function App() {
  const user = ""

  return (
    <div>
      <UserContext.Provider value={user}>


        <Routes>
          <Route path='/Home' element={<Home />}>
            <Route index element={<Profile />} />
            <Route path="/Home/message" element={<Message />} />
            <Route path="/Home/settings" element={<Settings />} />
            <Route path="/Home/blog" element={<Blog />} />

            <Route path='/Home/lb1' element={<Lb1/>}/>
            <Route path='/Home/lb2' element={<Lb2/>}/>
            <Route path='/Home/lb3' element={<Lb3/>}/>
            <Route path='/Home/lb4' element={<Lb4/>}/>
            <Route path='/Home/lb5' element={<Lb5/>}/>
            <Route path='/Home/lb6' element={<Lb6/>}/>

            <Route path='/Home/lp1' element={<Lp1/>}/>
            <Route path='/Home/lp2' element={<Lp2/>}/>
            <Route path='/Home/lp3' element={<Lp3/>}/>
            <Route path='/Home/lp4' element={<Lp4/>}/>
            <Route path='/Home/lp5' element={<Lp5/>}/>
            <Route path='/Home/lp6' element={<Lp6/>}/>

            <Route path='/Home/lc1' element={<Lc1/>}/>
            <Route path='/Home/lc2' element={<Lc2/>}/>
            <Route path='/Home/lc3' element={<Lc3/>}/>
            <Route path='/Home/lc4' element={<Lc4/>}/>
            <Route path='/Home/lc5' element={<Lc5/>}/>
            <Route path='/Home/lc6' element={<Lc6/>}/>


          
                     

          </Route>
        </Routes>
      </UserContext.Provider>


    </div>
  );
};

export default App;