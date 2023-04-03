import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext()

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(false)
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState('Dark')
    const [themeSettings, setThemeSettings] = useState(false)

    const setMode = (e) => {
        setCurrentMode(e.target.value)

        localStorage.setItem('themeMode', e.target.value)
        setThemeSettings(false)
    }

    const setColor = (color) => {
        setCurrentColor(color)

        localStorage.setItem('themeColor', color)
        setThemeSettings(false)
    }

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true })
    }

    const handleClose = (closed) => {
        setIsClicked({ ...initialState, [closed]: false })
    }

    return (
        <StateContext.Provider
            value={{
                activeMenu,
                currentColor,
                currentMode,
                handleClick,
                handleClose,
                isClicked,
                screenSize,
                setActiveMenu,
                setColor,
                setIsClicked,
                setMode,
                setScreenSize,
                setThemeSettings,
                themeSettings,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
