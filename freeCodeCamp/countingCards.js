var count = 0;

function cc(card) {
    let result;
    if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
        count++;
    } else if (card === 7 || card === 8 || card === 9) {
        count;
    }
    else if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
        count--;
    } else {
        return
    }

    if (count <= 0) {
        result = count + " Hold";
    }
    else if (count > 0) {
        result = count + " Bet";
    }
    return result
}

// cc(2); 
// cc('K');
console.log("ram", cc('K')); //-1
// cc(6);
console.log("2", cc(6));//+1
// cc(5);
console.log("3", cc(5))//1






