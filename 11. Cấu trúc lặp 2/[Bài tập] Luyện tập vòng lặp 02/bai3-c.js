let b3 = "";
    for (let i = 1; i <= 5; i++) {
        for (let j = 5; j >= i; j--) {
            b3 += "&nbsp;&nbsp;";
        };
        for( let c = 1; c <= i; c++) {
            b3 += "*"
        };
        
        b3 += "<br>";
}
document.write(b3);

