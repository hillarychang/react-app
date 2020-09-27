import React from 'react';
import logo from './logo.svg';
import './App.css';

const images = ["800x400", "800x400", "400x200", "400x200", "200x100", "200x100"];

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>

      <b>{new Date().toDateString()}</b>

      <div className="images">
          {images.map(image => {
            return <img src={"https://source.unsplash.com/random/" + image} alt="a random image" />;
          })}
      </div>
    </div>
  );
}

export default App;
