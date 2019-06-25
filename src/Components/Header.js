import React from "react";
import { Row, Col } from "react-bootstrap";
import Search from "./Search";

const Header = props => {
  return (
    <div className="Header">
      <Row>
        <Col xs={3}>
          <h5>Movie Catalog</h5>
        </Col>
        <Col xs={6}>
          <Search onInput={props.onInput} />
        </Col>
        <Col xs={3}>Login</Col>
      </Row>
    </div>
  );
};

export default Header;
