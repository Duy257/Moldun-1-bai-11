

function Start() {
    let a = prompt('hãy nhập số');
    let b = Math.random();
    while(true) {
        if(a == b) {
            alert('bạn đã đoán đúng')
            break;
        }
        else if(a > b) {
            alert('số bạn nhập lớn hơn');
            
        }
        else {
            alert('số bạn nhập nhỏ hơn');
            
        }
    }
}