import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { changePrice, addImage } from "../../redux/actions";

const Admin = () => {
  const menu = useSelector((state) => state.bar.coctailMenu);
  const alco = useSelector((state) => state.alco);
  const hotDrink = useSelector((state) => state.hotWine);
  const coffee = useSelector((state) => state.coffee.coffeeDrink);
  const shake = useSelector((state) => state.shakes);
  const tea = useSelector((state) => state.tea);
  const lemonade = useSelector((state) => state.lemonade);
  const luxCoctail = useSelector((state) => state.luxCoctail.coctails);

  const [showModal, setShowModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedProductImgUrl, setSelectedProductImgUrl] = useState("");
  const [selectedProductImgFile, setSelectedProductImgFile] = useState(null);
  const [newPrice, setNewPrice] = useState("");
  const dispatch = useDispatch();

  const handleOpenImgModal = (productId) => {
    setSelectedProductId(productId);
    const product = menu.find((item) => item.id === productId);
    setSelectedProductImgUrl(product.img); // Set the selected product's image
    setSelectedProductImgFile(null); // Clear the selected product's image file
    setShowModal(true);
  };

  const handleImgFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedProductImgFile(file);
  };

  const handleImgChange = (productId) => {
    if (selectedProductImgFile) {
      // Handle image file upload here (similar to your existing code)
      const updatedImgUrl = `/images/${productId}-${selectedProductImgFile.name}`;
      dispatch(addImage(productId, updatedImgUrl));

      // Log the initial state of the product after image upload
      const uploadedProduct = menu.find((item) => item.id === productId);
      console.log("Initial state of uploaded product:", uploadedProduct);
    }

    handleCloseModal();
  };

  const handleOpenModal = (productId) => {
    setSelectedProductId(productId);
    const product = menu.find((item) => item.id === productId);
    setNewPrice(product.price);
    setShowModal(true);
  };

  const handleOpenLuxCoctailModal = (luxCoctailId) => {
    setSelectedProductId(luxCoctailId);
    const luxCoctailProduct = luxCoctail.find(
      (item) => item.id === luxCoctailId
    );
    setNewPrice(luxCoctailProduct.price);
    setShowModal(true);
  };

  const handleOpenCoffeModal = (coffeeId) => {
    setSelectedProductId(coffeeId);
    const coffeeProduct = coffee.find((item) => item.id === coffeeId);
    setNewPrice(coffeeProduct.price);
    setShowModal(true);
  };

  const handleOpenAlcoModal = (alcoId) => {
    setSelectedProductId(alcoId);
    const alcoProduct = Object.values(alco)
      .flat()
      .find((item) => item.id === alcoId);
    setNewPrice(alcoProduct.price);
    setShowModal(true);
  };

  const handleOpenTeaModal = (teaId) => {
    setSelectedProductId(teaId);
    const teaProduct = Object.values(tea)
      .flat()
      .find((item) => item.id === teaId);
    setNewPrice(teaProduct.price);
    setShowModal(true);
  };

  const handleOpenLemonadeModal = (lemonadeId) => {
    setSelectedProductId(lemonadeId);
    const lemonadeProduct = Object.values(tea)
      .flat()
      .find((item) => item.id === lemonadeId);
    setNewPrice(lemonadeProduct.price);
    setShowModal(true);
  };

  const handleOpenShakeModal = (shakeID) => {
    setSelectedProductId(shakeID);
    const shakeProduct = Object.values(shake)
      .flat()
      .find((item) => item.id === shakeID);
    setNewPrice(shakeProduct.price);
    setShowModal(true);
  };

  const handleOpenHotDrinkModal = (hotDrinkId) => {
    setSelectedProductId(hotDrinkId);
    const hotDrinkProduct = Object.values(hotDrink)
      .flat()
      .find((item) => item.id === hotDrinkId);
    setNewPrice(hotDrinkProduct.price);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePriceChange = () => {
    dispatch(changePrice(selectedProductId, newPrice));
    handleCloseModal();
  };

  return (
    <div>
      <h1>Admin</h1>
      <table style={{ width: "500px" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>ID</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {menu.map((product) => (
            <tr key={product.id} style={{ borderBottom: "1px solid black" }}>
              <td style={{ textAlign: "center" }}>{product.id}</td>
              <td style={{ textAlign: "center" }}>{product.name}</td>
              <td style={{ textAlign: "center" }}>{product.price}</td>
              <td>
                <Button
                  variant="success"
                  onClick={() => handleOpenModal(product.id)}
                >
                  Змінити ціну
                </Button>
                <Button
                  variant="info"
                  onClick={() => handleOpenImgModal(product.id)}
                >
                  Change Image
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <table style={{ width: "500px" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>ID</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {luxCoctail.map((product) => (
            <tr key={product.id} style={{ borderBottom: "1px solid black" }}>
              <td style={{ textAlign: "center" }}>{product.id}</td>
              <td style={{ textAlign: "center" }}>{product.name}</td>
              <td style={{ textAlign: "center" }}>{product.price}</td>
              <td>
                <Button
                  variant="success"
                  onClick={() => handleOpenLuxCoctailModal(product.id)}
                >
                  Змінити ціну
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <table style={{ width: "500px" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>ID</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {coffee.map((coffeeProduct) => (
            <tr
              key={coffeeProduct.id}
              style={{ borderBottom: "1px solid black" }}
            >
              <td style={{ textAlign: "center" }}>{coffeeProduct.id}</td>
              <td style={{ textAlign: "center" }}>{coffeeProduct.name}</td>
              <td style={{ textAlign: "center" }}>{coffeeProduct.price}</td>
              <td>
                <Button
                  variant="success"
                  onClick={() => handleOpenCoffeModal(coffeeProduct.id)}
                >
                  Змінити ціну
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <table style={{ width: "500px", marginTop: "20px" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>ID</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(alco)
            .flat()
            .map((alcoProduct) => (
              <tr
                key={alcoProduct.id}
                style={{ borderBottom: "1px solid black" }}
              >
                <td style={{ textAlign: "center" }}>{alcoProduct.id}</td>
                <td style={{ textAlign: "center" }}>{alcoProduct.name}</td>
                <td style={{ textAlign: "center" }}>{alcoProduct.price}</td>
                <td>
                  <Button
                    variant="success"
                    onClick={() => handleOpenAlcoModal(alcoProduct.id)}
                  >
                    Change Price
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <table style={{ width: "500px", marginTop: "20px" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>ID</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(tea)
            .flat()
            .map((teaProduct) => (
              <tr
                key={teaProduct.id}
                style={{ borderBottom: "1px solid black" }}
              >
                <td style={{ textAlign: "center" }}>{teaProduct.id}</td>
                <td style={{ textAlign: "center" }}>{teaProduct.name}</td>
                <td style={{ textAlign: "center" }}>{teaProduct.price}</td>
                <td>
                  <Button
                    variant="success"
                    onClick={() => handleOpenTeaModal(teaProduct.id)}
                  >
                    Change Price
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <table style={{ width: "500px", marginTop: "20px" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>ID</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(lemonade)
            .flat()
            .map((lemonadeProduct) => (
              <tr
                key={lemonadeProduct.id}
                style={{ borderBottom: "1px solid black" }}
              >
                <td style={{ textAlign: "center" }}>{lemonadeProduct.id}</td>
                <td style={{ textAlign: "center" }}>{lemonadeProduct.name}</td>
                <td style={{ textAlign: "center" }}>{lemonadeProduct.price}</td>
                <td>
                  <Button
                    variant="success"
                    onClick={() => handleOpenLemonadeModal(lemonadeProduct.id)}
                  >
                    Change Price
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <table style={{ width: "500px", marginTop: "20px" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>ID</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(shake)
            .flat()
            .map((shakeProduct) => (
              <tr
                key={shakeProduct.id}
                style={{ borderBottom: "1px solid black" }}
              >
                <td style={{ textAlign: "center" }}>{shakeProduct.id}</td>
                <td style={{ textAlign: "center" }}>{shakeProduct.name}</td>
                <td style={{ textAlign: "center" }}>{shakeProduct.price}</td>
                <td>
                  <Button
                    variant="success"
                    onClick={() => handleOpenShakeModal(shakeProduct.id)}
                  >
                    Change Price
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <table style={{ width: "500px", marginTop: "20px" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>ID</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(hotDrink)
            .flat()
            .map((product) => (
              <tr key={product.id} style={{ borderBottom: "1px solid black" }}>
                <td style={{ textAlign: "center" }}>{product.id}</td>
                <td style={{ textAlign: "center" }}>{product.name}</td>
                <td style={{ textAlign: "center" }}>{product.price}</td>
                <td>
                  <Button
                    variant="success"
                    onClick={() => handleOpenHotDrinkModal(product.id)}
                  >
                    Change Price
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <Modal show={showModal} onHide={handleCloseModal}>
        {/* ... (modal title) */}
        <Modal.Body>
          {/* ... (existing input for changing price) */}
          <label htmlFor="imgInput">Select an image:</label>
          <input
            type="file"
            id="imgInput"
            accept="image/*"
            onChange={handleImgFileChange}
          />
        </Modal.Body>
        <Modal.Footer>
          {/* ... (existing footer buttons for changing price) */}
          <Button variant="primary" onClick={handleImgChange}>
            Save Image Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Admin;
