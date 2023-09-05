import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Detail from './pages/Detail';
import Main from './pages/Main';
import { useEffect, useState } from 'react';
import QuizList from './Quizlist';



function App() {

  const [userName, setUserName] = useState("");
  const [quizlist, setQuizList] = useState(QuizList)
  const quiz = [...QuizList];
  const [selected, setSelected] = useState(3);
  const [quizCnt, setQuizCnt] = useState(QuizList.length);
  const[typeTxt, setTypetxt] = useState("전체");
  
  
  const ChangeEvent = (data) =>{
    const classValue = data.target.className;
    const dataValue = data.target.value;
    switch(true){
      // includes("값") > 해당 문자열이 있는지 체크하는 속성
      case classValue.includes("name") :
        setUserName(dataValue)
      break;
     
      case classValue.includes("random") :

        (dataValue === "1" ? setQuizList([...QuizList].sort(()=>{
          return Math.random() - 0.5
        }).slice(0, selected)
       
        )
        : setQuizList([...QuizList]).slice(0,setSelected))
        //0 ~ 1 사이의 값을 반환 > 0.5의 평균값을 얻게 되어 -0.5 ~0.5 값으로 랜덤 출력
        break;

        case classValue.includes("cnt") :
          setSelected(dataValue);
          break;
          case classValue.includes("type") :
            (dataValue === "전체"
            ?
            setQuizList([...QuizList].slice(0,setSelected))
            :
            setQuizList([...QuizList].filter((e)=>{
              return e.type === dataValue
            }).slice(0,setSelected))
            )
            setTypetxt(dataValue)  
        break;   
        default:
       console.log("데이터가 없습니다.")
    }
  } // ES6문법
 
 
  useEffect(()=>{
    setQuizList([...QuizList].slice(0,selected));
    setQuizCnt([...QuizList].filter((e)=>{
      return typeTxt === "전체" ? true : e.type === typeTxt;
    }).length)
  },[typeTxt, selected]) //로딩 후 딱한번만 실행되는 문법 ,[]
console.log(quizlist)
// Route에 파라미터를 보내기 위해 연결한 곳 바로 옆에 작성 

  return (
    <>
    <Routes>
      <Route path ="/" element={<Main ChangeEvent={ChangeEvent} userName={userName} quiz={quiz} quizlist={quizlist} selected={selected} quizCnt={quizCnt}/>}/>
      <Route path ="/quiz" element={<Detail quizlist={quizlist} userName={userName}/>}/>
    </Routes>
    </>
  );
}

export default App;
