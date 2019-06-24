import React from "react";
import "./App.css";
import CsvUpload from "./components/CsvUpload/CsvUpload";
import ListFiles from "./components/ListFiles/ListFiles";
import CurrFileData from "./components/CurrFileData/CurrFileData";

// App component for basic layout of the app
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Email App</h3>
      </header>
      <main>
        <CsvUpload />
        <hr />
        <ListFiles />
        <hr />
        <CurrFileData />
      </main>
    </div>
  );
}

export default App;
