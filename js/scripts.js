
//utilities js

function getDonationTaka (id){
    let donation = document.getElementById(id).innerText;
    let donationTaka =  parseFloat(donation);
    return donationTaka;
    
}

function getInputFieldValueById(id){
    const inPutValue = document.getElementById(id).value;
    const inPutNumber = parseFloat(inPutValue);
    return inPutNumber;
}


function getTextfieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue); 
    return textNumber;
}


// card-1
document.getElementById('btn-donate').addEventListener('click', function(event){
    event.preventDefault();
    const inputTakaValue = getInputFieldValueById('input-add-money');
    const currentBalance = getTextfieldValueById('account-balance');
    const allAmount = getDonationTaka('total-amount');
    

    if(isNaN(inputTakaValue) || inputTakaValue <=0){
        alert("Invalid Amount");
        return;
    }
   let amount = currentBalance + inputTakaValue;
   document.getElementById('account-balance').innerText = amount;

   alert("Amount add successfully");

   
    
   let totalTaka = allAmount- inputTakaValue;
   document.getElementById('total-amount').innerText = totalTaka ;


   const p = document.createElement('p');
   p.innerText = `${inputTakaValue}Taka is donate for Quata
   date: ${new Date().toLocaleDateString()} ${new date().toLocaleTimeString()} GMT+6 (Bangladesh Time) `;
   document.getElementById('history').appendChild(p);
   
    

    
   
})

// card-2
document.getElementById('btn-donate-2').addEventListener('click', function(event){
    event.preventDefault();
    const inputTakaValue = getInputFieldValueById('input-add-money-2');
    const currentBalance = getTextfieldValueById('account-balance-2');
    const allAmount = getDonationTaka('total-amount');
    

    if(isNaN(inputTakaValue) || inputTakaValue <=0){
        alert("Invalid Amount");
        return;
    }
   let amount = currentBalance + inputTakaValue;
   document.getElementById('account-balance-2').innerText = amount;
       
   alert("Amount add successfully");
 

   
    
   let totalTaka = allAmount- inputTakaValue;
   document.getElementById('total-amount').innerText = totalTaka ;


   const p = document.createElement('p');
   p.innerText = `${inputTakaValue}Taka is donate for Quata
   date: ${new Date().toLocaleDateString()} ${new date().toLocaleTimeString()} GMT+6 (Bangladesh Time) `;
   document.getElementById('history').appendChild(p);
   
    

    
   
})

// card-3
document.getElementById('btn-donate-3').addEventListener('click', function(event){
    event.preventDefault();
    const inputTakaValue = getInputFieldValueById('input-add-money-3');
    const currentBalance = getTextfieldValueById('account-balance-3');
    const allAmount = getDonationTaka('total-amount');
    

    if(isNaN(inputTakaValue) || inputTakaValue <=0){
        alert("Invalid Amount");
        return;
    }
   let amount = currentBalance + inputTakaValue;
   document.getElementById('account-balance-3').innerText = amount;

   alert("Amount add successfully");

   
    
   let totalTaka = allAmount- inputTakaValue;
   document.getElementById('total-amount').innerText = totalTaka ;


   const p = document.createElement('p');
   p.innerText = `${inputTakaValue}Taka is donate for Quata
   date: ${new Date().toLocaleDateString()} ${new date().toLocaleTimeString()} GMT+6 (Bangladesh Time) `;
   document.getElementById('history').appendChild(p);
   
    

    
   
})







