// 953261 Lab 2 — Kad Café daily report
// Run:  npm start
import { menu } from "./data/menu.js";
import { orders } from "./data/orders.js";
import { menuLine, orderTotal, averageOrder } from "./src/cafe.js";

console.log("=== Kad Café menu ===");
menu.forEach((item) => console.log(menuLine(item)));

console.log("\n=== Today's orders ===");
// TODO (Part D): print one line per order, e.g.  "A001 Mint — 160 THB"

console.log("\n=== Summary ===");
// TODO (Part D): print the number of orders, the total sales and the average order.

// TODO (Part D): print the result of your own function (see the lab sheet).
