import styles from "@/styles/Error.module.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Alert = (props) => {
  return (
    <div className={`${inter.className} ${styles.container}`}>
      {props.error ? <p className={styles.error}>{props.error}</p> : null}
    </div>
  );
};
export default Alert;
