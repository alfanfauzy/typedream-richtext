import Head from "next/head";
import styles from "../styles/Home.module.css";
import EditorComponent from "../public/src/components/Editor";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Typedream - test</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h3 className={styles.title}>Typedream Rich Text Editor</h3>
                <span className={styles.description}>
                    Rich text editor build with{" "}
                    <strong>
                        <em>
                            <u>Next.js + Slate.js</u>
                        </em>
                    </strong>
                    . <br />
                    You can use keyboard to formatting text
                    <ul>
                        <li>
                            To formatting to <strong>Bold</strong> use (ctrl +
                            b)
                        </li>
                        <li>
                            To formatting to <em>Italic</em> use (ctrl + i)
                        </li>
                        <li>
                            To formatting to <u>Underline</u> use (ctrl + u)
                        </li>
                        <li>
                            To formatting to{" "}
                            <code className={styles.codeElement}>Code</code> use
                            (ctrl + `)
                        </li>
                    </ul>
                </span>
                <div className={styles.card}>
                    <EditorComponent />
                </div>
            </main>
        </div>
    );
}
