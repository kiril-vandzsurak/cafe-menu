import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { changePrice } from "../../redux/actions";

const Admin = () => {
  const menu = useSelector((state) => state.bar.coctailMenu);
  const alco = useSelector((state) => state.alco);
  const [showModal, setShowModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [newPrice, setNewPrice] = useState("");
  const dispatch = useDispatch();

  const handleOpenModal = (productId) => {
    setSelectedProductId(productId);
    const product = menu.find((item) => item.id === productId);
    setNewPrice(product.price);
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

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePriceChange = () => {
    dispatch(changePrice(selectedProductId, newPrice));
    handleCloseModal();
  };

  // const handleAlcoPriceChange = () => {
  //   dispatch(changePrice(selectedAlcoId, newAlcoPrice));
  //   handleCloseModal();
  // };

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

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Change Price</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="number"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            placeholder="Enter new price"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handlePriceChange}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Admin;
