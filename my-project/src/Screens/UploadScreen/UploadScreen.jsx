import React, { useState } from "react";
import Input from "../../Components/Input/input";

function upload(){

    const [file, setFile] = useState('')

    const handleFile = (event) => {
        setFile(event.target.files[0]) 
    }

    return(
        <section className="flex justify-center items-center pt-20">
            <div className="w-[800px] h-[530px] bg-white flex flex-col justify-center items-center mt-16 drop-shadow-2xl gap-6 rounded-2xl">
                <h1 className="font-bold text-xl">Choose your file: </h1>
                <div>
                    <input
                        type="file"
                        className="bg-[#d9d9d9] w-96 h-16 rounded -lg text-black p-[10px] cursor-pointer inline-block"
                        name="file"
                        onChange={() => handleFile()}
                    />
                </div>
            </div>
        </section>
    );
}

export default upload;