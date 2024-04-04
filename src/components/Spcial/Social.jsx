import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Social = ({has}) => {
    const receiveGift = useContext(AssetContext);
    return (
        <div>
            <h2>special</h2>
            <p>has: {has}</p>
            <p>also has : {receiveGift}</p>
        </div>
    );
};

export default Social;