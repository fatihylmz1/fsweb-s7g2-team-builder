
import React, { useState } from "react";

import "./App.css";
import Team from "./components/Team";
import Form from "./components/Form";

function App() {
  const [saved, setSaved] = useState([]);
  const [takimUyeleri, setTakimUyeleri] = useState({
    isim: "",
    dil: "",
    yaş: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    setSaved([...saved, takimUyeleri]);
    setTakimUyeleri({
      isim: "",
      dil: "",
      yaş: "",
    });
  }

  function handleChange(olay) {
    setTakimUyeleri({
      ...takimUyeleri,
      [olay.target.id]: olay.target.value,
    });
  }
  let butonDisabledMi = true;

  if (
    takimUyeleri.isim !== "" &&
    takimUyeleri.dil &&
    takimUyeleri.yaş !== ""
  ) {
    butonDisabledMi = false;
  }

  return (
    <div className="App">
      <Form
        takimUyeleri={takimUyeleri}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        butonDisabledMi={butonDisabledMi}
      />
      <Team saved={saved} />
    </div>
  );
}

export default App;