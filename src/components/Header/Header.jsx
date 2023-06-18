import styles from "./Header.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = () => {
  return (
    <div>
      <div className={styles.headerPic}>
        <Container>
          <Row>
            <Col>
              <h1 className={styles.fontH1}>Salamandra</h1>
              <h2>Cocktail bar</h2>
            </Col>
            <Col>1 ofsssssssssssssssssssssssssss 1</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Header;
