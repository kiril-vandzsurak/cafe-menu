import CoctailCard from "../CoctailCard/CoctailCard";
import styles from "./MainBody.module.css";
import Header from "../Header/Header";
import AlcoCard from "../AlcoCard/AlcoCard";

const MainBody = () => {
  return (
    <div className={styles.widthMain}>
      <Header />
      <CoctailCard />
      <AlcoCard />
    </div>
  );
};

export default MainBody;
