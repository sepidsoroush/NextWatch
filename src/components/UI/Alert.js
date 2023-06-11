import styles from "@/styles/Alert.module.css";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Alert = (props) => {
  const [resetStyle, setResetStyle] = useState(false);
  const btnClasses = `${inter.className} ${styles.notify} ${
    props.message && resetStyle ? styles.slidein : ""
  } ${props.type === "error" ? styles.error : styles.success}`;

  useEffect(() => {
    setResetStyle(true);
    const timer = setTimeout(() => {
      setResetStyle(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [props.message]);

  return (
    <div className={btnClasses}>
      <p>{props.message}</p>
    </div>
  );
};

export default Alert;
