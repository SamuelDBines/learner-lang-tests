path = advent-of-code-2025
file = 01-12
file2 = 01-12(2).c
shared = shared

advofcode2025:
	rm -rf bin/;
	mkdir bin/;

app: advofcode2025
	cc $(file).c $(shared).c -o bin/$(path);

app2: advofcode2025
	cc $(file)(2).c $(shared).c -o bin/$(path)-2;

run: app
	chmod 744 bin/$(path);
	./bin/$(path);

run2: app2
	chmod 744 bin/$(path)-2;
	./bin/$(path)-2;
clean:
	rm -f bin/;
