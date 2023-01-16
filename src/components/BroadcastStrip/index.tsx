import React from "react";

type BroadcastStripProps = {
  content: string | React.ReactNode;
};

const BroadcastStrip: React.FC<BroadcastStripProps> = ({ content }) => {
  return (
    <div className="w-full h-6 text-sm text-white bg-primary">
      <div className="marquee">
        <span>{content}</span>
      </div>
    </div>
  );
};

export default BroadcastStrip;
