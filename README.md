# Advent Exploartions

this is a small project meant to hold a collection of my solutions to past advent of code problems my collegues and peers have recommened that I solve.

### Lanternfish

I've built 2 solutions to the [Lanternfish 2021 day 6](https://adventofcode.com/2021/day/6) problem.  

I started by solving the problem with a count array that kept track of the number of fish that were X days away from spawning where X is the array index.  
  
I then iterated on the implementation by modifying the array in place instead of taking the first index and moving it to the end, I looked at the data structure as more of a rolling list where the 0 index moved.  

I did a simple comparison of their performance and found that as expected my second solution was much faster.
