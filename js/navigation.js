
(() => {
  const sidebar = document.getElementById("sidebar");
  const toggle = document.getElementById("menu-toggle");
  const backdrop = document.getElementById("sidebar-backdrop");
  const search = document.getElementById("global-search");

  function closeSidebar() {
    sidebar?.classList.remove("open");
    backdrop?.classList.remove("visible");
  }

  function openSidebar() {
    sidebar?.classList.add("open");
    backdrop?.classList.add("visible");
  }

  toggle?.addEventListener("click", () => {
    if (sidebar?.classList.contains("open")) closeSidebar();
    else openSidebar();
  });

  backdrop?.addEventListener("click", closeSidebar);

  document.addEventListener("keydown", (event) => {
    const target = event.target;
    const isTyping = target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement ||
      target?.isContentEditable;

    if (event.key === "/" && !isTyping) {
      event.preventDefault();
      search?.focus();
    }

    if (event.key === "Escape") {
      closeSidebar();
      search?.blur();
    }
  });

  window.GTAVI_NAV = { closeSidebar };
})();
