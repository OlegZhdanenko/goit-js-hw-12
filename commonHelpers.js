import{S as b,a as $,i as f}from"./assets/vendor-89feecc5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const L=new b(".js-list a",{captionDelay:250,captionsData:"alt",close:!0,enableKeyboard:!0,docClose:!0}),u=document.querySelector(".js-form");u.addEventListener("submit",j);const p=document.querySelector(".js-list"),a=document.querySelector(".loader"),n=document.querySelector(".js-button");n.addEventListener("click",w);const S=p.getBoundingClientRect().height;window.scrollTo(0,`${S}`);const h=40;let c=12,y,d;n.style.display="none";function w(){c+=1,a.style.display="block",m(d,c)}function P(){y===c&&(n.style.display="none",p.insertAdjacentHTML("beforeend",`<p class="end-collection">"We're sorry, but you've reached the end of search results."</p>`))}function j(i){i.preventDefault(),i.currentTarget.elements.input.value&&(d=i.currentTarget.elements.input.value,m(d),n.style.display="block"),u.reset()}async function m(i,r=1){a.style.display="block",await $.get("https://pixabay.com/api/",{params:{key:"41617344-22077a3acba128accdfbcd745",q:`${i}`,image_type:"photo",orientation:"horizontal",safesearch:"true",page:`${r}`,per_page:`${h}`}}).then(o=>{o.data.total||(n.style.display="none",u.reset(),f.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})),a.style.display="none",p.insertAdjacentHTML("beforeend",k(o.data.hits)),y=Math.ceil(o.data.totalHits/`${h}`),P(),L.refresh()}).catch(o=>f.error({position:"topRight",message:`"${o}"`}))}function k(i){return i.map(({webformatURL:r,largeImageURL:o,tags:l,likes:e,views:t,comments:s,downloads:g})=>` <li>
    <a href="${o}"><img src="${r}" alt="${l}" width="350px" height="250px"></a>
    <ul class="discription-list">
    <li class="discription-item">
        <h2>Likes</h2>
        <p>${e}</p></li>
    <li class="discription-item">
        <h2>Views</h2>
        <p>${t}</p>
    </li>
    <li class="discription-item">
        <h2>Comments</h2>
        <p>${s}</p>
    </li>
    <li class="discription-item">
        <h2>Download</h2>
        <p>${g}</p>
    </li>
    </ul>
    </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
