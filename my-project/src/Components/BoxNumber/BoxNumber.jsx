import React, { useState } from "react";
import '../BoxNumber/BoxNumber.css'

function BoxNumber(props){
    
    const [withoutFollowUp, setWithoutFollowUp] = useState(props.withoutFollowUp)
    const [waiting, setWaiting] = useState(props.waiting)
    const [confirmedDelivery, setConfirmedDelivery] = useState(props.confirmedDelivery)
    const [dueDelivery, setDuedelivery] = useState(props.dueDelivery)
    const [number, setNumber] = useState(100)

    return(
        <div>
            {
                withoutFollowUp ? <>
                    <h1 className="font-bold text-center">Without Follow-Up</h1>
                    <div className="w-[200px] h-[140px] rounded-2xl bg-[#D9D9D9] text-blue-900 font-bold text-4xl flex justify-center items-center back">
                        {number}
                    </div>
                </> : <></> ||
                waiting ? <>
                    <h1 className="font-bold text-center">Waiting Term</h1>
                    <div className="w-[200px] h-[140px] rounded-2xl bg-[#D9D9D9] text-yellow-300 text-4xl flex justify-center items-center font-bold back">
                        {number}
                    </div>
                </> : <></> ||
                confirmedDelivery ? <>
                <h1 className="font-bold text-center">Confirm Delivery</h1>
                <div className="w-[200px] h-[140px] rounded-2xl bg-[#D9D9D9] text-green-700 text-4xl flex justify-center items-center font-bold back">
                        {number}
                </div>
                </> : <></> ||
                dueDelivery ? <>
                <h1 className="font-bold text-center">Due Delivery</h1>
                <div className="w-[200px] h-[140px] rounded-2xl bg-[#D9D9D9] text-red-800 text-4xl flex justify-center items-center font-bold back">
                        {number}
                </div>
                </> : <></>
            }
        </div>
    );
}

export default BoxNumber;