import Button from "@/components/common/Button"
import Card from "@/components/common/Card/Card"

/* handle edge case where file is null */
export default function UploadVideo({ file, onDelete }) {
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

    async function handleUpload (e) {
        e.preventDefault()

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: file,
            })

            if (response.ok) {
                const data = response.json()
                console.log({data})
            } else {
                console.log('handle non-200 response')
            }
        } catch(error) {
            console.error(error)
        }
    }

    return (
        <Card header={file.name} body={size}>
            <form onSubmit={handleUpload}>
                <Button type="submit" onClick={handleUpload}>Upload your video</Button>
            </form>
        </Card>
    )
}