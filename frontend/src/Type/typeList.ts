export type typeList2 = {
  title: string;
  link?: string;
  list?: [];
}[];
export type typeList3 = {
  title: string;
  link?: string;
  list?: typeList2;
}[];

export type typeList = {
  title: string;
  link?: string;
  list?: typeList3;
}[];
