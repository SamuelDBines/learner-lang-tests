package main

import (
	"fmt"
	"os"
	"path/filepath"
	"strconv"
	"strings"
	"time"
)

const BLUE string = "\x1b[34m"
const RESET string = "\x1b[0m"
const RED string = "\x1b[31m"

const startingPosition int64 = 50
const N int64 = 100

func check(err any) {
	if err != nil {
		fmt.Println(RED, "[Error] ", formatDate(), ": ", err, RESET)
		panic(err)
	}
}

func Log(password int64) {
	fmt.Println(BLUE, "[Result] ", formatDate(), ": ", password, RESET)
}

func formatDate() string {
	t := time.Now()
	return fmt.Sprintf("%d-%02d-%02d %02d:%02d:%02d",
		t.Year(), t.Month(), t.Day(),
		t.Hour(), t.Minute(), t.Second())
}

func isInt(v any) bool {
	_, ok := v.(int)
	return ok
}

func read_file() string {
	cwd, _ := os.Getwd()
	path := filepath.Join(cwd, "../advent-of-code/01-12-2025.txt")
	dat, err := os.ReadFile(path)
	check(err)
	return string(dat)
}

func POne(rangeArr []string) int64 {
	var password int64 = 0
	var value int64 = startingPosition
	for _, s := range rangeArr {
		dir := string(s[0])
		amountStr := strings.TrimSpace(s[1:])
		amount, err := strconv.ParseInt(amountStr, 10, 64)
		if err != nil {
			check(err)
		}
		if dir == "L" {
			value = (value - (amount % N) + N) % N
		} else if dir == "R" {
			value = (value + amount) % N
		} else {
			panic("Error unknown direction")
		}
		if value == 0 {
			password++
		}
	}
	return password
}

func PTwo(rangeArr []string) int64 {
	var password int64 = 0
	var value int64 = startingPosition
	for _, s := range rangeArr {
		dir := string(s[0])
		amountStr := strings.TrimSpace(s[1:])
		amount, err := strconv.ParseInt(amountStr, 10, 0)
		if err != nil {
			check(err)
		}

		step := int64(0)
		if dir == "L" {
			step = -1
		} else if dir == "R" {
			step = 1
		} else {
			panic("Error unknown direction")
		}
		for k := int64(0); k < amount; k++ {
			value = (value + step + N) % N
			if value == 0 {
				password++
			}
		}

	}
	return password
}

func main() {
	dat := read_file()
	rangeArr := strings.Split(strings.TrimSpace(dat), "\n")
	pOneChan := make(chan int64, 1)
	pTwoChan := make(chan int64, 1)

	go func() {
		pOneChan <- POne(rangeArr)
	}()

	go func() {
		pTwoChan <- PTwo(rangeArr)
	}()

	pOneOut := <-pOneChan
	Log(pOneOut)
	pTwoOut := <-pTwoChan
	Log(pTwoOut)

}
