(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{WK85:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return p}));var r,a=n("+I+c"),l=(n("mXGw"),n("/FXl")),i=n("X0E2"),o=n.n(i),s={},b=(r="InlineCode",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),c={_frontmatter:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("nav",{className:"table-of-contents"},Object(l.b)("ol",{parentName:"nav",className:"toc-level toc-level-1"},Object(l.b)("li",{parentName:"ol",className:"toc-item toc-item-h2"},Object(l.b)("a",{parentName:"li",className:"toc-link toc-link-h2",href:"#riktig-struktur"},"Riktig struktur")),Object(l.b)("li",{parentName:"ol",className:"toc-item toc-item-h2"},Object(l.b)("a",{parentName:"li",className:"toc-link toc-link-h2",href:"#sorterbar-tabell"},"Sorterbar tabell")),Object(l.b)("li",{parentName:"ol",className:"toc-item toc-item-h2"},Object(l.b)("a",{parentName:"li",className:"toc-link toc-link-h2",href:"#responsivitet"},"Responsivitet")))),Object(l.b)("h2",{id:"riktig-struktur"},"Riktig struktur"),Object(l.b)("p",null,"Når man setter opp en tabell er det viktig at man tar i bruk riktige HTML-tags for å beskrive innholdet, slik at nettleseren bedre kan forstå hva som foregår.\nHvis man følger eksemplene under oversikt og bruker ",Object(l.b)("inlineCode",{parentName:"p"},"<table>")," over ",Object(l.b)("inlineCode",{parentName:"p"},"<div>"),"så er man allerede godt på vei!\nMen et punkt som er lurt å følge litt ekstra med på er bruken av ",Object(l.b)("inlineCode",{parentName:"p"},"<th>"),", table-header. Denne brukes ofte for å beskrive overskriften for en column,\nmen kan også bli brukt i tilfeller der en verdi i rekken er unikt identifiserbar. Dette er et bevist valg man kan gjøre for å tabellen lettere å navigere for alle,\nmen i de aller fleste tilfeller klarer nettleseren selv å tolke hvordan en tabell skal best navigeres."),Object(l.b)("h2",{id:"sorterbar-tabell"},"Sorterbar tabell"),Object(l.b)("p",null,"For å skape en god brukeropplevelse for alle er det viktig at man ",Object(l.b)("inlineCode",{parentName:"p"},"aria-sort")," på table-headers,\nsamt bruker aria-label på ",Object(l.b)("inlineCode",{parentName:"p"},"button")," som utfører sorteringen ",Object(l.b)("inlineCode",{parentName:"p"},"onClick"),". Labelen skal da fortelle hva den neste handlingen blir å utføre."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'<button aria-label="Sorter ID stigende">ID</button>\n')),Object(l.b)("h2",{id:"responsivitet"},"Responsivitet"),Object(l.b)("p",null,"Det finnes ",Object(l.b)("a",{parentName:"p",href:"https://medium.com/appnroll-publication/5-practical-solutions-to-make-responsive-data-tables-ff031c48b122"},"mange måter")," å gjøre tabeller responsive på, men flere av disse teknikkene innebærer ofte ",Object(l.b)("a",{parentName:"p",href:"https://developer.paciellogroup.com/blog/2018/03/short-note-on-what-css-display-properties-do-to-table-semantics/"},"store fallgruver")," for tilgjengelighet."),Object(l.b)("p",null,"Den enkleste måten å gjøre tabeller responsive samtidig som man sørger for at tabellene forblir tilgjengelige er å gå for en ",Object(l.b)("a",{parentName:"p",href:"http://adrianroselli.com/2017/11/a-responsive-accessible-table.html#ResponsiveScrolling"},"enkel horisontal scroll-løsning")," og standard ",Object(l.b)("inlineCode",{parentName:"p"},"<table>")," HTML."),Object(l.b)(o.a,{type:"info",mdxType:"Alertstripe"},"Tastaturvennlig horisontal scrolling krever at man setter"," ",Object(l.b)(b,{className:"inline",mdxType:"InlineCode"},'tabindex="0"')," og"," ",Object(l.b)(b,{className:"inline",mdxType:"InlineCode"},'role="region"')," på konteineren som skal scrolle. Dette kan utløse advarsler fra lintere om at bare"," ",Object(l.b)("em",null,"interaktive")," elementer skal ha"," ",Object(l.b)(b,{className:"inline",mdxType:"InlineCode"},"tabindex"),"-attributtet. Disse advarslene kan trygt ignoreres da scrolling teller som interaktivitet, men blir ofte ikke oppfattet av lintere."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-nav-frontend-tabell-style-md-tabell-accessibility-mdx-132861ae9dca56ae35a9.js.map