import { DatePicker } from 'antd'
import React from 'react'
import { Controller } from "react-hook-form";

function DatePickerItem({name,control,rules}:any) {
  return (
    <>
    <div className="flex flex-col">
    <div className="text-[12px] leading-[16px] mb-[8px]">Date<span className="text-[#EF233C] text-[11px]">*</span></div>
    <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
     <DatePicker   
      {...field}  
      className='h-[48px] w-[480px] rounded-[8px] bg-[#F0F0F0] border-none' 
      placeholder='dd/mm/yyyy'/>)}/>

    </div>
    </>
  )
}

export default DatePickerItem