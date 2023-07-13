import CoctailCard from "../CoctailCard/CoctailCard";
import styles from "./MainBody.module.css";
import Header from "../Header/Header";
import AlcoCard from "../AlcoCard/AlcoCard";
import HotDrinks from "../HotDrinks/HotDrinks";
import CoffeeDrink from "../CoffeeDrink/CoffeeDrink";

const MainBody = () => {
  return (
    <div className={styles.widthMain}>
      <Header />
      <CoctailCard />
      <AlcoCard />
      <HotDrinks />
      <CoffeeDrink />
    </div>
  );
};

export default MainBody;
