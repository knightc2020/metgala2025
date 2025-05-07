// scripts/generate-sitemap.js
const fs   = require("fs");
const path = require("path");

// ← 改成你的正式域名
const siteRoot  = "https://metgala2025looks.com"; 
// public 目录在项目根下
const publicDir = path.resolve(__dirname, "../public");
const pages     = [];

function walkDir(dir) {
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    const stat     = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (
      path.extname(file) === ".html" &&
      !file.startsWith("_") &&
      !file.includes("404")
    ) {
      const relativePath = path
        .relative(publicDir, fullPath)
        .replace(/\\/g, "/");
      const url = `${siteRoot}/${relativePath === "index.html" ? "" : relativePath}`;
      const lastmod = new Date(stat.mtime).toISOString().split("T")[0];
      pages.push({ url, lastmod });
    }
  }
}

walkDir(publicDir);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `
  <url>
    <loc>${p.url}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <priority>0.8</priority>
  </url>`).join("\n")}
</urlset>`.trim();

fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap, { encoding: "utf8" });
fs.writeFileSync(path.join(publicDir, "robots.txt"), `
User-agent: *
Allow: /

Sitemap: ${siteRoot}/sitemap.xml
`.trim(), { encoding: "utf8" });

console.log("✅ sitemap.xml 和 robots.txt 已生成到 public/ 目录");
