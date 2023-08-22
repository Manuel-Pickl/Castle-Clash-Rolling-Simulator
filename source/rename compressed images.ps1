# Get a list of all files in the current directory
$files = Get-ChildItem

# Loop through each file
foreach ($file in $files) {
    # Check if the file name contains "%foo%"
    if ($file.Name -like '*-min*') {
        # Remove "%foo%" from the file name
        $newName = $file.Name -replace '-min', ''
        
        # Construct the new file path with the updated name
        $newPath = Join-Path -Path $file.DirectoryName -ChildPath $newName
        
        # Rename the file
        Rename-Item -Path $file.FullName -NewName $newName
        Write-Host "Renamed $($file.FullName) to $($newPath)"
    }
}
