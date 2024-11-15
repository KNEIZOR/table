import React from "react";
import differencePercent from "../hooks/differencePercent";

const Revenue = ({ value }) => {
    value.difference = differencePercent(value.data[0], value.data[1]);

    return (
        <div className="revenue">
            <div className="indecator-left gray">{value.name}</div>
            <div className="indecator blue">{value.data[1]}</div>
            {value.difference < 0 ? (
                <div className="indecator red">
                    {value.data[0]} <span>{value.difference}%</span>
                </div>
            ) : (
                <div className="indecator green">
                    {value.data[0]} <span>{value.difference}%</span>
                </div>
            )}
            <div className="indecator gray">{value.week}</div>
        </div>
    );
};

export default Revenue;
