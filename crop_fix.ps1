Add-Type -AssemblyName System.Drawing
$srcPath = "C:\Users\ASUS TUF\Downloads\Alat Abadi fix.png"
$destDir = "c:\Users\ASUS TUF\OneDrive\Dokumen\Abadi Website\public"
$destPath = "$destDir\reaktor-abadi-v3.png"

if (!(Test-Path -Path $destDir)) {
    New-Item -ItemType Directory -Force -Path $destDir
}

$bytes = [System.IO.File]::ReadAllBytes($srcPath)
$ms = New-Object System.IO.MemoryStream(,$bytes)
$src = [System.Drawing.Bitmap]::FromStream($ms)

Write-Host "Dimensions: $($src.Width) x $($src.Height)"

# Crop rectangle: X=200, Y=80, Width=1000, Height=920 (Captures entire isometric machine, 100% excluding top-right AI-Generated tag)
$cropRect = New-Object System.Drawing.Rectangle(200, 80, 1000, 920)
$target = New-Object System.Drawing.Bitmap($cropRect.Width, $cropRect.Height)
$g = [System.Drawing.Graphics]::FromImage($target)
$g.DrawImage($src, 0, 0, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)

$src.Dispose()
$ms.Dispose()

$target.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
$target.Dispose()
$g.Dispose()

Write-Host "Clean reaktor-abadi-v3.png saved successfully!"
