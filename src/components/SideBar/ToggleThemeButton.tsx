import { MoonOutlined, SunOutlined } from '@ant-design/icons'
import { Button } from 'antd'

interface ToggleThemeButtonProps {
  darkTheme: boolean
  toggleTheme: () => void
}

export const ToggleThemeButton = ({ darkTheme, toggleTheme }: ToggleThemeButtonProps) => {
  return (
    <div>
      <Button
        onClick={toggleTheme}
        className={
          darkTheme
            ? 'flex items-center mr-4 bg-white dark:bg-[#001529] text-white'
            : 'flex items-center mr-4 bg-[#001529] text-white '
        }
      >
        {darkTheme ? <SunOutlined /> : <MoonOutlined />}
      </Button>
    </div>
  )
}
