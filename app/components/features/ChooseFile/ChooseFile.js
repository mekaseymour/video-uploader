"use client";

import Card from '@/components/common/Card/Card';

import buttonStyles from '@/components/common/Button/Button.module.css'

import styles from './ChooseFile.module.css'

export default function ChooseFile({ onFileSection }) {
    function handleChange(e) {
        onFileSection(e.target.files[0])
    }

    return (
        <Card header="Choose your file" body="in .mp4, .ogg, .webm, or .mov.">
            <div>
                <label htmlFor="video" className={buttonStyles.button}>Choose your file</label>
                <input id="video" className={styles.videoInput} type="file" name="video" accept="video/*" onChange={handleChange} />
            </div>
        </Card>
    )
}