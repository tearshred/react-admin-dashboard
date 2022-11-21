import { findTargetShapeElement } from '@syncfusion/ej2/pdfviewer';
import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);

    const setColor = (color) => {
        setCurrentColor(color);

        localStorage.setItem('colorMode', color);
        // setThemeSettings(false);
    }

    const setMode = (e) => {
        setCurrentMode(e.target.value);

        localStorage.setItem('themeMode', e.target.value);
    }

    const handleClick = (clicked) => {
        // Open up the object and spread the initial state in order to determine which value
        // within the object has been clicked and change that value
        // This is because the setIsClicked object cannot be overriden with a string
        setIsClicked({ ...initialState, [clicked]:true});
    }

    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                currentColor,
                currentMode,
                themeSettings,
                setThemeSettings,
                setMode,
                setColor
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);