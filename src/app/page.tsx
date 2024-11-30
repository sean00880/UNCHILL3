"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const HomePage: React.FC = () => {
  useEffect(() => {
    // Smooth scroll effect
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href")?.slice(1);
        const targetElement = document.getElementById(targetId as string);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
  id="hero"
  className="flex flex-col items-center justify-center min-h-screen relative bg-gradient-to-br from-blue-400 via-blue-600 to-blue-300"
>
  <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20 bg-fixed" style={{ backgroundImage: "url('/images/overlay.jpg')" }}></div>
  <div className="z-10 text-center flex flex-col items-center p-6">
  <div className="w-[20%] lg:w-[30%] relative">
              <Image
                src="/images/logo.png"
                alt="UNCHILL Character"
                width={400}
                height={400}
                className="rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
              </div>
    <h1 className=" text-6xl font-extrabold mb-4 text-blue-200 glitch-effect">
      $ <span className='text-white italic text-6xl'>UNCHILL </span>
    </h1>
    <p className="text-lg mb-6 text-white italic max-w-3xl">
      Witness the rise of UNCHILL, the wild, untamed sibling of CHILLGUY. A
      masterpiece from the legendary artist, here to flip the script and
      dominate the Ethereum memeverse.
    </p>
    <div className="bg-blue-500 text-white px-6 py-3 rounded-md mb-4 hover:bg-[maroon] cursor-pointer">
      <span>Contract: 0x964705b3cf61f42fb6849656064729d9906f50d6</span>
    </div>
    <div className="flex space-x-4 mt-4">
      <Link
        href="https://t.me/UNCHILLCTO"
        className="transition-transform hover:scale-125"
      >
        <Image
          src="/icons/telegram.png"
          width={50}
          height={50}
          alt="Telegram icon"
          className="rounded-full border-2 border-blue-300"
        />
      </Link>
      <Link
        href="https://x.com/unchillyourself"
        className="transition-transform hover:scale-125"
      >
        <Image
          src="/icons/x.png"
          width={50}
          height={50}
          alt="X (Twitter) icon"
          className="rounded-full border-2 border-blue-300"
        />
      </Link>
      <Link
        href="https://www.dextools.io/app/en/ether/pair-explorer/0xee9cf30ff03689a691c3dbc535b3fbf35e35e370?t=1732939219455"
        className="transition-transform hover:scale-125"
      >
        <Image
          src="/icons/dextools.png"
          width={50}
          height={50}
          alt="DEXTools icon"
          className="rounded-full border-2 border-blue-300"
        />
      </Link>
    </div>
  </div>
  <div className="absolute bottom-10">
    <a
      href="#about"
      className="text-white font-bold hover:underline text-lg"
    >
      Scroll Down
    </a>
  </div>
</section>



      {/* About Section */}
      <section
        id="about"
        className="py-8 flex flex-col text-center bg-[#1a1a1a] text-white"
      >
        <h2 className="text-4xl font-bold mb-6">Who is UNCHILL?</h2>
        <p className="max-w-4xl mx-auto text-lg text-white mb-6">
          Imagine CHILLGUY’s unpredictable, wild sibling who just crashed the
          Ethereum meme party. That’s UNCHILL—an unstoppable force of chaos,
          creativity, and unfiltered energy, breaking boundaries in the
          meme-verse.
        </p>
        <div className="relative mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="flex flex-col items-center text-center lg:text-left lg:w-1/2">
              <h3 className="text-3xl font-semibold text-blue-400 mb-4">
                A Rebel with a Meme Mission
              </h3>
              <p className="text-white text-lg">
                UNCHILL isn&apos;t just about memes; it’s a philosophy. Born from the
                legendary artist behind CHILLGUY, UNCHILL takes a stand against
                the ordinary, the dull, and the predictable. It&apos;s raw. It’s
                edgy. And it knows no limits.
              </p>
              <p className="text-white mt-2 text-lg">
                Backed by a community of meme warriors and crypto dreamers,
                UNCHILL is here to disrupt Ethereum with humor so bold it could
                melt your MetaMask wallet.
              </p>
            </div>
            <div className="lg:w-[40%] roundd-sm relative glass ">
              <Image
                src="/images/meme1.png"
                alt="UNCHILL Character"
                width={700}
                height={700}
                className=" shadow-lg transform hover:scale-105 transition-transform rounded-sm duration-300"
              />
              <div className="absolute top-10 left-10 bg-blue-400 w-4 h-4 rounded-full animate-ping"></div>
              <div className="absolute bottom-0 right-0 bg-blue-400 w-16 h-16 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section
  id="tokenomics"
  className="py-16 px-6 flex flex-col bg-gradient-to-r from-[#61779e] to-[#1b57c7] text-gray-200 relative overflow-hidden"
>
  <h2 className="text-4xl font-bold mb-8 text-center">Tokenomics</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
    {/* Total Supply */}
    <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
      <h3 className="text-2xl font-semibold mb-2 flex items-center justify-center text-black">
        <Image
          src="/icons/supply.png"
          alt="Supply Icon"
          width={30}
          height={30}
          className="mr-2"
        />
        Total Supply
      </h3>
      <p className="text-4xl font-bold text-[#e3af2c]">97.93 M</p>
      <div className="absolute top-[-10px] right-[-10px] w-12 h-12 bg-[#f7d774] rounded-full animate-pulse"></div>
    </div>

    {/* Taxes */}
    <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 text-black transition-transform duration-300">
      <h3 className="text-2xl font-semibold mb-2 flex items-center justify-center text-black">
        <Image
          src="/icons/tax.png"
          alt="Taxes Icon"
          width={30}
          height={30}
          className="mr-2 text-black"
        />
        Taxes
      </h3>
      <p className="text-lg">
        <strong>Buy:</strong> 0%<br />
        <strong>Sell:</strong> 0%
      </p>
      <div className="absolute bottom-[-20px] left-[-20px] w-16 h-16 bg-[#28508d] rounded-full animate-ping"></div>
    </div>

    {/* Liquidity */}
    <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 text-black transition-transform duration-300">
      <h3 className="text-2xl font-semibold mb-2 flex items-center justify-center">
        <Image
          src="/icons/liquidity.png"
          alt="Liquidity Icon"
          width={30}
          height={30}
          className="mr-2 text-black"
        />
        Liquidity
      </h3>
      <p>100% burned liquidity.</p>
      <div className="absolute top-[-20px] left-[-20px] w-16 h-16 bg-[#b9b9b9] rounded-full animate-pulse"></div>
    </div>
  </div>

  <div className="text-center mt-12 relative">
    <p className="text-lg mx-20">
      With its fair distribution and sustainable design, <strong>UNCHILL</strong> ensures a robust ecosystem that rewards the community.
    </p>
  </div>

  <div className="mt-20 rounded-10">
    <Image
      src="/images/banner.png"
      alt="Funny Dog Character"
      width={1000}
      height={1000}
      className="transform holographic-effect"
    />
  </div>
</section>



      {/* Roadmap Section */}
      <section
  id="roadmap"
  className="flex flex-col py-16 px-6 bg-gradient-to-b from-[#252525] via-[#090909] to-[#000000] text-white"
>
  <h2 className="text-4xl font-bold text-blue-200 mb-10 text-center">
    Roadmap
  </h2>
  <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-12">
    {/* Meme Images */}
    <div className="flex flex-col items-center gap-8 lg:w-1/3">
      <Image
        src="/images/chill.png"
        alt="Funny Dog Character 1"
        width={300}
        height={300}
        className="transform rotate-[-12deg] holographic-effect"
      />

    </div>

    {/* Roadmap Phases */}
    <ul className="space-y-8 lg:w-2/3 text-center">
      {[
        {
          title: "Phase 1: Launch",
          details: "Website launch, initial community setup.",
        },
        {
          title: "Phase 2: Listings",
          details:
            "Get listed on CoinGecko, CoinMarketCap, and drive initial hype.",
        },
        {
          title: "Phase 3: Memes & Marketing",
          details:
            "Aggressive meme campaigns and collaborations with influencers.",
        }
      ].map((phase, index) => (
        <li
          key={index}
          className="bg-black/70 p-6 rounded-lg shadow-lg hover:bg-black/90 transition-all duration-300"
        >
          <h3 className="text-2xl font-bold mb-2">{phase.title}</h3>
          <p className="text-sm text-gray-300">{phase.details}</p>
        </li>
      ))}
    </ul>
    <div className="flex flex-col items-center gap-8 lg:w-1/3">
      <Image
        src="/images/unchill.png"
        alt="Funny Dog Character 1"
        width={300}
        height={300}
        className="transform rotate-[-12deg] holographic-effect"
      />

    </div>
  </div>
</section>


      {/* Footer */}
      <footer
        id="footer"
        className="py-6 bg-black text-white text-center"
      >
        <p>© 2024 UNCHILL | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default HomePage;
