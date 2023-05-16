import { forwardRef } from "react";


function FocusableComponent(props, ref) {
    return (
        <input
            type="text"
            ref={ref}
            style={{
                border: "none",
                outline: "none",
                color: "transparent",
                cursor: "default",
                background: "transparent",
                padding: 0,
                width: 0,
                height: 0
            }}
        />
    );
}

export default forwardRef(FocusableComponent);
