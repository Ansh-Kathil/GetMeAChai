import React from 'react'
import Link from 'next/link'


const About = () => {
return (
    <div>
        {/* about page on get me a chai  */}
        <div className="bg-gradient-to-br from-purple-700 via-pink-500 to-blue-500 h-96 flex flex-col justify-center items-center text-white shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
            <h1 className="text-6xl font-extrabold drop-shadow-lg tracking-tight mb-4 animate-fade-in">
                Get Me a Chai
            </h1>
            <span className="text-xl font-medium italic opacity-80 animate-fade-in delay-200">
                Fueling dreams, one chai at a time
            </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 my-20 px-4">
            <h1 className="text-4xl font-bold text-purple-700 mb-2 animate-fade-in">
                About Get Me a Chai
            </h1>
            <div className="bg-white/80 rounded-xl shadow-md p-8 max-w-2xl text-center space-y-6 border border-purple-100 animate-fade-in delay-100">
                <p className="text-lg text-gray-700">
                    <span className="font-semibold text-purple-600">Get Me a Chai</span> is a crowd funding platform designed to help creators and individuals raise funds for their projects and needs. Whether youre an artist, developer, or anyone with a passion project, you can use our platform to connect with supporters who want to help you achieve your goals.
                </p>
                <p className="text-lg text-gray-700">
                    Our mission is to empower creators by providing them with the tools and resources they need to succeed. We believe that everyone deserves the chance to bring their ideas to life, and were here to make that happen.
                </p>
                <p className="text-lg text-gray-700">
                    Join us today and start your journey towards making your dreams a reality. Whether youre looking to fund a creative project, support a cause, or simply enjoy a cup of chai, Get Me a Chai is here for you.
                </p>
            </div>
            <Link
                href="/"
                className="mt-6 inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
            >
                Get Started
            </Link>
        </div>

    </div>
)
}

export default About

export const metadata = {
  title: "About - Get Me a Chai",
  description: 'Learn more about Get Me a Chai',
}
