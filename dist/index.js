(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(".container{color:red}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { j as jsxRuntimeExports } from "./vendor-c7d8a95a.js";
import { render } from "react-dom";
import { useEffect } from "react";
const jsx = jsxRuntimeExports.jsx;
const test = "";
const App = () => {
  useEffect(() => {
    console.log("我是demo");
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "container", children: "我是demo rendssder" });
};
render(/* @__PURE__ */ jsx(App, {}), document.getElementById("root"));
export {
  App as default
};
