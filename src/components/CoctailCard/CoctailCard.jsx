import styles from "./CoctailCard.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

const CoctailCard = () => {
  const menu = useSelector((state) => state.bar.coctailMenu);
  const alco = useSelector((state) => state.alco.alcoDrinks);

  console.log(menu);
  console.log(alco);
  return (
    <div>
      <div className={styles.naming}>
        <div style={{ textAlign: "center" }}>Coctail Card</div>
        <Container>
          <Row className="mt-5">
            {menu.map((product) => (
              <Col key={product.id} sm={4} className="mb-4">
                <Card style={{ width: "250px" }}>
                  <Card.Img
                    variant="top"
                    src={window.location.origin + "/brick.jpg"}
                  />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.ingridients}</Card.Text>
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

export default CoctailCard;
