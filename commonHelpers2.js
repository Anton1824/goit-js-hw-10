import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as r}from"./assets/vendor-77e16229.js";const n=document.querySelector(".form");n.addEventListener("submit",s);function m(t,e){return new Promise((i,o)=>{setTimeout(()=>{t==="fulfilled"?i(e):t==="rejected"&&o(e)},e)})}function s(t){t.preventDefault();const e=document.querySelector('input[name="delay"]').value,i=document.querySelector('input[name="state"]:checked').value;m(i,e).then(o=>r.show({message:`✅ Fulfilled promise in ${o}ms`,position:"topRight",color:"green"})).catch(o=>r.show({message:`❌ Rejected promise in ${o}ms`,position:"topRight",color:"red"}))}
//# sourceMappingURL=commonHelpers2.js.map