const streamURL = "https://b32f55b7ad1e.ap-south-1.playback.live-video.net/api/video/v1/ap-south-1.679504361987.channel.qPeidIV2jBZ2.m3u8";
const video = document.getElementById("videoPlayer");

// Optional: show console message if stream is unreachable
async function checkStream(url) {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    return res.ok;
  } catch (e) {
    return false;
  }
}

function playStream() {
  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(streamURL);
    hls.attachMedia(video);
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = streamURL;
  }
}

// Always try to load stream
checkStream(streamURL).then((isLive) => {
  if (isLive) {
    playStream();
  } else {
    console.log("Stream is not live yet.");
    playStream(); // Still try to load so player appears
  }
});
