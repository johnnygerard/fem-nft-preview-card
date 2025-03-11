import { NftPreviewCard } from "@/component/nft-preview-card";
import { memo } from "react";

const HomePage = () => {
  return (
    <main className="grid min-h-screen place-items-center px-6 py-12">
      <NftPreviewCard />
    </main>
  );
};

export default memo(HomePage);
