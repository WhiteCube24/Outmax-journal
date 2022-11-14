import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "../components/layout/Layout";
import Banner from '../components/shared/Banner/Banner'

import {MainPage, DutyPage, CoworkerPage, CommentPage, CorrectionPage} from '../pages'

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
                        <Route path="/coworker" element={<CoworkerPage/>}></Route>
                        <Route path="/comment" element={<CommentPage/>}></Route>
                        <Route path="/correction" element={<CorrectionPage/>}></Route>
                    </Routes>
              </main>
          </div> 
          
        </div>

    </Router>
  );
}

export default App;
