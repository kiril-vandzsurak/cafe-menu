import CoctailCard from "../CoctailCard/CoctailCard";
import styles from "./MainBody.module.css";
import Header from "../Header/Header";
import AlcoCard from "../AlcoCard/AlcoCard";
import HotDrinks from "../HotDrinks/HotDrinks";
import CoffeeDrink from "../CoffeeDrink/CoffeeDrink";
import ShakeDrinks from "../ShakeDrinks/ShakeDrinks";
import TeaDrinks from "../TeaDrinks/TeaDrinks";
import LemonadeDrinks from "../LemonadeDrinks/LemonadeDrinks";
import LuxCoctails from "../LuxCoctails/LuxCoctails";

const MainBody = () => {
  return (
    <div className={styles.widthMain}>
      <Header />
      <CoctailCard />
      <AlcoCard />
      <HotDrinks />
      <CoffeeDrink />
      <ShakeDrinks />
      <TeaDrinks />
      <LemonadeDrinks />
      <LuxCoctails />
    </div>
  );
};

export default MainBody;
