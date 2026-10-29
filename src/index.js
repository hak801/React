import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import TodoListApp from "./01/TodoListApp";
import reportWebVitals from './reportWebVitals';
// import Library from "./03/Enhanced_CSS/Library";
// import './03/Enhanced_CSS/Book.css'
//  import Clock from "./04/ConfirmDialog/Clock";
//  import './04/ConfirmDialog/Clock.css'
// import ConfirmDialog from "./04/ConfirmDialog/ConfirmDialog";
// import ConfirmDialogList from "./04/ConfirmDialog/ConfirmDialogList";
// import WelcomeList from "./05/exam01/WelcomeList";
// import BookList from "./05/exam02/BookList";
// import UserInfoList from "./05/exam03/UserInfoList";
// import NotificationList from "./06/test/NotificationList";
// import Counter from "./07/useState";
// import TextInputWithFocusButton from "./07/02/TextInputWithFocusButton";
// import Accommodate from "./07/Accommodate";
// import Toggle from "./08/Toggle";
// import MyButton from "./08/MyButton";
// import MyButton2 from "./08/MyButton2";
// import ConfirmButton from "./08/ConfirmButton";
// import ConfirmButton2 from "./08/ConfirmButton2";
// import MessageSEND from "./08/MessageSEND";
// import Greeting from "./09/ex01/Greeting";
// import LogInControl from "./09/ex02/LogInControl";
// import Mailbox from "./09/ex03/Mailbox";
// import LogInControl2 from "./09/ex02/LogInControl";
// import MainPage from "./09/ex03/MainPage";
import toolbar from "./09/finalEX/Toolbar";
// import Toolbar from "./09/finalEX/Toolbar";
import LandingPage from "./09/finalEX/LandingPage";
const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
        root.render(
            <React.StrictMode>
                <LandingPage/>
            </React.StrictMode>
        );
    }
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();