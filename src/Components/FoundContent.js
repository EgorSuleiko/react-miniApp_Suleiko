import React from "react";
import { Row, Col } from "react-bootstrap";
import MovieBlock from "./MovieBlock";

class FoundContent extends React.Component {
  RednerBlock = block => {
    return (
      <Col xs={2}>
        <MovieBlock
          key={block.imdbID ? block.imdbID.toString() : block.Title.toString()}
          movie={block}
        />
      </Col>
    );
  };

  render() {
    return (
      <div>
        <Row className="Row">
          {this.props.state.data.Search.slice(0, 5).map(block => {
            return this.RednerBlock(block);
          })}
        </Row>
        <Row className="Row">
          {this.props.state.data.Search.slice(5).map(block => {
            return this.RednerBlock(block);
          })}
        </Row>
      </div>
    );
  }
}

export default FoundContent;
