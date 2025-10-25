import Link from 'next/link';
import React from 'react';

export default function About() {
    return (
<div className="flex min-h-screen items-center justify-center bg-eclub-blue font-sans">
        <main className="flex flex-col items-center justify-center gap-10">
            <div className="relative flex flex-col items-center w-full gap-8 px-8 md:px-18 xl:px-40 md:gap-16">
                <h1 className="text-9xl md:text-[300px] w-full select-none  text-center font-black  text-orange-400">
                    404 
                </h1>
                <p className="text-2xl font-medium break-words text-dull text-zinc-900 dark:text-zinc-900">
                    Umhh forse ti sei perso... oppure è colpa nostra.
                </p>
                <Link href="/" passHref className="rounded flex w-full md:w-fit group items-center gap-4 justify-center border-2 text-zinc-900 dark:text-zinc-900 border-orange-500 font-semibold hover:bg-orange-500 p-3 md:p-6 capitalize focus:outline-none hover:scale-105 active:scale-90 shadow-lg hover:shadow-xl ">
                        Torna alla Home Page
                </Link>
             </div>
        </main>
    </div>
    );
}

