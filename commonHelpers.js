import{S as g,a as b,i as d}from"./assets/vendor-89feecc5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const $=new g(".js-list a",{captionDelay:250,captionsData:"alt",close:!0,enableKeyboard:!0,docClose:!0}),p=document.querySelector(".js-form");p.addEventListener("submit",L);const f=document.querySelector(".js-list"),a=document.querySelector(".loader"),l=document.querySelector(".js-button");l.addEventListener("click",w);const m=f.getBoundingClientRect().width;console.log(m);window.scrollTo(0,`${m}`);let u=1,c;l.style.display="none";function w(){u+=1,a.style.display="block",h(c,u)}function L(i){i.preventDefault(),c=i.currentTarget.elements.input.value,h(c),l.style.display="block"}async function h(i,r=1){a.style.display="block",await b.get("https://pixabay.com/api/",{params:{key:"41617344-22077a3acba128accdfbcd745",q:`${i}`,image_type:"photo",orientation:"horizontal",safesearch:"true",page:`${r}`,per_page:"40"}}).then(o=>{o.data.total||(l.style.display="none",p.reset(),d.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})),a.style.display="none",f.insertAdjacentHTML("beforeend",S(o.data.hits)),$.refresh()}).catch(o=>d.error({position:"topRight",message:`"${o}"`}))}function S(i){return i.map(({webformatURL:r,largeImageURL:o,tags:n,likes:e,views:t,comments:s,downloads:y})=>` <li>
    <a href="${o}"><img src="${r}" alt="${n}" width="350px" height="250px"></a>
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
        <p>${y}</p>
    </li>
    </ul>
    </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
