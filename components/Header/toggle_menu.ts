// simple hook for toggling menu
import { useState } from 'react';

type toggle = {
    is_open: boolean;
    toggle: () => void;
};

export default function toggle_menu(default_value: boolean): toggle {
    const [is_open, flip] = useState(default_value);

    function handle_click(): void {
        flip((prev: boolean) => !prev);
        is_open
            ? console.log('[Mobile Menu]: closed')
            : console.log('[Mobile Menu]: opened');
    }

    return {
        is_open,
        toggle: handle_click,
    };
}
