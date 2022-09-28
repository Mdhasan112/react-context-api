import React, { useContext, useState } from 'react';
import { categoryContext } from '../../App';

const Header = () => {
    const [category, setCategory]= useContext(categoryContext)
    return (
        <div>
            <h2>This is head: {category}</h2>
            <button onClick={() => setCategory("Mobile")}>Mobile</button>
            <button onClick={() => setCategory("Laptop")}>Laptop</button>
            <button onClick={() => setCategory("Camera")}>Camera</button>
        </div>
    );
};

export default Header;