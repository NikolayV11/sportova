export const enum TypeParams {
  POPULARITY = "popularity",
  NAME = "name",
  PRICE = "price",
  DISCOUNTS = "discounts",
}

export type ParamsSort = {
  type: TypeParams;
  params: TypeValueParams;
};

export const enum TypeValueParams {
  DESC = "desc",
  ASC = "asc",
}
export type typeValueSort = {
  title: string;
  params: TypeValueParams;
};

export type typeSort = {
  type: TypeParams;
  title: string;
  value: typeValueSort[];
};
