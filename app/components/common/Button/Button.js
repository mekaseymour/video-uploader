import PropTypes from "prop-types"

import styles from './Button.module.css'

export default function Button({ onClick, children, type }) {
    return (
        <button className={styles.button} onClick={onClick} type={type}>{children}</button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    type: PropTypes.string.isRequired,
}