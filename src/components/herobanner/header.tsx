import Image from "next/image";
import { cn } from "@/lib/utils";
import { ashingFont } from "@/app/_assets/fonts";

export default function HomeHeader() {
  return (
    <header className={"absolute top-4 left-5 flex items-center text-white"}>
      <Image
        src={"/assets/images/feelwordslogo.PNG"}
        alt={"Feelwords Logo"}
        width={60}
        height={60}
        className={"rounded-xl mr-3"}
      />
      <h1
        className={cn(ashingFont.className, "text-xl md:text-2xl lg:text-3xl")}
      >
        Feelwords
      </h1>
    </header>
  );
}
