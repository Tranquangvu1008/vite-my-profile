import { BarsOutlined, HomeOutlined, InfoCircleOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { Menu, MenuProps } from 'antd'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  path?: string,
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label: path ? <Link to={path}>{label}</Link> : label,
    type
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('Home', 'home', <HomeOutlined />, undefined, '/'),
  getItem('Task', 'subTasks', <BarsOutlined />, [getItem('Question Board', 'questionBoard', <QuestionCircleOutlined />, undefined, '/questionboard')]),
  getItem('About', 'about', <InfoCircleOutlined />, undefined, '/about')
]

interface MenuListProps {
  darkTheme: boolean
}

export const MenuList = ({ darkTheme }: MenuListProps) => {
  const [selectedKey] = useState(useLocation().pathname.substring(1))

  return (
    <Menu
      items={items}
      theme={darkTheme ? 'dark' : 'light'}
      mode='inline'
      className='menu-bar'
      defaultSelectedKeys={[selectedKey === '' ? 'home' : selectedKey]}
    />
  )
}
