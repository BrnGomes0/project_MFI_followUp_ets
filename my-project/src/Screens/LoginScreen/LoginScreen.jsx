import React from "react";
import Input from "../../Components/Input/input";
import { useState } from "react";


function LoginScreen () {
    const [password, setPassword] = useState('')
    const [visible, setVisible] = useState(false)

    return(
        <section className="flex justify-center items-center">
            <div className="w-[854px] h-[616px] bg-white flex flex-col justify-center items-center mt-16 drop-shadow-2xl gap-4 rounded-2xl">
                <div className="mb-20">
                    <h1 className="font-bold text-3xl">LOGIN</h1>
                </div>
                <Input
                    placeholder='EDV:'
                />
                <Input
                    placeholder='Password: '
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={visible ? "text" : "password"}
                />
            </div>
        </section>
    );
}

export default LoginScreen;