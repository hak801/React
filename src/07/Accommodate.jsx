import React, {useEffect, useState} from "react";
import useCounter from "./useCounter";
import "./Accommodate.css"

const MAX_CAPACITY = 10;

function Accommodate() {
    const [count, increaseCount, decreaseCount] = useCounter(0)
    const [isFull, setIsFull] = useState(false);

    useEffect(() => {
        console.log("==== useEffect 확인용 ====");
        console.log("useEffect 실행됨: 컴포넌트가 마운트될때, 업데이트될때");
        console.log(`isFull: ${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current Count Value: ${count}`)
    }, [count]);

    return(
        <div className="accommodate">
            <p>{`현재 총 ${count}명 수용중`}</p>
            <div>
                <button onClick={increaseCount}>수용시설에 입장</button>&nbsp;&nbsp;
                <button onClick={decreaseCount}>수용시설에서 퇴장</button>
            </div>
            {isFull && <p>수용시설에 정원 가득참</p>}
        </div>
    );
}

export default Accommodate;