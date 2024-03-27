import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Logo } from '../../components/SideBar/Logo'
import { MenuList } from '../../components/SideBar/MenuList'
import { ToggleThemeButton } from '../../components/SideBar/ToggleThemeButton'

const { Header, Sider } = Layout

function LayoutPage() {
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

  return (
    <Layout>
      <Sider collapsed={collapsed} collapsible trigger={null} theme={darkTheme ? 'dark' : 'light'} className='text-white h-vh '>
        <Logo darkTheme={darkTheme} collapsed={collapsed} />
        <MenuList darkTheme={darkTheme} />
      </Sider>
      <Layout>
        <Header
          className={`p-0 flex justify-between items-center ${!darkTheme && 'bg-white'}`}
        >
          <button
            type='button'
            className={`ml-4 text-xl ${darkTheme ? ' text-white' : 'text-black'}`}
            onClick={collapsedMenu}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </button>
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </Header>
        <div className={`overflow-y-auto h-vh-minus-64 ${darkTheme ? ' bg-[#2c4b68] text-white' : 'bg-[#f7f3f3] text-black'}`}>
          <Outlet context={{ collapsed, darkTheme }} />
        </div>
      </Layout>
    </Layout>
  )
}

export default LayoutPage
