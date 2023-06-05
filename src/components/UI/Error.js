import { AppContext } from "@/context/app-context";
import { useContext } from "react";
import styles from "@/styles/Error.module.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Alert = () => {
  const { error } = useContext(AppContext);
  return (
    <div className={`${inter.className} ${styles.container}`}>
      {error ? <p className={styles.error}>{error}</p> : null}
    </div>
  );
};
export default Alert;
