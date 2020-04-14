/*
input: two version number in string representation
ouput: one of the numbers from 1, 0 or -1
      - or null for invalid inputs

Rules:
- if any inputs are invalid characters, return null
  - any characters other than digits and . are considered null
- compare the two input versions
  - if v1 > v2, return 1
  - if v1 < v2, return -1
  - if v1 === v2, return 0

Rules for Comparing versions:
- versions do not follow the same rules as decimal numbers
- each number separated by a dot is compared to the number in the equivalent position
-