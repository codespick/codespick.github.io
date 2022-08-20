import AllContent from "./AllContext";

import React, { useState } from "react";

const ContentState = (props) => {
  const [colorMode, setColorMode] = useState("#F7F7F7");
  const [searchData, setSearchData] = useState("");

  let darkMode = process.browser && localStorage.getItem("dark-mode");

  const enableDarkMode = () => {
    process.browser && localStorage.setItem("dark-mode", "enabled");
    document.body.style.backgroundColor = "rgb(26, 38, 40)";
    
    /**  Additional Background color**/
    // document.body.style.backgroundColor = "rgba(79,79,79,1)";
  };

  const disableDarkMode = () => {
    process.browser && localStorage.setItem("dark-mode", "disabled");
    document.body.style.backgroundColor = "rgba(255, 255, 255, 0.543)";
  };

  let myData = {
    enableDarkMode,
    disableDarkMode,
    darkMode,
    setColorMode,
    colorMode,
    setSearchData,
    searchData,
  };
  return (
    <>
      <AllContent.Provider value={myData}>{props.children}</AllContent.Provider>
    </>
  );
};

export default ContentState;
