import React, { useState } from "react"
function VideoPlayer() {
  const [videoUrl] = useState([
    "http://media.w3.org/2010/05/bunny/movie.mp4",
    "http://media.w3.org/2010/05/sintel/trailer.mp4",
    "http://media.w3.org/2010/05/bunny/movie.mp4",
    "http://media.w3.org/2010/05/sintel/trailer.mp4"
  ])
  const vids = (e) => {
    var vid = document.getElementsByTagName("video")
    for (var i = 0, len = vid.length; i < len; i++) {
      if (vid[i] !== e.target) {
        vid[i].pause()
      }
    }
  }

  return (
    <div>
      {videoUrl.map((url, index) => (
        <div key={index}>
          <video
            controls
            onPlay={(e) => {
              vids(e)
            }}
          >
            <source src={url} />
          </video>
        </div>
      ))}
    </div>
  )
}

export default VideoPlayer
