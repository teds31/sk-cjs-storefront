import{S as s,i as e,s as t,e as r,t as a,k as l,c,a as o,g as n,d as h,n as f,b as i,f as u,H as d,h as g,I as p,J as m}from"../chunks/vendor-2d83f193.js";import{c as v}from"../chunks/commerce-5a55d1b7.js";function E(s,e,t){const r=s.slice();return r[2]=e[t],r}function x(s,e,t){const r=s.slice();return r[5]=e[t],r}function b(s){let e,t,p,m,v,E=s[5].name+"";return{c(){e=r("li"),t=r("a"),p=a(E),v=l(),this.h()},l(s){e=c(s,"LI",{class:!0});var r=o(e);t=c(r,"A",{rel:!0,href:!0,class:!0});var a=o(t);p=n(a,E),a.forEach(h),v=f(r),r.forEach(h),this.h()},h(){i(t,"rel","prefetch"),i(t,"href",m="/categories/"+s[5].slug),i(t,"class","svelte-14ezsc1"),i(e,"class","py-1")},m(s,r){u(s,e,r),d(e,t),d(t,p),d(e,v)},p(s,e){1&e&&E!==(E=s[5].name+"")&&g(p,E),1&e&&m!==(m="/categories/"+s[5].slug)&&i(t,"href",m)},d(s){s&&h(e)}}}function y(s){let e,t,p,m,v,E=s[2].name+"";return{c(){e=r("li"),t=r("a"),p=a(E),v=l(),this.h()},l(s){e=c(s,"LI",{class:!0});var r=o(e);t=c(r,"A",{rel:!0,href:!0,class:!0});var a=o(t);p=n(a,E),a.forEach(h),v=f(r),r.forEach(h),this.h()},h(){i(t,"rel","prefetch"),i(t,"href",m="/products/"+s[2].permalink),i(t,"class","svelte-14ezsc1"),i(e,"class","py-1")},m(s,r){u(s,e,r),d(e,t),d(t,p),d(e,v)},p(s,e){2&e&&E!==(E=s[2].name+"")&&g(p,E),2&e&&m!==(m="/products/"+s[2].permalink)&&i(t,"href",m)},d(s){s&&h(e)}}}function I(s){let e,t,g,v,I,k,D,L,V,j,H,w,z,A=s[0],C=[];for(let r=0;r<A.length;r+=1)C[r]=b(x(s,A,r));let P=s[1],U=[];for(let r=0;r<P.length;r+=1)U[r]=y(E(s,P,r));return{c(){e=r("div"),t=r("div"),g=r("div"),v=r("h3"),I=a("Categories"),k=l(),D=r("ul");for(let s=0;s<C.length;s+=1)C[s].c();L=l(),V=r("div"),j=r("h3"),H=a("Products"),w=l(),z=r("ul");for(let s=0;s<U.length;s+=1)U[s].c();this.h()},l(s){e=c(s,"DIV",{class:!0});var r=o(e);t=c(r,"DIV",{class:!0});var a=o(t);g=c(a,"DIV",{class:!0});var l=o(g);v=c(l,"H3",{class:!0});var i=o(v);I=n(i,"Categories"),i.forEach(h),k=f(l),D=c(l,"UL",{class:!0});var u=o(D);for(let e=0;e<C.length;e+=1)C[e].l(u);u.forEach(h),l.forEach(h),L=f(a),V=c(a,"DIV",{class:!0});var d=o(V);j=c(d,"H3",{class:!0});var p=o(j);H=n(p,"Products"),p.forEach(h),w=f(d),z=c(d,"UL",{class:!0});var m=o(z);for(let e=0;e<U.length;e+=1)U[e].l(m);m.forEach(h),d.forEach(h),a.forEach(h),r.forEach(h),this.h()},h(){i(v,"class","text-2xl mb-4 border-b"),i(D,"class","list-unstyled"),i(g,"class","flex-col my-4"),i(j,"class","text-2xl mb-4 border-b"),i(z,"class","list-unstyled"),i(V,"class","flex-col my-4"),i(t,"class","flex space-x-24 justify-center"),i(e,"class","container")},m(s,r){u(s,e,r),d(e,t),d(t,g),d(g,v),d(v,I),d(g,k),d(g,D);for(let e=0;e<C.length;e+=1)C[e].m(D,null);d(t,L),d(t,V),d(V,j),d(j,H),d(V,w),d(V,z);for(let e=0;e<U.length;e+=1)U[e].m(z,null)},p(s,[e]){if(1&e){let t;for(A=s[0],t=0;t<A.length;t+=1){const r=x(s,A,t);C[t]?C[t].p(r,e):(C[t]=b(r),C[t].c(),C[t].m(D,null))}for(;t<C.length;t+=1)C[t].d(1);C.length=A.length}if(2&e){let t;for(P=s[1],t=0;t<P.length;t+=1){const r=E(s,P,t);U[t]?U[t].p(r,e):(U[t]=y(r),U[t].c(),U[t].m(z,null))}for(;t<U.length;t+=1)U[t].d(1);U.length=P.length}},i:p,o:p,d(s){s&&h(e),m(C,s),m(U,s)}}}async function k(s){const{data:e}=await v.categories.list(),{data:t}=await v.products.list();return{props:{categories:e,products:t}}}function D(s,e,t){let{categories:r}=e,{products:a}=e;return s.$$set=s=>{"categories"in s&&t(0,r=s.categories),"products"in s&&t(1,a=s.products)},[r,a]}class L extends s{constructor(s){super(),e(this,s,D,I,t,{categories:0,products:1})}}export{L as default,k as load};