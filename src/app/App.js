import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

import Layout from "../components/layout/Layout";
import Banner from '../components/shared/banner/Banner'
import '../assets/style/style.scss';

import {MainPage, DutyPage, CoworkersPage, CommentPage, RequestPage, ProfilePage} from '../pages'

function App() {
  return (
    <Router>
       <div className="App">
       
          <div className="app-content d-flex">
            <Layout/>
              <main>
              <Banner/>
                    <Routes>
                        <Route path="/" element={<MainPage/>}></Route>
                        <Route path="/duty" element={<DutyPage/>}></Route>
                        <Route path="/coworker" element={<CoworkersPage/>}></Route>
                        <Route path="/comment" element={<CommentPage/>}></Route>
                        <Route path="/request" element={<RequestPage/>}></Route>
                        <Route path="/profile" element={<ProfilePage/>}></Route>
                    </Routes>
              </main>
          </div> 
          
        </div>

    </Router>
  );
}

export default App;
