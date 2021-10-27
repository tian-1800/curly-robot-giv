import React from "react";
import "./App.css";
import FormContainer from "./components/FormContainer";
import Header from "./components/Header";
import Help from "./components/Help";
import LeftNav from "./components/left_sidebar/LeftNav";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-app">
        <LeftNav />
        <FormContainer />
      </main>
      <Help />
    </div>
  );
}

export default App;
