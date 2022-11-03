// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let reload = () => {
    let wallet_data = JSON.parse(localStorage.getItem('amount'))
    document.querySelector("#wallet").innerText = `Wallet: $${wallet_data}`;
}

let id;
function debounce(func, delay) {
    if (id) {
        clearTimeout(id)
    }

    id = setTimeout(() => {
        func()
    }, delay)
}

let main = () => {
    let search = document.querySelector("#search").value;
    getMovie(search);
}

let getMovie = async (searchItem) => {
    const url = `https://www.omdbapi.com/?s=${searchItem}&page=1&apikey=1a0993a3`

    let res = await fetch(url);
    let data = await res.json();
    console.log(data)
    append(data.Search)
}


let movies = document.querySelector("#movies")
let append = (data) => {
    movies.innerHTML = null;
    data.forEach(el => {
        let div = document.createElement('div');
        div.setAttribute('class', 'movie_tab');

        let image = document.createElement('img');
        image.src = el.Poster;

        let title = document.createElement('h3');
        title.innerText = el.Title;

        let btn = document.createElement('button');
        btn.innerText = "Book Now"
        btn.setAttribute('class', "book_now");
        btn.addEventListener('click', () =>{
            storeMovie(el);
            window.location.href = './checkout.html'
        })

        div.append(image,title,btn);
        movies.append(div)
    });
}


let storeMovie = (el) => {
    localStorage.setItem('movie',JSON.stringify(el));
   
}