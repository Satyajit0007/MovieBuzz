// Store the wallet amount to your local storage with key "amount"

let amount;
let wallet_balance = 0;
// let wallet_data  = JSON.parse(localStorage.getItem('amount')) || []
let addAmount  = () => {
    amount = +document.querySelector("#amount").value;
    if(!amount){
        alert('You have not put valid amount');
        return;
    }
    document.querySelector("#amount").value = null;
    wallet_balance += amount;
    document.querySelector("#wallet").innerText = wallet_balance
    // wallet_data.push( wallet_balance);
    localStorage.setItem('amount', JSON.stringify(wallet_balance))
    reload()
      
}

let reload = () => {
    let wallet_data = JSON.parse(localStorage.getItem('amount'))
    document.querySelector("#wallet").innerText = `Wallet:  $${wallet_data}`;

}