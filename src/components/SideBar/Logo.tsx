import { FireOutlined } from '@ant-design/icons'

interface LogoProps {
  darkTheme: boolean
}

export const Logo = ({ darkTheme }: LogoProps) => {
  return (
    <div className={darkTheme ? 'flex items-center justify-center p-[10px] mb-1 text-white' : 'flex items-center justify-center p-[10px] mb-1 text-black'}>
      <div className='logo-icon'>
        <FireOutlined />
      </div>
    </div>
  )
}
