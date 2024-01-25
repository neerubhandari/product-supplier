"use client";
import React from "react";
import {
  DatePickerItem,
  InputField,
  ProductDetails,
  CustomSelect,
  TableColumn,
  Textarea,
} from "..";
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import { Form } from "antd";
import { useForm } from "react-hook-form";

function DebitNoteCard() {
  const {
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      supplierName: "",
      referenceNumber: "",
      date: "",
    },
  });

  return (
    <Form>
      <div className="text-[#00171F] text-[17px] h-[64px] font-bold leading-[22px] pt-[20px] shadow w-[100%] ">
        New debit note
      </div>
      <div className="flex justify-between  my-[16px]">
        <div>
          <InputField
            label={"Supplier name"}
            placeholder={"Eg: Globex Corporation"}
            suffixIcon={<DownOutlined />}
            name="supplierName"
            control={control}
            rules={{ required: "Supplier Name is required" }}
          />
          {errors.supplierName?.message && (
            <p className="text-sm text-red-400 my-[6px]">
              {errors.supplierName.message}
            </p>
          )}
        </div>
        <div>
          <DatePickerItem
            name="date"
            control={control}
            rules={{ required: "Date is required" }}
          />
          {errors.date?.message && (
            <p className="text-sm text-red-400 my-[6px]">
              {errors.date.message}
            </p>
          )}
        </div>
      </div>
      <InputField
        name="referenceNumber"
        label={"Reference"}
        placeholder={"Enter reference"}
        control={control}
        rules={{ required: "Reference Number is required" }}
      />
      {errors.referenceNumber?.message && (
        <p className="text-sm text-red-400 my-[6px]">
          {errors.referenceNumber.message}
        </p>
      )}
      <TableColumn />
      {/* <CustomSelect/> */}
      <div className="flex justify-between py-[12px] border-b border-t border-[#f0f0f0] my-[16px]">
        <div className="">Custom fields</div>
        <div className="">
          <RightOutlined />
        </div>
      </div>
      <Textarea label="Terms & conditions" placeholder="Enter notes" />
      <button
        className="bg-[#00A8E8] text-[#fff] float-right mt-[32px] h-[48px] w-[113px] rounded-[8px]"
        style={{ padding: "14px 40px" }}
      >
        Save
      </button>
    </Form>
  );
}

export default DebitNoteCard;
