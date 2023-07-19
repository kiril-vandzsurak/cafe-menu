import React, { useState } from "react";
import styles from "./LemonadeDrinks.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";

const LemonadeDrinks = () => {
  const lemonades = useSelector((state) => state.lemonade.lemonades);
  const iceTea = useSelector((state) => state.lemonade.iceTea);
  const freshes = useSelector((state) => state.lemonade.freshes);
  const desert = useSelector((state) => state.lemonade.desert);

  return (
    <div>
      <div className={styles.naming}>
        <div style={{ marginTop: "100px" }}>
          <div className={styles.underline}></div>
          <div className={styles.textNaming}>Лимонади та холодний чай</div>
          <div className={styles.underline}></div>
        </div>
        <Container>
          <Row className="mt-5">
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Лимонади</div>
            <div className={styles.underlineSubDown}></div>
            {Object.values(lemonades)
              .flat()
              .map((product) => (
                <Col
                  key={product.id}
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  xl={4}
                  className="mb-4"
                >
                  <Card className={styles.card}>
                    <Card.Img
                      variant="top"
                      src={window.location.origin + "/brick.jpg"}
                    />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Title>Price: {product.price} грн</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
          <Row className="mt-5">
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Натуральні холодні чаї</div>
            <div className={styles.underlineSubDown}></div>
            {Object.values(iceTea)
              .flat()
              .map((product) => (
                <Col
                  key={product.id}
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  xl={4}
                  className="mb-4"
                >
                  <Card className={styles.card}>
                    <Card.Img
                      variant="top"
                      src={window.location.origin + "/brick.jpg"}
                    />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Title>Price: {product.price} грн</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
          <Row className="mt-5">
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Фреші</div>
            <div className={styles.underlineSubDown}></div>
            {Object.values(freshes)
              .flat()
              .map((product) => (
                <Col
                  key={product.id}
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  xl={4}
                  className="mb-4"
                >
                  <Card className={styles.card}>
                    <Card.Img
                      variant="top"
                      src={window.location.origin + "/brick.jpg"}
                    />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Title>Price: {product.price} грн</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
          <Row className="mt-5">
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Десерти</div>
            <div className={styles.underlineSubDown}></div>
            {Object.values(desert)
              .flat()
              .map((product) => (
                <Col
                  key={product.id}
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  xl={4}
                  className="mb-4"
                >
                  <Card className={styles.card}>
                    <Card.Img
                      variant="top"
                      src={window.location.origin + "/brick.jpg"}
                    />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Title>Price: {product.price} грн</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LemonadeDrinks;
