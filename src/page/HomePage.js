import React, { useState, useMemo } from 'react';
import Combo from '../combo/Combo';
import './HomePage.css';

const HomePage = () => {
    const [combos, setCombos] = useState([
        { comboId: 1, title: 'Combo 1' },
        { comboId: 2, title: 'Combo 2' },
    ]);

    const handleDeleteCombo = (comboId) => {
        setCombos(combos.filter(combo => combo.comboId !== comboId));
    };

    const memoizedCombos = useMemo(() => combos, []);

    return (
        <div className="home-page">
            <h1>Welcome to the Home Page</h1>
            {memoizedCombos.map(combo => (
                <Combo
                    key={combo.comboId}
                    postId={combo.comboId}
                    title={combo.title}
                    onDelete={handleDeleteCombo}
                />
            ))}
        </div>
    );
};

export default React.memo(HomePage);
