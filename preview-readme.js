(function () {
  const cfg = window.__PREVIEW_README__ || {};
  const titleEl = document.getElementById("title");
  const statusEl = document.getElementById("status");
  const contentEl = document.getElementById("content");
  const footerEl = document.getElementById("footer");
  const reloadBtn = document.getElementById("reload");

  if (titleEl && cfg.title) titleEl.textContent = cfg.title;
  if (footerEl && cfg.footer) footerEl.textContent = cfg.footer;

  function setStatus(text, kind) {
    statusEl.textContent = text;
    statusEl.classList.remove("is-error", "is-ok");
    if (kind) statusEl.classList.add(kind);
  }

  async function load() {
    if (location.protocol === "file:") {
      setStatus(cfg.fileProtocolError || "请使用 HTTP 打开", "is-error");
      contentEl.innerHTML = "<p>" + (cfg.fileProtocolError || "") + "</p>";
      return;
    }
    setStatus("加载中…");
    try {
      const res = await fetch("./README.md", { cache: "no-store" });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const md = await res.text();
      contentEl.innerHTML = marked.parse(md);
      setStatus(cfg.hint || "已加载", "is-ok");
    } catch (err) {
      setStatus("加载失败：" + err.message, "is-error");
    }
  }

  reloadBtn.addEventListener("click", load);
  load();
})();
