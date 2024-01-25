"use client";
import React, { useEffect, useState } from "react";
import { DatePickerItem, InputField, TableColumn, Textarea } from "..";
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import { Form } from "antd";
import { useForm } from "react-hook-form";
import { SUPPLIERS_INFO } from "@/DummyData";

function DebitNoteCard() {
  const [supplierName, setSupplierName] = useState("");
  const [supplierNameVisible, setSupplierNameVisible] = useState(false);
  const [filteredSupplierName, setFilteredSupplierName] =
    useState(SUPPLIERS_INFO);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      supplierName: "",
      referenceNumber: "",
      date: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  const handleInputChange = (e) => {
    setSupplierName(e.target.value);
    setSupplierNameVisible(true);
  };

  const filteredData = SUPPLIERS_INFO.filter((item) =>
    item.toLowerCase().includes(supplierName.toLowerCase())
  );

  useEffect(() => {
    setFilteredSupplierName(filteredData);
  }, [supplierName]);

  return (
    <Form onFinish={handleSubmit(onSubmit)}>
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
            value={supplierName}
            rules={{ required: "Supplier Name is required" }}
            onChange={handleInputChange}
            onClick={() => !supplierName && setSupplierNameVisible(true)}
          />
          {supplierNameVisible &&
            filteredSupplierName.map((data) => (
              <div className=" p-[5px] bg-[#fffdfd]">
                <div className="flex flex-col justify-between items-center ">
                  <div
                    className=""
                    onClick={() => {
                      setSupplierName(data);
                      setSupplierNameVisible(false);
                    }}
                  >
                    {" "}
                    {data}
                  </div>
                </div>
              </div>
            ))}
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
      <div className="flex justify-between pb-[12px] pt-[20px] border-b border-t border-[#f0f0f0] my-[16px] text-[15px] leading-[20px]">
        <div className="">Custom fields</div>
        <div className="">
          <RightOutlined />
        </div>
      </div>
      <Textarea label="Terms & conditions" placeholder="Enter notes" />
      <button
        className="bg-[#00A8E8] text-[#fff] float-right mt-[32px] h-[48px] w-[113px] rounded-[8px] font-bold"
        style={{ padding: "14px 40px" }}
      >
        Save
      </button>
    </Form>
  );
}

export default DebitNoteCard;
