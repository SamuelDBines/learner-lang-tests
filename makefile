# Lang Path
c_dir = c/src
js_dir = JS/
py_dir = python/
go_dir = go/
bash_dir = bash/
# Advent code 
## Default
advent_code = advent-of-code
advc_2025 = $(advent_code)/2025
## Lang Path 
c_advc_2025 = $(c_dir)/$(advc_2025)
js_advc_2025 = $(js_dir)/$(advc_2025)
py_advc_2025 = $(py_dir)/$(advc_2025)
go_advc_2025 = $(go_dir)/$(advc_2025)
bash_advc_2025 = $(bash_dir)/$(advc_2025)

advcode-2025:
	$(MAKE) -C $(c_advc_2025) run
	$(MAKE) -C $(js_advc_2025) run
	$(MAKE) -C $(py_advc_2025) run
	$(MAKE) -C $(go_dir) run
	$(MAKE) -C $(bash_dir) run


test:
	ls -la $(c_advc_2025);