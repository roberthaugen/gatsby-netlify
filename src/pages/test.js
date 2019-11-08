import React from "react";
import {navigate} from 'gatsby';
import Header from "../components/Header"

const Test = () => (
    <div>
        <Header title="Hello page2 header"></Header>
    <h1>This is a test page</h1>
    <p>This is a paragraph</p>
    <button onClick={()=>navigate("/")}>Navigate home</button>
    </div>
)


export default Test;