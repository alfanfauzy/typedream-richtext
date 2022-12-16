import React from "react";
import styles from "../../../../styles/Home.module.css";

const CodeElement = (props) => {
    return (
        <pre {...props.attributes}>
            <code className={styles.codeElement}>{props.children}</code>
        </pre>
    );
};

const DefaultElement = (props) => {
    return <p {...props.attributes}>{props.children}</p>;
};

const LeafElement = ({ attributes, children, leaf }) => {
    children = <span {...attributes}>{children}</span>;

    if (leaf.bold) {
        children = <strong {...attributes}>{children}</strong>;
    }

    if (leaf.italic) {
        children = <em {...attributes}>{children}</em>;
    }

    if (leaf.underline) {
        children = <u {...attributes}>{children}</u>;
    }

    if (leaf.code) {
        children = (
            <code className={styles.codeElement} {...attributes}>
                {children}
            </code>
        );
    }

    return children;
};

export { CodeElement, DefaultElement, LeafElement };
