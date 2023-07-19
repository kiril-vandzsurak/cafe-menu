import React from "react";
import styles from "./TeaDrinks.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

const TeaDrinks = () => {
  const fruitTea = useSelector((state) => state.tea.fruitTea);
  const herbTea = useSelector((state) => state.tea.herbTea);
  const forTea = useSelector((state) => state.tea.forTea);
  const blackTea = useSelector((state) => state.tea.blackTea);
  const greenTea = useSelector((state) => state.tea.greenTea);

  return (
    <div>
      <div className={styles.naming}>
        <div style={{ marginTop: "100px" }}>
          <div className={styles.underline}></div>
          <div className={styles.textNaming}>Чаї</div>
          <div className={styles.underline}></div>
        </div>
        <Container>
          <Row className="mt-5">
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Фруктовий</div>
            <div className={styles.underlineSubDown}></div>
            {Object.values(fruitTea)
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
            <div className={styles.subName}>Трав'яний</div>
            <div className={styles.underlineSubDown}></div>
            {Object.values(herbTea)
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
            <div className={styles.subName}>Чорний</div>
            <div className={styles.underlineSubDown}></div>
            {Object.values(blackTea)
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
            <div className={styles.subName}>Зелений</div>
            <div className={styles.underlineSubDown}></div>
            {Object.values(greenTea)
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
            <div className={styles.subName}>До чаю</div>
            <div className={styles.underlineSubDown}></div>
            {Object.values(forTea)
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

export default TeaDrinks;
