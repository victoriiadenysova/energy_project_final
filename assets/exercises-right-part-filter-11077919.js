var M=Object.defineProperty;var R=(t,e,s)=>e in t?M(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var L=(t,e,s)=>(R(t,typeof e!="symbol"?e+"":e,s),s);import{s as c}from"./applyAssets-85d2affc.js";import{i as v}from"./vendor-f93ed741.js";function H(){document.querySelector(".filter-list-js").classList.add("hidden-form");const e=document.querySelector(".wrap-js"),s=document.createElement("p");s.className="favorite-text",e.appendChild(s),s.textContent="It appears that you haven`t added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future."}const h=(t,e)=>t.length<=e?t:`${t.slice(0,e)}...`;function O(t){const e=document.querySelector(".filter-list-js");e.classList.remove("hidden-form"),t.length>6?e.classList.add("scroll"):e.classList.remove("scroll");const s=t.map(({_id:o,target:i,name:r,bodyPart:a,burnedCalories:n,time:E})=>`
  <li class="favourites_list_item" id=${o}>
    <div class="favourites_list_item_up">
      <div class="favourites_list_item_up_left">
        <span class="favourites_btn_workout">${h(i,6)}</span>
        <button id="btnTrash" class="favourites_btn_trash_icon favourites_btn_trash" data-id=${o}>
          <svg class="favourites_btn_trash_icon" width="16" height="16" aria-label="trash" data-id=${o}>
            <use class="favourites_btn_trash_icon" href="${c}#icon-trash" data-id=${o}></use>
          </svg>
        </button>
      </div>
      <div class="favourites_list_item_up_right">
        <button class="favourites_btn_start" data-id=${o}>
          <p class="favourites_btn_start_text" data-id=${o}>start</p>
          <svg class="favourites_btn_start_icon" width="16" height="16" aria-label="arrow" data-id=${o}>
            <use href="${c}#icon-arrow" data-id=${o}></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="favourites_list_item_middle">
      <div class="favourites_list_item_middle_icon">
        <svg class="favourites_list_item_middle_icon_svg">
          <use href="${c}#icon-run-man"></use>
        </svg>
      </div>
      <h3 class="favourites_list_item_middle_title">${h(r,16)}</h3>
    </div>
    <div class="favourites_list_item_bottom">
      <ul class="favourites_list_item_bottom_list">
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">
            Burned calories: <span>${n}/${E}</span>
          </p>
        </li>
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">
            Body part: <span>${h(a,5)}</span>
          </p>
        </li>
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">Target: <span>${h(i,7)}</span></p>
        </li>
      </ul>
    </div>
  </li>`).join("");e.innerHTML=s}let f=JSON.parse(localStorage.getItem("favorites"))||[];function N(t){const e=f.findIndex(s=>s._id===t._id);e>=0?f[e]=t:f.push(t),localStorage.setItem("favorites",JSON.stringify(f))}const T=t=>{f=f.filter(e=>e._id!==t),localStorage.setItem("favorites",JSON.stringify(f))};function y(){const t=JSON.parse(localStorage.getItem("favorites"));if(!(t!=null&&t.length)){H();return}O(t)}const x=document.getElementById("home"),q=document.getElementById("favorites"),B=document.getElementById("home-text"),C=document.getElementById("favorites-text");document.getElementById("navigation");const A=window.location.href.toString();let U=A.slice(-14);const F=()=>{U==="favorites.html"?(x.classList.remove("active"),B.classList.remove("black"),q.classList.add("active"),C.classList.add("black"),y()):(x.classList.add("active"),B.classList.add("black"),q.classList.remove("active"),C.classList.remove("black"))};F();setTimeout(()=>{const t=document.getElementById("burger-menu-open"),e=document.getElementById("burger"),s=document.getElementById("burger-button-close"),o=()=>{e.classList.remove("visually-hidden"),document.body.classList.add("disable-scroll")},i=()=>{e.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")},r=a=>{a.key==="Escape"&&i()};t&&t.addEventListener("click",o),s&&s.addEventListener("click",i),document.addEventListener("keydown",r)},300);class J{constructor(){this.overlay=document.querySelector(".overlay"),this.modal=null,this.closeButton=null,this.closeButtonHandler=()=>this.close(),this.escapeKeyHandler=e=>this.closeEsc(e),this.overlayClickHandler=e=>this.closeBack(e)}open(e){var s,o;this.overlay||(this.overlay=document.querySelector(".overlay")),this.overlay&&(this.overlay.innerHTML=e,this.overlay.style.zIndex=4,this.overlay.style.display="flex",this.modal=this.overlay.querySelector(".modal-info")||this.overlay.querySelector(".modal-get-raiting"),(s=this.modal)==null||s.classList.remove("visually-hidden"),this.closeButton=this.overlay.querySelector(".modal-button-close"),document.body.classList.add("no-scroll"),(o=this.closeButton)==null||o.addEventListener("click",this.closeButtonHandler),document.addEventListener("keydown",this.escapeKeyHandler),this.overlay.addEventListener("click",this.overlayClickHandler))}close(){var e,s;this.overlay&&((e=this.modal)==null||e.classList.add("visually-hidden"),this.overlay.innerHTML="",this.overlay.style.display="none",this.overlay.style.zIndex=-1,document.body.classList.remove("no-scroll"),(s=this.closeButton)==null||s.removeEventListener("click",this.closeButtonHandler),document.removeEventListener("keydown",this.escapeKeyHandler),this.overlay.removeEventListener("click",this.overlayClickHandler),this.modal=null,this.closeButton=null)}closeEsc(e){e.key==="Escape"&&this.close()}closeBack(e){e.target===this.overlay&&this.close()}}const b=new J,l=class{static handleErrors(e){return async()=>{try{return await e()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(e,s){const o=await fetch(e,s);if(!o.ok){const r=await o.text().catch(()=>"");throw new Error(`HTTP ${o.status} ${o.statusText} | ${e} | ${r.slice(0,200)}`)}return(o.headers.get("content-type")||"").includes("application/json")?o.json():o.text()}async getQuotes(){return await l.handleErrors(async()=>await l.fetchJson(`${l.BASE_URL}/quote`))()}async getByFilterName(e){return await l.handleErrors(async()=>{const o=new URLSearchParams({...e});return await l.fetchJson(`${l.BASE_URL}/filters?${o}`)})()}async getByFilterCategory(e){return await l.handleErrors(async()=>{const o=new URLSearchParams({...e});return await l.fetchJson(`${l.BASE_URL}/exercises?${o}`)})()}async getOneExercises(e){return await l.handleErrors(async()=>await l.fetchJson(`${l.BASE_URL}/exercises/${e}`))()}async addExercisesRate(e,s){return await l.handleErrors(async()=>{const i={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await l.fetchJson(`${l.BASE_URL}/exercises/${e}/rating`,i)})()}async addSubscription(e){return await l.handleErrors(async()=>{const o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return await l.fetchJson(`${l.BASE_URL}/subscription`,o)})()}};let p=l;L(p,"BASE_URL","https://your-energy.b.goit.study/api");const w=new p,m=class{open(){(!m.loaderEl||m.loaderEl.classList.contains("js-loader"))&&(m.loaderEl.style.display="block")}close(){m.loaderEl&&(m.loaderEl.style.display="none")}};let g=m;L(g,"loaderEl",document.querySelector(".js-loader"));const d=new g;function D(){return{quoteText:document.querySelector(".quote-text"),quoteAuthor:document.querySelector(".quote-author")}}async function k(){const{quoteText:t,quoteAuthor:e}=D();if(!t||!e)return;const s=localStorage.getItem("quote"),o=new Date().toDateString();if(s)try{const i=JSON.parse(s);if((i==null?void 0:i.date)===o&&(i!=null&&i.quote)){t.textContent=i.quote??"",e.textContent=i.author??"";return}}catch{}await P(t,e)}async function P(t,e){try{d.open();const s=await w.getQuotes();if(!s)return;const{author:o,quote:i}=s;localStorage.setItem("quote",JSON.stringify({author:o??"",quote:i??"",date:new Date().toDateString()})),t.textContent=i??"",e.textContent=o??""}finally{d.close()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",k,{once:!0}):k();function z(){const t=document.createElement("button");t.className="scroll-up-button hidden";const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("viewBox","0 0 32 32"),e.setAttribute("class","button-icon");const s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS("http://www.w3.org/1999/xlink","href",`${c}#icon-arrow`),e.appendChild(s),t.appendChild(e),t.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>50?t.classList.remove("hidden"):t.classList.add("hidden")}),document.body.appendChild(t)}z();function K(t){if(t)return t[0].toUpperCase()+t.slice(1)}function I(t,e=0){const s=Number(t);return Number.isFinite(s)?s:e}function u(t,e="—"){if(t==null)return e;const s=String(t).trim();return s||e}function Q(t){const e=I(t,0),s=Math.floor(e),o=e-s,i=Math.round(o*100);let r='<div class="rating-container-not-cursore" data-rating="0">';for(let n=1;n<=s;n+=1)r+=`<span class="star-js selected" data-value="${n}">
      <svg class="exercises_btn_start_icon_modal star-js selected">
        <use xlink:href="${c}#icon-star"></use>
      </svg>
    </span>`;if(s<5&&i>0){const n=s+1;r+=`<span class="last-star-js" data-value="${n}">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 20 19" fill="none">
        <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="url(#paint0_linear_126_18474)"/>
        <defs>
          <linearGradient id="paint0_linear_126_18474" x1="20" y1="10" x2="-1.99998" y2="10.0209" gradientUnits="userSpaceOnUse">
            <stop offset="${100-i}%" stop-color="rgba(244, 244, 244, 0.20)" />
            <stop offset="${i}%" stop-color="#EEA10C" />
          </linearGradient>
        </defs>
      </svg>
    </span>`}const a=s+(s<5&&i>0?1:0);for(let n=a+1;n<=5;n+=1)r+=`<span class="star-js" data-value="${n}">
      <svg class="exercises_btn_start_icon_modal star-js">
        <use xlink:href="${c}#icon-star"></use>
      </svg>
    </span>`;return r+"</div>"}function G(t){return t?`<button class="add-favorite-js" type="button" style="font-size: 14px;">
      <span class="remote-favorites">Remove from favorites</span>
      <svg class="trash-icon-img" width="15" height="15" aria-label="trash-icon">
        <use href="${c}#icon-trash"></use>
      </svg>
    </button>`:`<button class="add-favorite-js" type="button" style="font-size: 14px;">
    <span>Add to favorites</span>
    <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
      <use href="${c}#icon-heart"></use>
    </svg>
  </button>`}function X(t){const e=I(t==null?void 0:t.rating,0),s=Number.isFinite(e)?e.toFixed(1):"—";return`<div class="modal-info" data-id="${u(t==null?void 0:t._id,"")}">
    <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="${c}#icon-close"></use>
      </svg>
    </button>

    <div class="modal-image-vrapper">
      <img loading="lazy" class="modal-img" src="${u(t==null?void 0:t.gifUrl,"")}" alt="${u(t==null?void 0:t.name,"exercise")}" />
    </div>

    <div class="modal-content-wrapper">
      <div class="card-wrapper">
        <h3 class="title-card-modal">${K(u(t==null?void 0:t.name,""))}</h3>
        <div class="rating-modal-container-wrapper">
          <p>${s}</p>
          ${Q(e)}
        </div>
      </div>

      <hr class="modal-decoration-line" />

      <ul class="modal-table">
        <li><h4 class="title-collum">Target</h4><p class="data-collumn">${u(t==null?void 0:t.target)}</p></li>
        <li><h4 class="title-collum">Body Part</h4><p class="data-collumn">${u(t==null?void 0:t.bodyPart)}</p></li>
        <li><h4 class="title-collum">Equipment</h4><p class="data-collumn">${u(t==null?void 0:t.equipment)}</p></li>
        <li><h4 class="title-collum">Popular</h4><p class="data-collumn">${u(t==null?void 0:t.popularity)}</p></li>
        <li><h4 class="title-collum">Burned Calories</h4><p class="data-collumn">${u(t==null?void 0:t.burnedCalories,"")}/${u(t==null?void 0:t.time,"")} min</p></li>
      </ul>

      <hr class="modal-decoration-line" />

      <p class="about-exercise">${u(t==null?void 0:t.description,"")}</p>

      <div class="button-section-modal">
        <div class="refresh-button-js" data-favorite="${!!(t!=null&&t.favorite)}">
          ${G(!!(t!=null&&t.favorite))}
        </div>
        <button class="add-rating" type="button" style="font-size: 14px;">Give a rating</button>
      </div>
    </div>
  </div>`}function Y(t){return`<div class="modal-get-raiting" data-id="${u(t,"")}">
    <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="${c}#icon-close"></use>
      </svg>
    </button>

    <div class="get-rating-container">
      <div class="get-rating-choise">
        <h3 class="title-card-get-rating">Rating</h3>

        <div class="rating-container-js rating-container" data-rating="" data-id="">
          <p class="user-rating-js">0</p>
          ${[1,2,3,4,5].map(e=>`
            <span class="star-js" data-value="${e}">
              <svg class="exercises_btn_start_icon_rating star-js" width="15" height="15">
                <use xlink:href="${c}#icon-star"></use>
              </svg>
            </span>
          `).join("")}
        </div>

        <form class="form raiting-form">
          <label class="raiting-form-field">
            <input type="Email" class="raiting-form-field-input" name="user_email" placeholder="Email" required />
          </label>

          <label class="form-comment">
            <textarea class="raiting-form-field-comment" name="user_comment" placeholder="Your comment"></textarea>
          </label>

          <button class="raiting-form-submit" type="submit">Send</button>
        </form>
      </div>
    </div>
  </div>`}function Z(){const t=document.querySelector(".rating-container-js"),e=t.querySelectorAll(".exercises_btn_start_icon_rating");let s=t.querySelector(".user-rating-js");e.forEach((a,n)=>{a.addEventListener("mouseover",()=>o(n)),a.addEventListener("mouseout",i),a.addEventListener("click",()=>r(n+1))});function o(a){i();for(let n=0;n<=a;n++)e[n].classList.add("hovered"),s.textContent=`${n+1}`}function i(){e.forEach(a=>{const n=t.dataset.rating;a.classList.remove("hovered"),s.textContent=`${n||0}`})}function r(a){t.setAttribute("data-rating",a),e.forEach((n,E)=>{E+1<=a?n.classList.add("selected"):n.classList.remove("selected")})}}v.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});class V{error(e){v.error({title:"Error",message:e})}success(e){v.success({title:"OK",message:e})}info(e){v.info({title:"Info",message:e})}}const _=new V,W=document.querySelector(".filter-list-js");let $,S,j;async function tt(t){t.preventDefault();const e=document.querySelector(".modal-get-raiting").dataset.id,o=document.querySelector(".rating-container-js").dataset.rating,i=document.querySelector(".raiting-form-field-input").value,r=document.querySelector(".raiting-form-field-comment").value,a={rate:Number(o),email:i,review:r};d.open();const n=await w.addExercisesRate(e,a);d.close(),n.message?_.error(`${n.message}`):(_.success(`Thank you for your mark - ${a.rate} for ${n.name}`),b.close())}async function et(){const t=document.querySelector(".modal-info").dataset.id;b.close(),b.open(Y(t)),Z(),j=document.querySelector(".raiting-form"),j.addEventListener("submit",tt)}async function st(t){const e=document.querySelector(".refresh-button-js"),s=document.querySelector(".modal-info").dataset.id;let i=window.location.href.toString().slice(-14);if(e.dataset.favorite==="false"){e.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span class="remote-favorites">Remove from favorites</span>
                                        <svg class="trash-icon-img" width="18" height="18" aria-label="trash-icon">
                                            <use href="${c}#icon-trash"></use>
                                        </svg>
                                    </button>`,e.dataset.favorite="true",d.open();let r=await w.getOneExercises(s);d.close(),N(r),i==="favorites.html"&&y()}else e.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span>Add to favorites</span>
                                        <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                                            <use href="${c}#icon-heart"></use>
                                        </svg>
                                    </button>`,e.dataset.favorite="false",T(s),i==="favorites.html"&&y()}function ot(t){var i,r,a;const e=t.target;if(e.classList.contains("favourites_btn_trash_icon")){const n=e.dataset.id||((r=(i=e.closest("[data-id]"))==null?void 0:i.dataset)==null?void 0:r.id);if(!n)return;T(n),y();return}const s=e.closest("[data-id]"),o=(a=s==null?void 0:s.dataset)==null?void 0:a.id;o&&(e.classList.contains("favourites_btn_workout")||it(o))}W.addEventListener("click",ot);const it=async t=>{if(!t)return;let e;try{d.open(),e=await w.getOneExercises(t)}catch(o){_.error((o==null?void 0:o.message)||String(o));return}finally{d.close()}if(!e){_.error("Exercise not found or request failed");return}let s=!1;try{const o=localStorage.getItem("favorites"),i=o?JSON.parse(o):[];s=Array.isArray(i)&&i.some(r=>(r==null?void 0:r._id)===t)}catch{s=!1}e.favorite=s,b.open(X(e)),S=document.querySelector(".refresh-button-js"),$=document.querySelector(".add-rating"),$&&$.addEventListener("click",et),S&&S.addEventListener("click",st)};export{h as a,K as c,w as f,d as l,_ as m};
//# sourceMappingURL=exercises-right-part-filter-11077919.js.map
