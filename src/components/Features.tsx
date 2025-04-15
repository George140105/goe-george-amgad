import React from "react";
import Image from "next/image";
import { Text } from "@chakra-ui/react";
export const Features = () => {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <Text fontSize="3xl" color="white" fontWeight="bold" mb={4}>
          Why choose <span className="text-[#D2AC71]">Egy</span>Book
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-start">
            <div className="text-[#346D52] mb-4 h-[40px] w-[40px] relative">
              <Image
                src="/mouse-click-icon 1.png"
                alt="Mouse click icon"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="mb-2 ">
              <span className="text-[#D2AC71]">Seamless</span>
              <span className="text-white "> & </span>
              <span className="text-[#346D52]">Smart</span>
              <span className="text-white "> Booking </span>
            </h3>
            <p className="text-gray-300 text-sm max-w-[250px]">
              Quick, user-friendly platform that simplifies the reservation
              process
            </p>
          </div>
          <div className="flex flex-col items-start">
            <div className="text-[#346D52] mb-4 h-[40px] w-[40px] relative">
              <Image
                src="/vr.png"
                alt="VR headset icon"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="mb-2 ">
              <span className="text-[#346D52] italic">Immersive</span>
              <span className="text-white font-medium "> VR Previews</span>
            </h3>
            <p className="text-gray-300 text-sm max-w-[250px]">
              Explore hotels and rooms in 360° before you book—giving you total
              confidence.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <div className="text-[#346D52] mb-4 h-[40px] w-[40px] relative">
              <Image
                src="/piggybank.png"
                alt="Piggy bank icon"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="mb-2 ">
              <span className="text-[#346D52] font-medium">Exclusive</span>
              <span className="text-white font-medium "> Best-Price Deals</span>
            </h3>
            <p className="text-gray-300 text-sm max-w-[250px]">
              Save more with special offers and real-time price comparisons.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
