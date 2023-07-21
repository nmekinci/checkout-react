import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import Total from "./components/Total";
import data from "../src/helper/data";
import { useState, useEffect } from "react";

function App() {
  const [mainData, setMainData] = useState(() => {
    const savedMainData = localStorage.getItem("savedList");
    return savedMainData ? JSON.parse(savedMainData) : [...data];
  });

  useEffect(() => {
    localStorage.setItem("savedList", JSON.stringify(mainData));
  }, [mainData]);

  return (
    <div className="App">
      <Header setMainData={setMainData} mainData={mainData} />

      <Products data={mainData} setMainData={setMainData} />
      <Total data={mainData} />
    </div>
  );
}

export default App;
