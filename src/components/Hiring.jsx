import React from "react";
import Samecomo from "./Samecomo";
import orangemanimg from '../imges/orangemanimg1.png'

const Hiring = () => {
    return (
        <>
            <Samecomo 
                title="We Are"
                h="Iconic Coders"
                para="Lets Gets Started with icode"
                btn="Contact"
                img={orangemanimg}
                go="/contact"
            />
            
        </>
    )
}

export default Hiring;
