(() => {
  const root = document.documentElement;
  const btn = document.querySelector("[data-theme-toggle]");

  const getPreferred = () => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark" || stored === "light") return stored;
    } catch (e) {}
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  };

  const setTheme = (t) => {
    root.dataset.theme = t;
    try {
      localStorage.setItem("theme", t);
    } catch (e) {}
  };

  // Initialize if not set by inline head script
  if (!root.dataset.theme) setTheme(getPreferred());

  if (btn) {
    btn.addEventListener("click", () => {
      const next = root.dataset.theme === "light" ? "dark" : "light";
      setTheme(next);
    });
  }

  // Copy-to-clipboard helpers (for contact quick links)
  const copyButtons = document.querySelectorAll("[data-copy-text]");
  const copyText = async (text) => {
    if (!text) return false;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (e) {}

    // Fallback
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "true");
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch (e) {
      return false;
    }
  };

  copyButtons.forEach((el) => {
    el.addEventListener("click", async () => {
      const text = el.getAttribute("data-copy-text") || "";
      const ok = await copyText(text);
      if (!ok) return;
      el.setAttribute("data-copied", "true");
      window.setTimeout(() => el.removeAttribute("data-copied"), 1200);
    });
  });
})();


