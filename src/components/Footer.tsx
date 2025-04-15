import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end">
          {/* Left side with logo and text */}
          <div className="mb-6 md:mb-0">
            <div className="mb-4">
              <Image src="/logo.svg" alt="GOE Logo" width={120} height={50} />
            </div>
            <p className="text-2xl max-w-md mb-4">
              Lorem, Ipsum Lorem, Ipsum Lorem, Ipsum or less.
            </p>
            <button className="bg-[#C4A052] text-white px-8 py-2 rounded-full">
              Discover More
            </button>
            <div className="flex gap-8 mt-6 mb-6 md:mb-0">
              <Link
                href="/"
                className="text-white text-lg hover:text-[#C4A052]"
              >
                Home
              </Link>
              <Link
                href="/egybook"
                className="text-[#C4A052] text-lg hover:text-[#C4A052]"
              >
                Egy<span className="text-white">Book</span>
              </Link>
              <Link
                href="/egyexplore"
                className="text-[#C4A052] text-lg hover:text-[#C4A052]"
              >
                Egy<span className="text-white">Explore</span>
              </Link>
              <Link
                href="/egytales"
                className="text-[#C4A052] text-lg hover:text-[#C4A052]"
              >
                Egy<span className="text-white">Tales</span>
              </Link>
              <Link
                href="/egytreasure"
                className="text-[#C4A052] text-lg hover:text-[#C4A052]"
              >
                Egy<span className="text-white">Treasure</span>
              </Link>
            </div>
          </div>

          {/* Middle - Navigation Links */}

          {/* Right side - Social Icons */}
          <div className="flex flex-col items-end">
            <div className="flex gap-4 mb-4">
              <Link href="#" className="bg-[#C4A052] p-2 rounded-lg">
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#" className="bg-[#C4A052] p-2 rounded-lg">
                <Image
                  src="/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#" className="bg-[#C4A052] p-2 rounded-lg">
                <Image src="/tiktok.svg" alt="TikTok" width={24} height={24} />
              </Link>
              <Link href="#" className="bg-[#C4A052] p-2 rounded-lg">
                <Image
                  src="/twitter.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#" className="bg-[#C4A052] p-2 rounded-lg">
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
            <div className="text-right">
              <p>Copyright Gates of Egypt © 2024</p>
              <p>All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
