export type cat = {
  username: string;
  exp: number;
  level: number;
  maxExp: number;
  catImg: string;
};

export type catItem = {
  itemId: number;
  itemName: string;
  itemImg: string;
  itemPoint: number;
};

export type catItems = catItem[]
