import React from "react";
import Book from "./Book"
import "./BookList.css";

//데이터 배열(HashMap, JSON type)
const books = [
    {
        title: "처음 만난 리액트",
        author: "김소플",
        coverImage: "https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUVDJUIxJTg1fGVufDB8fDB8fHww"
    },
    {
        title: "데이터베이스 실습",
        author: "김데이터",
        coverImage: "https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUVDJUIxJTg1fGVufDB8fDB8fHww"
    },
    {
        title: "다시 만난 리액트",
        author: "김소플",
        coverImage: "https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUVDJUIxJTg1fGVufDB8fDB8fHww"
    },
    {
        title: "정말 쉬운 파이썬",
        author: "김파이",
        coverImage: "https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUVDJUIxJTg1fGVufDB8fDB8fHww"
    },
    {
        title: "또 다시 만난 리액트",
        author: "김소플",
        coverImage: "https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUVDJUIxJTg1fGVufDB8fDB8fHww"
    },
]

function BookList() {
    return(
        <div className={"bookListWrapper"}>
            {books.map((book) => {
                return(
                    <Book
                        title={book.title}
                        author={book.author}
                        coverImage={book.coverImage}
                    />
                );
            })}
        </div>
    );
}

export default BookList;