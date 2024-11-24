"use client";

import ChooseFile from '@/components/features/ChooseFile';
import UploadVideo from '@/components/features/UploadVideo'

import { useState } from 'react'

export default function VideoUploader() {
    const [ selectedFile, setSelectedFile ] = useState()

    return selectedFile ? <UploadVideo file={selectedFile} /> : <ChooseFile onFileSection={setSelectedFile} />
}