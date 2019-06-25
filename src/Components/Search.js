import React from "react";
import { FormControl } from "react-bootstrap";

const Search = props => {
  return (
    <div>
      <FormControl
        type="text"
        placeholder="Type movie title"
        onInput={props.onInput}
      />
    </div>
  );
};

export default Search;
