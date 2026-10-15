import React, {useState} from "react";

function MyButton2() {
    const [count, setCount] = useState(1);

    const btnClick = (id, event) => {
        console.log(id, event.target);
    };

    return(
        <button onClick={(event) => {
            setCount((count) =>count+1);
            btnClick(count, event);
        } }>
            버튼을 클릭하세요(F12 개발자도구 버튼을 클릭.).
        </button>
    );
}

export default MyButton2;