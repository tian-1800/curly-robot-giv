import React from "react";
import "./App.css";
import FormContainer from "./components/FormContainer";
import Header from "./components/Header";
import LeftNav from "./components/left_sidebar/LeftNav";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-app">
        <LeftNav />
        {/* <LeftNav />
        <Pages /> */}
        <FormContainer />
      </main>
    </div>
  );
}

export default App;
