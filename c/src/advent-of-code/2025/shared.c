#include <string.h>
#include <ctype.h>

static void rstrip(char *s) {
  size_t n = strlen(s);
  while(n > 0 && (s[n-1] == '\n' || s[n-1] == '\r' || isspace((unsigned char)s[n-1]))) 
  s[--n] = '\0';
}
static char* lskip(char*s) {
  while (*s && isspace((unsigned char)*s)) s++;
  return s;  
}

static int is_blank(const char *s) {
  while(*s) {
    if(!isspace((unsigned char)*s)) return 0;
    s++;
  }
  return 1;
}