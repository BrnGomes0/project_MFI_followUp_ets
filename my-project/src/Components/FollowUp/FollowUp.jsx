import React from "react";
import '../FollowUp/FollowUp.css'

function FollowUp(props){
    return(
        <section className="w-[1206px] h-[51px] rounded-md">
            <div className="flex">
                <p>{props.orders}</p>
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