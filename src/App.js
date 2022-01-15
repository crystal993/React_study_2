import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // state 변수
  let [title,changeTitle] = useState(['자바스크립트','노드js','리액트']);

  return (
    <div className="App">
      
      {/* nav-bar */}
      <div className="nav">개발blog</div>

      {/* list */}
      { title.map((title)=>{
          return (
            <div className="list">
              <h3> {title} <span>👍</span> </h3>
              <p>날짜</p>
              <hr></hr>
            </div>
            )
          }
        )
      }
    </div>
  );
}

export default App;
