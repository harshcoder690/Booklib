import React from "react";
import BookCard from "../BookCard";
import "../App.css";
import { Spinner } from "reactstrap";
import "react-toastify/dist/ReactToastify.min.css";
export const Cards = (props) => {
  if (props.loading) {
    return (
      <div className="d-flex justify-content-center mt-3">
        <Spinner style={{ width: "3rem", height: "3rem" }} />
      </div>
    );
  } else {
    const items = props.cards.map((item, i) => {
      let thumbnail = "";
      if (item.volumeInfo.imageLinks) {
        thumbnail = item.volumeInfo.imageLinks.thumbnail;
      }

      return (
        <div className="col-lg-4 mb-3" key={item.id}>
          <BookCard
            thumbnail={thumbnail}
            title={item.volumeInfo.title}
            pageCount={item.volumeInfo.pageCount}
            language={item.volumeInfo.language}
            authors={item.volumeInfo.authors}
            publisher={item.volumeInfo.publisher}
            description={item.volumeInfo.description}
            previewLink={item.volumeInfo.previewLink}
            infoLink={item.volumeInfo.infoLink}
          />
        </div>
      );
    });
    return (
      <div className="container my-5">
        <div className="row">{items}</div>
      </div>
    );
  }
};
