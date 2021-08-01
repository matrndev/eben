function convert(val) {
    while (val.includes("1569-")) {
        val = val.replace("1569-", "a")
    }
    while (val.includes("5416-")) {
        val = val.replace("5416-", "b")
    }
    while (val.includes("1232-")) {
        val = val.replace("1232-", "c")
    }
    while (val.includes("4651-")) {
        val = val.replace("4651-", "d")
    }
    while (val.includes("7891-")) {
        val = val.replace("7891-", "e")
    }
    while (val.includes("5555-")) {
        val = val.replace("5555-", "f")
    }
    while (val.includes("1416-")) {
        val = val.replace("1416-", "g")
    }
    while (val.includes("1234-")) {
        val = val.replace("1234-", "h")
    }
    while (val.includes("4444-")) {
        val = val.replace("4444-", "i")
    }
    while (val.includes("3333-")) {
        val = val.replace("3333-", "j")
    }
    while (val.includes("2222-")) {
        val = val.replace("2222-", "k")
    }
    while (val.includes("0101-")) {
        val = val.replace("0101-", "l")
    }
    while (val.includes("1010-")) {
        val = val.replace("1010-", "m")
    }
    while (val.includes("0000-")) {
        val = val.replace("0000-", "n")
    }
    while (val.includes("8080-")) {
        val = val.replace("8080-", "o")
    }
    while (val.includes("7777-")) {
        val = val.replace("7777-", "p")
    }
    while (val.includes("7512-")) {
        val = val.replace("7512-", "q")
    }
    while (val.includes("0601-")) {
        val = val.replace("0601-", "r")
    }
    while (val.includes("0001-")) {
        val = val.replace("0001-", "s")
    }
    while (val.includes("5050-")) {
        val = val.replace("5050-", "t")
    }
    while (val.includes("4564-")) {
        val = val.replace("4564-", "u")
    }
    while (val.includes("0455-")) {
        val = val.replace("0455-", "v")
    }
    while (val.includes("5032-")) {
        val = val.replace("5032-", "w")
    }
    while (val.includes("1322-")) {
        val = val.replace("1322-", "x")
    }
    while (val.includes("9000-")) {
        val = val.replace("9000-", "y")
    }
    while (val.includes("8700-")) {
        val = val.replace("8700-", "z")
    }
    document.getElementById("output").innerHTML = val;
}
