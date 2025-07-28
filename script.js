// script.js

async function checkStreamStatus() {
  const playerDiv = document.getElementById("video-player");
  const placeholderImg = document.getElementById("placeholder");

  const videoUrl = "https://b32f55b7ad1e.ap-south-1.playback.live-video.net/api/video/v1/ap-south-1.679504361987.channel.qPeidIV2jBZ2.m3u8";

  try {
    const response = await fetch(videoUrl, { method: "HEAD" });

    if (response.ok) {
      // Stream is live – replace placeholder with video
      placeholderImg.style.display = "none";
      playerDiv.innerHTML = `
        <video controls autoplay muted style="width: 100%; border-radius: 20px;">
          <source src="${videoUrl}" type="application/x-mpegURL" />
          Your browser does not support the video tag.
        </video>
      `;
    } else {
      console.log("Stream not live yet.");
    }
  } catch (error) {
    console.log("Error checking stream:", error);
  }
}

// Check every 10 seconds
setInterval(checkStreamStatus, 10000);

// Also check on page load
checkStreamStatus();
