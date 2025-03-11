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
      <Image
        className="rounded-lg"
        src="/asset/image/artwork.png"
        width={1080}
        height={1080}
        alt="NFT digital artwork"
        priority
      />
      <h1 className="mt-6 text-[1.375rem] leading-[normal] font-semibold">
        Equilibrium #3429
      </h1>
      <p className="mt-3 text-[1.125rem]/[1.625rem] font-light text-[#8BACD9]">
        Our Equilibrium collection promotes balance and calm.
      </p>
    </div>
  );
});

NftPreviewCard.displayName = "NftPreviewCard";
