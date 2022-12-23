import React from 'react';
import styles from './container.module.css';

type props = {
    children: React.ReactNode,
    wrapper? : boolean
}

export default function Container(props: props) {
    return <div className={props.wrapper? styles.wrapper : styles.container}>{props.children}</div>
}
