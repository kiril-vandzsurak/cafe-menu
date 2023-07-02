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
            <Col className={styles.colPosition}>
              <h1 style={{ textAlign: "center" }} className={styles.fontH1}>
                Salamandra
              </h1>
              <h2 style={{ textAlign: "center", color: "white" }}>
                Cocktail bar
              </h2>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Header;
