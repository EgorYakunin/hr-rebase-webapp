import styles from './row.module.css';

type props = {
    children: React.ReactNode;
    onClick?: () => void;
};

export default function Row(props: props) {
    return (
        <div className={styles.row} onClick={props.onClick}>
            {props.children}
        </div>
    );
}
