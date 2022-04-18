import { buttons } from "../store";
import React from "react";

interface Props {
    setValue: (val: string) => void
}

const Buttons = ({ setValue }: Props) => <div className="calculator__buttons">
    {buttons.map(button => <button
            key={button.val}
            className={`${button.className} btn`}
            onClick={() => setValue(button.val)}
        >
            {button.val}
        </button>
    )}
</div>
export default Buttons