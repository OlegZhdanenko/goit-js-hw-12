import{S as b,a as $,i as f}from"./assets/vendor-89feecc5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const L=new b(".js-list a",{captionDelay:250,captionsData:"alt",close:!0,enableKeyboard:!0,docClose:!0}),u=document.querySelector(".js-form");u.addEventListener("submit",k);const p=document.querySelector(".js-list"),l=document.querySelector(".loader"),n=document.querySelector(".js-button");n.addEventListener("click",S);const w=p.getBoundingClientRect().width;window.scrollTo(0,`${w}`);const h=40;let c=12,y,d;n.style.display="none";function S(){c+=1,l.style.display="block",m(d,c)}function j(){y===c&&(n.style.display="none",p.insertAdjacentHTML("beforeend",`<p>"We're sorry, but you've reached the end of search results."</p>`))}function k(i){i.preventDefault(),d=i.currentTarget.elements.input.value,m(d),n.style.display="block",u.reset()}async function m(i,r=1){l.style.display="block",await $.get("https://pixabay.com/api/",{params:{key:"41617344-22077a3acba128accdfbcd745",q:`${i}`,image_type:"photo",orientation:"horizontal",safesearch:"true",page:`${r}`,per_page:`${h}`}}).then(o=>{o.data.total||(n.style.display="none",u.reset(),f.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})),l.style.display="none",p.insertAdjacentHTML("beforeend",q(o.data.hits)),y=Math.ceil(o.data.totalHits/`${h}`),j(),L.refresh()}).catch(o=>f.error({position:"topRight",message:`"${o}"`}))}function q(i){return i.map(({webformatURL:r,largeImageURL:o,tags:a,likes:e,views:t,comments:s,downloads:g})=>` <li>
    <a href="${o}"><img src="${r}" alt="${a}" width="350px" height="250px"></a>
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
