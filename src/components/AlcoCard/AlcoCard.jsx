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

  const [vodkaVisible, setVodkaVisible] = useState(false);
  const [cogniacVisible, setCogniacVisible] = useState(false);
  const [balsamVisible, setBalsamVisible] = useState(false);
  const [tequilaVisible, setTequilaVisible] = useState(false);
  const [whiskeyVisible, setWhiskeyVisible] = useState(false);
  const [jinVisible, setJinVisible] = useState(false);
  const [rumVisible, setRumVisible] = useState(false);
  const [wineVisible, setWineVisible] = useState(false);
  const [champaignVisible, setChampaignVisible] = useState(false);
  const [liquerVisible, setLiquerVisible] = useState(false);
  const [liquerDeKupyerVisible, setLiquerDeKupyerVisible] = useState(false);
  const [draftBeerVisible, setDraftBeerVisible] = useState(false);
  const [bottleBeerVisible, setBottleBeerVisible] = useState(false);
  const [alcoForBeerVisible, setAlcoForBeerVisible] = useState(false);
  const [alcoOtherVisible, setAlcoOtherVisible] = useState(false);

  const toggleVodka = () => {
    setVodkaVisible(!vodkaVisible);
  };
  const toggleCogniac = () => {
    setCogniacVisible(!cogniacVisible);
  };
  const toggleBalsam = () => {
    setBalsamVisible(!balsamVisible);
  };
  const toggleTequila = () => {
    setTequilaVisible(!tequilaVisible);
  };
  const toggleWhiskey = () => {
    setWhiskeyVisible(!whiskeyVisible);
  };
  const toggleJin = () => {
    setJinVisible(!jinVisible);
  };
  const toggleRum = () => {
    setRumVisible(!rumVisible);
  };
  const toggleWine = () => {
    setWineVisible(!wineVisible);
  };
  const toggleChampaign = () => {
    setChampaignVisible(!champaignVisible);
  };
  const toggleLiquer = () => {
    setLiquerVisible(!liquerVisible);
  };
  const toggleLiquerDeKupyer = () => {
    setLiquerDeKupyerVisible(!liquerDeKupyerVisible);
  };
  const toggleDraftBeer = () => {
    setDraftBeerVisible(!draftBeerVisible);
  };
  const toggleBottleBeer = () => {
    setBottleBeerVisible(!bottleBeerVisible);
  };
  const toggleAlcoForBeer = () => {
    setAlcoForBeerVisible(!alcoForBeerVisible);
  };
  const toggleAlcoOther = () => {
    setAlcoOtherVisible(!alcoOtherVisible);
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
          <Row className={`mt-5 ${vodkaVisible ? "" : styles["hidden-cards"]}`}>
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Горілка</div>
            <div className={styles.underlineSubDown}></div>
            <Button
              variant="link"
              onClick={toggleVodka}
              className={styles.toggleButton}
            >
              {toggleVodka ? "Приховати всі напої" : "Показати всі напої"}
            </Button>
            {Object.values(alcoVodka)
              .flat()
              .map(
                (product) =>
                  vodkaVisible && (
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
            className={`mt-5 ${cogniacVisible ? "" : styles["hidden-cards"]}`}
          >
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Коньяк</div>
            <div className={styles.underlineSubDown}></div>
            <Button
              variant="link"
              onClick={toggleCogniac}
              className={styles.toggleButton}
            >
              {cogniacVisible ? "Приховати всі напої" : "Показати всі напої"}
            </Button>
            {Object.values(alcoCogniac)
              .flat()
              .map(
                (product) =>
                  cogniacVisible && (
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
            className={`mt-5 ${balsamVisible ? "" : styles["hidden-cards"]}`}
          >
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Бальзам та афродизіак</div>
            <div className={styles.underlineSubDown}></div>
            <Button
              variant="link"
              onClick={toggleBalsam}
              className={styles.toggleButton}
            >
              {balsamVisible ? "Приховати всі напої" : "Показати всі напої"}
            </Button>
            {Object.values(alcoBalsam)
              .flat()
              .map(
                (product) =>
                  balsamVisible && (
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
            className={`mt-5 ${tequilaVisible ? "" : styles["hidden-cards"]}`}
          >
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Текіла</div>
            <div className={styles.underlineSubDown}></div>
            <Button
              variant="link"
              onClick={toggleTequila}
              className={styles.toggleButton}
            >
              {tequilaVisible ? "Приховати всі напої" : "Показати всі напої"}
            </Button>
            {Object.values(alcoTequila)
              .flat()
              .map(
                (product) =>
                  tequilaVisible && (
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
            className={`mt-5 ${whiskeyVisible ? "" : styles["hidden-cards"]}`}
          >
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Віскі</div>
            <div className={styles.underlineSubDown}></div>
            <Button
              variant="link"
              onClick={toggleWhiskey}
              className={styles.toggleButton}
            >
              {whiskeyVisible ? "Приховати всі напої" : "Показати всі напої"}
            </Button>
            {Object.values(alcoWhiskey)
              .flat()
              .map(
                (product) =>
                  whiskeyVisible && (
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
          <Row className={`mt-5 ${jinVisible ? "" : styles["hidden-cards"]}`}>
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Джин</div>
            <div className={styles.underlineSubDown}></div>
            <Button
              variant="link"
              onClick={toggleJin}
              className={styles.toggleButton}
            >
              {jinVisible ? "Приховати всі напої" : "Показати всі напої"}
            </Button>
            {Object.values(alcoJin)
              .flat()
              .map(
                (product) =>
                  jinVisible && (
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
          <Row className={`mt-5 ${rumVisible ? "" : styles["hidden-cards"]}`}>
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Ром</div>
            <div className={styles.underlineSubDown}></div>
            <Button
              variant="link"
              onClick={toggleRum}
              className={styles.toggleButton}
            >
              {rumVisible ? "Приховати всі напої" : "Показати всі напої"}
            </Button>
            {Object.values(alcoRum)
              .flat()
              .map(
                (product) =>
                  rumVisible && (
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
          <Row className={`mt-5 ${wineVisible ? "" : styles["hidden-cards"]}`}>
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Вина</div>
            <div className={styles.underlineSubDown}></div>
            <Button
              variant="link"
              onClick={toggleWine}
              className={styles.toggleButton}
            >
              {wineVisible ? "Приховати всі напої" : "Показати всі напої"}
            </Button>
            {Object.values(alcoWine)
              .flat()
              .map(
                (product) =>
                  wineVisible && (
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
            className={`mt-5 ${champaignVisible ? "" : styles["hidden-cards"]}`}
          >
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Шампанське</div>
            <div className={styles.underlineSubDown}></div>
            <Button
              variant="link"
              onClick={toggleChampaign}
              className={styles.toggleButton}
            >
              {champaignVisible ? "Приховати всі напої" : "Показати всі напої"}
            </Button>
            {Object.values(alcoChampaign)
              .flat()
              .map(
                (product) =>
                  champaignVisible && (
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
            className={`mt-5 ${liquerVisible ? "" : styles["hidden-cards"]}`}
          >
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Лікери</div>
            <div className={styles.underlineSubDown}></div>
            <Button
              variant="link"
              onClick={toggleLiquer}
              className={styles.toggleButton}
            >
              {liquerVisible ? "Приховати всі напої" : "Показати всі напої"}
            </Button>
            {Object.values(alcoLiquer)
              .flat()
              .map(
                (product) =>
                  liquerVisible && (
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
            className={`mt-5 ${
              liquerDeKupyerVisible ? "" : styles["hidden-cards"]
            }`}
          >
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Лікери De Kuyper</div>
            <div className={styles.underlineSubDown}></div>
            <Button
              variant="link"
              onClick={toggleLiquerDeKupyer}
              className={styles.toggleButton}
            >
              {liquerDeKupyerVisible
                ? "Приховати всі напої"
                : "Показати всі напої"}
            </Button>
            {Object.values(alcoLiquerDeKupyer)
              .flat()
              .map(
                (product) =>
                  liquerDeKupyerVisible && (
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
            className={`mt-5 ${draftBeerVisible ? "" : styles["hidden-cards"]}`}
          >
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Бочкове пиво</div>
            <div className={styles.underlineSubDown}></div>
            <Button
              variant="link"
              onClick={toggleDraftBeer}
              className={styles.toggleButton}
            >
              {draftBeerVisible ? "Приховати всі напої" : "Показати всі напої"}
            </Button>
            {Object.values(alcoDraftBeer)
              .flat()
              .map(
                (product) =>
                  draftBeerVisible && (
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
            className={`mt-5 ${
              bottleBeerVisible ? "" : styles["hidden-cards"]
            }`}
          >
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Пляшкове пиво</div>
            <div className={styles.underlineSubDown}></div>
            <Button
              variant="link"
              onClick={toggleBottleBeer}
              className={styles.toggleButton}
            >
              {bottleBeerVisible ? "Приховати всі напої" : "Показати всі напої"}
            </Button>
            {Object.values(alcoBottleBeer)
              .flat()
              .map(
                (product) =>
                  bottleBeerVisible && (
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
            className={`mt-5 ${
              alcoForBeerVisible ? "" : styles["hidden-cards"]
            }`}
          >
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>До пива</div>
            <div className={styles.underlineSubDown}></div>
            <Button
              variant="link"
              onClick={toggleAlcoForBeer}
              className={styles.toggleButton}
            >
              {alcoForBeerVisible
                ? "Приховати всі напої"
                : "Показати всі напої"}
            </Button>
            {Object.values(alcoForBeer)
              .flat()
              .map(
                (product) =>
                  alcoForBeerVisible && (
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
            className={`mt-5 ${alcoOtherVisible ? "" : styles["hidden-cards"]}`}
          >
            <div className={styles.underlineSub}></div>
            <div className={styles.subName}>Інші безалкогольні напої</div>
            <div className={styles.underlineSubDown}></div>
            <Button
              variant="link"
              onClick={toggleAlcoOther}
              className={styles.toggleButton}
            >
              {alcoOtherVisible ? "Приховати всі напої" : "Показати всі напої"}
            </Button>
            {Object.values(alcoOther)
              .flat()
              .map(
                (product) =>
                  alcoOtherVisible && (
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
