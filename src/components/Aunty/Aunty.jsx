import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunty = () => {
    const [money , setMOney] = useContext(MoneyContext)
    return (
        <div>
            <h2>aunty</h2>
            <section className="flex">
                <Cousin name={'jannatul'}></Cousin>
                <Cousin name={'sumana'}></Cousin>
            </section>
            <h3>money :{money} </h3>
            <button onClick={()=>setMOney(money+1000)}>add 1000 tk</button>
        </div>
    );
};

export default Aunty;