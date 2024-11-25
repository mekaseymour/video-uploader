import PropTypes from "prop-types"

import Card from "@/components/common/Card"
import Button from "@/components/common/Button"

export default function VideoIsReady({ slug }) {
    function handleCopy() {
        // copy url
    }

    return (
        <Card header="Your video is ready!" body="You can use the link below to share with your mom or your friends">
            <div className={styles.wrapper}>
                <input value={`localhost:3000/watch/${slug}`} disabled />
                <Button onClick={handleCopy}>Copy!</Button>
            </div>
        </Card>
    )
}

VideoIsReady.propTypes = {
    slug: PropTypes.string.isRequired,
}