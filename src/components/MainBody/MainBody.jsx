import CoctailCard from "../CoctailCard/CoctailCard";
import styles from "./MainBody.module.css";
import Header from "../Header/Header";

const MainBody = () => {
  return (
    <div className={styles.widthMain}>
      <Header />
      <CoctailCard />
    </div>
  );
};

export default MainBody;
