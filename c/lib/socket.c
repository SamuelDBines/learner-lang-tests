#include <lua.h>
#include <lauxlib.h>

#include <string.h>
#include <errno.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>

static int l_listen(lua_State *L) {
  int port = (int)luaL_checkinteger(L, 1);

  int fd = socket(AF_INET, SOCK_STREAM, 0);
  if (fd < 0) return luaL_error(L, "socket: %s", strerror(errno));

  int yes = 1;
  setsockopt(fd, SOL_SOCKET, SO_REUSEADDR, &yes, sizeof(yes));

  struct sockaddr_in addr;
  memset(&addr, 0, sizeof(addr));
  addr.sin_family = AF_INET;
  addr.sin_addr.s_addr = htonl(INADDR_LOOPBACK); // 127.0.0.1
  addr.sin_port = htons((uint16_t)port);

  if (bind(fd, (struct sockaddr*)&addr, sizeof(addr)) < 0) {
    int e = errno; close(fd);
    return luaL_error(L, "bind: %s", strerror(e));
  }

  if (listen(fd, 128) < 0) {
    int e = errno; close(fd);
    return luaL_error(L, "listen: %s", strerror(e));
  }

  lua_pushinteger(L, fd);
  return 1;
}

static int l_accept(lua_State *L) {
  int server_fd = (int)luaL_checkinteger(L, 1);
  int client_fd = accept(server_fd, NULL, NULL);
  if (client_fd < 0) return luaL_error(L, "accept: %s", strerror(errno));
  lua_pushinteger(L, client_fd);
  return 1;
}

static int l_recv(lua_State *L) {
  int fd = (int)luaL_checkinteger(L, 1);
  int n  = (int)luaL_checkinteger(L, 2);
  if (n <= 0) n = 1;

  char *buf = (char*)lua_newuserdata(L, (size_t)n);
  ssize_t r = read(fd, buf, (size_t)n);
  if (r < 0) return luaL_error(L, "read: %s", strerror(errno));

  lua_pushlstring(L, buf, (size_t)r);
  return 1;
}

static int l_send(lua_State *L) {
  int fd = (int)luaL_checkinteger(L, 1);
  size_t len = 0;
  const char *s = luaL_checklstring(L, 2, &len);

  ssize_t w = write(fd, s, len);
  if (w < 0) return luaL_error(L, "write: %s", strerror(errno));

  lua_pushinteger(L, (lua_Integer)w);
  return 1;
}

static int l_close(lua_State *L) {
  int fd = (int)luaL_checkinteger(L, 1);
  close(fd);
  return 0;
}

static const luaL_Reg R[] = {
  {"listen", l_listen},
  {"accept", l_accept},
  {"recv",   l_recv},
  {"send",   l_send},
  {"close",  l_close},
  {NULL, NULL}
};

int luaopen_mysocket(lua_State *L) {
  luaL_newlib(L, R);
  return 1;
}
