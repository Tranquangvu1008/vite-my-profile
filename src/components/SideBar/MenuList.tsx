import { BarsOutlined, ContactsOutlined, FontSizeOutlined, FormOutlined, HomeOutlined, QuestionCircleOutlined, SpotifyOutlined } from '@ant-design/icons'
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
  getItem('Music', 'music', <SpotifyOutlined />, undefined, '/music'),
  getItem('Task', 'subTasks', <BarsOutlined />, [
    getItem('Question Board', 'questionBoard', <QuestionCircleOutlined />, undefined, '/questionBoard'),
    getItem('React Hook Form', 'reactHookForm', <FormOutlined />, undefined, '/reactHookForm'),
    getItem('Change Font', 'changeFont', <FontSizeOutlined />, undefined, '/changeFont')
  ]),
  getItem('Contact', 'contact', <ContactsOutlined />, undefined, '/contact')
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
