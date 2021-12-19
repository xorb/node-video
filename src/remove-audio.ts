import { ffmpeg } from "./commands"

interface RemoveAudioOptions {
  input: string
  output: string
}
type RemoveAudio = (options: RemoveAudioOptions) => Promise<any>

export const removeAudio: RemoveAudio = (options) => {
  const { input, output } = options
  return new Promise((resolve, reject) => {
    ffmpeg
      .input(input)
      .noAudio()
      .output(output)
      .on("end", resolve)
      .on("err", reject)
      .run()
  })
}
