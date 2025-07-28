document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("weddingStream");
  const placeholder = document.getElementById("placeholder");
  const streamText = document.querySelector(".stream-text");

  function checkStreamAvailable() {
    video.load();

    const timeout = setTimeout(() => {
      console.log("No stream yet, retrying in 10s...");
      setTimeout(checkStreamAvailable, 10000);
    }, 8000);

    video.oncanplay = () => {
      clearTimeout(timeout);
      placeholder.style.display = "none";
      streamText.style.display = "none";
      video.style.display = "block";
      video.play();
    };

    video.onerror = () => {
      clearTimeout(timeout);
      console.log("Error loading video. Retrying in 10s...");
      setTimeout(checkStreamAvailable, 10000);
    };
  }

  checkStreamAvailable();
});
