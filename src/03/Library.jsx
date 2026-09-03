import React from "react";
import Book from "./Book";

function Library() {
    return(
        <div>
            <Book name = "처음 만난 Java" numOfPage={700} imgUrl = "https://www.hanbit.co.kr/_next/image?url=https%3A%2F%2Fcdn-prod.hanbit.co.kr%2Fbooks%2F0d5bc993-3eb4-4c78-a5d4-11b4a80c9af4.png&w=512&q=100"/>
            <Book name = "한달 완성 파이썬" numOfPage={200} imgUrl = "https://www.hanbit.co.kr/_next/image?url=https%3A%2F%2Fcdn-prod.hanbit.co.kr%2Fbooks%2F0d5bc993-3eb4-4c78-a5d4-11b4a80c9af4.png&w=512&q=100"/>
            <Book name = "재밌다 HTML" numOfPage={300} imgUrl = "https://www.hanbit.co.kr/_next/image?url=https%3A%2F%2Fcdn-prod.hanbit.co.kr%2Fbooks%2F0d5bc993-3eb4-4c78-a5d4-11b4a80c9af4.png&w=512&q=100"/>
            <Book name = "처음 만난 C" numOfPage={1020} imgUrl = "https://www.hanbit.co.kr/_next/image?url=https%3A%2F%2Fcdn-prod.hanbit.co.kr%2Fbooks%2F0d5bc993-3eb4-4c78-a5d4-11b4a80c9af4.png&w=512&q=100"/>
            <Book name = "처음 만난 Swift" numOfPage={490} imgUrl = "https://www.hanbit.co.kr/_next/image?url=https%3A%2F%2Fcdn-prod.hanbit.co.kr%2Fbooks%2F0d5bc993-3eb4-4c78-a5d4-11b4a80c9af4.png&w=512&q=100"/>
        </div>
    );
}

export default Library;