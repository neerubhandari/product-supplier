import React from "react";
import { Input } from "antd";
import { InputFieldProps } from "@/types";
import { Controller } from "react-hook-form";

const InputField = ({ label, placeholder, suffixIcon, name, control, rules }: InputFieldProps) => {
  return (
    <div className="flex flex-col">
      <div className="text-[12px] leading-[16px] mb-[8px]" >
        {label}
        <span className="text-[#EF233C] text-[11px]">*</span>
      </div>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Input
            {...field}
            height={10}
            placeholder={placeholder}
            variant="filled" 
            className="h-[48px] w-[480px] rounded-[8px] border-none"
            suffix={suffixIcon}
            style={{ width: 480 }}
          />
        )}
      />
    </div>
  );
};

export default InputField;
