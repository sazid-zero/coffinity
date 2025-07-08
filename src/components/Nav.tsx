import {Button} from "./Button.tsx";

export function Nav(){

    const nav = ["Home", "Menu", "About", "Featured", "Contact" ]

    return (
        <div className="fixed w-full h-18 backdrop-blur-xs flex items-center justify-between z-50 p-8">
            <div  className="flex items-center space-x-0">
                <h1 className="text-xl font-bold text-transparent bg-gradient-to-r from-[#EA2F14] via-[#E6521F] to-[#FFD63A] bg-clip-text">Coffinity</h1>
                <img src="/icons/coffee.png" className="h-7 w-7"/>

            </div>

            <div className="flex items-center justify-center space-x-6">
                {nav.map((item) => (
                    <div
                        key={item}
                        className="text-sm font-semibold text-white ">
                        <h1> {item} </h1>
                    </div>


                ))
                }
                <Button title={"Sign Up"} width={"112px"} height={"40px"}/>
            </div>

        </div>
    )
}