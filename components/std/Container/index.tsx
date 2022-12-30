import React from 'react';
import styles from './container.module.css';

type props = {
    children: React.ReactNode,
    wrapper? : boolean,
    className?: string,
}

export default function Container(props: props) {

    let container_styles;

    if (props.wrapper) {
        container_styles = styles.wrapper;
    } else {
        container_styles = styles.container;
    }

    if (props.className) {
        container_styles +=  " " + props.className;
    }

    return <div className={container_styles}>{props.children}</div>
}
