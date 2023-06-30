import CoctailCard from "../CoctailCard/CoctailCard";
import styles from "./MainBody.module.css";
import Header from "../Header/Header";

const MainBody = () => {
  return (
    <div>
      <div className={styles.background}>
        <Header />
        <CoctailCard />
      </div>
    </div>
  );
};

export default MainBody;
