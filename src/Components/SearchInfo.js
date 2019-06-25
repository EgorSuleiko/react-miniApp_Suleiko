import React from "react";

const SearchInfo = props => {
  return (
    <div className="SearchInfo">
      {props.state.movieRequest !== null && props.state.movieRequest !== "" && (
        <div>
          <h5>You searched for "{props.state.movieRequest}"</h5>
          <h6>
            {props.state.isLoaded
              ? props.state.error
                ? "Error: " + props.state.error
                : "Found " + props.state.data.totalResults + " results"
              : "Loading... "}
          </h6>
        </div>
      )}
    </div>
  );
};

export default SearchInfo;
