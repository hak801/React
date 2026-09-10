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
import WelcomeList from "./05/WelcomeList";

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
    root.render(
        <React.StrictMode>
            <WelcomeList/>
        </React.StrictMode>
    );
    }
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();