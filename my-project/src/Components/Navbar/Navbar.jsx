import React from "react";

import Line from "../Line/Line";
import LogoAll from "../LogoAll/LogoAll";
import NavbarContext from "../NavbarContext/NavbarContext";

function Navbar () {
    return(
        <section className="shadow-md">
                <Line/>
                <div className="p-4 flex justify-between items-center">
                    <LogoAll/>
                    <NavbarContext/>
                    <a href="/"><img src="src/assets/imgs/login.svg" alt="" className="w-8"/></a>
                </div>
        </section>
    );
}
export default Navbar;