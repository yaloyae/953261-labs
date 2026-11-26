// 953261 Lab 2 — Part B warm-up: fix 5 bugs from the Week 1 quiz
// Run:  npm run warmup
// Each line prints ✅ when the function is correct. Fix the code until you see 5 × ✅.
// Do NOT change the check(...) lines at the bottom — only the functions.

// Bug 1 — the function runs, but prints undefined.
function triple(n) {
  return n * 3;
}
 
// Bug 2 — same problem, arrow-function version.
const shout = (names) => {
  return names.map((name) => name.toUpperCase());
};

// Bug 3 — crashes with "TypeError: Assignment to constant variable."
function addBonus(score) {
  let total = score;
  total = total + 5;
  return total;
}

// Bug 4 — values from a form or a URL are always strings.
function addPrices(priceText1, priceText2) {
  return Number(priceText1) + Number(priceText2);
}

// Bug 5 — gives the wrong answer. Rewrite it with reduce (no for loop).
function average(nums) {
   if (nums.length === 0) return 0;
  
  let sum = nums.reduce((acc, num) => acc + num, 0);
  return sum / nums.length;
}

// ─────────── checks — do not edit below this line ───────────
function check(label, run, expected) {
  try {
    const actual = run();
    const show = (v) => (Number.isNaN(v) ? "NaN" : JSON.stringify(v));
    const ok = show(actual) === show(expected);
    console.log(ok ? `✅ ${label}` : `❌ ${label} → got ${show(actual)}, expected ${show(expected)}`);
  } catch (err) {
    console.log(`❌ ${label} → crashed: ${err.message}`);
  }
}

check("Bug 1  triple(4)", () => triple(4), 12);
check("Bug 2  shout(['mint', 'nont'])", () => shout(["mint", "nont"]), ["MINT", "NONT"]);
check("Bug 3  addBonus(70)", () => addBonus(70), 75);
check("Bug 4  addPrices('40', '5')", () => addPrices("40", "5"), 45);
check("Bug 5  average([2, 4, 9])", () => average([2, 4, 9]), 5);
