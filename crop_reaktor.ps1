Add-Type -AssemblyName System.Drawing
$srcPath = "C:\Users\ASUS TUF\Downloads\Alat abadi.png"
$destDir = "c:\Users\ASUS TUF\OneDrive\Dokumen\Abadi Website\public"
$destPath = "$destDir\reaktor-abadi-v2.png"

$bytes = [System.IO.File]::ReadAllBytes($srcPath)
$ms = New-Object System.IO.MemoryStream(,$bytes)
$src = [System.Drawing.Bitmap]::FromStream($ms)

# Crop rectangle: X=250, Y=0, Width=1000, Height=1024 (Ends at X=1250, 100% excluding top-right watermark)
$cropRect = New-Object System.Drawing.Rectangle(250, 0, 1000, 1024)
$target = New-Object System.Drawing.Bitmap($cropRect.Width, $cropRect.Height)
$g = [System.Drawing.Graphics]::FromImage($target)
$g.DrawImage($src, 0, 0, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)

$src.Dispose()
$ms.Dispose()

$target.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
$target.Dispose()
$g.Dispose()

Write-Host "Clean reaktor-abadi-v2.png saved successfully!"
