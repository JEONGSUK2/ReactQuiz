const QuizList = [
    {
        id: 1,
        question : "HTML의 설명으로 옳지 않은 것은?",
        answer : "들어진 콘텐츠에 레이아웃과 디자인요소를 정의하는 기술이다.",
        view: {
            number1 : "Hypertext Markup Language의 약어이다.",
            number2 : "웹 페이지와 그 내용을 구조화하기 위해 사용하는 코드이다.",
            number3 : "다양한 태그를 사용 할 수 있다.",
            number4 : "들어진 콘텐츠에 레이아웃과 디자인요소를 정의하는 기술이다."
        },
        hint:"css언어 인 것을 선택하세요",
        type: "html"
    },
    {
        id: 2,
        question : "input type이 아닌 것은? ",
        answer : "id",
        view: {
            number1 : "password",
            number2 : "id",
            number3 : "checkbox",
            number4 : "button"
        },
        hint:"input의 종류에 대해 생각해보세요",
        type: "html"
    },
    {
        id: 3,
        question : "제목을 나타내는 태그를 선택하시오 ",
        answer : "<h>",
        view: {
            number1 : "<span>",
            number2 : "<p>",
            number3 : "<br>",
            number4 : "<h>"
        },
        hint:"input의 종류에 대해 생각해보세요",
        type: "html"
    },
    {
        id: 4 ,
        question : "flex에 대한 설명으로 옳은 것은 ",
        answer : "aling-items를 사용하기 위해선 높이갚이 필요하다.",
        view: {
            number1 : "왼쪽에서 오른쪽, 위에서 아래 방향이 기본이며 각각에 대해 역방향(reverse) 설정이 불가능하다",
            number2 : " justify-content : space-between은 양쪽에 여백을 둔다",
            number3 : "aling-items를 사용하기 위해선 높이갚이 필요하다.",
            number4 : "display-block 은 해당요소를 inline요소로 변경한다."
        },
        hint:"aling-items는 세로 정렬을 도와준다",
        type: "css"
    },
    {
        id: 5 ,
        question : "css에 대한 설명으로 옳은 것은 ",
        answer : "완성된 html에 다양한 스타일을 넣을 수 있다.",
        view: {
            number1 : "em , ex , rem vw , vh는 모두 css단위에 해당하지 않는다",
            number2 : "완성된 html에 다양한 스타일을 넣을 수 있다.",
            number3 : "마진 영역은 패딩 영역과는 달리 background-color 속성으로 설정하는 배경색의 영향을받는다.",
            number4 : "border은 안에 배경의 너비를 뜻한다."
        },
        hint:"css는 캐스케이딩 스타일시트(Cascading Stylesheet)의 줄임말이다. style하는 것을 도와줌",
        type: "css"
    },
    {
        id: 6 ,
        question : "css style 중 잘못된 것은? ",
        answer : "opacity : 선명하게 함",
        view: {
            number1 : "width : 너비 변경",
            number2 : "height: 높이 변경",
            number3 : "backgruond-color : 배경색 변경",
            number4 : "opacity : 선명하게 함"
        },
        hint:"opacity는 투명도를 나타낸다.",
        type: "css"
    },

    {
        id: 7,
        question : " js의 설명으로 옳은 것은?",
        answer : "4",
        view: {
            number1 : " java와 javascript는 동일하다.",
            number2 : "정적인 언어이기때문에 이벤트 처리 기능을 할 수 있다.",
            number3 : "Node.js, Apache CouchDB, Adobe Acrobat 등 다양한 환경에서 사용하지 못한다.",
            number4 : "동적 (en-US) 언어로, 객체지향형, 명령형, 선언형(함수형 프로그래밍 등) 스타일을 지원한다"
        },
        hint:"js의 기본 개념에 대한 설명",
        type: "js"
    },
    {
        id: 8,
        question : " click이벤트를 고르시오 ",
        answer : "4",
        view: {
            number1 : " 마우스를 올렸을 때 반응한다",
            number2 : " 키보드를 눌렀을 때 반응한다",
            number3 : "마우스를 클릭했을 때 반응한다.",
            number4 : "css에 hover이벤트와 동일한 기능을 한다."
        },
        hint:"말그대로 click을 생각하세요",
        type: "js"
    },
    {
        id: 9,
        question : "function의 개념에 대해 옳은것은",
        answer : "4",
        view: {
            number1 : " 어떠한 기능하는 것을 뜻함",
            number2 : "함수에 포함되지 않는다.",
            number3 : "html이나 css에서 사용한다.",
            number4 : "하나만의 기능을 구현할 수 있다."
        },
        hint:"function은 구현할 기능을 만드는 함수",
        type: "js"
    },

]

export default QuizList