# Socket setup for lua

Testing the different server options and lua doesn't come standard with socket.

```bash
clang -O2 -shared -fPIC \
 -I"$(brew --prefix lua)/include/lua" \
 -o socket.so socket.c
```
