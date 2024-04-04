import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'
export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000);

const Grandpa = () => {
    const [money , setMOney] =useState(1000);
    const has ='diamond';
    return (
        <div className="Grandpa ">
            <h2>Grandpa</h2>
            <h6>net money : {money}</h6>
            <MoneyContext.Provider value={[money , setMOney]}>
            <AssetContext.Provider value="gold">
            <section className="flex">
            <Father has={has}></Father>
            <Uncle></Uncle>
            <Aunty></Aunty>
            </section>
            </AssetContext.Provider>
            </MoneyContext.Provider>
           
        </div>
    );
};

export default Grandpa;