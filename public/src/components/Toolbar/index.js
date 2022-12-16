import React from "react";
import { useSlate } from "slate-react";
import { isMarkActive, toggleMark } from "../../utils/slateUtils";
import Button from "../Button";
import Icon from "../Icon";
import data from "../Data/toolbarData.json";
import { AiFillCaretRight } from "react-icons/ai";

import styles from "../../../../styles/Home.module.css";

const Toolbar = () => {
    const editor = useSlate();
    return (
        <div className={styles.wrappertoolbar}>
            <div className={styles.toolbar}>
                {data.map((data) => (
                    <Button
                        key={data.id}
                        active={isMarkActive(editor, data.format)}
                        format={data.format}
                        onMouseDown={(e) => {
                            e.preventDefault();
                            toggleMark(editor, data.format);
                        }}
                    >
                        <Icon icon={data.format} />
                    </Button>
                ))}
            </div>
            <div className={styles.link}>
                <a
                    href="https://github.com/alfanfauzy/typedream-richtext"
                    target="_blank"
                >
                    View in Github <AiFillCaretRight />
                </a>
            </div>
        </div>
    );
};

export default Toolbar;
