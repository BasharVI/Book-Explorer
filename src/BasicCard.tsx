import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface Book {
  title: string;
  authors: string;
  publishYear: number;
  isbn: string;
  numPages: number;
}

interface BasicCardProps {
  book: Book;
}

const BasicCard: React.FC<BasicCardProps> = ({ book }) => {
  const { title, authors, publishYear, isbn, numPages } = book;

  return (
    <Card sx={{ minWidth: 275, borderRadius: 8, boxShadow: 3, paddingLeft: 4 }}>
      <CardContent>
        <Typography variant="h5" color="text.primary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Authors: {authors}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Publish Year: {publishYear}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ISBN: {isbn}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Number of Pages: {numPages}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BasicCard;
