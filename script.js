const streamURL = "https://your-aws-link.m3u8"; // Replace with your real link
const video = document.getElementById("videoPlayer");
const placeholder = document.getElementById("placeholder");

// Check if stream is live
async function checkStream(url) {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    return res.ok;
  } catch (e) {
    return false;
  }
}

function startStream() {
  placeholder.style.display = "none";
  video.style.display = "block";

  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(streamURL);
    hls.attachMedia(video);
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = streamURL;
  }
}

checkStream(streamURL).then((isLive) => {
  if (isLive) {
    startStream();
  } else {
    console.log("Stream not live yet.");
  }
});
