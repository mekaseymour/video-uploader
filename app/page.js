import VideoUploader from "@/components/features/VideoUploader";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <VideoUploader />
      </main>
    </div>
  );
}