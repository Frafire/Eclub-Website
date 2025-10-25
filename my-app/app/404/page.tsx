import Link from 'next/link';
import React from 'react';

export default function NotFound() {
    return (
<div className="flex min-h-screen items-center justify-center bg-eclub-blue font-sans">
        <main className="flex flex-col items-center justify-center gap-10">
            <div className="relative flex flex-col items-center w-full gap-8 px-8 md:px-18 xl:px-40 md:gap-16">
                <h1 className="text-9xl md:text-[300px] w-full select-none  text-center font-black  text-eclub-orange">
                    404 
                </h1>
                <p className="text-2xl font-medium break-words text-dull text-color-eclub-white dark:text-color-eclub-white">
                    Umhh forse ti sei perso... oppure è colpa nostra.
                </p>
                <Link href="/"  passHref className="rounded flex w-full md:w-fit group items-center gap-4 justify-center border-2 transition duration-300 ease-in-out text-color-eclub-white white:text-color-eclub-white border-eclub-orange font-semibold hover:bg-eclub-orange p-3 md:p-6 capitalize focus:outline-none hover:scale-105 active:scale-90 shadow-lg hover:shadow-xl ">
                        Torna alla Home Page
                </Link>
             </div>
        </main>
    </div>
    );
}

