import React from "react";

const Header = ({ title }) => {
  return (
    <h2 className="font-semibold text-[34px] border-b border-gray-800">
      {title}
    </h2>
  );
};

export default Header;
