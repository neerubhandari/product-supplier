"use client";
import { IProduct, PRODUCT_INFO } from "@/DummyData";
import { Button, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import { SearchItem } from "..";
import { SearchOutlined } from "@ant-design/icons";
import { CustomSelectProps } from "@/types";
const { Option } = Select;

interface ICustomSelectProps {
  setShowSelectProduct: React.Dispatch<React.SetStateAction<boolean>>;
  setProductData: React.Dispatch<React.SetStateAction<IProduct[]>>;
  productData: IProduct[];
}

const CustomSelect = ({
  setShowSelectProduct,
  setProductData,
  productData,
}: ICustomSelectProps) =>
  // {label,placeholder,style,listedData}:CustomSelectProps
  {
    const onChange = (id: number) => {
      setShowSelectProduct(false);
      const existingProductIndex = productData.findIndex(
        (product) => product.id === id
      );
      if (existingProductIndex > -1) {
        setProductData((prevState) =>
          prevState.map((product) => {
            if (product.id === id) {
              return { ...product, qty: product.qty++ };
            } else {
              return product;
            }
          })
        );

        return;
      }

      const product = PRODUCT_INFO.find((product) => product.id === id)!;
      setProductData((prevState) => [...prevState, product]);
    };

    const onSearch = (value: string) => {
      // console.log(value);
      return PRODUCT_INFO.filter((product) =>
        console.log(product.item.toLowerCase(), "result")
      );
    };

    return (
      <>
        {/* <div >
       {"Search product"}
        <span className="text-[#EF233C] text-[11px]">*</span>
      </div> */}
        <Select
          style={{ height: 40, width: 448 }}
          className="w-[448px] h-[40px]"
          showSearch
          placeholder={"Search product"}
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          open
        >
          {PRODUCT_INFO.map((data) => (
            <Option key={data.id} value={data.id}>
              <SearchItem
                price={data?.rate}
                name={data?.item}
                batch={data?.batch}
                batchNumber={data?.batch}
              />
            </Option>
          ))}
        </Select>
      </>
    );
  };

export default CustomSelect;
