import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";
import { LuMessageSquareMore } from "react-icons/lu";
import { CiShare2 } from "react-icons/ci";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Blog() {
  return (
    <div className="w-full bg-[#0D0D0DF2] pt-[100px]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
        <p className={`${greatVibes.className} font-normal text-center text-2xl lg:text-4xl text-orange-500`}>Blog Post</p>
        <h1 className="text-center font-bold text-[48px] text-white">
          <span className="text-orange-500">La</span>test News & Blog
        </h1>

        {/* boxes */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 mt-[50px]">
          {/* Box 1 */}
          <div className="w-full sm:w-[424px] lg:w-[424px] h-[569px]">
            <Image
              src={"/images/b1.png"}
              alt="burger"
              width={423}
              height={349}
              className="w-full h-auto"
            />
            <p className="text-orange-500 mt-[10px] font-normal text-[16px]">10 February 2022</p>
            <p className="font-bold mt-[15px] text-[24px] text-[#FFFFFF]">
              Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
            </p>
            <div className="flex justify-between">
              <p className="mt-[20px] font-normal text-[20px] text-[#FFFFFF]">Learn More</p>
              <div className="flex gap-[10px] mt-[20px] mr-[40px] text-white">
                <AiOutlineLike className="w-[30px] h-[30px]" />
                <LuMessageSquareMore className="w-[30px] h-[30px] text-orange-500" />
                <CiShare2 className="w-[30px] h-[30px]" />
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="w-full sm:w-[424px] lg:w-[424px] h-[569px]">
            <Image
              src={"/images/b2.png"}
              alt="pizza"
              width={423}
              height={349}
              className="w-full h-auto"
            />
            <p className="text-orange-500 mt-[10px] font-normal text-[16px]">10 February 2022</p>
            <p className="font-bold mt-[15px] text-[24px] text-[#FFFFFF]">
              Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A
            </p>
            <div className="flex justify-between">
              <p className="mt-[20px] font-normal text-[20px] text-[#FFFFFF]">Learn More</p>
              <div className="flex gap-[10px] mt-[20px] mr-[40px] text-white">
                <AiOutlineLike className="w-[30px] h-[30px]" />
                <LuMessageSquareMore className="w-[30px] h-[30px] text-orange-500" />
                <CiShare2 className="w-[30px] h-[30px]" />
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="w-full sm:w-[424px] lg:w-[424px] h-[569px]">
            <Image
              src={"/images/b3.png"}
              alt="curabitur"
              width={423}
              height={349}
              className="w-full h-auto"
            />
            <p className="text-orange-500 mt-[10px] font-normal text-[16px]">10 February 2022</p>
            <p className="font-bold mt-[15px] text-[24px] text-[#FFFFFF]">
              Curabitur rutrum velit ac congue malesuada
            </p>
            <div className="flex justify-between">
              <p className="mt-[20px] font-normal text-[20px] text-[#FFFFFF]">Learn More</p>
              <div className="flex gap-[10px] mt-[20px] mr-[40px] text-white">
                <AiOutlineLike className="w-[30px] h-[30px]" />
                <LuMessageSquareMore className="w-[30px] h-[30px] text-orange-500" />
                <CiShare2 className="w-[30px] h-[30px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}