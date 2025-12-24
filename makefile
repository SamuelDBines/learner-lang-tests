# Lang Path
c_dir = c/src
js_dir = JS/
# Advent code 
## Default
advent_code = advent-of-code
advc_2025 = $(advent_code)/2025
## Lang Path 
c_advc_2025 = $(c_dir)/$(advc_2025)
js_advc_2025 = $(js_dir)/$(advc_2025)






advcode-2025:
	$(MAKE) -C $(c_advc_2025) run;
	$(MAKE) -C $(js_advc_2025) run;

test:
	ls -la $(c_advc_2025);