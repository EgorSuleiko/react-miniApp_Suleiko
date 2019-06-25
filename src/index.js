import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Header from "./Components/Header";
import SearchInfo from "./Components/SearchInfo";
import FoundContent from "./Components/FoundContent";
import ReactPaginate from "react-paginate";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieRequest: null,
      pageNum: 1,
      isLoaded: null,
      error: null,
      data: null,
      pageMax: null
    };
  }

  handleInput = async event => {
    event.preventDefault();
    await this.setState({
      movieRequest: event.target.value,
      pageNum: 1
    });

    if (this.state.movieRequest !== "" && this.state.movieRequest !== null) {
      this.makeRequest();
    }
  };

  handlePageClick = async data => {
    var selected = data.selected + 1;
    await this.setState({
      pageNum: selected
    });

    this.makeRequest();
  };

  makeRequest = async () => {
    this.setState({
      isLoaded: false
    });
    var data = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${
        this.state.movieRequest
      }&page=${this.state.pageNum}`
    ).then(response => {
      return response.json();
    });

    this.setState({
      isLoaded: true,
      data: data.Error ? null : data,
      error: data.Error ? data.Error : null,
      pageMax: data.Error ? null : Math.ceil(data.totalResults / 10)
    });
  };

  render() {
    return (
      <div className="App">
        <Header onInput={this.handleInput} />
        <SearchInfo state={this.state} />
        {!this.state.error && this.state.data && (
          <div>
            <FoundContent state={this.state} />
            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              pageCount={this.state.pageMax}
              marginPagesDisplayed={1}
              pageRangeDisplayed={3}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </div>
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
