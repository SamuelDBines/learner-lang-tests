#!/bin/bash

DIR="$(dirname "$0")"
. "./$DIR/shared.sh"

STARTING_POS=50
N=100

VALUE=$STARTING_POS

# printf "${BLUE}$VALUE" 

function perr() {
  printf "${RED}[Error]: $1${RESET}\n" >&2
  exit 1
}

function plog() {
  printf "${BLUE}[RESULT]: $1${RESET}\n" >&2
  # exit 0
}

# function pOne() {
#   if [[ $1 == "L" ]]; then 
#     p_one_value=$(( (value - (amount % N) + N) % N ))
#   elif [[ $1 == "R" ]]; then
#     echo "direction reight"
#   else 
#     perr "Direction not found: $direction"
#   fi
# }

p_one_password=0
p_one_value=$STARTING_POS
p_two_password=0
p_two_value=$STARTING_POS

while IFS= read -r line; do
  direction="${line:0:1}"
  amount="${line:1}"

  if [[ ! $amount =~ ^-?[0-9]+$ ]]; then
    perr "not an int: $amount"
  fi

  step=0
  if [[ $direction == "L" ]]; then 
    p_one_value=$(( (p_one_value - (amount % N) + N) % N ))
    step=-1
  elif [[ $direction == "R" ]]; then
    p_one_value=$(( (p_one_value + amount) % N ))
    step=1
  else 
    perr "Direction not found: $direction"
  fi

  if [[ $p_one_value -eq 0 ]]; then
    p_one_password=$(( p_one_password + 1 ))
  fi
  test=0

  for ((i=0; i < $amount; i++)); do
    p_two_value=$(( (p_two_value + step + N) % N ))
    if [[ $p_two_value -eq 0 ]]; then
      p_two_password=$(( p_two_password + 1 ))
    fi
  done  

  
done < ../advent-of-code/01-12-2025.txt

plog $p_one_password
plog $p_two_password