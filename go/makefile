adv_2025_dir = advent-of-code/2025
adv_2025_out = advent-of-code-2025
bin_adv_2025_out = bin/advent-of-code-2025
clean: 
	rm -rf bin

build: clean
	go build -o $(bin_adv_2025_out)-01-02 $(adv_2025_dir)/01-02.go;

run: build
	chmod 744 $(bin_adv_2025_out)-01-02;
	$(bin_adv_2025_out)-01-02;

	