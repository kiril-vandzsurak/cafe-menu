import React from "react";
import styles from "./AlcoCard.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

const AlcoCard = () => {
  // const alco = useSelector((state) => state.alco);
  const alcoVodka = useSelector((state) => state.alco.vodka);
  const alcoCogniac = useSelector((state) => state.alco.cogniac);
  const alcoBalsam = useSelector((state) => state.alco.balsam);
  const alcoTequila = useSelector((state) => state.alco.tequila);
  const alcoWhiskey = useSelector((state) => state.alco.whiskey);
  const alcoJin = useSelector((state) => state.alco.jin);
  const alcoRum = useSelector((state) => state.alco.rum);
  const alcoWine = useSelector((state) => state.alco.wine);
  const alcoChampaign = useSelector((state) => state.alco.champaign);
  const alcoLiquer = useSelector((state) => state.alco.liquer);
  const alcoLiquerDeKupyer = useSelector((state) => state.alco.liquerDeKupyer);
  const alcoDraftBeer = useSelector((state) => state.alco.draftBeer);
  const alcoBottleBeer = useSelector((state) => state.alco.bottleBeer);
  const alcoForBeer = useSelector((state) => state.alco.forBeer);
  const alcoOther = useSelector((state) => state.alco.other);

  return (
    <div>
      <div className={styles.naming}>
        <div>
          <div className={styles.underline}></div>
          <div className={styles.textNaming}>Coctail Card</div>
          <div className={styles.underline}></div>
        </div>
        <Container>
          <Row className="mt-5">
            <div style={{ marginBottom: "30px" }}>vodka</div>
            {Object.values(alcoVodka)
              .flat()
              .map((product) => (
                <Col
                  key={product.id}
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  xl={4}
                  className="mb-5"
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
            {Object.values(alcoCogniac)
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
            {Object.values(alcoBalsam)
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
            {Object.values(alcoTequila)
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
            {Object.values(alcoWhiskey)
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
            {Object.values(alcoJin)
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
            {Object.values(alcoRum)
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
            {Object.values(alcoWine)
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
            {Object.values(alcoChampaign)
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
            {Object.values(alcoLiquer)
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
            {Object.values(alcoLiquerDeKupyer)
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
            {Object.values(alcoDraftBeer)
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
            {Object.values(alcoBottleBeer)
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
            {Object.values(alcoForBeer)
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
            {Object.values(alcoOther)
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

export default AlcoCard;
