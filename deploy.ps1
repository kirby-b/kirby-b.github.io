  # Change directory to git
cd $PSScriptRoot

# Build the Vue App
npm run build

# Change directory into the dist folder.
cd dist

$message = Read-Host -Prompt 'Deploy message: '
cp ../README.md ./README.md

# Initialize and add everything to a new git repository
git init
git add -A
git checkout -b gh-pages
git commit -m $message

# Push to the GitHub repository.
git push -f https://github.com/jkruskie/kirby-b.github.io.git gh-pages

# Go back to the starting directory.
cd ..
