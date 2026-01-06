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
})();


