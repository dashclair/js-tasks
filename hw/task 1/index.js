const gettingCash = (banknotes, sum) => {

    const result = [];
    
    const reversed = banknotes.reverse();

    banknotes.forEach (banknote => {
        while (sum - banknote >= 0){
            sum -= banknote;
            
            result.push(banknote);
        }
    })
    
        return result
    }
    
    console.log(gettingCash([1,5,10,20,50,100,500],(2243)))