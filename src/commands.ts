import FfmpegCommand from "fluent-ffmpeg";
FfmpegCommand.setFfmpegPath("/usr/bin/ffmpeg");

export const ffmpeg = FfmpegCommand();
export const ffprobe = FfmpegCommand.ffprobe;
