"use client";

import ChooseFile from '@/components/features/ChooseFile';
import UploadVideo from '@/components/features/UploadVideo';
import VideoIsReady from './VideoIsReady/VideoIsReady';

import { useState } from 'react'

export default function VideoUploader() {
    const [ selectedFile, setSelectedFile ] = useState()
    const [ videoSlug, setVideoSlug ] = useState()

    if (videoSlug) return <VideoIsReady slug={videoSlug} />
    if (selectedFile) return <UploadVideo file={selectedFile} onUploadSuccess={setVideoSlug} />

    return <ChooseFile onFileSection={setSelectedFile} />
}