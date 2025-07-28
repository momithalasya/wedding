document.addEventListener("DOMContentLoaded", function () {
  const streamURL = "https://b32f55b7ad1e.ap-south-1.playback.live-video.net/api/video/v1/ap-south-1.679504361987.channel.qPeidIV2jBZ2.m3u8";
  const videoContainer = document.getElementById("videoContainer");

  fetch(streamURL, { method: 'HEAD' })
    .then(response => {
      if (response.ok) {
        const iframe = document.createElement("iframe");
        iframe.src = streamURL;
        iframe.allowFullscreen = true;
        iframe.title = "Wedding Live Stream";
        iframe.style.position = "absolute";
        iframe.style.top = 0;
        iframe.style.left = 0;
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";

        videoContainer.innerHTML = ""; // Remove placeholder
        videoContainer.appendChild(iframe);
      }
    })
    .catch(() => {
      // Stream not live; placeholder stays
    });
});
