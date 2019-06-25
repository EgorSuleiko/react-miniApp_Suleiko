import React from "react";
import { Image, Media } from "react-bootstrap";

const MovieBlock = props => {
  return (
    <Media>
      <Image src={props.movie.Poster} thumbnail alt={props.movie.Title} />
      <Media.Body className="MovieBlock">
        <h6>{props.movie.Title}</h6>
        <p>{props.movie.Year}</p>
        <p>{props.movie.Type}</p>
        <p>{props.movie.imdbID}</p>
      </Media.Body>
    </Media>
  );
};

export default MovieBlock;
