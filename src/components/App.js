import React from "react";
import Login from "./login.jsx";
import { useState } from "react";
import Dashboard from "./dashboard.jsx";
const App = () => {
  let [currentPage, setPage] = useState(2);
  let [UserData, setData] = useState({});

  let handleChange = (data) => {
	setData(data)
	setPage(2)
	
  };
  if (currentPage === 1) {
    return <Login handleChange={handleChange} />;
  } else {
    return (
	<Dashboard />
		);
  }
};

export default App;
