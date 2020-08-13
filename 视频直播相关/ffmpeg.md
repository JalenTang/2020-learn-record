# FFmpeg 学习

## FFmpeg 基本概念

FFmpeg 是一个跨平台的音视频处理工具，提供了完整的录制，转换和流处理解决方案（A complete, cross-platform solution to record, convert and stream audio and video）

1. 容器（container）

- 视频文件本身就是一个容器，其包括了视频、音频、字幕等内容
- 场景的容器格式：`MP4`、`MKV`、`WebM`、`AVI`等等

查看 FFmpeg 支持的容器 `ffmpeg -formats`

2. 编码格式（codec)

- 视频和音频需要经过编码才能保存为文件，不同的编码格式有不同的压缩率，会导致文件大小和清晰度的差异
- 常见的视频编码格式：（有版权 `H.262`，`H.264`，`H.265`）、（无版权 `VP8`，`VP9`，`AV1`）
- 常见的音频编码格式：`MP3`，`AAC`

查看 FFmpeg 支持的编码格式 `ffmpeg -codecs`

3. 编码器（encoder）

- 编码器是实现某种编码格式的库文件。相应格式的编码器能实现该格式视频/音频的编码和解码
- FFmpeg 内置的视频编码器
  - *libx264* 最流行的开源 H.264 编码器
  - *NVENC* 基于NVIDIA GPU 的 H.264 编码器
  - *libx265* 开源的 HEVC 编码器
- FFmpeg 内置的音频编码器 
  - *libfdk-aac*
  - *aac*

查看 FFmpeg 安装的编码器 `ffmpeg -encoders`

4. 流（Stream）

- 流是一种数据的传输方式，分为*视频流*、*音频流*、*字幕流*、*附件流*、*数据流*

5. 帧（Frame）

- 帧代表一幅静止的图像
- I帧
- P帧
- B帧

## FFmpeg 使用格式

`ffmpeg {1} {2} -i {3} {4} {5}`



## 参考文献

1. [FFmpeg官网文档](https://ffmpeg.org/documentation.html)
2. [FFmpeg基本使用](https://www.ruanyifeng.com/blog/2020/01/ffmpeg.html)