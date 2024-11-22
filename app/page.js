import FileUploader from "./components/FileUploader";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <FileUploader />
      </main>
    </div>
  );
}