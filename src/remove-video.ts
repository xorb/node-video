import { ffmpeg } from "./commands"
interface RemoveVideoOptions {
  input: string
  output: string
}
type RemoveVideo = (options: RemoveVideoOptions) => Promise<any>

export const removeVideo: RemoveVideo = (options) => {
  const { input, output } = options
  return new Promise((resolve, reject) => {
    ffmpeg
      .input(input)
      .output(output)
      .on("end", resolve)
      .on("err", reject)
      .run()
  })
}
