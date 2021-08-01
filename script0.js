function convert(val) {
    while (val.includes("a")) {
        val = val.replace("a", "1569 ")
    }
    while (val.includes("b")) {
        val = val.replace("b", "5416 ")
    }
    while (val.includes("c")) {
        val = val.replace("c", "1232 ")
    }
    while (val.includes("d")) {
        val = val.replace("d", "4651 ")
    }
    while (val.includes("e")) {
        val = val.replace("e", "7891 ")
    }
    while (val.includes("f")) {
        val = val.replace("f", "5555 ")
    }
    while (val.includes("g")) {
        val = val.replace("g", "1416 ")
    }
    while (val.includes("h")) {
        val = val.replace("h", "1234 ")
    }
    while (val.includes("i")) {
        val = val.replace("i", "4444 ")
    }
    while (val.includes("j")) {
        val = val.replace("j", "3333 ")
    }
    while (val.includes("k")) {
        val = val.replace("k", "2222 ")
    }
    while (val.includes("l")) {
        val = val.replace("l", "0101 ")
    }
    while (val.includes("m")) {
        val = val.replace("m", "1010 ")
    }
    while (val.includes("n")) {
        val = val.replace("n", "0000 ")
    }
    while (val.includes("o")) {
        val = val.replace("o", "8080 ")
    }
    while (val.includes("p")) {
        val = val.replace("p", "7777 ")
    }
    while (val.includes("q")) {
        val = val.replace("q", "7512 ")
    }
    while (val.includes("r")) {
        val = val.replace("r", "0601 ")
    }
    while (val.includes("s")) {
        val = val.replace("s", "0001 ")
    }
    while (val.includes("t")) {
        val = val.replace("t", "5050 ")
    }
    while (val.includes("u")) {
        val = val.replace("u", "4564 ")
    }
    while (val.includes("v")) {
        val = val.replace("v", "0455 ")
    }
    while (val.includes("w")) {
        val = val.replace("w", "5032 ")
    }
    while (val.includes("x")) {
        val = val.replace("x", "1322 ")
    }
    while (val.includes("y")) {
        val = val.replace("y", "9000 ")
    }
    while (val.includes("z")) {
        val = val.replace("z", "8700 ")
    }
    while (val.includes(" ")) {
        val = val.replace(" ", "-")
    }
    document.getElementById("output").innerHTML = val;
}
