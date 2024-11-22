"use client";

import { useState } from 'react'

import styles from './FileUploader.module.css'

function getReadableFileSize(bytes) {
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

export default function FileUploader() {
    const [file, setFile] = useState()

    const handleChange = e => {
        const selectedFile = event.target.files[0]

        if (selectedFile) {
            console.log({selectedFile}, {size: getReadableFileSize(selectedFile.size)})
            setFile(file)
        }
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Choose your file</h1>
            <p className={styles.description}>in .mp4, .ogg, .webm, or .mov.</p>
            <form>
                <label for="video" className={styles.chooseYourFileLabel}>Choose your file</label>
                <input id="video" className={styles.videoInput} type="file" name="video" accept="video/*" onChange={handleChange} />
            </form>
        </div>
    )
}