import React, { useState } from 'react'

function Detail({ userName, quizlist }) {

  const [current, setCurrent] = useState(0); //(번호) 현재 번호를 나타냄 current
  const [userAnswer, setAnswer] = useState(["들어진 콘텐츠에 레이아웃과 디자인요소를 정의하는 기술이다.", "button", "<span>"]);




  const setUserAnswer = (data) => {
    setAnswer([...userAnswer, data])
  }

  const _score = quizlist.filter((e, i) => {
    return e.answer === userAnswer[i]
  }).length

  const currentPer = Math.floor(((current + 1) / quizlist.length) * 100)

  return (
    <>

      <div className="w-full flex items-center h-full">
        <div className="mx-auto basis-11/12 lg:10/12 flex flex-wrap items-center h-full">


          <div className="basis-full text-center">
            {
              current > quizlist.length
                ?
                <>
                  <h4 className="font-bold text-indigo-500 sm:text-2xl lg:text-3xl text-xl mb-5 bg-white rounded-lg p-5 border">
                    {userName}님 반갑습니다.
                  </h4>
                  <div className="w-full h-5 bg-gray-50 rounded-full mb-5 relative" >
                    <div className="absolute h-full bg-green-500 left-0 top-0 rounded-full transition-all duration-1000" style={{ width: `${currentPer}%` }}>
                      <p className="absolute right-0 top-0 ">{currentPer}<span>%</span></p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between p-5 border rounded-lg bg-white">
                    <p>{quizlist[current].question}</p>
                    <span>{current + 1} /  {quizlist.length}문제</span>
                  </div>
                  <div className="flex flex-wrap justify-between mt-5 border rounded-lg bg-white">

                    <ul className='text-center basis-full'>
                      <li className='border-b py-2.5 cursor-pointer hover:bg-gray-50 flex justify-between' onClick={() => { setCurrent(current + 1); setUserAnswer(quizlist[current].view.number1) }}>

                        <span className='border-r basis-1/12'>1번</span>
                        <span className='basis-11/12'>{quizlist[current].view.number1}</span>

                      </li>
                      <li className='border-b py-2.5 cursor-pointer hover:bg-gray-50 flex justify-between' onClick={() => { setCurrent(current + 1); setUserAnswer(quizlist[current].view.number2) }}>
                        <span className='border-r basis-1/12'>2번</span>
                        <span className='basis-11/12'>{quizlist[current].view.number2}</span>

                      </li>
                      <li className='border-b py-2.5 cursor-pointer hover:bg-gray-50 flex justify-between' onClick={() => { setCurrent(current + 1); setUserAnswer(quizlist[current].view.number3) }}>
                        <span className='border-r basis-1/12'>3번</span>
                        <span className='basis-11/12'>{quizlist[current].view.number3}</span>

                      </li>
                      <li className='border-b py-2.5 cursor-pointer hover:bg-gray-50 flex justify-between' onClick={() => { setCurrent(current + 1); setUserAnswer(quizlist[current].view.number4) }}>
                        <span className='border-r basis-1/12'>4번</span>
                        <span className='basis-11/12'> {quizlist[current].view.number4}</span>

                      </li>
                    </ul>
                  </div>
                </>
                :
                <><div>
                  <p className='text-lg'>총 9문제중 <span className="font-bold text-indigo-500 text-xl"></span> <span className="font-bold text-indigo-500 text-xl">{_score}</span>
                    문제를 맞추셨으며, 점수는<span className="text-indigo-500 font-bold text-xl">{Math.floor((_score / quizlist.length) * 100)}</span>점 입니다.</p>
                  <p className="flex items-center mt-4">
                    정답맞춤 : <span className='bg-red-500 w-5 h-5 block mr-5 ml-2'></span>
                    선택한답 : <span className='bg-indigo-500 w-5 h-5 block mr-5 ml-2'></span>
                    정답맞춤 : <span className='bg-indigo-300 w-5 h-5 block mr-5 ml-2'></span>
                  </p>
                </div>
                  {
                    quizlist.map((e, i) => {
                      return (
                        <ul key={i} className='mt-5 bg-white rounded-2xl'>
                          <li className="flex justify-between flex-wrap">
                            <p className="bg-gray-50 font-bold basis-full border text-base py-4 rounded-lg">
                              {e.question}
                            </p>
                            {
                              Object.entries(e.view).map((el, index) => {
                                return (
                                  <p key={index} className=
                                    {`font-bold mt-5 basis-[49.5%] border text-base py-4 rounded-lg ${e.answer[i] === el[1] 
                                    && userAnswer[i] === e.answer 
                                    ? 'bg-orange-500' : e.answer === el[1] 
                                    ? 'bg-indigo-300' : el[1] === userAnswer[i] 
                                    ? `bg-indigo-500` : `bg-white`}`}>{el[1]}</p>
                                )
                              })
                            }
                          </li>
                        </ul>
                      )
                    })
                  }
                </>
            }
          </div>
        </div>
      </div>


    </>
  )
}

export default Detail

