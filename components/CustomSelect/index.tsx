"use client";
import { IProduct, PRODUCT_INFO } from "@/DummyData";
import { Select } from "antd";
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
}: ICustomSelectProps) => {
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

  return (
    <>
      <Select
        style={{ height: 40, width: 448 }}
        className="w-[448px] h-[40px]"
        showSearch
        placeholder={"Search product"}
        optionFilterProp="children"
        onChange={onChange}
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
