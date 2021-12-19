import { videoInfo } from "./video-info"
import { merge } from "./merge"
import { removeAudio } from "./remove-audio"
import { removeVideo } from "./remove-video"
import { trim } from "./trim"
import { effectBlur } from "./effect-blur"

const init = async () => {
  // const metadata = await videoInfo("./inputs/squirrel.mp4")

  // await trim({
  //   input: "./inputs/squirrel.mp4",
  //   output: "./outputs/output.mp4",
  //   clipDuration: 3,
  //   startingTime: 1,
  // })

  // await merge({
  //   inputs: ["./inputs/squirrel.mp4", "./inputs/space.mp4"],
  //   output: "./outputs/merged.mp4",
  // })

  // await removeAudio({
  //   input: "./inputs/space.mp4",
  //   output: "./outputs/noaudio.mp4",
  // })

  // await removeVideo({
  //   input: "./inputs/space.mp4",
  //   output: "./outputs/audio.mp3",
  // })

  await effectBlur({
    input: "./inputs/space.mp4",
    output: "./outputs/blur.mp4",
  })

  console.log("done")
}

init()
