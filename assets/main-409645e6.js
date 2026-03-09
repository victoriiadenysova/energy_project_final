import{l as c,f as g,m as o,c as T,s as h,a as N}from"./exercises-right-part-filter-41e7e86e.js";import"./vendor-f93ed741.js";const d=document.querySelector(".wrap-button"),f=document.querySelector(".muscles-list"),q=document.querySelector(".pagination-numbers"),w=document.querySelector(".title-exercises");d&&d.addEventListener("click",H);const C=()=>{k({filter:"Muscles",page:1,limit:12})};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",C,{once:!0}):C();async function H(t){t.preventDefault(),w&&(w.textContent="Exercises");const e=t.target.closest("button[data-name]");if(!e||!(d!=null&&d.contains(e)))return;d.querySelectorAll("button").forEach(r=>r.classList.remove("btn-filter-active")),e.classList.add("btn-filter-active");const s={filter:e.dataset.name,page:1,limit:12};f&&(f.innerHTML=""),await k(s)}async function k(t){var e,a,i;(e=document.querySelector(".filter-list-js"))==null||e.classList.remove("exercises_list"),(a=document.querySelector(".form-js"))==null||a.classList.add("hidden-form");try{c.open();const s=await g.getByFilterName(t),r=(s==null?void 0:s.results)??[];if(!r.length){o.error("Sorry, we didn't find anything according to your request.");return}f&&(f.innerHTML=M(r));const l=(s==null?void 0:s.totalPages)??1;localStorage.setItem("infoRequest",JSON.stringify({totalPages:l,categoryName:t.filter})),(i=document.querySelector(".filter-list-js"))==null||i.classList.add("muscles-list"),q&&(q.innerHTML=""),S(l,t),y(1)}catch(s){o.error((s==null?void 0:s.message)||String(s))}finally{c.close()}}function M(t){return t.map(({filter:e,name:a,imgURL:i})=>{let s=(e||"").toLocaleLowerCase().replaceAll(" ","");return s==="bodyparts"&&(s="bodypart"),`
        <li class="muscles-item" data-name="${a}" data-filter="${s}">
          <a href="" class="muscles-link" data-alt="${a}">
            <img loading="lazy" class="muscles-image" src="${i}" alt="${a}" width="290" height="242">
            <button class="muscles-box-menu" type="button">
              <h3 class="muscles-small-title">${T(a)}</h3>
              <p class="muscles-text">${e}</p>
            </button>
          </a>
        </li>
      `}).join("")}const x=document.querySelector(".pagination-numbers"),R=document.querySelector(".muscles-list");let p=1;try{x.addEventListener("click",D),x.addEventListener("click",L)}catch(t){console.log(t)}let A;async function D(t){const e={...A,page:t.target.textContent};if(t.target.nodeName==="BUTTON"&&e.page!==p){if(e.filter){c.open();const a=await g.getByFilterName(e);c.close();const i=a.results;R.innerHTML=M(i)}else{c.open();const a=await g.getByFilterCategory(e);c.close(),$(a)}p=e.page,L()}}const I=t=>{const e=document.createElement("button");e.className="pagination-number",e.innerHTML=t,e.setAttribute("page-index",t),e.setAttribute("aria-label","Page "+t),x.appendChild(e)};function S(t,e){if(A=e,t!==1)for(let a=1;a<=t;a++)I(a)}function L(){document.querySelectorAll(".pagination-number").forEach(t=>{const e=Number(t.getAttribute("page-index"));e&&t.addEventListener("click",()=>{y(e)})})}function y(t){p=t,L(),document.querySelectorAll(".pagination-number").forEach(e=>{e.classList.remove("active"),Number(e.getAttribute("page-index"))===p&&e.classList.add("active")})}const O=document.querySelector(".pagination-numbers"),_=document.querySelector(".filter-list-js"),z=document.querySelector(".title-exercises");_.addEventListener("click",J);async function J(t){var l,u,m;t.preventDefault();const e=t.target,a=e.closest("[data-filter]");if(!a)return;const i=a.dataset.filter;let s=null;if(e.nodeName==="IMG")s=e.alt;else{const n=e.closest("[data-alt]");s=((l=n==null?void 0:n.dataset)==null?void 0:l.alt)||null}if(!i||!s)return;localStorage.setItem("infoRequest",JSON.stringify({filter:i,categoryName:s})),(u=document.querySelector(".form-js"))==null||u.classList.remove("hidden-form");const r={[i]:s,page:1,limit:10};z.innerHTML=`Exercises / <span class="search-target" id="target-js">${T(s)}</span>`;try{c.open();const n=await g.getByFilterCategory(r);if((m=n==null?void 0:n.results)!=null&&m.length){_.classList.add("exercises_list"),_.classList.remove("muscles-list"),$(n),O.innerHTML="";const{totalPages:b}=n;S(b,r),y(1)}else o.info("Oops. please, try other category this list empty :(")}catch(n){o.error((n==null?void 0:n.message)||String(n))}finally{c.close()}}function $(t){var a;if(!((a=t==null?void 0:t.results)!=null&&a.length))return;const e=t.results.map(({_id:i,target:s,rating:r,name:l,burnedCalories:u,time:m,bodyPart:n})=>{const b=Number.isFinite(Number(r))?Number(r).toFixed(1):"—",j=(s==null?void 0:s.toString().length)>8?s.slice(0,8)+"...":s,F=(l==null?void 0:l.toString().length)>20?l.slice(0,20)+"...":l;return`
      <li class="exercises_list_item" id="${i}">
        <div class="exercises_list_item_up">
          <div class="exercises_list_item_up_left">
            <div class="exercises_workout">${j}</div>

            <p class="exercises_rating">${b}</p>

            <div class="rating-container-not-cursore">
              <svg class="exercises_start_icon" width="56" height="18" data-id="${i}">
                <use xlink:href="${h}#icon-star" data-id="${i}"></use>
              </svg>
            </div>
          </div>

          <div class="exercises_list_item_up_right">
            <button class="exercises_btn_start exercises_btn_start_text" data-id="${i}">
              Start
              <div class="arrow-container">
                <svg class="exercises_btn_arrow_icon" width="56" height="18" data-id="${i}">
                  <use xlink:href="${h}#icon-arrow" data-id="${i}"></use>
                </svg>
              </div>
            </button>
          </div>
        </div>

        <div class="exercises_list_item_middle">
          <div class="exercises_list_item_middle_icon">
            <svg class="exercises_list_item_middle_icon_svg" width="24" height="24">
              <use xlink:href="${h}#icon-run-man"></use>
            </svg>
          </div>

          <h3 class="exercises_list_item_middle_title" id="name">${F}</h3>
        </div>

        <div class="exercises_list_item_bottom">
          <ul class="exercises_list_item_bottom_list">
            <li class="exercises_list_item_bottom_list_item">
              <p class="exercises_list_item_bottom_list_item_text">
                Burned calories:
                <span>${u??""} / ${m??"your wish"} min</span>
              </p>
            </li>

            <li class="exercises_list_item_bottom_list_item">
              <p class="exercises_list_item_bottom_list_item_text">
                Body part: <span>${N(n,5)}</span>
              </p>
            </li>

            <li class="exercises_list_item_bottom_list_item">
              <p class="exercises_list_item_bottom_list_item_text">
                Target: <span>${N(s,7)}</span>
              </p>
            </li>
          </ul>
        </div>
      </li>`}).join("");_.innerHTML=e}const B=document.querySelector(".form-js"),E=document.querySelector(".pagination-numbers");B.addEventListener("submit",Z);async function Z(t){var a;t.preventDefault();const e=t.target.elements.search.value.trim().toLowerCase();if(e)try{c.open();const i=document.querySelector(".btn-filter-active"),s=i?i.dataset.name:"Body parts";let r="bodypart";s==="Muscles"&&(r="muscles"),s==="Equipment"&&(r="equipment");const l=document.querySelector("#tagret-js");let u=l?l.textContent.replace(/\//g,"").trim().toLowerCase():"";if(!u){o.info("Please select a category first.");return}const m={[r]:u,keyword:e,page:1,limit:10},n=await g.getByFilterCategory(m);if(!((a=n==null?void 0:n.results)!=null&&a.length)){o.info("Nothing was found for this query"),E.innerHTML="";return}$(n),E.innerHTML="",S(1,m),y(1),B.reset()}catch(i){console.log(i),o.error((i==null?void 0:i.message)||String(i))}finally{c.close()}}const P=document.querySelector("#subscribe-form"),v=P.querySelector("#email");P.addEventListener("submit",G);async function G(t){t.preventDefault();const{value:e}=v;if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)){o.info("Enter the following sample email - 'test@gmail.com'"),v.value="";return}try{c.open();const i=await g.addSubscription({email:e});c.close(),o.success(i.message)}catch(i){console.log(i)}finally{v.value=""}}
//# sourceMappingURL=main-409645e6.js.map
