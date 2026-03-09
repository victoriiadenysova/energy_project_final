var R=Object.defineProperty;var H=(t,e,s)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var L=(t,e,s)=>(H(t,typeof e!="symbol"?e+"":e,s),s);import{i as g}from"./vendor-f93ed741.js";function O(){document.querySelector(".filter-list-js").classList.add("hidden-form");const e=document.querySelector(".wrap-js"),s=document.createElement("p");s.className="favorite-text",e.appendChild(s),s.textContent="It appears that you haven`t added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future."}const c="/energy_project/assets/sprite-c2a9f1af.svg",h=(t,e)=>t.length<=e?t:`${t.slice(0,e)}...`;function N(t){const e=document.querySelector(".filter-list-js");e.classList.remove("hidden-form"),t.length>6?e.classList.add("scroll"):e.classList.remove("scroll");const s=t.map(({_id:o,target:i,name:n,bodyPart:a,burnedCalories:r,time:$})=>`
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
      <h3 class="favourites_list_item_middle_title">${h(n,16)}</h3>
    </div>
    <div class="favourites_list_item_bottom">
      <ul class="favourites_list_item_bottom_list">
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">
            Burned calories: <span>${r}/${$}</span>
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
  </li>`).join("");e.innerHTML=s}let f=[];const v=JSON.parse(localStorage.getItem("favorites"));v!=null&&v.length&&f.push(...v);function A(t){updateFirestore(t),f.push(t),localStorage.setItem("favorites",JSON.stringify(f))}const I=t=>{deleteFavorites(t),f=f.filter(e=>e._id!==t),localStorage.setItem("favorites",JSON.stringify([...f]))},F=async()=>{localStorage.getItem("user")};function b(){F();const t=JSON.parse(localStorage.getItem("favorites"));if(!(t!=null&&t.length)){O();return}N(t)}const q=document.getElementById("home"),B=document.getElementById("favorites"),C=document.getElementById("home-text"),k=document.getElementById("favorites-text");document.getElementById("navigation");const U=window.location.href.toString();let J=U.slice(-14);const D=()=>{J==="favorites.html"?(q.classList.remove("active"),C.classList.remove("black"),B.classList.add("active"),k.classList.add("black"),b()):(q.classList.add("active"),C.classList.add("black"),B.classList.remove("active"),k.classList.remove("black"))};D();document.getElementById("burger-button");const P=document.getElementById("burger");document.getElementById("burger-button-close");const z=t=>{t.key==="Escape"&&P.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")};document.addEventListener("keydown",z);class K{constructor(){this.overlay=document.querySelector(".overlay"),this.modal=null,this.closeButton=null,this.closeButtonHandler=()=>this.close(),this.escapeKeyHandler=e=>this.closeEsc(e),this.overlayClickHandler=e=>this.closeBack(e)}open(e){var s,o;this.overlay||(this.overlay=document.querySelector(".overlay")),this.overlay&&(this.overlay.innerHTML=e,this.overlay.style.zIndex=4,this.overlay.style.display="flex",this.modal=this.overlay.querySelector(".modal-info")||this.overlay.querySelector(".modal-get-raiting"),(s=this.modal)==null||s.classList.remove("visually-hidden"),this.closeButton=this.overlay.querySelector(".modal-button-close"),document.body.classList.add("no-scroll"),(o=this.closeButton)==null||o.addEventListener("click",this.closeButtonHandler),document.addEventListener("keydown",this.escapeKeyHandler),this.overlay.addEventListener("click",this.overlayClickHandler))}close(){var e,s;this.overlay&&((e=this.modal)==null||e.classList.add("visually-hidden"),this.overlay.innerHTML="",this.overlay.style.display="none",this.overlay.style.zIndex=-1,document.body.classList.remove("no-scroll"),(s=this.closeButton)==null||s.removeEventListener("click",this.closeButtonHandler),document.removeEventListener("keydown",this.escapeKeyHandler),this.overlay.removeEventListener("click",this.overlayClickHandler),this.modal=null,this.closeButton=null)}closeEsc(e){e.key==="Escape"&&this.close()}closeBack(e){e.target===this.overlay&&this.close()}}const _=new K,l=class{static handleErrors(e){return async()=>{try{return await e()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(e,s){const o=await fetch(e,s);if(!o.ok){const n=await o.text().catch(()=>"");throw new Error(`HTTP ${o.status} ${o.statusText} | ${e} | ${n.slice(0,200)}`)}return(o.headers.get("content-type")||"").includes("application/json")?o.json():o.text()}async getQuotes(){return await l.handleErrors(async()=>await l.fetchJson(`${l.BASE_URL}/quote`))()}async getByFilterName(e){return await l.handleErrors(async()=>{const o=new URLSearchParams({...e});return await l.fetchJson(`${l.BASE_URL}/filters?${o}`)})()}async getByFilterCategory(e){return await l.handleErrors(async()=>{const o=new URLSearchParams({...e});return await l.fetchJson(`${l.BASE_URL}/exercises?${o}`)})()}async getOneExercises(e){return await l.handleErrors(async()=>await l.fetchJson(`${l.BASE_URL}/exercises/${e}`))()}async addExercisesRate(e,s){return await l.handleErrors(async()=>{const i={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await l.fetchJson(`${l.BASE_URL}/exercises/${e}/rating`,i)})()}async addSubscription(e){return await l.handleErrors(async()=>{const o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return await l.fetchJson(`${l.BASE_URL}/subscription`,o)})()}};let p=l;L(p,"BASE_URL","https://your-energy.b.goit.study/api");const E=new p,m=class{open(){(!m.loaderEl||m.loaderEl.classList.contains("js-loader"))&&(m.loaderEl.style.display="block")}close(){m.loaderEl&&(m.loaderEl.style.display="none")}};let y=m;L(y,"loaderEl",document.querySelector(".js-loader"));const d=new y;function Q(){return{quoteText:document.querySelector(".quote-text"),quoteAuthor:document.querySelector(".quote-author")}}async function j(){const{quoteText:t,quoteAuthor:e}=Q();if(!t||!e)return;const s=localStorage.getItem("quote"),o=new Date().toDateString();if(s)try{const i=JSON.parse(s);if((i==null?void 0:i.date)===o&&(i!=null&&i.quote)){t.textContent=i.quote??"",e.textContent=i.author??"";return}}catch{}await G(t,e)}async function G(t,e){try{d.open();const s=await E.getQuotes();if(!s)return;const{author:o,quote:i}=s;localStorage.setItem("quote",JSON.stringify({author:o??"",quote:i??"",date:new Date().toDateString()})),t.textContent=i??"",e.textContent=o??""}finally{d.close()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",j,{once:!0}):j();function X(){const t=document.createElement("button");t.className="scroll-up-button hidden";const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("viewBox","0 0 32 32"),e.setAttribute("class","button-icon");const s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS("http://www.w3.org/1999/xlink","href",`${c}#icon-arrow`),e.appendChild(s),t.appendChild(e),t.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>50?t.classList.remove("hidden"):t.classList.add("hidden")}),document.body.appendChild(t)}X();function Y(t){if(t)return t[0].toUpperCase()+t.slice(1)}function M(t,e=0){const s=Number(t);return Number.isFinite(s)?s:e}function u(t,e="—"){if(t==null)return e;const s=String(t).trim();return s||e}function Z(t){const e=M(t,0),s=Math.floor(e),o=e-s,i=Math.round(o*100);let n='<div class="rating-container-not-cursore" data-rating="0">';for(let r=1;r<=s;r+=1)n+=`<span class="star-js selected" data-value="${r}">
      <svg class="exercises_btn_start_icon_modal star-js selected">
        <use xlink:href="${c}#icon-star"></use>
      </svg>
    </span>`;if(s<5&&i>0){const r=s+1;n+=`<span class="last-star-js" data-value="${r}">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 20 19" fill="none">
        <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="url(#paint0_linear_126_18474)"/>
        <defs>
          <linearGradient id="paint0_linear_126_18474" x1="20" y1="10" x2="-1.99998" y2="10.0209" gradientUnits="userSpaceOnUse">
            <stop offset="${100-i}%" stop-color="rgba(244, 244, 244, 0.20)" />
            <stop offset="${i}%" stop-color="#EEA10C" />
          </linearGradient>
        </defs>
      </svg>
    </span>`}const a=s+(s<5&&i>0?1:0);for(let r=a+1;r<=5;r+=1)n+=`<span class="star-js" data-value="${r}">
      <svg class="exercises_btn_start_icon_modal star-js">
        <use xlink:href="${c}#icon-star"></use>
      </svg>
    </span>`;return n+"</div>"}function V(t){return t?`<button class="add-favorite-js" type="button" style="font-size: 14px;">
      <span class="remote-favorites">Remove from favorites</span>
      <svg class="trash-icon-img" width="15" height="15" aria-label="trash-icon">
        <use href="${c}#icon-trash"></use>
      </svg>
    </button>`:`<button class="add-favorite-js" type="button" style="font-size: 14px;">
    <span>Add to favorites</span>
    <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
      <use href="${c}#icon-heart"></use>
    </svg>
  </button>`}function W(t){const e=M(t==null?void 0:t.rating,0),s=Number.isFinite(e)?e.toFixed(1):"—";return`<div class="modal-info" data-id="${u(t==null?void 0:t._id,"")}">
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
        <h3 class="title-card-modal">${Y(u(t==null?void 0:t.name,""))}</h3>
        <div class="rating-modal-container-wrapper">
          <p>${s}</p>
          ${Z(e)}
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
          ${V(!!(t!=null&&t.favorite))}
        </div>
        <button class="add-rating" type="button" style="font-size: 14px;">Give a rating</button>
      </div>
    </div>
  </div>`}function tt(t){return`<div class="modal-get-raiting" data-id="${u(t,"")}">
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
  </div>`}function et(){const t=document.querySelector(".rating-container-js"),e=t.querySelectorAll(".exercises_btn_start_icon_rating");let s=t.querySelector(".user-rating-js");e.forEach((a,r)=>{a.addEventListener("mouseover",()=>o(r)),a.addEventListener("mouseout",i),a.addEventListener("click",()=>n(r+1))});function o(a){i();for(let r=0;r<=a;r++)e[r].classList.add("hovered"),s.textContent=`${r+1}`}function i(){e.forEach(a=>{const r=t.dataset.rating;a.classList.remove("hovered"),s.textContent=`${r||0}`})}function n(a){t.setAttribute("data-rating",a),e.forEach((r,$)=>{$+1<=a?r.classList.add("selected"):r.classList.remove("selected")})}}g.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});class st{error(e){g.error({title:"Error",message:e})}success(e){g.success({title:"OK",message:e})}info(e){g.info({title:"Info",message:e})}}const w=new st,ot=document.querySelector(".filter-list-js");let S,x,T;async function it(t){t.preventDefault();const e=document.querySelector(".modal-get-raiting").dataset.id,o=document.querySelector(".rating-container-js").dataset.rating,i=document.querySelector(".raiting-form-field-input").value,n=document.querySelector(".raiting-form-field-comment").value,a={rate:Number(o),email:i,review:n};d.open();const r=await E.addExercisesRate(e,a);d.close(),r.message?w.error(`${r.message}`):(w.success(`Thank you for your mark - ${a.rate} for ${r.name}`),_.close())}async function rt(){const t=document.querySelector(".modal-info").dataset.id;_.close(),_.open(tt(t)),et(),T=document.querySelector(".raiting-form"),T.addEventListener("submit",it)}async function nt(t){const e=document.querySelector(".refresh-button-js"),s=document.querySelector(".modal-info").dataset.id;let i=window.location.href.toString().slice(-14);if(e.dataset.favorite==="false"){e.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span class="remote-favorites">Remove from favorites</span>
                                        <svg class="trash-icon-img" width="18" height="18" aria-label="trash-icon">
                                            <use href="${c}#icon-trash"></use>
                                        </svg>
                                    </button>`,e.dataset.favorite="true",d.open();let n=await E.getOneExercises(s);d.close(),A(n),i==="favorites.html"&&b()}else e.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span>Add to favorites</span>
                                        <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                                            <use href="${c}#icon-heart"></use>
                                        </svg>
                                    </button>`,e.dataset.favorite="false",I(s),i==="favorites.html"&&b()}function at(t){var i,n,a;const e=t.target;if(e.classList.contains("favourites_btn_trash_icon")){const r=e.dataset.id||((n=(i=e.closest("[data-id]"))==null?void 0:i.dataset)==null?void 0:n.id);if(!r)return;I(r),b();return}const s=e.closest("[data-id]"),o=(a=s==null?void 0:s.dataset)==null?void 0:a.id;o&&(e.classList.contains("favourites_btn_workout")||lt(o))}ot.addEventListener("click",at);const lt=async t=>{if(!t)return;let e;try{d.open(),e=await E.getOneExercises(t)}catch(o){w.error((o==null?void 0:o.message)||String(o));return}finally{d.close()}if(!e){w.error("Exercise not found or request failed");return}let s=!1;try{const o=localStorage.getItem("favorites"),i=o?JSON.parse(o):[];s=Array.isArray(i)&&i.some(n=>(n==null?void 0:n._id)===t)}catch{s=!1}e.favorite=s,_.open(W(e)),x=document.querySelector(".refresh-button-js"),S=document.querySelector(".add-rating"),S&&S.addEventListener("click",rt),x&&x.addEventListener("click",nt)};export{h as a,Y as c,E as f,d as l,w as m,c as s};
//# sourceMappingURL=exercises-right-part-filter-642e13f1.js.map
