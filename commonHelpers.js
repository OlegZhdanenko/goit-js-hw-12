import{S as b,a as L,i as h}from"./assets/vendor-89feecc5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const $=new b(".js-list a",{captionDelay:250,captionsData:"alt",close:!0,enableKeyboard:!0,docClose:!0}),d=document.querySelector(".js-form");d.addEventListener("submit",j);const p=document.querySelector(".js-list"),a=document.querySelector(".loader"),n=document.querySelector(".js-button");n.addEventListener("click",k);const f=40;let c=1,y,u;function k(){c+=1,a.style.display="block",m(u,c);const o=document.querySelectorAll(".js-list li")[0].getBoundingClientRect().height;console.log(o),window.scrollBy({button:o*3,behavior:"smooth"})}function S(){y===c&&(n.style.display="none",p.insertAdjacentHTML("beforeend",`<p class="end-collection">"We're sorry, but you've reached the end of search results."</p>`))}function j(i){i.preventDefault(),i.currentTarget.elements.input.value&&(u=i.currentTarget.elements.input.value,m(u),n.style.display="block"),p.innerHTML="",n.style.display="none",d.reset()}async function m(i,o=1){a.style.display="block",await L.get("https://pixabay.com/api/",{params:{key:"41617344-22077a3acba128accdfbcd745",q:`${i}`,image_type:"photo",orientation:"horizontal",safesearch:"true",page:`${o}`,per_page:`${f}`}}).then(r=>{r.data.total||(d.reset(),h.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})),n.style.display="block",a.style.display="none",p.insertAdjacentHTML("beforeend",w(r.data.hits)),y=Math.ceil(r.data.totalHits/`${f}`),S(),$.refresh()}).catch(r=>h.error({position:"topRight",message:`"${r}"`}))}function w(i){return i.map(({webformatURL:o,largeImageURL:r,tags:l,likes:e,views:t,comments:s,downloads:g})=>` <li>
    <a href="${r}" class ="js-link"><img src="${o}" alt="${l}" width="350px" height="250px"></a>
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
