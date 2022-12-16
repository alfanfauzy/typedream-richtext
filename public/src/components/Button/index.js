import React from "react";
import styles from "../../../../styles/Home.module.css";

const Button = (props) => {
    const { children, format, active, ...rest } = props;
    return (
        <button
            className={active ? styles.buttonActive : styles.buttonToolbar}
            title={format}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
