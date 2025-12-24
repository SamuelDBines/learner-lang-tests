require("shared")
local starting_pos, N = 50, 100
local p_one_pass, 
  p_one_val, 
  p_two_pass, 
  p_two_val = 0, starting_pos, 0, starting_pos

file = io.open("../../../advent-of-code/01-12-2025.txt", "r")
if not file then return nil end
io.input(file)

for line in io.lines() do
  local dir, amount,step = line:sub(1,1), tonumber(line:sub(2)), 0

  if type(amount) ~= "number" then
    perr("dir is not a number: " .. amount)
  end

  if dir == "L" then
    p_one_val = ((p_one_val - (amount % N) + N) % N)
    step = -1
  elseif dir == "R" then 
    p_one_val = (p_one_val + amount) % N
    step = 1
  else 
    perr("Unknown direction: " .. tostring(dir))
  end

  if p_one_val == 0 then
    p_one_pass = p_one_pass + 1
  end

  for i = 0, amount - 1 do 
    p_two_val =(p_two_val + step + N) % N
    if p_two_val == 0 then
      p_two_pass = p_two_pass + 1
    end
  end

end

plog("Password is " .. p_one_pass)
plog("Password is " .. p_two_pass)
-- function main() {

--   local line = io.read()
--   local pos = 1
--   while do
    
-- }

io.close()