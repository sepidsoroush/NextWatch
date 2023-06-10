import styles from "@/styles/Button.module.css";

const Button = (props) => {
  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${props.className}`}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
