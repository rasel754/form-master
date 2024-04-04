import Social from "../Spcial/Social";

const Myself = ({has}) => {
    return (
        <div>
            <h2>Myself</h2>
            <section className="flex">
                <Social has={has}></Social>
            </section>
        </div>
    );
};

export default Myself;