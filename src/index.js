import React from "react";
import ReactDOM from "react-dom";
import "index.scss";

let HelloWorld = () => {
    return (
        <div>
            <h1>这是测试页面的标题</h1>
        </div>
    );
}

ReactDOM.render(
    <HelloWorld />,
    document.getElementById("root")
);