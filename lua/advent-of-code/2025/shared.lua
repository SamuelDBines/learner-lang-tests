BLUE, RED, RESET = "\x1b[34m","\x1b[31m","\x1b[0m"

function now()
  return os.date("!%Y-%m-%d %H:%M:%S")
end

function perr(msg) 
  print(RED .. now() .. " LUA [Error]: " .. tostring(msg) .. RESET)
  error()
end

function plog(msg) 
  print(BLUE .. now() .. " LUA [RESULT]: " ..  " " .. tostring(msg) .. RESET)
end

function performance(main) 
  local perx = os.clock()
  if type(main) == 'function' then
    main()
  end
  print("elapsed time: ", os.clock() - perx)
end