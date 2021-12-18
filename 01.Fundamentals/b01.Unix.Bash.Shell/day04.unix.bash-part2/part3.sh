#!/bin/zsh

# Exercise 1.
ps

# Exercise 2.
sleep 30 & #PID 13425

# Exercise 3.
ps | grep sleep
kill 13425

# Exercise 4.
sleep 30
crtl+z
bg

# Exercise 5.
sleep 300 &

# Exercise 6.
sleep 200
ctrl+z
sleep 100
ctrl+z

# Exercise 7.
jobs
fg %1
ctrl+z
jobs

# Exercise 8.
bg %3
jobs

# Exercise 9.
killall sleep

# They are all dead now :(

