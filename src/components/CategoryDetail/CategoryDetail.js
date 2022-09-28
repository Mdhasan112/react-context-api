import React, { useContext } from 'react';
import { categoryContext } from '../../App';

const CategoryDetail = () => {
    const category = useContext(categoryContext)
    return (
        <div>
            <h4>This is category detail has</h4>
            <p>this is new {category}</p>
        </div>
    );
};

export default CategoryDetail;