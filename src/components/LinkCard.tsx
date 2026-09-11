"use client";

interface LinkCardProps {
  title: string;
  url: string;
}

export default function LinkCard({ title, url }: LinkCardProps) {
  const handleClick = () => {
    // TODO: 클릭 수 집계 API 호출
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className="w-full py-4 px-6 bg-white border border-gray-200 rounded-full text-center text-gray-800 font-medium hover:bg-gray-50 hover:scale-[1.02] transition-all duration-200 shadow-sm"
    >
      {title}
    </button>
  );
}
