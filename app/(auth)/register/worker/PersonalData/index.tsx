import Input from "@/components/std/Inputs/Input";
import Spacer from "@/components/std/Spacer";

export default function PersonalData() {
    return (
        <>
            <Input name="bruh" label="First name" onChange={() => console.log('bruh')} />
            <Spacer top="2"/>
            <Input name="bruh" label="Last name" onChange={() => console.log('bruh')} />
            <Spacer top="2"/>
            <Input name="bruh" label="Email" type="email" onChange={() => console.log('bruh')} />
        </>
    );
}
