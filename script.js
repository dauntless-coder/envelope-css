document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope");
  const btnOpen = document.getElementById("open");
  const btnClose = document.getElementById("close");

  function openEnvelope() {
    envelope.classList.add("open");
    envelope.classList.remove("close");
  }

  function closeEnvelope() {
    envelope.classList.add("close");
    envelope.classList.remove("open");
  }

  envelope.addEventListener("click", openEnvelope);
  btnOpen.addEventListener("click", openEnvelope);
  btnClose.addEventListener("click", closeEnvelope);
});
