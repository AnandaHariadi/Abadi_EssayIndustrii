Add-Type -AssemblyName System.Drawing
$srcPath = "C:\Users\ASUS TUF\Downloads\Alat Abadi fix.png"
$destDir = "c:\Users\ASUS TUF\OneDrive\Dokumen\Abadi Website\public"
$destPath = "$destDir\reaktor-abadi-v4.png"

if (!(Test-Path -Path $destDir)) {
    New-Item -ItemType Directory -Force -Path $destDir
}

$bytes = [System.IO.File]::ReadAllBytes($srcPath)
$ms = New-Object System.IO.MemoryStream(,$bytes)
$src = [System.Drawing.Bitmap]::FromStream($ms)

Write-Host "Dimensions: $($src.Width) x $($src.Height)"

# Tight crop rectangle: X=75, Y=100, Width=675, Height=760 (Contains ONLY the machine with 0 right margin)
$cropRect = New-Object System.Drawing.Rectangle(75, 100, 675, 760)
$target = New-Object System.Drawing.Bitmap($cropRect.Width, $cropRect.Height)
$g = [System.Drawing.Graphics]::FromImage($target)
$g.DrawImage($src, 0, 0, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)

$src.Dispose()
$ms.Dispose()

$target.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
$target.Dispose()
$g.Dispose()

Write-Host "Tight crop reaktor-abadi-v4.png saved successfully!"
