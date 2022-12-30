import Button from "@/components/std/Button";
import Spacer from "@/components/std/Spacer";

export default function UserType(props: {
    next_step: (user_type: string) => void;
}) {
    return (
        <>
            <h2>Select user type</h2>
            <Spacer top="2" />
            <Button expand onClick={() => props.next_step("worker")}>
                Worker
            </Button>
            <Spacer top="1" />
            <Button
                secondary
                expand
                onClick={() => props.next_step("employer")}
            >
                Employer
            </Button>
        </>
    );
}
