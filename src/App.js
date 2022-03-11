import { PageWrapper } from "./components/PageWrapper";
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import React from "react";

// Pages
import { About } from "./components/Pages/About";
import { Home } from "./components/Pages/Home";
import { Services } from "./components/Pages/Services";
import { Portfolio } from "./components/Pages/Portfolio";
import { Team } from "./components/Pages/Team";
import { Contact } from "./components/Pages/Contact";




const App = () => {
  
  return(
    <BrowserRouter>
      <Routes>
        <Route
          exact={true}
          path="/" 
          element={PageWrapper(Home)}
        />

        <Route 
          path="/about" 
          element={PageWrapper(About)}
        />

        <Route 
          path="/service" 
          element={PageWrapper(Services)}
        />

        <Route
          path="/portfolio"
          element={PageWrapper(Portfolio)}
        />

        <Route
          path="/team"
          element={PageWrapper(Team)}
        />

        <Route
          path="/contact"
          element={PageWrapper(Contact)}
        />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App;
