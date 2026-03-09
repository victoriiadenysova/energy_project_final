var k=Object.defineProperty;var M=(e,t,s)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var S=(e,t,s)=>(M(e,typeof t!="symbol"?t+"":t,s),s);import{i as O,g as H,a as N,d as D,b as C,c as F,e as U,s as J,f as g}from"./vendor-295897c2.js";function q(){const e=document.querySelector("#header");if(!e)return;const t=e.querySelector("#home"),s=e.querySelector("#favorites");if(!t||!s)return;const r=window.location.pathname.endsWith("favorites.html");t.classList.toggle("active",!r),s.classList.toggle("active",r);const i=e.querySelector("#home-text"),a=e.querySelector("#favorites-text");i&&i.classList.toggle("black",!r),a&&a.classList.toggle("black",r)}window.addEventListener("DOMContentLoaded",q);window.addEventListener("partials:loaded",q);window.addEventListener("popstate",q);document.getElementById("burger-button");const P=document.getElementById("burger");document.getElementById("burger-button-close");const z=e=>{e.key==="Escape"&&P.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")};document.addEventListener("keydown",z);function V(){document.querySelector(".filter-list-js").classList.add("hidden-form");const t=document.querySelector(".wrap-js"),s=document.createElement("p");s.className="favorite-text",t.appendChild(s),s.textContent="It appears that you haven`t added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future."}const l="/energy_project/assets/sprite-c2a9f1af.svg",h=(e,t)=>e.length<=t?e:`${e.slice(0,t)}...`;function G(e){const t=document.querySelector(".filter-list-js");t.classList.remove("hidden-form"),e.length>6?t.classList.add("scroll"):t.classList.remove("scroll");const s=e.map(({_id:o,target:r,name:i,bodyPart:a,burnedCalories:n,time:w})=>`
  <li class="favourites_list_item" id=${o}>
    <div class="favourites_list_item_up">
      <div class="favourites_list_item_up_left">
        <span class="favourites_btn_workout">${h(r,6)}</span>
        <button id="btnTrash" class="favourites_btn_trash_icon favourites_btn_trash" data-id=${o}>
          <svg class="favourites_btn_trash_icon" width="16" height="16" aria-label="trash" data-id=${o}>
            <use class="favourites_btn_trash_icon" href="${l}#icon-trash" data-id=${o}></use>
          </svg>
        </button>
      </div>
      <div class="favourites_list_item_up_right">
        <button class="favourites_btn_start" data-id=${o}>
          <p class="favourites_btn_start_text" data-id=${o}>start</p>
          <svg class="favourites_btn_start_icon" width="16" height="16" aria-label="arrow" data-id=${o}>
            <use href="${l}#icon-arrow" data-id=${o}></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="favourites_list_item_middle">
      <div class="favourites_list_item_middle_icon">
        <svg class="favourites_list_item_middle_icon_svg">
          <use href="${l}#icon-run-man"></use>
        </svg>
      </div>
      <h3 class="favourites_list_item_middle_title">${h(i,16)}</h3>
    </div>
    <div class="favourites_list_item_bottom">
      <ul class="favourites_list_item_bottom_list">
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">
            Burned calories: <span>${n}/${w}</span>
          </p>
        </li>
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">
            Body part: <span>${h(a,5)}</span>
          </p>
        </li>
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">Target: <span>${h(r,7)}</span></p>
        </li>
      </ul>
    </div>
  </li>`).join("");t.innerHTML=s}const K={apiKey:"AIzaSyCHjn7hmADqXOnoaTT-9Y2DPmibHk8NRXs",authDomain:"energy-project-85414.firebaseapp.com",projectId:"energy-project-85414",storageBucket:"energy-project-85414.firebasestorage.app",messagingSenderId:"254845757433",appId:"1:254845757433:web:1f1c887239cdf1eff37f28",measurementId:"G-1L4V3S7H1N"};console.log("Усі змінні середовища:",{VITE_FIREBASE_API_KEY:"AIzaSyCHjn7hmADqXOnoaTT-9Y2DPmibHk8NRXs",VITE_FIREBASE_AUTH_DOMAIN:"energy-project-85414.firebaseapp.com",VITE_FIREBASE_PROJECT_ID:"energy-project-85414",VITE_FIREBASE_STORAGE_BUCKET:"energy-project-85414.firebasestorage.app",VITE_FIREBASE_MESSAGING_SENDER_ID:"254845757433",VITE_FIREBASE_APP_ID:"1:254845757433:web:1f1c887239cdf1eff37f28",VITE_FIREBASE_MEASUREMENT_ID:"G-1L4V3S7H1N",BASE_URL:"/energy_project/",MODE:"production",DEV:!1,PROD:!0});const j=O(K),X=H(j),I=N(j),Y=async e=>{const t=X.currentUser;if(t)try{J(C(I,t.email,e._id),e)}catch(s){console.log(s.message)}},Q=async e=>{const t=localStorage.getItem("user");if(t)try{D(C(I,t,e))}catch(s){console.log(s.message)}},Z=async()=>{const e=localStorage.getItem("user"),t=[];if(!e)return;(await F(U(I,e))).forEach(o=>{t.push(o.data())}),localStorage.setItem("favorites",JSON.stringify(t))};function x(){Z();const e=JSON.parse(localStorage.getItem("favorites"));if(!(e!=null&&e.length)){V();return}G(e)}class W{constructor(){this.overlay=document.querySelector(".overlay"),this.modal=null,this.closeButton=null,this.closeButtonHandler=()=>this.close(),this.escapeKeyHandler=t=>this.closeEsc(t),this.overlayClickHandler=t=>this.closeBack(t)}open(t){var s,o;this.overlay||(this.overlay=document.querySelector(".overlay")),this.overlay&&(this.overlay.innerHTML=t,this.overlay.style.zIndex=4,this.overlay.style.display="flex",this.modal=this.overlay.querySelector(".modal-info")||this.overlay.querySelector(".modal-get-raiting"),(s=this.modal)==null||s.classList.remove("visually-hidden"),this.closeButton=this.overlay.querySelector(".modal-button-close"),document.body.classList.add("no-scroll"),(o=this.closeButton)==null||o.addEventListener("click",this.closeButtonHandler),document.addEventListener("keydown",this.escapeKeyHandler),this.overlay.addEventListener("click",this.overlayClickHandler))}close(){var t,s;this.overlay&&((t=this.modal)==null||t.classList.add("visually-hidden"),this.overlay.innerHTML="",this.overlay.style.display="none",this.overlay.style.zIndex=-1,document.body.classList.remove("no-scroll"),(s=this.closeButton)==null||s.removeEventListener("click",this.closeButtonHandler),document.removeEventListener("keydown",this.escapeKeyHandler),this.overlay.removeEventListener("click",this.overlayClickHandler),this.modal=null,this.closeButton=null)}closeEsc(t){t.key==="Escape"&&this.close()}closeBack(t){t.target===this.overlay&&this.close()}}const _=new W,c=class{static handleErrors(t){return async()=>{try{return await t()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(t,s){const o=await fetch(t,s);if(!o.ok){const i=await o.text().catch(()=>"");throw new Error(`HTTP ${o.status} ${o.statusText} | ${t} | ${i.slice(0,200)}`)}return(o.headers.get("content-type")||"").includes("application/json")?o.json():o.text()}async getQuotes(){return await c.handleErrors(async()=>await c.fetchJson(`${c.BASE_URL}/quote`))()}async getByFilterName(t){return await c.handleErrors(async()=>{const o=new URLSearchParams({...t});return await c.fetchJson(`${c.BASE_URL}/filters?${o}`)})()}async getByFilterCategory(t){return await c.handleErrors(async()=>{const o=new URLSearchParams({...t});return await c.fetchJson(`${c.BASE_URL}/exercises?${o}`)})()}async getOneExercises(t){return await c.handleErrors(async()=>await c.fetchJson(`${c.BASE_URL}/exercises/${t}`))()}async addExercisesRate(t,s){return await c.handleErrors(async()=>{const r={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await c.fetchJson(`${c.BASE_URL}/exercises/${t}/rating`,r)})()}async addSubscription(t){return await c.handleErrors(async()=>{const o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return await c.fetchJson(`${c.BASE_URL}/subscription`,o)})()}};let v=c;S(v,"BASE_URL","https://your-energy.b.goit.study/api");const E=new v,f=class{open(){(!f.loaderEl||f.loaderEl.classList.contains("js-loader"))&&(f.loaderEl.style.display="block")}close(){f.loaderEl&&(f.loaderEl.style.display="none")}};let y=f;S(y,"loaderEl",document.querySelector(".js-loader"));const d=new y;function ee(){return{quoteText:document.querySelector(".quote-text"),quoteAuthor:document.querySelector(".quote-author")}}async function T(){const{quoteText:e,quoteAuthor:t}=ee();if(!e||!t)return;const s=localStorage.getItem("quote"),o=new Date().toDateString();if(s)try{const r=JSON.parse(s);if((r==null?void 0:r.date)===o&&(r!=null&&r.quote)){e.textContent=r.quote??"",t.textContent=r.author??"";return}}catch{}await te(e,t)}async function te(e,t){try{d.open();const s=await E.getQuotes();if(!s)return;const{author:o,quote:r}=s;localStorage.setItem("quote",JSON.stringify({author:o??"",quote:r??"",date:new Date().toDateString()})),e.textContent=r??"",t.textContent=o??""}finally{d.close()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",T,{once:!0}):T();function se(){const e=document.createElement("button");e.className="scroll-up-button hidden";const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("viewBox","0 0 32 32"),t.setAttribute("class","button-icon");const s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS("http://www.w3.org/1999/xlink","href",`${l}#icon-arrow`),t.appendChild(s),e.appendChild(t),e.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>50?e.classList.remove("hidden"):e.classList.add("hidden")}),document.body.appendChild(e)}se();function oe(e){if(e)return e[0].toUpperCase()+e.slice(1)}function A(e,t=0){const s=Number(e);return Number.isFinite(s)?s:t}function u(e,t="—"){if(e==null)return t;const s=String(e).trim();return s||t}function re(e){const t=A(e,0),s=Math.floor(t),o=t-s,r=Math.round(o*100);let i='<div class="rating-container-not-cursore" data-rating="0">';for(let n=1;n<=s;n+=1)i+=`<span class="star-js selected" data-value="${n}">
      <svg class="exercises_btn_start_icon_modal star-js selected">
        <use xlink:href="${l}#icon-star"></use>
      </svg>
    </span>`;if(s<5&&r>0){const n=s+1;i+=`<span class="last-star-js" data-value="${n}">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 20 19" fill="none">
        <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="url(#paint0_linear_126_18474)"/>
        <defs>
          <linearGradient id="paint0_linear_126_18474" x1="20" y1="10" x2="-1.99998" y2="10.0209" gradientUnits="userSpaceOnUse">
            <stop offset="${100-r}%" stop-color="rgba(244, 244, 244, 0.20)" />
            <stop offset="${r}%" stop-color="#EEA10C" />
          </linearGradient>
        </defs>
      </svg>
    </span>`}const a=s+(s<5&&r>0?1:0);for(let n=a+1;n<=5;n+=1)i+=`<span class="star-js" data-value="${n}">
      <svg class="exercises_btn_start_icon_modal star-js">
        <use xlink:href="${l}#icon-star"></use>
      </svg>
    </span>`;return i+"</div>"}function ne(e){return e?`<button class="add-favorite-js" type="button" style="font-size: 14px;">
      <span class="remote-favorites">Remove from favorites</span>
      <svg class="trash-icon-img" width="15" height="15" aria-label="trash-icon">
        <use href="${l}#icon-trash"></use>
      </svg>
    </button>`:`<button class="add-favorite-js" type="button" style="font-size: 14px;">
    <span>Add to favorites</span>
    <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
      <use href="${l}#icon-heart"></use>
    </svg>
  </button>`}function ie(e){const t=A(e==null?void 0:e.rating,0),s=Number.isFinite(t)?t.toFixed(1):"—";return`<div class="modal-info" data-id="${u(e==null?void 0:e._id,"")}">
    <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="${l}#icon-close"></use>
      </svg>
    </button>

    <div class="modal-image-vrapper">
      <img loading="lazy" class="modal-img" src="${u(e==null?void 0:e.gifUrl,"")}" alt="${u(e==null?void 0:e.name,"exercise")}" />
    </div>

    <div class="modal-content-wrapper">
      <div class="card-wrapper">
        <h3 class="title-card-modal">${oe(u(e==null?void 0:e.name,""))}</h3>
        <div class="rating-modal-container-wrapper">
          <p>${s}</p>
          ${re(t)}
        </div>
      </div>

      <hr class="modal-decoration-line" />

      <ul class="modal-table">
        <li><h4 class="title-collum">Target</h4><p class="data-collumn">${u(e==null?void 0:e.target)}</p></li>
        <li><h4 class="title-collum">Body Part</h4><p class="data-collumn">${u(e==null?void 0:e.bodyPart)}</p></li>
        <li><h4 class="title-collum">Equipment</h4><p class="data-collumn">${u(e==null?void 0:e.equipment)}</p></li>
        <li><h4 class="title-collum">Popular</h4><p class="data-collumn">${u(e==null?void 0:e.popularity)}</p></li>
        <li><h4 class="title-collum">Burned Calories</h4><p class="data-collumn">${u(e==null?void 0:e.burnedCalories,"")}/${u(e==null?void 0:e.time,"")} min</p></li>
      </ul>

      <hr class="modal-decoration-line" />

      <p class="about-exercise">${u(e==null?void 0:e.description,"")}</p>

      <div class="button-section-modal">
        <div class="refresh-button-js" data-favorite="${!!(e!=null&&e.favorite)}">
          ${ne(!!(e!=null&&e.favorite))}
        </div>
        <button class="add-rating" type="button" style="font-size: 14px;">Give a rating</button>
      </div>
    </div>
  </div>`}function ae(e){return`<div class="modal-get-raiting" data-id="${u(e,"")}">
    <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="${l}#icon-close"></use>
      </svg>
    </button>

    <div class="get-rating-container">
      <div class="get-rating-choise">
        <h3 class="title-card-get-rating">Rating</h3>

        <div class="rating-container-js rating-container" data-rating="" data-id="">
          <p class="user-rating-js">0</p>
          ${[1,2,3,4,5].map(t=>`
            <span class="star-js" data-value="${t}">
              <svg class="exercises_btn_start_icon_rating star-js" width="15" height="15">
                <use xlink:href="${l}#icon-star"></use>
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
  </div>`}function ce(){const e=document.querySelector(".rating-container-js"),t=e.querySelectorAll(".exercises_btn_start_icon_rating");let s=e.querySelector(".user-rating-js");t.forEach((a,n)=>{a.addEventListener("mouseover",()=>o(n)),a.addEventListener("mouseout",r),a.addEventListener("click",()=>i(n+1))});function o(a){r();for(let n=0;n<=a;n++)t[n].classList.add("hovered"),s.textContent=`${n+1}`}function r(){t.forEach(a=>{const n=e.dataset.rating;a.classList.remove("hovered"),s.textContent=`${n||0}`})}function i(a){e.setAttribute("data-rating",a),t.forEach((n,w)=>{w+1<=a?n.classList.add("selected"):n.classList.remove("selected")})}}let m=[];const p=JSON.parse(localStorage.getItem("favorites"));p!=null&&p.length&&m.push(...p);function le(e){Y(e),m.push(e),localStorage.setItem("favorites",JSON.stringify(m))}const R=e=>{Q(e),m=m.filter(t=>t._id!==e),localStorage.setItem("favorites",JSON.stringify([...m]))};g.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});class ue{error(t){g.error({title:"Error",message:t})}success(t){g.success({title:"OK",message:t})}info(t){g.info({title:"Info",message:t})}}const b=new ue,de=document.querySelector(".filter-list-js");let L,$,B;async function fe(e){e.preventDefault();const t=document.querySelector(".modal-get-raiting").dataset.id,o=document.querySelector(".rating-container-js").dataset.rating,r=document.querySelector(".raiting-form-field-input").value,i=document.querySelector(".raiting-form-field-comment").value,a={rate:Number(o),email:r,review:i};d.open();const n=await E.addExercisesRate(t,a);d.close(),n.message?b.error(`${n.message}`):(b.success(`Thank you for your mark - ${a.rate} for ${n.name}`),_.close())}async function me(){const e=document.querySelector(".modal-info").dataset.id;_.close(),_.open(ae(e)),ce(),B=document.querySelector(".raiting-form"),B.addEventListener("submit",fe)}async function he(e){const t=document.querySelector(".refresh-button-js"),s=document.querySelector(".modal-info").dataset.id;let r=window.location.href.toString().slice(-14);if(t.dataset.favorite==="false"){t.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span class="remote-favorites">Remove from favorites</span>
                                        <svg class="trash-icon-img" width="18" height="18" aria-label="trash-icon">
                                            <use href="${l}#icon-trash"></use>
                                        </svg>
                                    </button>`,t.dataset.favorite="true",d.open();let i=await E.getOneExercises(s);d.close(),le(i),r==="favorites.html"&&x()}else t.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span>Add to favorites</span>
                                        <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                                            <use href="${l}#icon-heart"></use>
                                        </svg>
                                    </button>`,t.dataset.favorite="false",R(s),r==="favorites.html"&&x()}function pe(e){var r,i,a;const t=e.target;if(t.classList.contains("favourites_btn_trash_icon")){const n=t.dataset.id||((i=(r=t.closest("[data-id]"))==null?void 0:r.dataset)==null?void 0:i.id);if(!n)return;R(n),x();return}const s=t.closest("[data-id]"),o=(a=s==null?void 0:s.dataset)==null?void 0:a.id;o&&(t.classList.contains("favourites_btn_workout")||ge(o))}de.addEventListener("click",pe);const ge=async e=>{if(!e)return;let t;try{d.open(),t=await E.getOneExercises(e)}catch(o){b.error((o==null?void 0:o.message)||String(o));return}finally{d.close()}if(!t){b.error("Exercise not found or request failed");return}let s=!1;try{const o=localStorage.getItem("favorites"),r=o?JSON.parse(o):[];s=Array.isArray(r)&&r.some(i=>(i==null?void 0:i._id)===e)}catch{s=!1}t.favorite=s,_.open(ie(t)),$=document.querySelector(".refresh-button-js"),L=document.querySelector(".add-rating"),L&&L.addEventListener("click",me),$&&$.addEventListener("click",he)};export{h as a,oe as c,E as f,d as l,b as m,l as s};
//# sourceMappingURL=exercises-right-part-filter-26e5edfb.js.map
