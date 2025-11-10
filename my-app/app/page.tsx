import React from 'react';

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center"
        style={{ backgroundImage: "url('/sfondo.jpg')" }}
      >
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
          Benvenuto in <span className="text-orange-500">E</span>-Club
        </h1>
        <p className="text-lg mb-6 drop-shadow-md">
          Unisciti a noi per esperienze uniche e coinvolgenti!
        </p>
        <a
          href="#join"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Unisciti
        </a>
      </section>

      {/* About Section */}
      <section
        id="join"
        className="flex flex-col md:flex-row items-center justify-center py-20 px-6 bg-gray-50"
      >
        <img
          src="/foto-club.jpg"
          alt="Foto del Club"
          className="w-full md:w-1/2 max-w-lg rounded-lg shadow-lg"
        />
        <div className="mt-8 md:mt-0 md:ml-10 max-w-lg">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Chi siamo</h2>
          <p className="text-gray-600 leading-relaxed">
            E-Club è una comunità di persone appassionate di innovazione, tecnologia e
            collaborazione. Organizziamo eventi, workshop e progetti per connettere
            studenti e professionisti in un ambiente creativo e dinamico.
          </p>
        </div>
      </section>
    </main>
  );
}
