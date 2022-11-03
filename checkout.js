// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


let reload = () => {
    let wallet_data = JSON.parse(localStorage.getItem('amount'))
    document.querySelector("#wallet").innerText = `Wallet: $${wallet_data}`;
    
    let storeMovie = JSON.parse(localStorage.getItem('movie'))
    console.log(storeMovie)
    append(storeMovie)
}

let getData = () => {
    let wallet_data = JSON.parse(localStorage.getItem('amount'))
    let user_name = document.querySelector("#user_name").value;
    let number_of_seats = +document.querySelector("#number_of_seats").value;

    document.querySelector("#user_name").value = null;
    document.querySelector("#number_of_seats").value = null;


    if ((number_of_seats * 100) > wallet_data) {
        alert('Insufficient Balance!');
        return;
    }
    // console.log((number_of_seats * 100));
    total_amount = (number_of_seats * 100);
    wallet_data -= total_amount;
    // console.log(wallet_data);
    alert(`Hello ${user_name} Your ${number_of_seats} Confirmed`)

    localStorage.setItem('amount',JSON.stringify(wallet_data))
    reload()
}




let movies = document.querySelector("#movie")
let append = ({Title,Poster}) => {
    movies.innerHTML = null;

        let div = document.createElement('div');
      
        

        let image = document.createElement('img');
        image.src = Poster;

        let title = document.createElement('h3');
        title.innerText = Title;

        div.append(image,title);
        movies.append(div)
   
}