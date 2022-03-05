import { PageWrapper } from "./components/PageWrapper";
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import React from "react";

// Pages
import { About } from "./components/Pages/About";
import { Home } from "./components/Pages/Home";
import { Services } from "./components/Pages/Services";
import { Portfolio } from "./components/Pages/Portfolio";




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
      </Routes>
      
    </BrowserRouter>
  )
}

export default App;
