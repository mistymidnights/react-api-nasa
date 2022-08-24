import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Figure from "./components/Figure"; //importante

const App = () => {
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  const [apod, setApod] = useState({});
  const [date, setDate] = useState(today);
  const NASA_URL = "https://api.nasa.gov/";
  const NASA_API_KEY = "Y77PDFSs6X5HklrWXTscWmia67DxOgpH6TU5c0v6";

  useEffect(() => {
    const getApod = async () => {
      const data = await axios.get(
        `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`
      );
      setApod(data.data);
    };
    getApod();
  }, [date]);

  const handleInput = (ev) => {
    setDate(ev.target.value.toLocaleString());
  };

  return (
    <div className="App">
      <div className="header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png"
          className="logo"
          alt="Logo"
        />
        <div className="title-text">
          <h1>Astronomy Picture of the Day</h1>
          <h2>Select a date to see more info</h2>
          <input type="date" id="photo-date" onChange={handleInput} />
          {date > today ? <h2>Select another date</h2> : <Figure data={apod} />}
        </div>
      </div>
    </div>
  );
};

export default App;
