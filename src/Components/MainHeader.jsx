import React, { useState } from "react";
import "../App.css";
import {
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  FormGroup,
  Label,
} from "reactstrap";
import { Cards } from "./Cards";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
export const MainHeader = () => {
  const [maxResults, setMaxResults] = useState(10);
  const [startIndex, setStartIndex] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  // Handle Search
  const handleSubmit = () => {
    setLoading(true);
    if (maxResults > 40 || maxResults < 1) {
      toast.error("max results must be between 1 and 40");
    } else {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`
        )
        .then((res) => {
          if (startIndex >= res.data.totalItems || startIndex < 1) {
            toast.error(
              `max reults must be between 1 and ${res.data.totalItems}`
            );
          } else {
            if (res.data.items.length > 0) {
              setCards(res.data.items);
              setLoading(false);
            }
          }
        })
        .catch((err) => {
          setLoading(true);
          console.log(err.response);
        });
    }
  };

  return (
    <div>
    <div className="main-image d-flex justify-content-center align-items-center flex-column">
      {/* Overlay */}
      <div className="filter"></div>
      <h1
        className="display-2 text-center text-white mb-3"
        style={{ zIndex: 2 }}
      >
        Google Books
      </h1>
      <div style={{ width: "60%", zIndex: 2 }}>
        <InputGroup size="lg" className="mb-3">
          <Input
            placeholder="Book Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <InputGroupAddon addonType="append">
            <Button color="secondary" onClick={handleSubmit}>
              <i className="fas fa-search"></i>
            </Button>
          </InputGroupAddon>
        </InputGroup>
        <div className="d-flex text-white justify-content-center">
          <FormGroup>
            <Label for="maxResults">Max Results</Label>
            <Input
              type="number"
              id="maxResults"
              placeholder="Max Results"
              value={maxResults}
              onChange={(e) => setMaxResults(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="ml-5">
            <Label for="startIndex">Start Index</Label>
            <Input
              type="number"
              id="startIndex"
              placeholder="Start Index"
              value={startIndex}
              onChange={(e) => setStartIndex(e.target.value)}
            />
          </FormGroup>
        </div>
      </div>
    </div>
    <Cards cards = {cards} loading = {loading}/>
    </div>
  );
};
