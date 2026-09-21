import React from "react";
import { styles } from "./util/style";
import { Navbar } from "./components";
import Home from "./components/Home";
const App = () => {
  return (
    <div className="w-full bg-primary overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Navbar/>
          <Home/>
        </div>
      </div>
    </div>
  );
};

export default App;
