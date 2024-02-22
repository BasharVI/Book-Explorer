import React, { useState } from "react";
import { TextField, Grid } from "@mui/material";

interface SearchBarProps {
  onSearch: (searchQuery: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: any) => {
    if (e.target.value.length > 3) {
      setSearchQuery(e.target.value);
      setTimeout(() => {
        onSearch(searchQuery);
      }, 1000);
    }
    // setSearchQuery(e.target.value);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ marginTop: "150px" }}
    >
      <Grid item xs={12} md={6}>
        <TextField
          label="Search for a book"
          variant="outlined"
          placeholder="Enter the book name here"
          fullWidth
          autoFocus
          value={searchQuery}
          onChange={handleSearch}
        />
      </Grid>
    </Grid>
  );
};

export default SearchBar;
