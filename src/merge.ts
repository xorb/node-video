import { ffmpeg } from "./commands"
interface MergeOptions {
  inputs: string[]
  output: string
}
type Merge = (options: MergeOptions) => Promise<any>

export const merge: Merge = (options) => {
  const { inputs, output } = options
  return new Promise((resolve, reject) => {
    ffmpeg
      .input(inputs[0])
      .input(inputs[1])
      .mergeToFile(output)
      .on("end", resolve)
      .on("err", reject)
  })
}
