import { ffmpeg } from "./commands"
import { videoInfo } from "./video-info"

interface TrimConfig {
  input: string
  output: string
  startingTime: number
  clipDuration: number
}

type Trim = (options: TrimConfig) => Promise<any>

export const trim: Trim = async (options) => {
  const { input, output, clipDuration, startingTime } = options
  const metadata = await videoInfo(input)
  const duration = metadata.format.duration as number

  return new Promise((resolve, reject) => {
    let fixedStartingTime = startingTime
    if (fixedStartingTime < 0) fixedStartingTime = 0
    let fixedDuration = clipDuration
    if (duration < startingTime + clipDuration)
      fixedDuration = duration - startingTime

    ffmpeg
      .input(input)
      .inputOptions([`-ss ${fixedStartingTime}`])
      .outputOptions([`-t ${fixedDuration}`])
      .noAudio()
      .output(output)
      .on("end", resolve)
      .on("err", reject)
      .run()
  })
}
