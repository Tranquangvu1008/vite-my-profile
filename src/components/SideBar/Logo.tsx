import { CodeOutlined } from '@ant-design/icons'

interface LogoProps {
  darkTheme: boolean
  collapsed: boolean
}

export const Logo = ({ darkTheme, collapsed }: LogoProps) => {
  return (
    <div className={`flex items-center justify-center mb-1 ${darkTheme ? 'text-white' : 'text-black'} `}>
      <div className={`flex h-[64px] items-center ${!collapsed && 'mx-2 gap-2'}`}>
        <CodeOutlined className={collapsed ? 'text-2xl' : 'text-lg'} />
        <strong className={collapsed ? 'hidden' : ''}>DEVUcoding</strong>
      </div>
    </div>
  )
}
