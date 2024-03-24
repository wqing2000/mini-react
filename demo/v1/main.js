/** 0.0.1 start */

// const dom = document.createElement('div')
// dom.id = 'app'

// document.getElementById('root').append(dom)

// const textNode = document.createTextNode('app')
// dom.append(textNode)

/** 0.0.1 end */

//! -------------------------------------------------------------------------------------------------------------------------- //
/** 0.0.2 start */

// ! react -> vdom -> js objects
// 三要素: type props children

// const textEl = {
//   type: "TEXT_ELEMENT",
//   props: {
//     nodeValue: "app",
//     children: [],
//   },
// };
// const App = {
//   type: "div",
//   props: {
//     id: "app",
//     children: [textEl],
//   },
// };

// const dom = document.createElement(App.type);
// dom.id = App.props.id;
// document.getElementById("root").append(dom);

// const textNode = document.createTextNode("");
// textNode.nodeValue = textEl.props.nodeValue;
// dom.append(textNode);

/** 0.0.2 end */

//! -------------------------------------------------------------------------------------------------------------------------- //
/** 0.0.3 start */

// 动态创建虚拟dom + render函数

import ReactDOM from "./core/ReactDOM.js";
import App from "./App.js";

ReactDOM.createRoot(document.getElementById("root")).render(App);

/** 0.0.3 end */
