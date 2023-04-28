import React from 'react';
import './botonDarkMode.css';
import { useDarkModeContext } from '../../../context/DarkModeContext';

export const BotonDarkMode = () => {
    const {toggleDarkMode} = useDarkModeContext()
    return (
        <div className='theme-switch-wrapper'>
            <label className='theme-switch' htmlFor='checkbox'>
                <input type='checkbox' id="checkbox" onInput={() => toggleDarkMode()} />
                <div className='slider round'></div>
            </label>
        </div>
    );
}
