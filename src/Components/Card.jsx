import React from "react";
export default function Card({book}) {
    console.log(book);
    return (
        <>
            {
                book.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    let bookTitle = item.volumeInfo.title;
                    if (thumbnail != undefined && amount != undefined) {
                        return (
                            <>
                                <div className="card">
                                    <img src={thumbnail}/>
                                    <div className="bottom">
                                        <h3 className="title">{bookTitle}</h3>
                                        <p className="amount">{amount} TL</p>
                                    </div>
                                </div>
                            </>
                        )
                    }
                })
            }
        </>
    )
}