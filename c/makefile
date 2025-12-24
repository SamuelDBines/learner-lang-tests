check-version:
	gcc -v;
hello:
	echo "Hello, World!"
	echo "This line will print if the file hello does not exist."

rmblah:
	rm -f bin/blah

blah: rmblah
	cc src/blah.c -o bin/blah

files := file1 file2
some_file: $(files)
	echo "Look at this variable: " $(files)
	echo "hello some file" >> some_file

append_file:
	echo "hello some file" >> some_file

file1:
	touch file1
file2:
	touch file2

clean:
	rm -f file1 file2 some_file