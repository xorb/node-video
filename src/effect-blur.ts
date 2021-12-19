import { ffmpeg } from "./commands"

interface EffectBlurOptions {
  input: string
  output: string
}

type EffetBlur = (options: EffectBlurOptions) => Promise<void>

export const effectBlur: EffetBlur = (options) => {
  const { input, output } = options
  return new Promise((resolve, reject) => {
    ffmpeg
      .input(input)
      .audioCodec("libmp3lame")
      .videoCodec("libx264")
      .videoFilters("unsharp=7:7:-2:7:7:-2")
      .output(output)
      .on("end", resolve)
      .on("err", reject)
      .run()
  })
}
