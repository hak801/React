import React from "react";
import Book from "./Book";

function Library() {
    return(
        <div>
            <Book name = "처음 만난 Java" numOfPage={700} imgUrl = "https://media.istockphoto.com/id/1443209389/ko/%EB%B2%A1%ED%84%B0/%EC%B1%85-%EB%82%99%EC%84%9C-%EA%B7%B8%EB%A6%BC.jpg?s=612x612&w=0&k=20&c=UasO4fcLacivo_JkHRqIh9hrax5Ni00KCkiYhCpmu1A="/>
            <Book name = "한달 완성 파이썬" numOfPage={200} imgUrl = "https://media.istockphoto.com/id/1443209389/ko/%EB%B2%A1%ED%84%B0/%EC%B1%85-%EB%82%99%EC%84%9C-%EA%B7%B8%EB%A6%BC.jpg?s=612x612&w=0&k=20&c=UasO4fcLacivo_JkHRqIh9hrax5Ni00KCkiYhCpmu1A="/>
            <Book name = "재밌다 HTML" numOfPage={300} imgUrl = "https://media.istockphoto.com/id/1443209389/ko/%EB%B2%A1%ED%84%B0/%EC%B1%85-%EB%82%99%EC%84%9C-%EA%B7%B8%EB%A6%BC.jpg?s=612x612&w=0&k=20&c=UasO4fcLacivo_JkHRqIh9hrax5Ni00KCkiYhCpmu1A="/>
            <Book name = "처음 만난 C" numOfPage={1020} imgUrl = "https://media.istockphoto.com/id/1443209389/ko/%EB%B2%A1%ED%84%B0/%EC%B1%85-%EB%82%99%EC%84%9C-%EA%B7%B8%EB%A6%BC.jpg?s=612x612&w=0&k=20&c=UasO4fcLacivo_JkHRqIh9hrax5Ni00KCkiYhCpmu1A="/>
            <Book name = "처음 만난 Swift" numOfPage={490} imgUrl = "https://media.istockphoto.com/id/1443209389/ko/%EB%B2%A1%ED%84%B0/%EC%B1%85-%EB%82%99%EC%84%9C-%EA%B7%B8%EB%A6%BC.jpg?s=612x612&w=0&k=20&c=UasO4fcLacivo_JkHRqIh9hrax5Ni00KCkiYhCpmu1A="/>
        </div>
    );
}

export default Library;