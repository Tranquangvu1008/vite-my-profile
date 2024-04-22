import { CopyOutlined } from "@ant-design/icons"

interface FontProps {
    text: string
    font: string
}

export const Font: React.FC<FontProps> = ({ text, font }) => {
    return (
        <div className="bg-[#e9ecef] rounded-lg cursor-pointer p-4 flex justify-between">
            <input className={`text-black w-full cursor-pointer ${font} text-[16px]`} disabled={true} value={text} />
            <CopyOutlined className="text-black cursor-pointer text-[16px]" />
        </div>)
}
