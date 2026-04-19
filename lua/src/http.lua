local socket = require("socket")
local server = assert(socket.bind("127.0.0.1", 8080))
print("Listening on http://127.0.0.1:8080")

while true do
  local client = server:accept()
  client:settimeout(2)

  local request = client:receive("*l") or ""
  -- Read and discard headers
  while true do
    local line = client:receive("*l")
    if not line or line == "" then break end
  end

  if request
  local body = "hello from lua\nrequest: " .. request .. "\n"
  local resp =
    "HTTP/1.1 200 OK\r\n" ..
    "Content-Type: text/plain\r\n" ..
    "Content-Length: " .. #body .. "\r\n" ..
    "Connection: close\r\n" ..
    "\r\n" ..
    body

  client:send(resp)
  client:close()
end