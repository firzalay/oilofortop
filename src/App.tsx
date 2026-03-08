import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { images } from "./assets/images";
import Draggable from "react-draggable";

function App() {
    const [open, setOpen] = useState(false);
    const draggableRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpen(!open);
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            window.removeEventListener("keydown", handleEscape);
        };
    }, [open]);

    return (
        <>
            <div className="bg-[#f7f4f4]">
                <button className="absolute outline-none" onClick={() => setOpen(!open)}>
                    <img
                        src={images.escImage}
                        alt=""
                        className="w-35 h-35 translate-y-2 transition delay-150 duration-300 cursor-pointer hover:translate-y-0 lg:invisible"
                    />
                </button>

                <section className="min-h-screen container mx-auto px-8 flex justify-center items-center flex-col">
                    <nav className="fixed top-0">
                        <ul className="flex justify-center items-center gap-5 font-sans-serif p-4 invisible lg:visible lg:text-lg">
                            <Link to="/">home_</Link> 
                            <Link to="about">about_</Link> 
                            <Link to="portofolio">portofolio_</Link>
                            <Link to="contactme">contact me_</Link>
                        </ul>
                    </nav>

                    <Draggable nodeRef={draggableRef}>
                        <div ref={draggableRef}>
                            <img className="h-40 w-40 cursor-grabbing" draggable={false} src={images.img5} alt="" />
                        </div>
                    </Draggable>

                    <p className="font-serif italic text-3xl text-center lg:text-4xl">
                        <span className="font-sans-serif">Hi!</span> I'm Fatahillah Firzalay
                    </p>
                    <p className="mt-2 font-sans-serif underline lg:text-lg">web dev</p>
                    <p className="text-sm mt-2 font-light font-sans-serif tracking-tight text-center lg:text-lg">
                        A <span className="bg-[#3167ce] text-white">professionally</span> lazy person, I build things
                        fast so I can enjoy being lazy <span className="bg-[#3167ce] text-white">person</span> later.
                    </p>

                    <div className="mt-4 flex gap-2">
                        <img src={images.discordLogo} alt="" className="w-6 h-6 cursor-pointer" />
                        <img src={images.instagramLogo} alt="" className="w-6 h-6 cursor-pointer" />
                        <img src={images.musicLogo} alt="" className="w-6 h-6 cursor-pointer" />
                    </div>

                    <div
                        className={`bg-[#3167ce] font-sans-serif min-h-screen container mx-auto absolute ${open ? "opacity-100 visible" : "invisible"}`}
                        onClick={() => setOpen(!open)}
                    >
                        <p className="text-white text-center text-2xl mt-5">----- MENU -----</p>

                        <div className="text-center">
                            <h1 className="text-white text-6xl mt-8 hover:bg-white hover:text-[#3167ce] hover:cursor-pointer">
                                ABOUT ME
                            </h1>
                            <h1 className="text-white text-6xl mt-8 hover:bg-white hover:text-[#3167ce] hover:cursor-pointer">
                                PORTOFOLIO
                            </h1>
                            <h1 className="text-white text-6xl mt-8 hover:bg-white hover:text-[#3167ce] hover:cursor-pointer">
                                CONTACT ME
                            </h1>
                            <p className="text-white mt-8">Press esc key to continue...</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default App;
