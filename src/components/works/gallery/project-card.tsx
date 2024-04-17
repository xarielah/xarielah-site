import Hash from "@/components/elements/hash";
import Link from "next/link";

export default function ProjectCard() {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <Link href="/works/test" className="flex items-center">
          <Hash className="w-4 h-4 mr-1 hover:text-purple-600 ease-in-out duration-200" />
          <h3 className="font-bold text-2xl hover:translate-x-2 ease-in-out duration-300">
            Project test lorem ipsum blabla
          </h3>
        </Link>
        <div className="flex gap-2">
          <Link href="#">
            <p>TS</p>
          </Link>
          <Link href="#">
            <p>LINUX</p>
          </Link>
          <Link href="#">
            <p>REDIS</p>
          </Link>
        </div>
      </div>

      <Link href="#">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          voluptas eaque aliquid unde fugiat quidem architecto. Quaerat
          corporis, qui maxime deserunt enim nesciunt cum distinctio animi.
          Quae, laudantium. Minima, mollitia!
        </p>
      </Link>
    </div>
  );
}
