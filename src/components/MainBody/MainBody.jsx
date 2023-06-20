import CoctailCard from "../CoctailCard/CoctailCard";
import styles from "./MainBody.module.css";

const MainBody = () => {
  return (
    <div>
      <div className={styles.background}>
        <CoctailCard />
      </div>
    </div>
  );
};

export default MainBody;
