#!/bin/zsh

# Exercise 1.
mkdir unix_tests
cd unix-text

# exercise 2.
touch trybe.txt

# exercise 3.
cp trybe.txt trybe_backup.txt

# exercise 4.
mv trybe.txt trybe1.txt

# exercise 5.
mkdir backup

# exercise 6.
mv trybe_backup.txt backup

# exercise 7.
mkdir backup2

# exercise 8.
mv backup/trybe_backup.txt backup2

# exercise 9.
rmdir backup

# exercise 10.
mv backup2 backup

# exercise 11.
pwd
ls

# exercise 12.
rmdir backup

# exercise 13.
clear

# exercise 14.1
echo > "skills.txt"
cat >> skills.txt
internet
unix
bash
html
css
javascript
react
sql

# exercise 14.2
head -5 skills.txt

# exercise  15.
tail -4 skills.txt

# exercise 16.
rm -f *.txt

# End of all part 1 exercises! :)
