import React, { useState } from "react";
import styles from "./CoctailCard.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";

const CoctailCard = () => {
  const menu = useSelector((state) => state.bar.coctailMenu);

  const [expandedIngredients, setExpandedIngredients] = useState([]);

  const toggleIngredients = (productId) => {
    if (expandedIngredients.includes(productId)) {
      setExpandedIngredients(
        expandedIngredients.filter((id) => id !== productId)
      );
    } else {
      setExpandedIngredients([...expandedIngredients, productId]);
    }
  };

  const isExpanded = (productId) => {
    return expandedIngredients.includes(productId);
  };

  return (
    <div>
      <div className={styles.naming}>
        <div>
          <div className={styles.underline}></div>
          <div className={styles.textNaming}>Коктейлі</div>
          <div className={styles.underline}></div>
        </div>
        <Container>
          <Row className="mt-5">
            {menu.map((product) => (
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
                    <Card.Text>
                      {product.ingridients
                        .slice(0, 2)
                        .map((ingredient, index) => (
                          <div key={ingredient}>{ingredient}</div>
                        ))}
                      {product.ingridients.length > 2 && (
                        <>
                          {isExpanded(product.id) ? (
                            <>
                              {product.ingridients
                                .slice(2)
                                .map((ingredient, index) => (
                                  <div key={index + 2}>{ingredient}</div>
                                ))}
                              <Button
                                variant="link"
                                onClick={() => toggleIngredients(product.id)}
                                className={styles.btnCard}
                              >
                                Приховати
                              </Button>
                            </>
                          ) : (
                            <Button
                              variant="link"
                              onClick={() => toggleIngredients(product.id)}
                              className={styles.btnCard}
                            >
                              Всі інгридіенти
                            </Button>
                          )}
                        </>
                      )}
                    </Card.Text>
                    <Card.Title>Ціна: {product.price} грн</Card.Title>
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

export default CoctailCard;
