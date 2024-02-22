import React from "react";
import BasicCard from "./BasicCard";
import { Grid } from "@mui/material";

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
  return (
    <Grid container spacing={2} justifyContent="center" marginTop={5}>
      {books.map((book, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <BasicCard book={book} />
        </Grid>
      ))}
    </Grid>
  );
};

export default DisplayBox;
