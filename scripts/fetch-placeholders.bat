@echo off
REM 创建目录
if not exist public\images (
  mkdir public\images
)

REM 下载四张示例占位图（需 Windows10+ 内置 curl）
curl -L "https://source.unsplash.com/600x800/?red-carpet"   -o public\images\look1.jpg
curl -L "https://source.unsplash.com/600x800/?celebrity"    -o public\images\look2.jpg
curl -L "https://source.unsplash.com/600x800/?fashion"      -o public\images\look3.jpg
curl -L "https://source.unsplash.com/600x800/?runway"       -o public\images\look4.jpg

echo 占位图下载完成！
pause
