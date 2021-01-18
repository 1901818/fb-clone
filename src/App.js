import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { Widgets } from "@material-ui/icons";

function App() {
  return (
    //BEM naming convention
    <div className="app">

      <Header />
      
      <div className="app_body">
        <Sidebar />
        <Feed />
        <Widgets/>
        {/* Feed */}
        {/* widgets*/}

      </div>

     
        
        
    </div>
  );
}

export default App;
