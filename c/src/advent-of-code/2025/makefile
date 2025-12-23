path = advent-of-code-2025
path2 = advent-of-code-2025-2
file = 01-12.c
file2 = 01-12(2).c
shared = shared

advofcode2025:
	rm -rf bin/;
	mkdir bin/;

app: advofcode2025
	cc $(file) $(shared).c -o bin/$(path);

run: app
	chmod 744 bin/$(path);
	./bin/$(path);
	
clean:
	rm -f bin/;
