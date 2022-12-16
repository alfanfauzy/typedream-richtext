import React, { useCallback, useState } from "react";
import { createEditor, Transforms, Editor, Text } from "slate";
import { Slate, Editable, withReact } from "slate-react";

import styles from "../../../styles/Home.module.css";
import { CodeElement, DefaultElement, LeafElement } from "./Elements";
import Toolbar from "./Toolbar";

const EditorComponent = () => {
    const [editor] = useState(() => withReact(createEditor()))
    const [valueEditor, setValueEditor] = useState([
        {
            type: "paragraph",
            children: [{ text: "" }],
        },
    ]);

    const renderElement = useCallback((props) => {
        switch (props.element.type) {
            case "code":
                return <CodeElement {...props} />;

            default:
                return <DefaultElement {...props} />;
        }
    }, []);

    const renderLeaf = useCallback((props) => {
        return <LeafElement {...props} />;
    }, []);

    const handleKeyDown = (event) => {
        // If ctrl key is false, return
        if (!event.ctrlKey) {
            return;
        }

        switch (event.key) {
            case "`":
                event.preventDefault();
                const [code] = Editor.nodes(editor, {
                    match: (element) => element.code === true,
                });

                Transforms.setNodes(
                    editor,
                    { code: code ? null : true },
                    { match: (element) => Text.isText(element), split: true }
                );
                break;

            case "b":
                event.preventDefault();

                const [bold] = Editor.nodes(editor, {
                    match: (element) => element.bold === true,
                    universal: true
                });

                Transforms.setNodes(
                    editor,
                    { bold: bold ? null : true },
                    { match: (element) => Text.isText(element), split: true }
                );
                break;
            
            case "i":
                event.preventDefault();

                const [italic] = Editor.nodes(editor, {
                    match: (element) => element.italic === true,
                    universal: true
                });

                Transforms.setNodes(
                    editor,
                    { italic: italic ? null : true },
                    { match: (element) => Text.isText(element), split: true }
                );
                break;
            
            case "u":
                event.preventDefault();

                const [underline] = Editor.nodes(editor, {
                    match: (element) => element.underline === true,
                    universal: true
                });

                Transforms.setNodes(
                    editor,
                    { underline: underline ? null : true  },
                    { match: (element) => Text.isText(element), split: true }
                );
                break;
            
        }
    };

    const handleChangeEditor = (value) => {
        setValueEditor(value)
    }

    return (
        <Slate editor={editor} value={valueEditor} onChange={handleChangeEditor}>
            <Toolbar/>
            <Editable
                className={styles.editor}
                placeholder="Write text here . . ."
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                onKeyDown={(event) => handleKeyDown(event)}
            />
        </Slate>
  )
}

export default EditorComponent