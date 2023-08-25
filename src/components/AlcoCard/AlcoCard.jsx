import React from "react";
import styles from "./AlcoCard.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Button } from "react-bootstrap";

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

  const [allCardsVisible, setAllCardsVisible] = useState(true);

  const toggleAllCards = () => {
    setAllCardsVisible(!allCardsVisible);
  };

  return (
    <div>
      <div className={styles.naming}>
        <div style={{ marginTop: "100px" }}>
          <div className={styles.underline}></div>
          <div className={styles.textNaming}>Алкогольні напої</div>
          <div className={styles.underline}></div>
        </div>
        <Container>
          <Row
            className={`mt-5 ${allCardsVisible ? "" : styles["hidden-cards"]}`}
          >
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Горілка</div>
            <div className={styles.underlineSubDown}></div>
            <Button
              variant="link"
              onClick={toggleAllCards}
              className={styles.toggleButton}
            >
              {allCardsVisible ? "Приховати всі напої" : "Показати всі напої"}
            </Button>
            {Object.values(alcoVodka)
              .flat()
              .map(
                (product) =>
                  allCardsVisible && (
                    <Col
                      key={product.id}
                      xs={12}
                      sm={6}
                      md={6}
                      lg={6}
                      xl={4}
                      className="mb-5"
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
                  )
              )}
          </Row>
          <Row
            className={`mt-5 ${allCardsVisible ? "" : styles["hidden-cards"]}`}
          >
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Коньяк</div>
            <div className={styles.underlineSubDown}></div>
            <Button
              variant="link"
              onClick={toggleAllCards}
              className={styles.toggleButton}
            >
              {allCardsVisible ? "Приховати всі напої" : "Показати всі напої"}
            </Button>
            {Object.values(alcoCogniac)
              .flat()
              .map(
                (product) =>
                  allCardsVisible && (
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
                  )
              )}
          </Row>
          <Row
            className={`mt-5 ${allCardsVisible ? "" : styles["hidden-cards"]}`}
          >
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Бальзам та афродизіак</div>
            <div className={styles.underlineSubDown}></div>
            <Button
              variant="link"
              onClick={toggleAllCards}
              className={styles.toggleButton}
            >
              {allCardsVisible ? "Приховати всі напої" : "Показати всі напої"}
            </Button>
            {Object.values(alcoBalsam)
              .flat()
              .map(
                (product) =>
                  allCardsVisible && (
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
                  )
              )}
          </Row>
          <Row
            className={`mt-5 ${allCardsVisible ? "" : styles["hidden-cards"]}`}
          >
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Текіла</div>
            <div className={styles.underlineSubDown}></div>
            <Button
              variant="link"
              onClick={toggleAllCards}
              className={styles.toggleButton}
            >
              {allCardsVisible ? "Приховати всі напої" : "Показати всі напої"}
            </Button>
            {Object.values(alcoTequila)
              .flat()
              .map(
                (product) =>
                  allCardsVisible && (
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
                  )
              )}
          </Row>
          <Row
            className={`mt-5 ${allCardsVisible ? "" : styles["hidden-cards"]}`}
          >
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Віскі</div>
            <div className={styles.underlineSubDown}></div>
            <Button
              variant="link"
              onClick={toggleAllCards}
              className={styles.toggleButton}
            >
              {allCardsVisible ? "Приховати всі напої" : "Показати всі напої"}
            </Button>
            {Object.values(alcoWhiskey)
              .flat()
              .map(
                (product) =>
                  allCardsVisible && (
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
                  )
              )}
          </Row>
          <Row
            className={`mt-5 ${allCardsVisible ? "" : styles["hidden-cards"]}`}
          >
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Джин</div>
            <div className={styles.underlineSubDown}></div>
            <Button
              variant="link"
              onClick={toggleAllCards}
              className={styles.toggleButton}
            >
              {allCardsVisible ? "Приховати всі напої" : "Показати всі напої"}
            </Button>
            {Object.values(alcoJin)
              .flat()
              .map(
                (product) =>
                  allCardsVisible && (
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
                  )
              )}
          </Row>
          <Row
            className={`mt-5 ${allCardsVisible ? "" : styles["hidden-cards"]}`}
          >
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Ром</div>
            <div className={styles.underlineSubDown}></div>
            <Button
              variant="link"
              onClick={toggleAllCards}
              className={styles.toggleButton}
            >
              {allCardsVisible ? "Приховати всі напої" : "Показати всі напої"}
            </Button>
            {Object.values(alcoRum)
              .flat()
              .map(
                (product) =>
                  allCardsVisible && (
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
                  )
              )}
          </Row>
          <Row
            className={`mt-5 ${allCardsVisible ? "" : styles["hidden-cards"]}`}
          >
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Вина</div>
            <div className={styles.underlineSubDown}></div>
            <Button
              variant="link"
              onClick={toggleAllCards}
              className={styles.toggleButton}
            >
              {allCardsVisible ? "Приховати всі напої" : "Показати всі напої"}
            </Button>
            {Object.values(alcoWine)
              .flat()
              .map(
                (product) =>
                  allCardsVisible && (
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
                  )
              )}
          </Row>
          <Row
            className={`mt-5 ${allCardsVisible ? "" : styles["hidden-cards"]}`}
          >
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Шампанське</div>
            <div className={styles.underlineSubDown}></div>
            <Button
              variant="link"
              onClick={toggleAllCards}
              className={styles.toggleButton}
            >
              {allCardsVisible ? "Приховати всі напої" : "Показати всі напої"}
            </Button>
            {Object.values(alcoChampaign)
              .flat()
              .map(
                (product) =>
                  allCardsVisible && (
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
                  )
              )}
          </Row>
          <Row
            className={`mt-5 ${allCardsVisible ? "" : styles["hidden-cards"]}`}
          >
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Лікери</div>
            <div className={styles.underlineSubDown}></div>
            <Button
              variant="link"
              onClick={toggleAllCards}
              className={styles.toggleButton}
            >
              {allCardsVisible ? "Приховати всі напої" : "Показати всі напої"}
            </Button>
            {Object.values(alcoLiquer)
              .flat()
              .map(
                (product) =>
                  allCardsVisible && (
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
                  )
              )}
          </Row>
          <Row
            className={`mt-5 ${allCardsVisible ? "" : styles["hidden-cards"]}`}
          >
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Лікери De Kuyper</div>
            <div className={styles.underlineSubDown}></div>
            <Button
              variant="link"
              onClick={toggleAllCards}
              className={styles.toggleButton}
            >
              {allCardsVisible ? "Приховати всі напої" : "Показати всі напої"}
            </Button>
            {Object.values(alcoLiquerDeKupyer)
              .flat()
              .map(
                (product) =>
                  allCardsVisible && (
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
                  )
              )}
          </Row>
          <Row
            className={`mt-5 ${allCardsVisible ? "" : styles["hidden-cards"]}`}
          >
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Бочкове пиво</div>
            <div className={styles.underlineSubDown}></div>
            <Button
              variant="link"
              onClick={toggleAllCards}
              className={styles.toggleButton}
            >
              {allCardsVisible ? "Приховати всі напої" : "Показати всі напої"}
            </Button>
            {Object.values(alcoDraftBeer)
              .flat()
              .map(
                (product) =>
                  allCardsVisible && (
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
                  )
              )}
          </Row>
          <Row
            className={`mt-5 ${allCardsVisible ? "" : styles["hidden-cards"]}`}
          >
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Пляшкове пиво</div>
            <div className={styles.underlineSubDown}></div>
            <Button
              variant="link"
              onClick={toggleAllCards}
              className={styles.toggleButton}
            >
              {allCardsVisible ? "Приховати всі напої" : "Показати всі напої"}
            </Button>
            {Object.values(alcoBottleBeer)
              .flat()
              .map(
                (product) =>
                  allCardsVisible && (
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
                  )
              )}
          </Row>
          <Row
            className={`mt-5 ${allCardsVisible ? "" : styles["hidden-cards"]}`}
          >
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>До пива</div>
            <div className={styles.underlineSubDown}></div>
            <Button
              variant="link"
              onClick={toggleAllCards}
              className={styles.toggleButton}
            >
              {allCardsVisible ? "Приховати всі напої" : "Показати всі напої"}
            </Button>
            {Object.values(alcoForBeer)
              .flat()
              .map(
                (product) =>
                  allCardsVisible && (
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
                  )
              )}
          </Row>
          <Row
            className={`mt-5 ${allCardsVisible ? "" : styles["hidden-cards"]}`}
          >
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Інші безалкогольні напої</div>
            <div className={styles.underlineSubDown}></div>
            <Button
              variant="link"
              onClick={toggleAllCards}
              className={styles.toggleButton}
            >
              {allCardsVisible ? "Приховати всі напої" : "Показати всі напої"}
            </Button>
            {Object.values(alcoOther)
              .flat()
              .map(
                (product) =>
                  allCardsVisible && (
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
                  )
              )}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AlcoCard;
