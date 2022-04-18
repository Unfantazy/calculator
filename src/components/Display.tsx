import React from "react";

interface Props {
    currentValue: string
}

const Display = ({ currentValue }: Props) =>  <input type="text" className="calculator__text" value={currentValue || 0} />

export default Display