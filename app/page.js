import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh] px-5 md:px-0 text-xs md:text-base ">
        <div className="font-bold flex gap-2 md:gap-20 justify-center items-center text-3xl md:text-5xl">Buy Me a Chai <span><img src="/tea.gif" width={88} alt="" /></span> </div>
        <p className="text-center md:text-left"> Crowd funding platform for creators. </p>

         <p className="text-center md:text-left"> Get funded by your fans and followers . Start now!</p>

        <div>
          <Link href="/login">

            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Start Here</button>
          </Link>
          <Link href="/about">

            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Read More</button>
          </Link>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>


      <div className="text-white container mx-auto pb-32 pt-14 px-10">
        <h2 className="text-3xl font-bold text-center mb-14 ">Your Fans can buy you a Chai </h2>
        <div className="flex gap-5 justify-around ">
          <div className="item flex flex-col justify-center items-center space-y-3">
            <img className="bg-slate-400 rounded-full  p-2" width={88} src="/man.gif" alt="" />
            <p className="font-bold text-center">Fans want to help </p>
            <p className="text-center">Your fans are here for you to help</p>
          </div>
          <div className="item flex flex-col justify-center items-center space-y-3">
            <img className="bg-slate-400 rounded-full  p-2" width={88} src="/coin.gif" alt="" />
            <p className="font-bold text-center">Fans want to help </p>
            <p className="text-center">Your fans are here for you to help</p>
          </div>
          <div className="item flex flex-col justify-center items-center space-y-3">
            <img className="bg-slate-400 rounded-full  p-2" width={88} src="/group.gif" alt="" />
            <p className="font-bold text-center">Fans want to help </p>
            <p className="text-center">Your fans are here for you to help</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14 ">Learn more about us </h2>
       
        <div className="w-full max-w-2xl aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/jElm62AkMzc?si=nLnW9MUx-yN9pvtf"
            title="YouTube video player"
            frameBorder="0 "
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>


    </>
  );
}
