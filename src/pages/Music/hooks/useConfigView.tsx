import { useEffect, useState } from "react";

export const useConfigView = () => {
    const [darkTheme, setDarkTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') === 'dark' ? true : false : true)
    const [collapsed, setCollapsed] = useState(localStorage.getItem('collapse') ? localStorage.getItem('collapse') === 'collapsed' ? true : false : true)

    useEffect(() => {
        localStorage.setItem('theme', darkTheme === true ? 'dark' : 'light');
    }, [darkTheme])

    useEffect(() => {
        localStorage.setItem('collapse', collapsed === true ? 'collapsed' : 'uncollapsed');
    }, [collapsed])

    const toggleTheme = () => {
        setDarkTheme(!darkTheme)
    }

    const collapsedMenu = () => {
        setCollapsed(!collapsed)
    }

    return { darkTheme, collapsed, toggleTheme, collapsedMenu }
}
