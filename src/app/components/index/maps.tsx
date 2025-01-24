import { Clipboard } from "flowbite-react"



export default function MapsSection() {

    return (
        <div className="pb-4 pt-4 bg-black/50">
            <div className={'text-[#ddd8b9] font-special text-4xl text-left ml-4 pb-16 pt-4'}>
                <p>
                    Location
                </p>
            </div>
            <div className="grid w-full max-w-[23rem] grid-cols-8 gap-2 ml-2">
                <input type="text"
                    className="col-span-6 block w-full bg-black/50 text-[#ddd8b9] pr-2 pl-2"
                    value="51.0132329, 11.070978892"
                    disabled
                    readOnly
                />
                <Clipboard valueToCopy="51.013232904247175, 11.070978892006194" label="Copy" className="text-[#ddd8b9]" />
            </div>
            <div className="pl-2 pt-4 pr-2 pb-4">
            <img className="object-contain md:object-cover" src="./cover41.png" alt="Logo"></img>
            </div>
        </div>
    )
}