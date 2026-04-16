$files = Get-ChildItem -Path 'd:\kulmipay-sites\kulmipay-landing\components' -Recurse -Filter '*.tsx' | Where-Object { $_.FullName -notlike '*\ui\*' }

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $original = $content

    # Section padding: py-24 sm:py-32 -> py-16 sm:py-20 lg:py-24 xl:py-32
    $content = $content -replace 'py-24 sm:py-32', 'py-16 sm:py-20 lg:py-24 xl:py-32'
    # py-24 alone without sm -> py-16 lg:py-24
    $content = $content -replace '(?<![sm]:)py-24(?! sm:)', 'py-12 sm:py-16 lg:py-24'
    # py-28 lg:py-36 -> py-20 sm:py-24 lg:py-28 xl:py-36
    $content = $content -replace 'py-28 lg:py-36', 'py-20 sm:py-24 lg:py-28 xl:py-36'
    # py-32 lg:py-40 -> py-20 sm:py-28 lg:py-32 xl:py-40
    $content = $content -replace 'py-32 lg:py-40', 'py-20 sm:py-28 lg:py-32 xl:py-40'
    # py-16 alone -> py-10 sm:py-12 lg:py-16
    $content = $content -replace '(?<![sm]:)py-16(?! sm:| text)', 'py-10 sm:py-12 lg:py-16'

    # Section gaps: gap-16 items-center -> gap-10 lg:gap-16 items-center
    $content = $content -replace 'gap-16 items-center', 'gap-10 lg:gap-16 items-center'

    # Grid gap-16 in general (not already responsive)
    $content = $content -replace 'grid lg:grid-cols-2 gap-16', 'grid lg:grid-cols-2 gap-10 lg:gap-16'
    $content = $content -replace 'grid lg:grid-cols-\[1fr_1.5fr\] gap-16', 'grid lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16'

    # mb-16 -> mb-10 sm:mb-12 lg:mb-16
    $content = $content -replace 'mb-16"', 'mb-10 sm:mb-12 lg:mb-16"'
    $content = $content -replace 'mb-16>', 'mb-10 sm:mb-12 lg:mb-16>'

    # mb-14 -> mb-8 sm:mb-10 lg:mb-14
    $content = $content -replace 'mb-14"', 'mb-8 sm:mb-10 lg:mb-14"'

    # text-3xl sm:text-4xl already okay
    # Ensure h2 headings start smaller on mobile: text-2xl sm:text-3xl font-bold -> already fine
    # Fix text-4xl sm:text-5xl lg:text-6xl (hero headings) - already fine

    # p-8 alone (not responsive) -> p-5 sm:p-6 lg:p-8
    $content = $content -replace '(?<![sm]:)p-8 rounded', 'p-5 sm:p-6 lg:p-8 rounded'

    # gap-8 in grids (for cards) -> gap-4 sm:gap-6 lg:gap-8
    $content = $content -replace 'gap-8"', 'gap-4 sm:gap-6 lg:gap-8"'
    $content = $content -replace 'gap-8>', 'gap-4 sm:gap-6 lg:gap-8>'

    if ($content -ne $original) {
        Set-Content $file.FullName -Value $content -NoNewline
        Write-Output "Updated: $($file.Name)"
    }
}
