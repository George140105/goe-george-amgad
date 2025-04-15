import Image from "next/image";
import Link from "next/link";

interface XLCardProps {
  image: string;
  title: string;
  description: string;
}

const XLCard = ({ image, title, description }: XLCardProps) => {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-[#E6F2ED] flex">
      {/* Left Content */}
      <div className="flex-1 p-16 flex flex-col justify-center">
        <h2 className="text-[56px] font-bold text-[#1A1A1A] leading-tight mb-6">
          {title}
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-[500px]">
          {description}
        </p>
        <div>
          <button className=" w-full bg-[#346D52] hover:bg-[#2a5842] text-white px-12 py-4 rounded-full text-lg font-medium transition-colors duration-200">
            Book now
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 relative">
        <Image
          src={image}
          alt="Destination"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default XLCard;
