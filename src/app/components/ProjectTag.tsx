import React from "react";

const ProjectTag = ({
  name,
  onClick,
  isSelectd,
}: {
  name: string;
  onClick: (name: string) => void;
  isSelectd: boolean;
}) => {
  const buttonClassName = isSelectd
    ? "text-white border-purple-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white hover:text-white";
  return (
    <button
      className={`${buttonClassName} rounded-full border-2 px-6 py-2 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
