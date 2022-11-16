import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './ch02.es6_syntax/App_let_const';
//import App from './ch02.es6_syntax/App_template_string';
//import App from './ch02.es6_syntax/App_make_function';
// import App from './ch02.es6_syntax/App_arrow_function';
// import App from './ch02.es6_syntax/App_structure_split_assignment';
// import App from './ch02.es6_syntax/App_object_extension_expression';
// import App from './ch02.es6_syntax/App_spread_operator';
// import App from './ch02.es6_syntax/App_foreach';
// import App from './ch02.es6_syntax/App_map';
// import App from './ch02.es6_syntax/App_reduce';
// import App from './ch03.react_component/App_commponent01';
// import App from './ch03.react_component/App_commponent02';
// import App from './ch03.react_component/App_file_separator';
import App from './ch03.react_component/App_propTypes_defaultProps';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();