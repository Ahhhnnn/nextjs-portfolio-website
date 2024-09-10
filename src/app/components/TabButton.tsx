import React from "react";

const TabButton = ({
  active,
  selectTab,
  content,
}: {
  active: boolean;
  selectTab: () => void;
  content: string;
}) => {
  const buttonClassName = active
    ? "text-white border-b border-purple-500"
    : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white  ${buttonClassName}}`}>
        {content}
      </p>
    </button>
  );
};

export default TabButton;
