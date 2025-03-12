import { IconClock } from "@/component/svg/icon-clock";
import { IconEthereum } from "@/component/svg/icon-ethereum";
import { IconEye } from "@/component/svg/icon-eye";
import { cn } from "@/util/cn";
import Image from "next/image";
import { memo } from "react";

export const NftPreviewCard = memo(() => {
  return (
    <div
      className={cn(
        "max-w-[21.875rem] rounded-[0.9375rem] bg-[#15263F] p-6",
        "shadow-[0_25px_50px_rgba(0,0,0,0.1)]",
      )}
    >
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src="/asset/image/artwork.png"
          width={1080}
          height={1080}
          alt="Futuristic translucent cube emitting vibrant neon light reflections on a smooth blue surface."
          priority
        />
        {/* Overlay */}
        <div
          className={cn(
            "group absolute inset-0 grid cursor-pointer place-items-center",
            "bg-cyan/0 transition-[background-color] hover:bg-cyan/50",
          )}
        >
          <IconEye className="size-12 opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
      </div>
      <h1 className="mt-6 text-[1.375rem]/[normal] font-semibold">
        <span className="cursor-pointer transition-[color] hover:text-cyan">
          Equilibrium #3429
        </span>
      </h1>
      <p className="mt-3 text-[1.125rem]/[1.625rem] font-light text-[#8BACD9]">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div
        className={cn(
          "text-[0.9375rem]/[normal] dt:text-[1rem]",
          "mt-4 flex items-center justify-between",
        )}
      >
        <span className="flex items-center gap-1.5 text-cyan">
          <IconEthereum aria-hidden className="h-[1.125rem] w-[0.6875rem]" />
          <span className="font-semibold">0.041 ETH</span>
        </span>
        <span className="flex items-center gap-2 text-[#8BACD9]">
          <IconClock aria-hidden className="size-4" />
          <span>3 days left</span>
        </span>
      </div>
      <hr className="my-4 border-[#2E405A]" />
      <footer className="flex items-center gap-4">
        <Image
          className="size-8 rounded-full border border-white"
          src="/asset/image/avatar.png"
          width={132}
          height={132}
          alt=""
        />
        <small className="text-[0.9375rem]/[normal] dt:text-[1rem]">
          <span className="text-[#8BACD9]">Creation of</span>{" "}
          <span className="cursor-pointer transition-[color] hover:text-cyan">
            Jules Wyvern
          </span>
        </small>
      </footer>
    </div>
  );
});

NftPreviewCard.displayName = "NftPreviewCard";
