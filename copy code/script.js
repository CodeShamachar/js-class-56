// ===============================
// Code data
// ===============================
let codeData = {
  html: `<div class="box">
  Hello World
</div>`,

  css: `.box {
  color: white;
  background: black;
}`,

  js: `console.log("Hello JavaScript");`
};

// ===============================
// Load code into textarea
// ===============================
document.querySelectorAll(".code-text").forEach(el => {
  el.value = codeData[el.dataset.type];
});

// ===============================
// Copy functionality (NO blue)
// ===============================

document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", async () => {
    let textarea = btn.nextElementSibling;

    try {
      await navigator.clipboard.writeText(textarea.value);

      btn.classList.add("success");
      btn.innerText = "Copied!";

      setTimeout(() => {
        btn.classList.remove("success");
        btn.innerText = "Copy";
      }, 2000);

    } catch (err) {
      alert("Copy failed!");
    }
  });
});
