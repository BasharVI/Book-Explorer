import React, { useState } from "react";
import SearchBar from "./SearchBar";
import DisplayBox from "./DisplayBox";
import { Doc } from "./type";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Loading from "./Loading";

interface Book {
  title: string;
  authors: string;
  publishYear: number;
  isbn: string;
  numPages: number;
}

const App: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async (searchQuery: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${searchQuery}`
      );
      const data = await response.json();
      const books: Book[] = data.docs.map((doc: Doc) => ({
        title: doc.title,
        authors:
          Array.isArray(doc.author_name) && doc.author_name.length > 1
            ? doc.author_name.join(", ")
            : Array.isArray(doc.author_name)
            ? doc.author_name[0]
            : "",
        publishYear: doc.first_publish_year || 0,
        isbn: doc.isbn ? doc.isbn[0] : "",
        numPages: doc.number_of_pages_median || 0,
      }));

      setSearchResults(books);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <>
      <ResponsiveAppBar />
      <SearchBar onSearch={fetchBooks} />
      {loading ? <Loading /> : <DisplayBox books={searchResults} />}
    </>
  );
};

export default App;
