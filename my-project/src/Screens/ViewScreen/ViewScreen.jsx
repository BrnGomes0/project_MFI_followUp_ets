import React from "react";
import BoxNumber from "../../Components/BoxNumber/BoxNumber";
import FollowUp from "../../Components/FollowUp/FollowUp";

function ViewScreen(){
    return(
        <section className="flex flex-col justify-center items-center pt-32 pb-10 gap-4">
            <div className="flex gap-28">
                <BoxNumber
                    withoutFollowUp='true'
                />
                <BoxNumber
                    waiting='true'
                />
                <BoxNumber
                    confirmedDelivery='true'
                />
                <BoxNumber
                    dueDelivery='true'
                />
            </div>
            <div className="w-[1296px] h-[560px] bg-white flex flex-col justify-center items-center mt-16 drop-shadow-2xl gap-6 rounded-2xl">
                <div className="font-bold text-[#939393] flex gap-40">
                    <h1>Orders</h1>
                    <h1>E-mail</h1>
                    <h1>Creation</h1>
                    <h1>Delivery</h1>
                    <h1>Fup</h1>
                    <h1>Supplier</h1>
                </div>
                <div className="">
                    <FollowUp/>
                </div>
            </div>
        </section>
    );
}

export default ViewScreen;