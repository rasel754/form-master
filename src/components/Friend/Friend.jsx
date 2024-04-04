import {  useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Friend = () => {
    const friendGift = useContext(AssetContext);
    return (
        <div>
            <h2>friend</h2>
            <h3>friend has : {friendGift}</h3>
        </div>
    );
};

export default Friend;