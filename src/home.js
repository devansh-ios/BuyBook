import axios from "axios";
import { useEffect, useState } from "react";
import Content from "./content";
function Home() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  if (windowSize >= 700) {
    return <GetBooks />;
  } else return <GetBooks2 />;
}

function GetBooks2() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApikey] = useState(
    "AIzaSyAqTBcXunQzP46Ao0y-qt487YrRk-Oqsu0"
  );

  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          book +
          "&filter=ebooks&maxResults=30&key=" +
          apiKey
      )
      .then((data) => {
        setResult(data.data.items);
      });
  }

  return (
    <>
      <Content />
      <section id="search">
        <h1>What are you looking for ?!!</h1>
        <div style={{ textAlign: "center" }}>
          <form onSubmit={handleSubmit}>
            <input
              id="inputForBooks"
              type="text"
              onChange={handleChange}
              placeholder="Search"
            />
            <br />
            <button id="btn">Search</button>
          </form>

          {result.map((book) => (
            <a
              style={{ margin: "1rem", color: "black", textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
              href={book.volumeInfo.previewLink}
            >
              <h4>{book.volumeInfo.title}</h4>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
function GetBooks() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApikey] = useState(
    "AIzaSyAqTBcXunQzP46Ao0y-qt487YrRk-Oqsu0"
  );

  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          book +
          "&filter=ebooks&maxResults=10&key=" +
          apiKey
      )
      .then((data) => {
        setResult(data.data.items);
      });
  }

  return (
    <>
      <Content />
      <section id="search">
        <h1>What are you looking for ?!!</h1>
        <div style={{ textAlign: "center" }}>
          <form onSubmit={handleSubmit}>
            <input
              id="inputForBooks"
              type="text"
              onChange={handleChange}
              placeholder="Search"
            />
            <br />
            <button id="btn">Search</button>
          </form>

          {result.map((book) => (
            <a
              style={{ marginRight: "1rem" }}
              target="_blank"
              rel="noreferrer"
              href={book.volumeInfo.previewLink}
            >
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.title}
              />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
export default Home;
