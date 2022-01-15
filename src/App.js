/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // state 변수1 - 변경할 데이터 저장
  let [title, changeTitle] = useState(['자바스크립트','노드js','리액트']); //제목
  let [good, changeGood] = useState([0,0,0]); //좋아요
  let [writeInputVal, changeWriteInputVal] = useState(''); //글발행 input 값
  let [modaltitle, changeModalTitle] = useState(''); // modal title 변경

  // state 변수2 - UI 상태 저장
  let [modal, changeModal] = useState(false); // modal 열고 닫음

  // 날짜 변수
  let today = new Date();
  let month = today.getMonth()+1;
  let day = today.getUTCDate()
  let newToday = `${month}월 ${day}일`;

  // 함수 
  // 1. 좋아요 기능
  function recommend(i){
    let newGood = [...good]; // 1. array를 deep copy
    newGood[i]++; //2. 좋아요 누를 때마다 1씩 증가
    changeGood(newGood); // 3. changeGood 변경함수에 저장
  }

  //2. 글 발행 기능
  const publish = (writeInputVal) => {
    let newTitle = [...title]; //1.array를 deep copy
    newTitle.unshift(writeInputVal) //2. 맨 앞에 작성한 글 추가
    changeTitle(newTitle); // 3. changeTitle 변경함수에 newTitle 전체를 저장
  }

  return (
    <div className="App">
      
      {/* nav-bar */}
      <div className="nav">개발blog</div>

      {/* list */}
      { title.map((title, i)=>{
          return (
            <div className="list" key={i}>
              <h3 onClick={()=>{changeModalTitle(title[0])}}> {title} <span onClick={()=>{recommend(i)}}>👍</span> {good[i]} </h3>
              <p>{newToday}</p>
              <hr></hr>
            </div>
            )
          }
        )
      }

      {/* write - 글 발행 기능 */}
      <div className='publish'>
        <input onChange={(e)=>{changeWriteInputVal(e.target.value)}}></input>
        <button onClick={()=>{publish(writeInputVal)}}>저장</button>
      </div>

      {/* modal */}
      
      <button onClick={()=>{changeModal(!modal)}}> 모달열고닫기 </button>

      {
        modal
        ?<Modal modaltitle={modaltitle}></Modal>
        :null
      }

    </div>
  );
}

// modal component 생성
function Modal(props){
  return (
    <div className='modal'>
      <h2>TITLE : {props.modaltitle}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
