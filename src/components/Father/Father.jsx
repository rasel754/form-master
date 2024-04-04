import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";

const Father = ({has}) => {
    return (
        <div>
            <h2>father</h2>
            <section className="flex">
                <Myself has={has}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;