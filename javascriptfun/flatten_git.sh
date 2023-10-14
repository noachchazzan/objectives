#!/bin/bash

# Navigate to objectives directory
cd ~/Desktop/objectives

# Iterate over all directories
for dir in */ ; do
    # If the directory contains a .git folder, remove it
    if [ -d "$dir/.git" ]; then
        echo "Removing .git from $dir"
        rm -rf "$dir/.git"
    fi
done

# Initialize objectives as a git repository if not already done
if [ ! -d ".git" ]; then
    git init
fi

# Add all files and directories to the repository
git add .

# Commit the changes
git commit -m "Combined all folders into one repository"

# If you have a remote set up, you can push the changes
# git push origin main
#!/bin/bash

# Navigate to objectives directory
cd ~/Desktop/objectives

# Iterate over all directories
for dir in */ ; do
    # If the directory contains a .git folder, remove it
    if [ -d "$dir/.git" ]; then
        echo "Removing .git from $dir"
        rm -rf "$dir/.git"
    fi
done

# Initialize objectives as a git repository if not already done
if [ ! -d ".git" ]; then
    git init
fi

# Add all files and directories to the repository
git add .

# Commit the changes
git commit -m "Combined all folders into one repository"

# If you have a remote set up, you can push the changes
# git push origin main
