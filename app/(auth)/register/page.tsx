"use client";
import step_controller from "./step_controller";

// std imports
import Container from "@/components/std/Container";
import Card from "@/components/Card";

// custom conponents
import IconButton from "@/components/IconButton";
import UserType from "./shared/UserType";
import PersonalData from "./worker/PersonalData";
import OrgData from "./employer/OrgData";

import styles from "./register.module.css";

export default function RegisterPage() {
    const { step, next_step, prev_step } = step_controller();

    let page;
    if (step.type === "employer") {
        if (step.step === 1) page = <OrgData />;
        //if (step.step === 2) page = <PersonalData prev_step={prev_step} />
    } else if (step.type === "worker") {
        if (step.step === 1) page = <PersonalData />;
        //if (step.step === 2) page = <PersonalData prev_step={prev_step} />
    } else {
        if (step.step === 0) page = <UserType next_step={next_step} />;
        //if (step.step === 3) page = <PersonalData prev_step={prev_step} />
    }

    return (
        <Container>
            <div className={styles.auth}>
                {step.step != 0 && (
                    <IconButton icon="back" onClick={prev_step} />
                )}
                <Card>{page}</Card>
            </div>
        </Container>
    );
}
