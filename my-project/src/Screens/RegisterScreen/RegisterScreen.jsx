import React from "react";
import Input from "../../Components/Input/input";
import { useState } from "react";


function RegisterScreen () {
    const [password, setPassword] = useState('')
    const [visible, setVisible] = useState(false)

    return(
        <section className="flex justify-center items-center pt-20">
            <div className="w-[800px] h-[530px] bg-white flex flex-col justify-center items-center mt-16 drop-shadow-2xl gap-6 rounded-2xl">
                <h1 className="font-bold text-xl">Register: </h1>
                <div className="flex flex-col gap-4">
                    <Input
                        placeholder='EDV:'
                        type='number'
                    />
                    <Input
                        placeholder='Password: '
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={visible ? "text" : "password"}
                    />
                    <Input
                        placeholder='Confirm password: '
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={visible ? "text" : "password"}
                    />
                </div>
                <a href="/login" className="" >Have a account? Login</a>
                <a href="/upload" ><button className="font-bold w-[160px] h-[45px] bg-[#0000ff85] rounded-2xl text-white">Register</button></a>
            </div>
        </section>
    );
}

export default RegisterScreen;