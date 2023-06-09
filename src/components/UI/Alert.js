import styles from "@/styles/Alert.module.css";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Alert = (props) => {
  const [resetStyle, setResetStyle] = useState(false);
  const btnClasses = `${inter.className} ${styles.notify} ${
    props.error && resetStyle ? styles.slidein : ""
  }`;

  useEffect(() => {
    setResetStyle(true);
    const timer = setTimeout(() => {
      setResetStyle(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [props.error]);

  return (
    <div className={btnClasses}>
      <p>{props.error}</p>
    </div>
  );
};

export default Alert;
