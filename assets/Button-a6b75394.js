import{j as i,t,r as y}from"./index-612bef5b.js";function b(e){var r,s,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(s=b(e[r]))&&(o&&(o+=" "),o+=s);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function m(){for(var e,r,s=0,o="";s<arguments.length;)(e=arguments[s++])&&(r=b(e))&&(o&&(o+=" "),o+=r);return o}const h=({color:e=t.colors.iconContrast,size:r="64",className:s})=>i.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:+r/4,viewBox:"0 0 64 16",fill:"none",className:s,children:[i.jsx("circle",{opacity:"0.2",cx:"8",cy:"8",r:"8",fill:e,className:"animate-pulse"}),i.jsx("circle",{opacity:"0.5",cx:"32",cy:"8",r:"8",fill:e,className:"animate-pulse"}),i.jsx("circle",{cx:"56",cy:"8",r:"8",fill:e,className:"animate-pulse"})]}),D={primary:{DEFAULT:"min-w-[150px] bg-bgBrandDark text-textContrast py-xs px-m leading-6",HOVER:"hover:bg-bgHoverBlue",FOCUS:"focus:shadow-btFocus",DISABLED:"",ACTIVE:"active:bg-bgPressedBlue"},secondary:{DEFAULT:"min-w-[150px] bg-bgAWhite text-textBrand border-solid border-1 border-borderDefaultBlue py-xs px-m leading-6",HOVER:"hover:bg-bgHoverGrey",FOCUS:"focus:shadow-btFocus",DISABLED:"disabled:border-borderDisabled",ACTIVE:"active:bg-bgPressedGrey"},"secondary-gray":{DEFAULT:"min-w-[150px] bg-bgWhite text-textPrimary border-solid border-1 border-borderDefault py-xs px-m leading-6",HOVER:"hover:bg-bgHoverGrey",FOCUS:"focus:shadow-btFocus",DISABLED:"",ACTIVE:"active:bg-bgPressedGrey active:border-borderDefault"},tertiary:{DEFAULT:"h-[40px]  text-textBrand rounded-zero whitespace-nowrap",HOVER:"hover:bg-bgHoverGrey",FOCUS:"focus:outline-none",DISABLED:"disabled:text-textTertiary disabled:bg-bgDisable",ACTIVE:"active:bg-bgPressedGrey"},desctructive:{DEFAULT:"min-w-[150px]  text-textContrast bg-bgDefaultDestructive py-xs px-m leading-6",HOVER:"hover:bg-bgHoverDestructive",FOCUS:"focus:bg-bgDefaultDestructive focus:shadow-btFocus",DISABLED:"disabled:border-solid  disabled:border-1 disabled:border-borderDisabled",ACTIVE:"active:bg-bgPressedDestructive"},"icon-only":{DEFAULT:"bg-bgDefaultBlue w-[56px] h-[56px] px-s py-s",HOVER:"hover:bg-bgHoverBlue",FOCUS:"focus:shadow-btFocus",DISABLED:"",ACTIVE:"active:bg-bgPressedBlue"},"search-type":{DEFAULT:"bg-bgDefaultBlue rounded-l-zero",HOVER:"hover:bg-bgHoverBlue",FOCUS:"focus:shadow-btFocus",DISABLED:"",ACTIVE:"active:bg-bgPressedBlue"}},f={big:"h-[56px] w-[56px] p-s rounded-r-medium2",small:"h-[48px] w-[48px] p-xs rounded-r-minimal"},v={big:"text-button px-xs py-xs2",small:"text-caption px-xs2 py-xs2"},E={big:"h-[48px] py-xs",small:"h-[40px] py-xs2"},A={primary:{color:t.colors.iconWhite},secondary:{color:t.colors.iconPrimary},"secondary-gray":{color:t.colors.iconPrimary},tertiary:{color:t.colors.iconPrimary},desctructive:{color:t.colors.iconWhite},"icon-only":{color:t.colors.iconWhite},"search-type":{color:t.colors.iconWhite}},w=({buttonType:e="primary",className:r,text:s,icon:o,iconProps:d,disabled:a,iconSide:l="left",isLoading:u=!1,size:c="big",...g})=>{let n="";["icon-only","tertiary"].includes(e)||(n=E[c]);const x=y.useMemo(()=>Object.values(D[e]).join(" "),[e]),p=()=>i.jsxs(i.Fragment,{children:[l==="right"&&s,o&&i.jsx(o,{...A[e],size:"24",...d,...a?{color:t.colors.textDisabled}:{}}),l==="left"&&s]});return i.jsx("button",{className:m(" font-500 rounded-medium flex justify-center items-center gap-xs2 transition-colors duration-300 ","focus:outline-none",{"disabled:bg-bgDisable disabled:text-textDisabled":a===!0},{[f[c]]:e==="search-type"},{[v[c]]:e==="tertiary"},x,n,r),disabled:a,...g,children:u?i.jsx(h,{color:a?t.colors.textDisabled:void 0}):p()})};export{w as B};