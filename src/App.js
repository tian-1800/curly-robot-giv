import React from "react";
import "./App.css";
import FormContainer from "./components/FormContainer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* <LeftNav />
        <Pages /> */}
        <FormContainer />
      </main>
    </div>
  );
}

export default App;
