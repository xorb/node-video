import FFmepg from "fluent-ffmpeg"
import { ffprobe } from "./commands"

export function videoInfo(inputFile: string): Promise<FFmepg.FfprobeData> {
  return new Promise((resolve, reject) => {
    ffprobe(inputFile, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}
