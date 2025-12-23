#include <stdio.h>
#include <stdlib.h>
#include <errno.h>
#include "shared.c"



char *source = NULL;
char    *buffer;
long    numbytes;
const char    file[] = "./01-12.txt";


int main(int argc, char **argv) {

  const char *path = "./01-12-2025.txt";
  int DEBUG = 0;
  for (int i = 1; i < argc; i++) {
    if (strcmp(argv[i], "--debug") == 0) DEBUG = 1;
    else path = argv[i]; // optional: allow passing file path as arg
  }

  const int startPosition = 50;
  const int N = 100;
  long password = 0;
  int value = startPosition;
  FILE *fptr;

  fptr = fopen(file, "r");
  if (!fptr) { perror("fopen"); return 1; }

  char linebuf[4096];
  long lineno = 0;

  while (fgets(linebuf, sizeof linebuf, fptr)) {
    rstrip(linebuf);
    char *line = lskip(linebuf);
    if (*line == '\0' || is_blank(line)) continue; // .trim().filter(Boolean)

    char dir = line[0];
    char *p = lskip(line + 1);
    errno = 0;
    char *end = NULL;
    long amount = strtol(p, &end, 10);

    if (p == end || errno != 0) {
      fprintf(stderr, "Bad line at %ld: \"%s\"\n", lineno, line);
      fclose(fptr);
      return 1;
    }

    if (dir == 'L') {
      int a = (int)(amount % N);
      value = (value - a + N) % N;
    } else if (dir == 'R') {
      value = (value + (int)amount) % N;
    } else {
      fprintf(stderr, "Unknown direction \"%c\" on line %ld: \"%s\"\n", dir, lineno, line);
      fclose(fptr);
      return 1;
    }

    if (value == 0) password++;

    if (DEBUG) {
      printf("Line %ld: %s -> value=%d password=%ld\n", lineno, line, value, password);
    }

    lineno++;
  }

  // if (fseek(fptr, 0, SEEK_END) != 0) {
  //   perror("fseek");
  //   fclose(fptr);
  //   return 1;
  // }

  // long numbytes = ftell(fptr);
  // if (numbytes < 0) {
  //   perror("ftell");
  //   fclose(fptr);
  //   return 1;
  // }

  // char *buffer = calloc((size_t)numbytes + 1, 1);
  // if (!buffer) {
  //   perror("calloc");
  //   fclose(fptr);
  //   return 1;
  // }

  // rewind(fptr);
  
  // // if(fptr == NULL) {
  // //   printf("No file found\n");
  // //   return 1;
  // // }
  // size_t nread = fread(buffer, 1, (size_t)numbytes, fptr);
  // if (nread != (size_t)numbytes && ferror(fptr)) {
  //   perror("fread");
  //   free(buffer);
  //   fclose(fptr);
  //   return 1;
  // }

  // printf("Size of buffer is %ld\n", numbytes);
  // fclose(fptr);

  // printf("The file called %s contains this text\n\n%s", file ,buffer);

  // free(buffer);

  // if (fptr != NULL) {

  // }

  // char myString[100];
  // fgets(myString, 100, fptr);
  // fgets(myString, 100, fptr);

  // while(fgets(myString, 100, fptr)) {
  //   printf("%s", myString);
  // }
  // printf("%s", myString);

  // fclose(fptr);

  if (ferror(fptr)) { perror("fgets"); fclose(fptr); return 1; }
  fclose(fptr);

  printf("Password: %ld\n", password);

  return 0;
}