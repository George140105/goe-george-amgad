import Image from "next/image";

interface MediumCardProps {
  image: string;
  title: string;
  description: string;
}

const MediumCard = ({ image, title, description }: MediumCardProps) => {
  return (
    <div className="relative group cursor-pointer">
      <div className="relative w-[400px] h-[300px] rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
        <div className="absolute top-6 left-6 text-white">
          <h3 className="text-4xl font-semibold mb-2">{title}</h3>
          <p className="text-lg text-gray-200 max-w-[300px]">{description}</p>
        </div>
        <div className="absolute bottom-6 left-6">
          <button className="bg-white hover:bg-[#2a5842] hover:text-white text-black px-6 py-2 rounded-3xl text-base font-medium transition-colors duration-200">
            See Hotels
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediumCard;
