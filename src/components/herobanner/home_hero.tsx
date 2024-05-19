import { ashingFont, lilitaFont, robotoFont } from "@/app/_assets/fonts";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const HomeHero = () => {
  return (
    <div
      className={cn(
        ashingFont.className,
        "w-full h-screen flex flex-col justify-center items-center bg-[url('/assets/images/homeherobg.png')] p-10",
      )}
    >
      <div className={"flex flex-col w-[300px] md:w-[500px] lg:w-[800px] "}>
        <h1 className={"text-4xl md:text-6xl lg:text-8xl text-white text-left"}>
          Vos mots
        </h1>
        <h1
          className={"text-4xl md:text-6xl lg:text-8xl text-white text-right"}
        >
          Votre
          <span
            className={
              "text-4xl md:text-6xl lg:text-8xl strokeme ml-3 md:ml-5 lg:ml-8 "
            }
          >
            histoire
          </span>
        </h1>
      </div>
      <h2
        className={cn(
          lilitaFont.className,
          "text-white text-md md:text-lg lg:text-xl text-center",
        )}
      >
        Participer à des concours d&apos;écriture, monter dans le classement des
        meilleurs auteurs et gagner en visibilité !
      </h2>

      <Button className={cn(robotoFont.className, "my-8")} variant={"fw"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          color={"#ffffff"}
          fill={"none"}
        >
          <path
            d="M3 12C7.5 12 12 7.5 12 3C12 7.5 16.5 12 21 12C16.5 12 12 16.5 12 21C12 16.5 7.5 12 3 12Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M2 19.5C2.83333 19.5 4.5 17.8333 4.5 17C4.5 17.8333 6.16667 19.5 7 19.5C6.16667 19.5 4.5 21.1667 4.5 22C4.5 21.1667 2.83333 19.5 2 19.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M16 5C17 5 19 3 19 2C19 3 21 5 22 5C21 5 19 7 19 8C19 7 17 5 16 5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
        <span className={"ml-2 "}>Je tente l&apos;aventure</span>
      </Button>
    </div>
  );
};
