import React from "react";
import Input from "../../Components/Input/input";
import { useState } from "react";


function LoginScreen () {
    const [password, setPassword] = useState('')
    const [visible, setVisible] = useState(false)

    return(
        <section className="flex justify-center items-center pt-20">
            <div className="w-[800px] h-[530px] bg-white flex flex-col justify-center items-center mt-16 drop-shadow-2xl gap-6 rounded-2xl">
                <h1 className="font-bold text-xl">Login: </h1>
                <div className="flex flex-col gap-4">
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
                <a href="/register" className="" >Don't have a account? Create one</a>
                <a href="/upload" ><button className="font-bold w-[160px] h-[45px] bg-[#0000ff85] rounded-2xl text-white">Login</button></a>
            </div>
        </section>
    );
}

export default LoginScreen;