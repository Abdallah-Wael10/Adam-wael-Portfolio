import Image from 'next/image';
import star from '../../images/star.svg';

export default function InfiniteScroll() {
  const items = [
    "WireFrame",
    "App Design",
    "Web Design",
    "Dashboard",
    "User Research",
    "prototype"
  ];

  return (
    <div className="w-full h-max bg-[#90D9EF] text-white overflow-hidden py-4">
      <div className="flex flex-nowrap gap-12 animate-scroll whitespace-nowrap">
        {[...items, ...items].map((text, index) => (
          <div
            key={index}
            className="flex items-center gap-3 h-max px-6 py-3 "
          >
            <h1 className="text-[24px] font-semibold text-white">
              {text}
            </h1>
            <Image src={star} alt="star icon" width={24} height={24} priority />
          </div>
        ))}
      </div>
    </div>
  );
}