"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[284],{284:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,o,i,u,c,a=t(4270),l=t(9434),f=t(2270),s=t(2946),p=t(168),d=t(7686),v=d.Z.form(r||(r=(0,p.Z)(["\n  margin-bottom: 50px;\n"]))),h=d.Z.label(o||(o=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n"]))),m=d.Z.span(i||(i=(0,p.Z)(["\n  font-weight: 600;\n  color: var(--main-text-color);\n  margin-bottom: 5px;\n"]))),g=d.Z.input(u||(u=(0,p.Z)(["\n  height: 40px;\n  padding: 0 10px 0 10px;\n  border-radius: 8px;\n  border: 1px solid var(--second-bg-color);\n  outline: none;\n\n  color: var(--main-text-color);\n  font-size: 16px;\n\n  &:focus {\n    border-color: var(--accent-bg-color);\n  }\n"]))),x=d.Z.button(c||(c=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 200px;\n  height: 40px;\n\n  background-color: var(--accent-bg-color);\n  color: var(--second-text-color);\n  font-family: inherit;\n  border: none;\n  border-radius: 8px;\n\n  cursor: pointer;\n  transition: background-color var(--main-hover-animation);\n\n  :hover,\n  :focus {\n    background-color: var(--second-bg-color);\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 300px;\n  }\n"]))),y=t(184),b=function(){var n=(0,l.I0)(),e=(0,l.v9)(s.NH);return(0,y.jsxs)(v,{onSubmit:function(e){e.preventDefault();var t=e.currentTarget;n((0,f.Ib)({email:t.elements.email.value,password:t.elements.password.value}))},autoComplete:"off",children:[(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(h,{children:[(0,y.jsx)(m,{children:"Email"}),(0,y.jsx)(g,{type:"email",name:"email"})]})}),(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(h,{children:[(0,y.jsx)(m,{children:"Password"}),(0,y.jsx)(g,{type:"password",name:"password"})]})}),(0,y.jsx)(x,{type:"submit",disabled:e,children:"Log In"})]})};function w(){return(0,y.jsxs)("div",{children:[(0,y.jsx)(a.q,{children:(0,y.jsx)("title",{children:"Login"})}),(0,y.jsx)(b,{})]})}},2946:function(n,e,t){t.d(e,{AD:function(){return i},Af:function(){return o},F4:function(){return c},NH:function(){return u}});var r=t(6916),o=function(n){return n.contacts.items},i=function(n){return n.filter},u=function(n){return n.isLoading},c=(0,r.P1)([function(n){return n.contacts.items},function(n){return n.filter}],(function(n,e){if(n)return n.filter((function(n){return n.name.toLowerCase().trim().includes(e.toLowerCase().trim())}))}))},6916:function(n,e,t){t.d(e,{P1:function(){return a}});var r="NOT_FOUND";var o=function(n,e){return n===e};function i(n,e){var t="object"===typeof e?e:{equalityCheck:e},i=t.equalityCheck,u=void 0===i?o:i,c=t.maxSize,a=void 0===c?1:c,l=t.resultEqualityCheck,f=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(u),s=1===a?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:r},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(f):function(n,e){var t=[];function o(n){var o=t.findIndex((function(t){return e(n,t.key)}));if(o>-1){var i=t[o];return o>0&&(t.splice(o,1),t.unshift(i)),i.value}return r}return{get:o,put:function(e,i){o(e)===r&&(t.unshift({key:e,value:i}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,f);function p(){var e=s.get(arguments);if(e===r){if(e=n.apply(null,arguments),l){var t=s.getEntries(),o=t.find((function(n){return l(n.value,e)}));o&&(e=o.value)}s.put(arguments,e)}return e}return p.clearCache=function(){return s.clear()},p}function u(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function c(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i,c=0,a={memoizeOptions:void 0},l=r.pop();if("object"===typeof l&&(a=l,l=r.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var f=a,s=f.memoizeOptions,p=void 0===s?t:s,d=Array.isArray(p)?p:[p],v=u(r),h=n.apply(void 0,[function(){return c++,l.apply(null,arguments)}].concat(d)),m=n((function(){for(var n=[],e=v.length,t=0;t<e;t++)n.push(v[t].apply(null,arguments));return i=h.apply(null,n)}));return Object.assign(m,{resultFunc:l,memoizedResultFunc:h,dependencies:v,lastResult:function(){return i},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),m};return o}var a=c(i)}}]);
//# sourceMappingURL=284.373182c2.chunk.js.map