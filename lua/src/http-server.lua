local req = io.read("*l") or ""

while true do 
  local line = io.read("*l")
  if not line or line == "" then break end
end

local body = "hello from lua\nrequest: " .. req .. "\n"
io.write(
  "HTTP/1.1 200 OK\r\n",
  "Content-Type: text/plain\r\n",
  "Content-Length: ", #body, "\r\n", 
  "ConnectionL close\r\n",
  "\r\n",
  body
)