import React, {useState} from "react";
import Modal from "./Modal";
export default function Card({book}) {

    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();

    return (
        <>
            {
                book.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    let bookTitle = item.volumeInfo.title;
                    if (thumbnail !== undefined && amount !== undefined) {
                        return (
                            <>
                                <div className="card" onClick={() => {
                                    setShow(true);
                                    setItem(item);
                                }}>
                                    <img src={thumbnail}/>
                                    <div className="bottom">
                                        <h3 className="title">{bookTitle}</h3>
                                        <p className="amount">{amount} TL</p>
                                    </div>
                                </div>
                                <Modal show={show} item={bookItem} onClose={() => setShow(false)}/>
                            </>
                        )
                    }
                })
            }
        </>
    )
}