!(function () {
  
  // VARS
  const cls = document.getElementById("class");
  const cll = document.getElementById("classlist");
  const classes = document.querySelectorAll("#classes>div");
  const ccs = document.querySelectorAll(".cc");

  // LISTENERS
  document.getElementById("back").addEventListener("click", () => { 
    cll.classList.add("none");
    cls.classList.remove("none");
    ccs.forEach(c => { if (!c.classList.contains("none")) c.classList.add("none"); });
  });

  // SELECT CLASS
  classes.forEach(c => c.addEventListener("click", function () {
    cls.classList.add("none");
    cll.classList.remove("none");
    document.getElementById(`class${c.innerHTML}`).classList.remove("none");
  }));
})();