import styles from './row.module.css';

export default function Row({children}: React.ReactNode, onClick?: () => void) {
    return (
        <div className={styles.row} onClick>{children}</div>
    )
}