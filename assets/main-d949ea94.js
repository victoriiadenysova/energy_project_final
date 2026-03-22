import{l as c,f,m as u,c as k,a as N}from"./exercises-right-part-filter-23746523.js";import{s as v}from"./applyAssets-85d2affc.js";import"./vendor-f93ed741.js";const g=document.querySelector(".wrap-button"),_=document.querySelector(".muscles-list"),w=document.querySelector(".pagination-numbers"),E=document.querySelector(".title-exercises");g&&g.addEventListener("click",H);const C=()=>{M({filter:"Muscles",page:1,limit:12})};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",C,{once:!0}):C();async function H(t){t.preventDefault(),E&&(E.textContent="Exercises");const e=t.target.closest("button[data-name]");if(!e||!(g!=null&&g.contains(e)))return;g.querySelectorAll("button").forEach(r=>r.classList.remove("btn-filter-active")),e.classList.add("btn-filter-active");const s={filter:e.dataset.name,page:1,limit:12};_&&(_.innerHTML=""),await M(s)}async function M(t){var e,n,i;(e=document.querySelector(".filter-list-js"))==null||e.classList.remove("exercises_list"),(n=document.querySelector(".form-js"))==null||n.classList.add("hidden-form");try{c.open();const s=await f.getByFilterName(t),r=(s==null?void 0:s.results)??[];if(!r.length){u.error("Sorry, we didn't find anything according to your request.");return}_&&(_.innerHTML=A(r));const l=(s==null?void 0:s.totalPages)??1;localStorage.setItem("infoRequest",JSON.stringify({totalPages:l,categoryName:t.filter})),(i=document.querySelector(".filter-list-js"))==null||i.classList.add("muscles-list"),w&&(w.innerHTML=""),L(l,t),h(1)}catch(s){u.error((s==null?void 0:s.message)||String(s))}finally{c.close()}}function A(t){return t.map(({filter:e,name:n,imgURL:i})=>{let s=(e||"").toLocaleLowerCase().replaceAll(" ","");return s==="bodyparts"&&(s="bodypart"),`
        <li class="muscles-item" data-name="${n}" data-filter="${s}">
          <a href="" class="muscles-link" data-alt="${n}">
            <img loading="lazy" class="muscles-image" src="${i}" alt="${n}" width="290" height="242">
            <button class="muscles-box-menu" type="button">
              <h3 class="muscles-small-title">${k(n)}</h3>
              <p class="muscles-text">${e}</p>
            </button>
          </a>
        </li>
      `}).join("")}const S=document.querySelector(".pagination-numbers"),R=document.querySelector(".muscles-list");let y=1;try{S.addEventListener("click",D),S.addEventListener("click",$)}catch(t){console.log(t)}let B;async function D(t){const e={...B,page:t.target.textContent};if(t.target.nodeName==="BUTTON"&&e.page!==y){if(e.filter){c.open();const n=await f.getByFilterName(e);c.close();const i=n.results;R.innerHTML=A(i)}else{c.open();const n=await f.getByFilterCategory(e);c.close(),q(n)}y=e.page,$()}}const I=t=>{const e=document.createElement("button");e.className="pagination-number",e.innerHTML=t,e.setAttribute("page-index",t),e.setAttribute("aria-label","Page "+t),S.appendChild(e)};function L(t,e){if(B=e,t!==1)for(let n=1;n<=t;n++)I(n)}function $(){document.querySelectorAll(".pagination-number").forEach(t=>{const e=Number(t.getAttribute("page-index"));e&&t.addEventListener("click",()=>{h(e)})})}function h(t){y=t,$(),document.querySelectorAll(".pagination-number").forEach(e=>{e.classList.remove("active"),Number(e.getAttribute("page-index"))===y&&e.classList.add("active")})}const O=document.querySelector(".pagination-numbers"),b=document.querySelector(".filter-list-js"),z=document.querySelector(".title-exercises");b.addEventListener("click",J);async function J(t){var l,d,o;t.preventDefault();const e=t.target,n=e.closest("[data-filter]");if(!n)return;const i=n.dataset.filter;let s=null;if(e.nodeName==="IMG")s=e.alt;else{const a=e.closest("[data-alt]");s=((l=a==null?void 0:a.dataset)==null?void 0:l.alt)||null}if(!i||!s)return;localStorage.setItem("infoRequest",JSON.stringify({filter:i,categoryName:s})),(d=document.querySelector(".form-js"))==null||d.classList.remove("hidden-form");const r={[i]:s,page:1,limit:10};z.innerHTML=`Exercises / <span class="search-target" id="target-js">${k(s)}</span>`;try{c.open();const a=await f.getByFilterCategory(r);if((o=a==null?void 0:a.results)!=null&&o.length){b.classList.add("exercises_list"),b.classList.remove("muscles-list"),q(a),O.innerHTML="";const{totalPages:m}=a;L(m,r),h(1)}else u.info("Oops. please, try other category this list empty :(")}catch(a){u.error((a==null?void 0:a.message)||String(a))}finally{c.close()}}function q(t){var n;if(!((n=t==null?void 0:t.results)!=null&&n.length))return;const e=t.results.map(({_id:i,target:s,rating:r,name:l,burnedCalories:d,time:o,bodyPart:a})=>{const m=Number.isFinite(Number(r))?Number(r).toFixed(1):"—",p=(s==null?void 0:s.toString().length)>8?s.slice(0,8)+"...":s,F=(l==null?void 0:l.toString().length)>20?l.slice(0,20)+"...":l;return`
      <li class="exercises_list_item" id="${i}">
        <div class="exercises_list_item_up">
          <div class="exercises_list_item_up_left">
            <div class="exercises_workout">${p}</div>

            <p class="exercises_rating">${m}</p>

            <div class="rating-container-not-cursore">
              <svg class="exercises_start_icon" width="56" height="18" data-id="${i}">
                <use xlink:href="${v}#icon-star" data-id="${i}"></use>
              </svg>
            </div>
          </div>

          <div class="exercises_list_item_up_right">
            <button class="exercises_btn_start exercises_btn_start_text" data-id="${i}">
              Start
              <div class="arrow-container">
                <svg class="exercises_btn_arrow_icon" width="56" height="18" data-id="${i}">
                  <use xlink:href="${v}#icon-arrow" data-id="${i}"></use>
                </svg>
              </div>
            </button>
          </div>
        </div>

        <div class="exercises_list_item_middle">
          <div class="exercises_list_item_middle_icon">
            <svg class="exercises_list_item_middle_icon_svg" width="24" height="24">
              <use xlink:href="${v}#icon-run-man"></use>
            </svg>
          </div>

          <h3 class="exercises_list_item_middle_title" id="name">${F}</h3>
        </div>

        <div class="exercises_list_item_bottom">
          <ul class="exercises_list_item_bottom_list">
            <li class="exercises_list_item_bottom_list_item">
              <p class="exercises_list_item_bottom_list_item_text">
                Burned calories:
                <span>${d??""} / ${o??"your wish"} min</span>
              </p>
            </li>

            <li class="exercises_list_item_bottom_list_item">
              <p class="exercises_list_item_bottom_list_item_text">
                Body part: <span>${N(a,5)}</span>
              </p>
            </li>

            <li class="exercises_list_item_bottom_list_item">
              <p class="exercises_list_item_bottom_list_item_text">
                Target: <span>${N(s,7)}</span>
              </p>
            </li>
          </ul>
        </div>
      </li>`}).join("");b.innerHTML=e}const P=document.querySelector(".form-js"),T=document.querySelector(".pagination-numbers");P.addEventListener("submit",Z);async function Z(t){var n;t.preventDefault();const e=t.target.elements.search.value.trim().toLowerCase();if(e)try{c.open();const i=document.querySelector(".btn-filter-active"),s=i?i.dataset.name:"Body parts";let r="bodypart";s==="Muscles"&&(r="muscles"),s==="Equipment"&&(r="equipment");const l=document.querySelector("#tagret-js"),d=document.querySelector(".title-exercises");let o="";if(d){const p=d.textContent;p.includes("/")&&(o=p.split("/")[1].trim().toLowerCase())}if(console.log("Категорія для пошуку:",o),!o){u.info("Please select a category first.");return}const a={[r]:o,keyword:e,page:1,limit:10},m=await f.getByFilterCategory(a);if(!((n=m==null?void 0:m.results)!=null&&n.length)){u.info("Nothing was found for this query"),T.innerHTML="";return}q(m),T.innerHTML="",L(1,a),h(1),P.reset()}catch(i){console.log(i),u.error((i==null?void 0:i.message)||String(i))}finally{c.close()}}const j=document.querySelector("#subscribe-form"),x=j.querySelector("#email");j.addEventListener("submit",G);async function G(t){t.preventDefault();const{value:e}=x;if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)){u.info("Enter the following sample email - 'test@gmail.com'"),x.value="";return}try{c.open();const i=await f.addSubscription({email:e});c.close(),u.success(i.message)}catch(i){console.log(i)}finally{x.value=""}}
//# sourceMappingURL=main-d949ea94.js.map
