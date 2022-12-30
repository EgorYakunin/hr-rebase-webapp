import { useState } from "react";

export default function step_controller() {
    const [step, set_step] = useState({
        type: "",
        step: 0,
    });

    function next_step(type?: string) {
        set_step(prev_step => {
            if (type)
                return {
                    type: type,
                    step: prev_step.step + 1,
                };
            else
                return {
                    ...prev_step,
                    step: prev_step.step + 1,
                };
        });

        console.log(step);
    }

    function prev_step() {
        set_step(prev_step => {
            // reset registration user type if user gos back to step 0
            const type = prev_step.step === 1 ? "" : prev_step.type;

            return {
                type,
                step: prev_step.step - 1,
            };
        });

        console.log(step);
    }

    return {
        step,
        next_step,
        prev_step,
    };
}
