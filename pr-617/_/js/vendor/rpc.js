function createJsonElement(a,o){var e=typeof a;if(Array.isArray(a)){const t=document.createElement("div");return t.classList.add("json-array"),0<o&&t.classList.add("json-indent"),a.forEach(e=>{e=createJsonElement(e,o+1);t.appendChild(e)}),t}if("object"==e&&null!==a){const r=document.createElement("div");return r.classList.add("json-object"),0<o&&r.classList.add("json-indent"),Object.keys(a).forEach(e=>{var t=a[e];if("name"===e){const n=document.createElement("span");n.classList.add("json-key"),n.textContent=`${e}: `;e=createJsonElement(t,o+1);const s=document.createElement("div");s.classList.add("json-section"),s.appendChild(n),s.appendChild(e),s.addEventListener("click",()=>{s.classList.toggle("collapsed")}),r.appendChild(s)}else{t=createJsonElement(t,o+1);r.appendChild(t)}}),r}{const n=document.createElement("span");return n.classList.add("json-value"),"string"==e?(n.classList.add("token","string"),n.textContent=`"${a}"`):"number"==e?(n.classList.add("token","number"),n.textContent=a.toString()):"boolean"==e?(n.classList.add("token","boolean"),n.textContent=a.toString()):"null"==e&&(n.classList.add("token","null"),n.textContent="null"),n}}function fetchAndDisplayJSON(){fetch("https://raw.githubusercontent.com/starkware-libs/starknet-specs/master/api/starknet_api_openrpc.json?token=ASNPSF625O5JPOCD2SYH5D3BO3AAM&uiSchema%5BappBar%5D%5Bui:input%5D=false&uiSchema%5BappBar%5D%5Bui:darkMode%5D=true&uiSchema%5BappBar%5D%5Bui:examplesDropdown%5D=false").then(e=>{if(!e.ok)throw new Error("Error fetching JSON: "+e.status);return e.json()}).then(e=>{var t=document.getElementById("jsonContainer"),e=e.methods||{};t.innerHTML="",t.appendChild(createJsonElement(e,0))}).catch(e=>{console.error(e)})}document.addEventListener("DOMContentLoaded",fetchAndDisplayJSON);