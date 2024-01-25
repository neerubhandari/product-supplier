import React from 'react'

const SearchItem = ({name,price,batch,batchNumber}:any) => {
  return (
    <div className='border-b border-[#F0F0F0] p-[5px]'>
    <div className="flex justify-between items-center ">
        <div className="">
            <div className="text-[13px] font-[500px] leading-[18.2px] text-[#00171F]">{name}</div>
            <div className=""><span className='mr-[16px] text-[#00A8E8]'>{batch}</span>Batch:{batchNumber}</div>
        </div>
        <div className="">Rs. {price}</div>
    </div>
    </div>
  )
}

export default SearchItem