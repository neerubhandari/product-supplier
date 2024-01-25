export interface IProduct {
  id: number;
  item: string;
  batch: string;
  warehouse: string;
  qty: number;
  rate: number;
  discount: number;
}

export const PRODUCT_INFO = [
  {
    id: 1,
    item: "Old durbar 750 ml",
    batch: "4324A",
    warehouse: "KTM1",
    qty: 1,
    rate: 2300,
    discount: 230,
  },
  {
    id: 2,
    item: "Old durbar 375 ml",
    batch: "4324A",
    warehouse: "KTM1",
    qty: 1,
    rate: 2300,
    discount: 230,
  },
  {
    id: 3,
    item: "Old durbar 175 ml",
    batch: "4324A",
    warehouse: "KTM1",
    qty: 1,
    rate: 2300,
    discount: 230,
  },
];
export const PRODUCT_INFO5 = [
  {
    name: "Old durbar 750 ml",
  },
  {
    name: "Old durbar 375 ml",
  },
  {
    name: "Old durbar 175 ml",
  },
];
