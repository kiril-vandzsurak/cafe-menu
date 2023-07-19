import React from "react";
import styles from "./HotDrinks.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

const HotDrinks = () => {
  const hotDrink = useSelector((state) => state.hotWine.hotWine);
  const hookah = useSelector((state) => state.hotWine.hookah);

  return (
    <div>
      <div className={styles.naming}>
        <div>
          <div className={styles.underline}></div>
          <div className={styles.textNaming}>Вина та Горги</div>
          <div className={styles.underline}></div>
        </div>
        <Container>
          <Row className="mt-5">
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Горячі вина та горги</div>
            <div className={styles.underlineSubDown}></div>
            {Object.values(hotDrink)
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
                  <Card>
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
            <div className={styles.subName}>Кальян</div>
            <div className={styles.underlineSubDown}></div>
            {Object.values(hookah)
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
                  <Card>
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

export default HotDrinks;
