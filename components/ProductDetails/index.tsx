import React from "react";
import { Textarea } from "..";
import { IProduct } from "@/DummyData";

const ProductDetails = ({ productData }: { productData: IProduct[] }) => {
  const totalAmountArr = productData.map(
    (product) => product.qty * product.rate
  );
  const totalAmount = totalAmountArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const totalDiscountArr = productData.map((product) => product.discount);
  const totalDiscount = totalDiscountArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const nonTaxableAmountArr = productData.map(
    (product) => product.qty * product.rate - product.discount
  );
  const nonTaxableAmount = nonTaxableAmountArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const taxableTotal = (nonTaxableAmount * 13) / 100;

  const grandTotal = nonTaxableAmount + taxableTotal;
  return (
    <div className="flex justify-between w-[100%] mt-[50.5px]">
      <div className="">
        <Textarea
          label="Note"
          placeholder="Enter notes"
          className="!w-[440px]"
        />
        <p className="text-[#979797] text-[11px] font-[400px] space-[0.066px] mt-[8px]">
          *This will appear on print
        </p>
      </div>

      <div className="grid gap-[12px] w-[440px]">
        <div className="flex justify-between text-[#00171F]">
          <div className="text-[12px] leading-[16px]">Total</div>
          <div>{totalAmount}</div>
        </div>
        <div className="flex justify-between text-[#00171F]">
          <div className="text-[12px] leading-[16px]">Discount</div>
          <div>{totalDiscount}</div>
        </div>
        <div className="flex justify-between text-[#00171F]">
          <div className="text-[12px] leading-[16px]">Non-taxable Total</div>
          <div>{nonTaxableAmount}</div>
        </div>
        <div className="flex justify-between text-[#00171F]">
          <div className="text-[12px] leading-[16px]">Taxable Total</div>
          <div>{taxableTotal}</div>
        </div>
        <div className="flex border-b border-[#00171F] justify-between">
          <div className="text-[12px] leading-[16px]">VAT</div>
          <div>13</div>
        </div>
        <div className="flex justify-between text-[#00171F] font-[500]">
          <div className="text-[12px] leading-[16px]">Grand Total</div>
          <div>{grandTotal}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
