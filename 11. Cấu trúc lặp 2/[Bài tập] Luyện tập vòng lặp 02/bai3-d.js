let b2 = "";
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= i; j++) {
            b2 += "&nbsp;&nbsp;";
        }
        for( let c = 5; c >= i; c--) {
            b2 += "*"
        };
        b2 += "<br>";
}
document.write(b2);
