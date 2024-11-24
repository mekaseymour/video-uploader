import PropTypes from 'prop-types'

import styles from './Card.module.css'

export default function Card({ body, children, header }) {
    return (
        <div className={styles.container}>
            {header && <h1 className={styles.header}>{header}</h1>}
            {body && <p className={styles.body}>{body}</p>}
            {children}
        </div>
    )
}

Card.propTypes = {
    body: PropTypes.string,
    children: PropTypes.node,
    header: PropTypes.string,
}