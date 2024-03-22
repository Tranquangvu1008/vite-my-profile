import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Logo } from '../../components/SideBar/Logo'
import { MenuList } from '../../components/SideBar/MenuList'
import { ToggleThemeButton } from '../../components/SideBar/ToggleThemeButton'

const { Header, Sider } = Layout

function LayoutPage() {
  const [darkTheme, setDarkTheme] = useState(true)
  const [collapsed, setCollapsed] = useState(false)

  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
  }

  return (
    <Layout>
      <Sider collapsed={collapsed} collapsible trigger={null} theme={darkTheme ? 'dark' : 'light'} className='sideBar'>
        <Logo darkTheme={darkTheme} collapsed={collapsed} />
        <MenuList darkTheme={darkTheme} />
      </Sider>
      <Layout>
        <Header
          className={
            darkTheme
              ? 'p-0 flex justify-between items-center'
              : 'p-0 flex justify-between items-center bg-white'
          }
        >
          <button
            type='button'
            className={darkTheme ? 'ml-4 text-xl text-white' : 'ml-4 text-xl text-black'}
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </button>
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </Header>
        <div className={darkTheme ? 'overflow-y-auto h-screen-minus-64 bg-[#2c4b68] text-white' : 'overflow-y-auto h-screen-minus-64 bg-[#f7f3f3] text-black'}>
          <Outlet context={collapsed} />
        </div>
      </Layout>
    </Layout>
  )
}

export default LayoutPage
