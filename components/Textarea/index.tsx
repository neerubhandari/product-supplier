import { TextAreaProps } from "@/types";
import TextArea from "antd/es/input/TextArea";
import React from "react";

const Textarea = ({ label, placeholder, className }: TextAreaProps) => {
  return (
    <>
      <div className="mb-[8px] text-[12px] leading-[16px]">{label}</div>
      <TextArea
        style={{ background: "#f0f0f0" }}
        className={`!h-[72px] px-[16px] py-[15px] border-none bg-[#f0f0f0] ${className}`}
        placeholder={placeholder}
      />
    </>
  );
};

export default Textarea;
