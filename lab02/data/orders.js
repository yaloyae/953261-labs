// Today's orders. Each order lists menu ids and quantities — not prices.
// To get a price you have to look the item up in the menu.
export const orders = [
  { id: "A001", customer: "Mint",  items: [{ menuId: "D01", qty: 2 }, { menuId: "F01", qty: 1 }] },
  { id: "A002", customer: "Nont",  items: [{ menuId: "D02", qty: 1 }] },
  { id: "A003", customer: "Fah",   items: [{ menuId: "F02", qty: 2 }, { menuId: "D01", qty: 2 }, { menuId: "S02", qty: 1 }] },
  { id: "A004", customer: "Ploy",  items: [{ menuId: "S01", qty: 1 }, { menuId: "D03", qty: 1 }] },
  { id: "A005", customer: "Beam",  items: [{ menuId: "D01", qty: 3 }] },
  { id: "A006", customer: "Kaew",  items: [{ menuId: "F01", qty: 2 }, { menuId: "D02", qty: 2 }] },
];
