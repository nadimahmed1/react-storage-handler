import React from 'react';
import { divider } from '../../logic/logic';
import { add, multiply } from '../../utilities/calculate';

const Shows = () => {
    const first = 15;
    const second = 20;
    const result = multiply(first, second);

    const sum = add(first, second);

    const third = 89;
    const fourth = 20;
    const dividence = divider(third, fourth)
    return (
        <div>
            <h3>This is Shoes Compo</h3>
            <p>Result: {result}</p>
            <p>Sum: {sum}</p>
            <p>Divider: {dividence}</p>
        </div>
    );
};

export default Shows;