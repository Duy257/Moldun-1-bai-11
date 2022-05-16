let b1 = "";
    for (let i = 1; i <= 5; i++) {
        for (let j = 5; j >= i; j--) {
            b1 += "*";
        }
        b1 += "<br>";
    }
    b1 += "<br>";
    document.write(b1);