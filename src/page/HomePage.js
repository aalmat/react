import React, { useState } from 'react';
import Combo from '../combo/Combo';
import './HomePage.css';

const HomePage = () => {
    const [combos, setCombos] = useState([
        { comboId: 1, title: 'Combo 1', price: 1000 },
        { comboId: 2, title: 'Combo 2', price: 1100 },
        { comboId: 3, title: 'Combo 3', price: 1200 },
    ]);

    const handleDeleteCombo = (comboId) => {
        setCombos(combos => combos.filter(combos => combos.comboId !== comboId));
    };

    return (
        <div className="home-page">
            <h1>Welcome!</h1>
            {combos.map(combo => (
                <Combo
                    key={combo.comboId}
                    comboId={combo.comboId}
                    price={combo.price}
                    title={combo.title}
                    onDelete={handleDeleteCombo}
                />
            ))}
        </div>
    );
};

export default React.memo(HomePage);
