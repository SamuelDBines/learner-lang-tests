import re
class bcolors:
  HEADER = '\033[95m'
  OKBLUE = '\033[94m'
  OKCYAN = '\033[96m'
  OKGREEN = '\033[92m'
  WARNING = '\033[93m'
  FAIL = '\033[91m'
  ENDC = '\033[0m'
  BOLD = '\033[1m'
  UNDERLINE = '\033[4m'

datafile_01_2025 = '../../../advent-of-code/01-12-2025.txt'

const_01_2025 = dict(startingPosition = 50,N = 100)

def file_01_2025(): 
  f = open(datafile_01_2025)
  filedata = f.read().strip()
  filedata = re.split(r'\n',filedata)
  return filedata