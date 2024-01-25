"use client";
import { Button, Empty, Select, Table } from "antd";
import React, { useState } from "react";
import { CustomSelect, ProductDetails } from "..";
import { IProduct } from "@/DummyData";

const columns = [
  {
    title: "Item/product",
    dataIndex: "item",
  },
  {
    title: "Batch",
    dataIndex: "batch",
  },
  {
    title: "Warehouse",
    dataIndex: "warehouse",
  },
  {
    title: "Qty",
    dataIndex: "qty",
  },
  {
    title: "Rate",
    dataIndex: "rate",
  },
  {
    title: "Discount",
    dataIndex: "discount",
  },
  {
    title: "Tax",
    render: () => "13% VAT",
  },
  {
    title: "Amount",
    render: (record: IProduct) => {
      return record.qty * record.rate - record.discount;
    },
  },
];

function TableColumn() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showSelectProduct, setShowSelectProduct] = useState(false);
  const [productData, setProductData] = useState<IProduct[]>([]);
  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <Table
        locale={{
          emptyText: (
            <Empty description={false} imageStyle={{ display: "none" }} />
          ),
        }}
        className="my-[16px] text-[13px] "
        columns={columns}
        dataSource={productData}
        size="middle"
        pagination={false}
        rowKey={(record) => record.id}
      />
      {showSelectProduct && (
        <CustomSelect
          productData={productData}
          setProductData={setProductData}
          setShowSelectProduct={setShowSelectProduct}
        />
      )}
      <div
        className="text-[12px] font-[400] leading-[16px] text-[#979797] mb-[8px] cursor-pointer"
        onClick={() => {
          setShowSelectProduct((prev) => !prev);
        }}
      >
        Add code or product
      </div>
      {productData.length > 0 && <ProductDetails productData={productData} />}
    </>
  );
}

export default TableColumn;
