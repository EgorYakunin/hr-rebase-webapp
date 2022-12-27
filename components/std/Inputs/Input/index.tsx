import styles from "./input.module.css";
import Spacer from "@/components/std/Spacer";

type props = {
    name: string;
    onChange: (event: any) => void;
    type?: "tel" | "password" | "email";
    placeholder?: string;
    label?: string;
};

export default function Input(props: props) {
    return (
        <>
            {props.label && (
                <label className={styles.label} htmlFor={props.name}>
                    {props.label}
                </label>
            )}
            <Spacer top={1} />
            <input
                className={styles.input}
                id={props.name}
                name={props.name}
                type={props.type ? props.type : "text"}
                placeholder={props.placeholder}
                onChange={props.onChange}
            />
        </>
    );
}
