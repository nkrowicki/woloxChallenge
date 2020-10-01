import React from 'react'
import Spinner from './Spinner'
import styles from './CenterSpinner.module.scss'

const CenterSpinner = () => {
    return (
        <div className={styles.centerFull}>
            <Spinner />
        </div>
    )
}

export default CenterSpinner
