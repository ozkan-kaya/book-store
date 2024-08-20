import React, {useState} from "react";
import Card from "./Card";
import axios from "axios";

export default function Main() {
    const [search, setSearch] = useState('');
    const [bookData, setData] = useState([]);
    const searchBook = (e) => {
        if (e.key === "Enter"){
            axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search + "&key=AIzaSyDUrNGWE-U_qO_cvDgIlxPkhNtFZKn_c14" + "&maxResults=40")
                .then(res => setData(res.data.items))
                .catch(err => console.log(err))
        }
    }
    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1>Book Store</h1>
                    <p>The biggest online book store</p>
                </div>
                <div className="row2">
                    <div className="description">
                    <h2>"Books are uniquely portable magic."<br/>-Stephen King</h2>
                    </div>
                    <div className="search">
                        <h2>Find your book</h2>
                        <div className="input-container">
                            <input type="text" placeholder="Search the book you desired"
                                   value={search} onChange={e => setSearch(e.target.value)}
                                   onKeyDown={searchBook}/>
                            <button><i className='bx bx-search'></i></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                {
                    <Card book={bookData} />
                }
            </div>
        </>
    );
}