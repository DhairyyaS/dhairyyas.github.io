(function () {
  var btn = document.getElementById("theme-toggle");
  function apply(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (btn) btn.textContent = theme === "dark" ? "☀" : "☽";
  }
  var saved = localStorage.getItem("theme");
  var initial = saved || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  apply(initial);
  if (btn) {
    btn.addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      apply(next);
    });
  }
})();
