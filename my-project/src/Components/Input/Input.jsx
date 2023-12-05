import React, { useState } from "react";

export default function Input(props) {
    return(
        <div>
            <input
                placeholder={props.placeholder}
                className="bg-[#d9d9d9] w-72 h-12 rounded-lg p-4"
                value={props.value}
                onChange={props.onChange}
                type={props.type}
            />
        </div>
    );
}