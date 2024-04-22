import { useState } from "react"
import { Font } from "./components/Font";

const fonts = ['font-asapCondensed', 'font-notoSerif', 'font-dancingScript', 'font-anton', 'font-coiny',
    'font-roboto', 'font-montserrat', 'font-lobster', 'font-playfairDisplay']

const ChangeFont = () => {
    const [text, setText] = useState("");

    const handleChangeText = (e: any) => {
        e.preventDefault();
        setText(e.target.value);
    }

    return (
        <div className="p-10 flex flex-col gap-4">
            <h2 className="text-[30px]">Change the font style as you like</h2>
            <textarea className="w-full rounded-lg p-4 text-black text-[16px]" placeholder='Message' rows={4} onChange={handleChangeText} />
            {fonts && fonts.length > 0 && fonts.map((value) =>
                <Font font={value} text={text} />
            )}
        </div>
    )
}

export default ChangeFont