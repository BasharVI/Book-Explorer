import React, { useState } from "react";
import BasicCard from "./BasicCard";
import { Grid, Switch, Typography } from "@mui/material";

interface Book {
  title: string;
  authors: string;
  publishYear: number;
  isbn: string;
  numPages: number;
}

interface DisplayBoxProps {
  books: Book[];
}

const DisplayBox: React.FC<DisplayBoxProps> = ({ books }) => {
  const [sortByYear, setSortByYear] = useState(false);

  const sortedBooks = sortByYear
    ? [...books].sort((a, b) => a.publishYear - b.publishYear)
    : books;

  const toggleSortByYear = () => {
    setSortByYear((prevSortByYear) => !prevSortByYear);
  };

  return (
    <>
      <Grid alignItems="center">
        <Typography component="div" style={{ marginBottom: "20px" }}>
          Sort by Published Year
          <Switch checked={sortByYear} onChange={toggleSortByYear} />
        </Typography>
      </Grid>

      <Grid container spacing={2} justifyContent="center">
        {sortedBooks.map((book, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <BasicCard book={book} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default DisplayBox;
