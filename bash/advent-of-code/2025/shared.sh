
BLUE="\x1b[34m"
RESET="\x1b[0m"
RED="\x1b[31m"

function perr() {
  printf "${RED}[Error]: $1${RESET}\n" >&2
  exit 1
}

function plog() {
  printf "${BLUE}[RESULT]: $1${RESET}\n" >&2
}