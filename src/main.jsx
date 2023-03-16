import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";

//import TodoApp from "./components/TodoApp";
import TodoApp from '@/components/TodoApp';
import '@/styles/app.css'

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);

root.render(
<React.StrictMode>
    <Router>
        <TodoApp />
    </Router>
</React.StrictMode>);

// const update = () => {
//   const element1 = React.createElement(
//     'div',
//     null,
//     React.createElement(
//       'form',
//       null,
//       React.createElement('input', {
//         type: 'text',
//       })
//     ),
//     React.createElement(
//       'span',
//       null,
//       'Time: ',
//       new Date().toLocaleTimeString()
//     )
//   );
//   root.render(element1);
// };

// setInterval(update, 1000);

