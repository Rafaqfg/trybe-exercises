#!/bin/zsh

# exercise 1.
cd unix_testes

# exercise 2.
echo >> "skills2.txt"
cat >> skills2.txt
Internet
Unix
Bash

# exercise 3.
cat >> skills2.txt
HTML
JavaScript
CSS
React
JediArt
sort < skills2.txt

# exercise 4.
cat skills2.txt | wc -l

# exercise 5.
sort < skills2.txt | head -n 3 > top_skills.txt

# exercise 6.
touch phrases2.txt
cat >> phrases2.txt
Be the change that you wish to see in the world.
In a gentle way, you can shake the world.
Happiness is when what you think, what you say, and what you do are in harmony.
See the good in people and help them.

# exercise 7.
grep br phrases2.txt | wc -l

# exercise 8.
grep -v br phrases2.txt | wc -l

# exercise 9.
echo "Brazil" >> phrases2.txt
echo "Germany" >> phrases2.txt

# exercise 10.
cp countries.txt bunch_of_things.txt
cat phrases2.txt >> bunch_of_things.txt

# exercise 11.
sort bunch_of_things.txt -o bunch_of_things.txt

#That's all folk's!






















