This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# video-uploader

## Overview

We want to build a video upload service that allows users to upload videos and get shareable links for those videos.

## Goals

- To build a service that can support large video files and scale to support many users
- Optimize storage and playback to be able so support large number of uploads

## Assumptions & Simplifications

- For this POC, the system will not require users to login. This limits some of our functionality (users cannot manage previously uploaded videos)

## Technical Design

At a high-level this system will enable two different user experiences: video uploading and video playback. From `/upload` users will be able to submit a raw video file to our backend. The backend will save that file to Google Cloud Storage and respond to the client with a uniqu video slug, which the client can use to display a playback link for the user to copy (e.g. `videouploader.com/watch?slug=bv34m1h2`).

## Architecture

![Group 16](https://github.com/user-attachments/assets/80549b3e-5fae-4c58-9868-1031a910cfc6)
