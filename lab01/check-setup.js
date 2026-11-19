// 953261 — Week 1 environment check
// Run from any folder:   node check-setup.js
// Show the result to your TA. Every required line should be ✅ before you leave the lab.
//
// Works as an ES module (package.json "type": "module") AND as CommonJS:
// process.getBuiltinModule() exists in both on modern Node; require() is the fallback for old versions.

let execSync;
if (typeof process.getBuiltinModule === "function") {
  ({ execSync } = process.getBuiltinModule("node:child_process"));
} else if (typeof require === "function") {
  ({ execSync } = require("node:child_process"));
} else {
  console.log(`\n❌ Your Node.js (v${process.versions.node}) is too old to run this check.`);
  console.log("   Install the LTS version (26.x) from https://nodejs.org, reopen the terminal, and run it again.\n");
  process.exit(1);
}

function run(cmd) {
  try {
    return execSync(cmd, { stdio: ["ignore", "pipe", "ignore"] }).toString().trim();
  } catch {
    return null;
  }
}

const checks = [];
function check(label, ok, detail, fix, optional = false) {
  checks.push({ label, ok, detail, fix, optional });
}

// 1. Node.js 26 LTS or newer
const nodeMajor = Number(process.versions.node.split(".")[0]);
check("Node.js 26 LTS+", nodeMajor >= 26, `v${process.versions.node}`,
  "Install the LTS version from https://nodejs.org (or: nvm install --lts)");

// 2. npm
const npmV = run("npm -v");
check("npm", !!npmV, npmV ?? "not found", "npm comes with Node.js — reinstall Node.js, then reopen the terminal");

// 3. Git
const gitV = run("git --version");
check("Git", !!gitV, gitV ?? "not found", "Install from https://git-scm.com, then reopen the terminal");

// 4. Git identity (effective value: this repo's setting, else the computer-wide one)
//    Optional here: on shared lab computers students set it per repo in Part C.
const gitName = run("git config user.name");
const gitEmail = run("git config user.email");
const idFix = 'Lab computer: set it inside your repo in Part C (no --global). Own laptop: git config --global user.name "Your Name"';
check("git user.name", !!gitName, gitName ? `${gitName}   ← is this you?` : "not set yet", idFix, true);
check("git user.email", !!gitEmail, gitEmail ?? "not set yet", idFix.replace(/user\.name "Your Name"/, 'user.email "you@example.com"'), true);

// 5. Git new enough for `git init -b main` (2.28+)
const gv = (gitV || "").match(/(\d+)\.(\d+)/);
const gitOk = gv && (Number(gv[1]) > 2 || (Number(gv[1]) === 2 && Number(gv[2]) >= 28));
check("Git 2.28+", !!gitOk, gitV ?? "not found", "Update Git from https://git-scm.com");

// 6. VS Code CLI (optional but useful)
const codeV = run("code --version");
check("VS Code 'code' command", !!codeV, codeV ? codeV.split("\n")[0] : "not on PATH (optional)",
  "VS Code → Command Palette → 'Shell Command: Install code command in PATH' (macOS)", true);

// ---------- report ----------
console.log("\n953261 · Week 1 environment check");
console.log("─".repeat(52));
for (const c of checks) {
  console.log(`${c.ok ? "✅" : c.optional ? "⚠️ " : "❌"} ${c.label.padEnd(26)} ${c.detail}`);
}
const failed = checks.filter((c) => !c.ok && !c.optional);
console.log("─".repeat(52));
if (failed.length === 0) {
  console.log("All required checks passed! Show this screen to your TA. 🎉");
  console.log("⚠️  lines are OK for now — read the hint beside them.\n");
} else {
  console.log(`${failed.length} item(s) to fix:`);
  for (const c of failed) console.log(`  • ${c.label}: ${c.fix}`);
  console.log("");
}
