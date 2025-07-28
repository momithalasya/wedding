window.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("weddingStream");
  const placeholder = document.getElementById("placeholder");

  video.addEventListener("canplay", () => {
    placeholder.style.display = "none";
    video.style.display = "block";
  });

  video.addEventListener("error", () => {
    video.style.display = "none";
    placeholder.style.display = "block";
  });
});
