import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// function MyApp() {
//   return (
//     <div>
//       <h1>Custom App !</h1>
//     </div>
//   );
// }

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     traget: "_blank",
//   },
//   children: "Click me to visit Google",
// };

// const anotherElement = (
//   <a href="https://www.google.com" target="_blank">
//     Visit Google
//   </a>
// );

const anotherUser = "Chai Aur React";

const reactElement = React.createElement(
  "a",
  {
    href: "https://www.google.com",
    target: "_blank",
  },
  "click me to Visit Google",
  anotherUser
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
