import Image from "next/image";
import LinkCard from "@/components/LinkCard";

// 임시 프로필 데이터 (추후 DB에서 가져오기)
const profile = {
  name: "이종수",
  bio: "마운자로도 이기는 무적 종수",
  imageUrl: "/profile.jpg",
};

// 임시 링크 데이터 (추후 DB에서 가져오기)
const links = [
  { id: "1", title: "GitHub", url: "https://github.com" },
  { id: "2", title: "Blog", url: "https://blog.example.com" },
  { id: "3", title: "Instagram", url: "https://instagram.com" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <main className="w-full max-w-md bg-gray-100 rounded-3xl p-8 shadow-lg">
        {/* 프로필 섹션 */}
        <div className="flex flex-col items-center mb-8">
          {/* 프로필 이미지 */}
          <div className="w-24 h-24 rounded-full bg-gray-300 border-2 border-gray-400 overflow-hidden mb-4">
            <Image
              src={profile.imageUrl}
              alt={`${profile.name} 프로필 사진`}
              width={96}
              height={96}
              className="w-full h-full object-cover object-top"
              priority
            />
          </div>

          {/* 이름 */}
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {profile.name}
          </h1>

          {/* 한줄 소개 */}
          <p className="text-gray-600 text-lg">{profile.bio}</p>
        </div>

        {/* 링크 카드 목록 */}
        <div className="flex flex-col gap-3">
          {links.map((link) => (
            <LinkCard key={link.id} title={link.title} url={link.url} />
          ))}
        </div>
      </main>
    </div>
  );
}
