#!/bin/bash

 #==============================================================================
 #                       check_for_pattern
 #==============================================================================
# Check specified directory recursively for given pattern.
# You can use regex patterns like "*pattern*"
# Returns exit 1 if anything was found.
# Author: Evan Harmon

# -iname makes find case-insensitive
check() {
  echo "Searching in: $1"
  if [[ $(find "$1" -iname $2) ]]; then
    echo -e "\033[0;31m  $2 found!  \033[0m"
    exit 1
  else
    echo -e "\033[1;32m  $2 was not found.  \033[0m"
    exit 0
  fi
}

# Parse CLI input
if [ $# -eq 0 ]; then
  echo "usage: check_for 'location' 'search text'"
  exit 0
elif [[ $2 == "help" || $2 == "--help" || $2 == "-h" ]]; then
echo "usage: check_for 'location' 'search text'"
  exit 0
else
  check "$1" "$2"
fi
