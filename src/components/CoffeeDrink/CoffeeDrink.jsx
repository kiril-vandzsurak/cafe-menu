import React from "react";
import styles from "./CoffeeDrink.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

const CoffeeDrink = () => {
  const coffee = useSelector((state) => state.coffee.coffeeDrink);

  return (
    <div>
      <div className={styles.naming}>
        <div style={{ marginTop: "100px" }}>
          <div className={styles.underline}></div>
          <div className={styles.textNaming}>Кава</div>
          <div className={styles.underline}></div>
        </div>
        <Container>
          <Row className="mt-5">
            {coffee.map((product) => (
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

export default CoffeeDrink;
