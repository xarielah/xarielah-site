import Avatar from "@/assets/avatar.webp";
import Image from "next/image";
import SocialLinks from "./social-links";

export default function HeaderLogo() {
  return (
    <div className="flex items-center justify-center flex-col py-24 gap-3">
      <Image
        src={Avatar.src}
        width={Avatar.width}
        height={Avatar.height}
        alt="avatar"
        className="w-28 h-28 border-4"
      />
      <h1 className="font-bold text-4xl">Ariel Aharon</h1>
      <SocialLinks />
    </div>
  );
}
