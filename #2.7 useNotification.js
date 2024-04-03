import React from "react";
import ReactDOM from "react-dom";

const useNotification = (title, options) => {
  if (!("Notification" in window)) return;

  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") new Notification(title, options);
        else return;
      });
    } else {
      new Notification(title, options);
    }
  };

  return fireNotif;
};

const App = () => {
  const triggerNotif = useNotification("Can I steal your kimchi?", {
    body: "I love kimchi dont you",
  });
  return (
    <div className="App">
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


// 이렇게 개선할 수 있을 것 같다.
// ↓↓↓

// import React from "react";
// import ReactDOM from "react-dom";

// const useNotification = (title, options) => {
//   if (!("Notification" in window)) return;

//   const fireNotif = () => {
//     if (Notification.permission !== "granted") Notification.requestPermission();
//     if (Notification.permission === "granted") new Notification(title, options);
//     else return;
//   };

//   return fireNotif;
// };

// const App = () => {
//   const triggerNotif = useNotification("Can I steal your kimchi?", {
//     body: "I love kimchi dont you",
//   });
//   return (
//     <div className="App">
//       <button onClick={triggerNotif}>Hello</button>
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);