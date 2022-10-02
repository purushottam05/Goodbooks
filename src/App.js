import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  non_fiction: [
    { name: "Ikigai", 
      rating: "4/5",
      description : "Ikigai is the art of doing something and doing it with supreme focus and joy."
    },

    { name: "Atomic habits", 
      rating: "5/5", 
      description : "Tiny Changes, Remarkable Results No matter your goals, Atomic Habits offers a proven framework for improving every day"
    },

    { name: "Deep Work", 
      rating: "4/5", 
      description : "Wrking on how to better your productivity by working less hours and focusing on improving your skillsets"
    }

  ],

  fiction: [
    {
      name: "Lord of the Rings",
      rating: "5/5",
      description : "The Lord of the Rings is an epic high-fantasy novel by English author and scholar J. R. R. Tolkien."
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5",
      description : "Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him."
    },

    {
      name: "Star Wars",
      rating: "4/5",
      description : "Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon.."
    }

  ],
  business: [
    {
      name: "Rich dad poor dad",
      rating: "5/5",
      description :"Rich Dad Poor Dad is a 1997 book written by Robert Kiyosaki and Sharon Lechter. It advocates the importance of financial literacy, financial independence and building wealth through investing in assets, real estate investing."
    },
    {
      name: "Loonshots",
      rating: "5/5",
      description : "How to Nurture the Crazy Ideas That Win Wars, Cure Diseases, and Transform Industries."
    },

    {
      name: "How to win friends and influence people",
      rating: "4/5",
      description : "How to Win Friends and Influence People is a 1936 self-help book written by Dale Carnegie. Over 30 million copies have been sold worldwide, making it one of the best-selling books of all time. Carnegie had been conducting business education courses in New York since 1912."
    }

  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>  BookHub </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Here are some of my recent read books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
              <div style={{ fontSize: "smaller" }}> {book.description} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
