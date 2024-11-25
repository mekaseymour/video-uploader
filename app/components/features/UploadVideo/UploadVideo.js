import { useState } from 'react'

import { ref, uploadBytesResumable, getDownloadURL, getMetadata } from "firebase/storage";
import { storage } from "../../../../firebase";

import Button from "@/components/common/Button"
import Card from "@/components/common/Card/Card"

/* handle edge case where file is null */
export default function UploadVideo({ file }) {
    const [progress, setProgress] = useState(0);
    const [ videoDetails, setVideoDetails ] = useState()

    function getReadableFileSize(file) {
        const bytes = file.size
        const units = ['kb', 'mb', 'gb']

        for (let i = 0; i < units.length; i++) {
            const unit = units[i]
            const size = (bytes / Math.pow(1024, i + 1)).toFixed(2)

            /* 7 is the length of a number in the hundreds with a decimal and two numbers after (e.g. 249.20) */
            if (size.length < 7) return `${size}${unit}`
        }

        /* Handle the edge-case where files are over 1000GB */
        return 'Too big, chill out.'
    }

    const size = getReadableFileSize(file)

    function handleUpload(e, file) {
        e.preventDefault()

        if (!file) return;

        // Create a storage reference
        const storageRef = ref(storage, `videos/${file.name}`);

        // Start the upload
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Monitor upload progress
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress);
            },
            (error) => {
                console.error("Upload failed:", error);
            },
            async () => {
                // Get the download URL
                const { ref } = uploadTask.snapshot
                const url = await getDownloadURL(ref);
                const metadata = await getMetadata(ref)
                const details = { url, metadata }

                setVideoDetails(details);
            }
        );
    }

    return (
        <Card header={file.name} body={size}>
            <progress value={progress} max="100" />
            <form onSubmit={(e) => handleUpload(e, file)}>
                <Button type="submit">Upload your video</Button>
            </form>
        </Card>
    )
}