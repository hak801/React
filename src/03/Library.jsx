import React from "react";
import Book from "./Book";

function Library() {
    return(
        <div>
            <Book name = "처음 만난 Java" numOfPage={700}/>
            <Book name = "완전 독학 파이썬" numOfPage={200}/>
            <Book name = "난생 처음 C++" numOfPage={600}/>
        </div>
    );
}

export default Library;