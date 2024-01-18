import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from 'axios';


const lightbox = new SimpleLightbox('.js-list a', {
    captionDelay: 250,
    captionsData: 'alt',
    close: true,
    enableKeyboard: true,
    docClose: true,
});


const form = document.querySelector(".js-form");
form.addEventListener("submit", onSearch);
const list = document.querySelector(".js-list");
const loader = document.querySelector(".loader");
const button = document.querySelector(".js-button");
button.addEventListener("click", loadMore);

const scrollPage = list.getBoundingClientRect().height;
window.scrollTo(0, `${scrollPage}`);

const perPage = 40;
let currentPage = 1;
let lastPage;
let wordForSearch;

function loadMore() {
    currentPage += 1;
    loader.style.display = 'block';
    getPhoto(wordForSearch, currentPage)
    
};

function endCollection() {
    if (lastPage===currentPage) {
        button.style.display = 'none'
        list.insertAdjacentHTML("beforeend",`<p class="end-collection">"We're sorry, but you've reached the end of search results."</p>`)
    }
};

function onSearch(evt) {
    evt.preventDefault()
    if (evt.currentTarget.elements.input.value) {
        wordForSearch = evt.currentTarget.elements.input.value
        getPhoto(wordForSearch)
        button.style.display = 'block';
    }
    list.innerHTML= ""
    button.style.display = 'none'
    form.reset()
};


async function getPhoto(wordForSearch,page=1) {
    loader.style.display = 'block';
    await axios.get("https://pixabay.com/api/", {
        params: {
            key: "41617344-22077a3acba128accdfbcd745",
            q: `${wordForSearch}`,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true",
            page: `${page}`,
            per_page: `${perPage}`
        }
    }).then(responce => {
        if (!responce.data.total) {
            
            form.reset()
            iziToast.error({
                position: 'topRight',
                message: 'Sorry, there are no images matching your search query. Please try again!'
            })
        }
        button.style.display = 'block'
        loader.style.display = 'none';
        list.insertAdjacentHTML("beforeend", createMarkup(responce.data.hits))
        lastPage = Math.ceil(responce.data.totalHits / `${perPage}`)
        endCollection()
        lightbox.refresh()
        

    })
        .catch(error => iziToast.error({
            position: 'topRight',
            message: `"${error}"`
        })
        )
    
};


function createMarkup(arr) {
    return arr.map(({webformatURL,largeImageURL,tags,likes,views,comments,downloads}) =>` <li>
    <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}" width="350px" height="250px"></a>
    <ul class="discription-list">
    <li class="discription-item">
        <h2>Likes</h2>
        <p>${likes}</p></li>
    <li class="discription-item">
        <h2>Views</h2>
        <p>${views}</p>
    </li>
    <li class="discription-item">
        <h2>Comments</h2>
        <p>${comments}</p>
    </li>
    <li class="discription-item">
        <h2>Download</h2>
        <p>${downloads}</p>
    </li>
    </ul>
    </li>`
    ).join('');
};
