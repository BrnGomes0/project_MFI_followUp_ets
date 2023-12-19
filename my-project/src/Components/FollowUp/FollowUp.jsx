import React from "react";
import '../FollowUp/FollowUp.css'

function FollowUp(props){
    return(
        <section className="w-[1206px] h-[51px] rounded-md ">
            <div className="flex text-base font-normal gap-[119px] p-2">
                <div className="bg-yellow-400 rounded-2xl p-1 font-bold text-lg">
                    {props.orders}
                </div>
                <p>{props.email}</p>
                <p>{props.creation}</p>
                <p>{props.delivery}</p>
                <p>{props.fup}</p>
                <p>{props.supplier}</p>
            </div>
        </section>
    );
}
export default FollowUp;