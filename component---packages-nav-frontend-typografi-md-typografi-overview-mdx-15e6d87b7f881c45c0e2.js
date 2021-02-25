(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"6aFe":function(e,t,l){"use strict";l.r(t),l.d(t,"_frontmatter",(function(){return i})),l.d(t,"default",(function(){return m}));var n,a=l("+I+c"),s=(l("mXGw"),l("/FXl")),r=l("jPj1"),i={ingress:"Typografi-pakken vår består av flere tekstkomponenter med forhåndsbestemt størrelse og styling."},p=(n="Example",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",e)}),b={_frontmatter:i};function m(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object.assign({},b,l,{components:t,mdxType:"MDXLayout"}),Object(s.b)("nav",{className:"table-of-contents"},Object(s.b)("ol",{parentName:"nav",className:"toc-level toc-level-1"},Object(s.b)("li",{parentName:"ol",className:"toc-item toc-item-h2"},Object(s.b)("a",{parentName:"li",className:"toc-link toc-link-h2",href:"#bruk-av-typografi-i-prosjekter"},"Bruk av Typografi i prosjekter")),Object(s.b)("li",{parentName:"ol",className:"toc-item toc-item-h2"},Object(s.b)("a",{parentName:"li",className:"toc-link toc-link-h2",href:"#alle-vekter"},"Alle vekter")),Object(s.b)("li",{parentName:"ol",className:"toc-item toc-item-h2"},Object(s.b)("a",{parentName:"li",className:"toc-link toc-link-h2",href:"#selvbestemt-html-tag"},"Selvbestemt HTML-tag")))),Object(s.b)("h2",{id:"bruk-av-typografi-i-prosjekter"},"Bruk av Typografi i prosjekter"),Object(s.b)("p",null,"For å sikre at prosjektet ditt får riktig typografi bruker typografi-komponenten vår denne CSS-klassen fra ",Object(s.b)("inlineCode",{parentName:"p"},"nav-frontend-typografi-style"),"."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-css"},".app {\n  .typo-normal-mixin();\n  color: @navMorkGra;\n  font-family: @font-family;\n  line-height: @line-height-base;\n}\n")),Object(s.b)("p",null,"Det antas da at prosjektet er pakket inn under CSS-klassen ",Object(s.b)("inlineCode",{parentName:"p"},".app")," å disse blir da lagt til der. Hvis dette ikke er tilfellet i prosjektet ditt,\nkan det være greit å legge til manuelt da man sikrer at hele prosjektet får riktig typografi.\nDette kan gjøres ved å legge til"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-less"},'@import (reference) "~nav-frontend-typografi-style/src/index.less";\n')),Object(s.b)("p",null,"i ønsket less fil og da legge til klassen ",Object(s.b)("inlineCode",{parentName:"p"},"app")," på elementet som pakker in prosjektet ditt."),Object(s.b)("h2",{id:"alle-vekter"},"Alle vekter"),Object(s.b)(p,{mdxType:"Example"},Object(s.b)(r.Sidetittel,{mdxType:"Sidetittel"},"Sidetittel")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},'<Sidetittel>Sidetittel</Sidetittel>\n<h1 className="typo-sidetittel">Sidetittel</h1>\n')),Object(s.b)(p,{mdxType:"Example"},Object(s.b)(r.Innholdstittel,{mdxType:"Innholdstittel"},"Innholdstittel")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},'<Innholdstittel>Innholdstittel</Innholdstittel>\n<h1 className="typo-innholdstittel">Innholdstittel</h1>\n')),Object(s.b)(p,{mdxType:"Example"},Object(s.b)(r.Systemtittel,{mdxType:"Systemtittel"},"Systemtittel")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},'<Systemtittel>Systemtittel</Systemtittel>\n<h2 className="typo-systemtittel">Systemtittel</h2>\n')),Object(s.b)(p,{mdxType:"Example"},Object(s.b)(r.Undertittel,{mdxType:"Undertittel"},"Undertittel")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},'<Undertittel>Undertittel</Undertittel>\n<h2 className="typo-undertittel">Undertittel</h2>\n')),Object(s.b)(p,{mdxType:"Example"},Object(s.b)(r.Ingress,{mdxType:"Ingress"},"Ingress")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},'<Ingress>Ingress</Ingress>\n<p className="typo-ingress">Ingress</p>\n')),Object(s.b)(p,{mdxType:"Example"},Object(s.b)(r.Element,{mdxType:"Element"},"Element")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},'<Element>Element</Element>\n<p className="typo-element">Element</p>\n')),Object(s.b)(p,{mdxType:"Example"},Object(s.b)(r.Feilmelding,{mdxType:"Feilmelding"},"Feilmelding")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},'<Feilmelding>Feilmelding</Feilmelding>\n<p className="typo-feilmelding">Feilmelding</p>\n')),Object(s.b)(p,{mdxType:"Example"},Object(s.b)(r.Normaltekst,{mdxType:"Normaltekst"},"Normaltekst")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},'<Normaltekst>Normaltekst</Normaltekst>\n<p className="typo-normal">Normaltekst</p>\n')),Object(s.b)(p,{mdxType:"Example"},Object(s.b)(r.Undertekst,{mdxType:"Undertekst"},"Undertekst")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},'<Undertekst>Undertekst</Undertekst>\n<p className="typo-undertekst">Undertekst</p>\n')),Object(s.b)(p,{mdxType:"Example"},Object(s.b)(r.UndertekstBold,{mdxType:"UndertekstBold"},"UndertekstBold")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},'<UndertekstBold>UndertekstBold</UndertekstBold>\n<p className="typo-undertekst-bold">UndertekstBold</p>\n')),Object(s.b)("h2",{id:"selvbestemt-html-tag"},"Selvbestemt HTML-tag"),Object(s.b)("p",null,"Du kan selv bestemme hvilken HTML-tag de forskjellige typografi-vektene skal bruke. For eksempel kan du overstyre ",Object(s.b)("inlineCode",{parentName:"p"},"h1"),"-defaulten for\n",Object(s.b)("inlineCode",{parentName:"p"},"Sidetittel")," med ",Object(s.b)("inlineCode",{parentName:"p"},"h4")," slik:"),Object(s.b)(p,{mdxType:"Example"},Object(s.b)(r.Sidetittel,{tag:"h4",mdxType:"Sidetittel"},"Sidetittel")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},'<Sidetittel tag="h4">Sidetittel</Sidetittel>\n')))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-nav-frontend-typografi-md-typografi-overview-mdx-15e6d87b7f881c45c0e2.js.map