import re
import sys, os
sys.path.append(os.path.dirname(os.path.dirname(__file__)))
from shared import bcolors, const_01_2025, file_01_2025

N = const_01_2025.get("N")

password = 0
value = const_01_2025.get("startingPosition")

filedata = file_01_2025()
for x in filedata:  
  dir = x[0] # Direction 
  amount = x[1:]
  if not amount.isnumeric():
    raise 'Amount is not a number'
  amount = int(amount)
  step = {"L": -1, "R": 1}.get(dir) 
  if step is None:
    raise ValueError(f"Unknown direction {dir!r}")
  for k in range(amount):
    value = (value + step + N) % N
    if value == 0:
      password = password + 1
  

print(bcolors.OKBLUE + "[Result] Password:" +  str(password) +  bcolors.ENDC)