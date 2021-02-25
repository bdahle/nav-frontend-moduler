(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{QFxD:function(e,t,l){"use strict";l.r(t),l.d(t,"_frontmatter",(function(){return s})),l.d(t,"default",(function(){return O}));var n=l("+I+c"),a=(l("mXGw"),l("/FXl")),b=l("X0E2"),i=l.n(b),r=l("NZCt"),p=l.n(r),m=l("b4v9"),c=l.n(m),o=(l("jPj1"),l("xBFs")),s={ingress:"Input brukes når vi har behov for å ta imot tekst fra sluttbruker."},d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},u=d("Example"),j=d("InlineCode"),k={_frontmatter:s};function O(e){var t=e.components,l=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object.assign({},k,l,{components:t,mdxType:"MDXLayout"}),Object(a.b)("nav",{className:"table-of-contents"},Object(a.b)("ol",{parentName:"nav",className:"toc-level toc-level-1"},Object(a.b)("li",{parentName:"ol",className:"toc-item toc-item-h2"},Object(a.b)("a",{parentName:"li",className:"toc-link toc-link-h2",href:"#normal"},"Normal")),Object(a.b)("li",{parentName:"ol",className:"toc-item toc-item-h2"},Object(a.b)("a",{parentName:"li",className:"toc-link toc-link-h2",href:"#med-label"},"Med label"),Object(a.b)("ol",{parentName:"li",className:"toc-level toc-level-2"},Object(a.b)("li",{parentName:"ol",className:"toc-item toc-item-h3"},Object(a.b)("a",{parentName:"li",className:"toc-link toc-link-h3",href:"#label-som-prop"},"Label som prop")),Object(a.b)("li",{parentName:"ol",className:"toc-item toc-item-h3"},Object(a.b)("a",{parentName:"li",className:"toc-link toc-link-h3",href:"#label-som-komponent"},"Label som komponent")),Object(a.b)("li",{parentName:"ol",className:"toc-item toc-item-h3"},Object(a.b)("a",{parentName:"li",className:"toc-link toc-link-h3",href:"#label-som-aria-attributter"},"Label som aria-attributter")))),Object(a.b)("li",{parentName:"ol",className:"toc-item toc-item-h2"},Object(a.b)("a",{parentName:"li",className:"toc-link toc-link-h2",href:"#nummer"},"Nummer")),Object(a.b)("li",{parentName:"ol",className:"toc-item toc-item-h2"},Object(a.b)("a",{parentName:"li",className:"toc-link toc-link-h2",href:"#kombinasjon-med-hjelpetekst"},"Kombinasjon med Hjelpetekst")),Object(a.b)("li",{parentName:"ol",className:"toc-item toc-item-h2"},Object(a.b)("a",{parentName:"li",className:"toc-link toc-link-h2",href:"#disabled"},"Disabled")),Object(a.b)("li",{parentName:"ol",className:"toc-item toc-item-h2"},Object(a.b)("a",{parentName:"li",className:"toc-link toc-link-h2",href:"#innhold-mellom-label-og-skjemafelt"},"Innhold mellom label og skjemafelt")),Object(a.b)("li",{parentName:"ol",className:"toc-item toc-item-h2"},Object(a.b)("a",{parentName:"li",className:"toc-link toc-link-h2",href:"#feilmarkering"},"Feilmarkering"),Object(a.b)("ol",{parentName:"li",className:"toc-level toc-level-2"},Object(a.b)("li",{parentName:"ol",className:"toc-item toc-item-h3"},Object(a.b)("a",{parentName:"li",className:"toc-link toc-link-h3",href:"#normal-1"},"Normal")),Object(a.b)("li",{parentName:"ol",className:"toc-item toc-item-h3"},Object(a.b)("a",{parentName:"li",className:"toc-link toc-link-h3",href:"#forenklet"},"Forenklet")))),Object(a.b)("li",{parentName:"ol",className:"toc-item toc-item-h2"},Object(a.b)("a",{parentName:"li",className:"toc-link toc-link-h2",href:"#lengde"},"Lengde")),Object(a.b)("li",{parentName:"ol",className:"toc-item toc-item-h2"},Object(a.b)("a",{parentName:"li",className:"toc-link toc-link-h2",href:"#mini"},"Mini")))),Object(a.b)("h2",{id:"normal"},"Normal"),Object(a.b)("p",null,"I sin enkleste form er ",Object(a.b)("inlineCode",{parentName:"p"},"Input")," bare et enkelt tekstinputfelt."),Object(a.b)(u,{mdxType:"Example"},Object(a.b)(o.Input,{label:"Inputfelt-label",mdxType:"Input"})),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'<Input label="Inputfelt-label" />\n')),Object(a.b)("h2",{id:"med-label"},"Med label"),Object(a.b)(i.a,{type:"info",mdxType:"Alertstripe"},Object(a.b)(c.a,{href:"https://www.w3.org/TR/WCAG21/#labels-or-instructions",mdxType:"Lenke"},"WCAG 3.3.2")," ","krever at alle skjemafelter skal ha en tilhørende",Object(a.b)(j,{mdxType:"InlineCode"},"label"),"."),Object(a.b)("h3",{id:"label-som-prop"},"Label som prop"),Object(a.b)("p",null,"Den enkleste (og anbefalte) måten å gi inputfeltet en label er å angi dette gjennom komponentens ",Object(a.b)("inlineCode",{parentName:"p"},"label"),"-prop. Dette vil rendre en ",Object(a.b)("inlineCode",{parentName:"p"},"<label>")," rett over feltet, med korrekt CSS-klasse og ",Object(a.b)("inlineCode",{parentName:"p"},"for"),"-attributt ferdig påført:"),Object(a.b)(u,{mdxType:"Example"},Object(a.b)(o.Input,{label:"Mitt skjemafelt:",mdxType:"Input"})),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'<Input label="Mitt skjemafelt:" />\n')),Object(a.b)("h3",{id:"label-som-komponent"},"Label som komponent"),Object(a.b)("p",null,"Du kan også importere ",Object(a.b)("inlineCode",{parentName:"p"},"Label"),"-komponenten og manuelt sette denne utenfor inputfeltet:"),Object(a.b)(i.a,{type:"advarsel",mdxType:"Alertstripe"},"Husk å gi Label-komponenten korrekt ",Object(a.b)(j,{mdxType:"InlineCode"},"for"),"/",Object(a.b)(j,{mdxType:"InlineCode"},"htmlFor"),"-attributt (som skal ha samme verdi som inputfeltets ",Object(a.b)(j,{mdxType:"InlineCode"},"id"),"-attributt) slik at disse blir sammenkoblet riktig."),Object(a.b)(u,{mdxType:"Example"},Object(a.b)(o.Label,{htmlFor:"min-input",mdxType:"Label"},"Mitt skjemafelt:"),Object(a.b)(o.Input,{id:"min-input",mdxType:"Input"})),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'import { Label, Input } from \'nav-frontend-skjema\';\n\n<Label htmlFor="min-input">Mitt skjemafelt:</Label>\n<Input id="min-input" />\n')),Object(a.b)("p",null,"Dette kan være nødvendig om man f.eks. vil sette ",Object(a.b)("inlineCode",{parentName:"p"},"label")," til venstre for inputfeltet:"),Object(a.b)(u,{mdxType:"Example"},Object(a.b)("div",{style:{display:"flex",alignItems:"center"}},Object(a.b)(o.Label,{htmlFor:"min-input-2",style:{margin:0,marginRight:"1rem"},mdxType:"Label"},"Mitt skjemafelt:"),Object(a.b)("div",{style:{flexGrow:1}},Object(a.b)(o.Input,{id:"min-input-2",mdxType:"Input"})))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'import { Label, Input } from "nav-frontend-skjema";\n\n<div style={{ display: "flex", alignItems: "center" }}>\n  <Label htmlFor="min-input-2" style={{ margin: 0, marginRight: "1rem" }}>\n    Mitt skjemafelt:\n  </Label>\n  <div style={{ flexGrow: 1 }}>\n    <Input id="min-input-2" />\n  </div>\n</div>;\n')),Object(a.b)("h3",{id:"label-som-aria-attributter"},"Label som aria-attributter"),Object(a.b)("p",null,"Unntaksvis kan man også angi ",Object(a.b)("inlineCode",{parentName:"p"},"label")," via inputfeltets ",Object(a.b)("inlineCode",{parentName:"p"},"aria-label"),"- eller ",Object(a.b)("inlineCode",{parentName:"p"},"aria-labelledby"),"-attributter. I slike tilfeller kan det være greit å supplere inputfeltet med et ",Object(a.b)("inlineCode",{parentName:"p"},"placeholder"),"-attributt også."),Object(a.b)(i.a,{type:"advarsel",mdxType:"Alertstripe"},"Dette er foreløpig ",Object(a.b)("strong",null,"kun tillatt")," på inputfelter inne i tabell-rader eller lignende tilfeller hvor det er veldig vanskelig å ha en synlig tekst-label i nærheten av inputfeltet."," ",Object(a.b)("strong",null,"Skal ikke misbrukes."),Object(a.b)("br",null),Object(a.b)("br",null),"Før man velger å ta i bruk placeholders, ",Object(a.b)(c.a,{href:"/accessibility/placeholders",mdxType:"Lenke"},"les gjennom hvorfor på placeholders tilgjengelighets-sider")),Object(a.b)(u,{mdxType:"Example"},Object(a.b)(o.Input,{"aria-label":"Mitt skjemafelt:",placeholder:"Her kan det skrives",mdxType:"Input"})),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'<Input aria-label="Mitt skjemafelt:" placeholder="Her kan det skrives" />\n\neller\n\n<Input aria-labelledby="id-til-html-element-med-label-tekst" placeholder="Her kan det skrives" />\n')),Object(a.b)("h2",{id:"nummer"},"Nummer"),Object(a.b)("p",null,"Hvis man ønsker at brukeren skal sette inn tall og da gi dem talltastaturet på mobil, ta i bruk ",Object(a.b)("inlineCode",{parentName:"p"},'inputMode="numeric" pattern="[0-9]*"')),Object(a.b)(i.a,{type:"info",mdxType:"Alertstripe"},"Les mer om hvorfor man bør bruke ",Object(a.b)(j,{mdxType:"InlineCode"},"inputMode")," og"," ",Object(a.b)(j,{mdxType:"InlineCode"},"pattern")," ovenfor"," ",Object(a.b)(j,{mdxType:"InlineCode"},' type="number" ')," på"," ",Object(a.b)(c.a,{href:"/components/input/accessibility#unntak",mdxType:"Lenke"},"komponentens tilgjengelighets-sider"),"."),Object(a.b)(u,{mdxType:"Example"},Object(a.b)(o.Input,{label:"Inputfelt-nummer",inputMode:"numeric",pattern:"[0-9]*",mdxType:"Input"})),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'<Input label="Inputfelt-nummer" inputMode="numeric" pattern="[0-9]*" />\n')),Object(a.b)("h2",{id:"kombinasjon-med-hjelpetekst"},"Kombinasjon med Hjelpetekst"),Object(a.b)(i.a,{type:"info",mdxType:"Alertstripe"},"Les mer om hvorfor det kan være lurt å sende Hjelpetekst inn med"," ",Object(a.b)(j,{mdxType:"InlineCode"},"label"),"-propen på"," ",Object(a.b)(c.a,{href:"/components/hjelpetekst/accessibility",mdxType:"Lenke"},"komponentens tilgjengelighets-sider"),"."),Object(a.b)(u,{mdxType:"Example"},Object(a.b)(o.Input,{label:Object(a.b)("div",{style:{display:"flex"}},"Inputfelt-label",Object(a.b)(p.a,{style:{marginLeft:"0.5rem"},mdxType:"Hjelpetekst"},"Innholdet vil vises når brukeren klikker på knappen.")),mdxType:"Input"})),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'<Input\n  label={\n    <div style={{ display: "flex" }}>\n      Inputfelt-label\n      <Hjelpetekst style={{ marginLeft: "0.5rem" }}>\n        Innholdet vil vises når brukeren klikker på knappen.\n      </Hjelpetekst>\n    </div>\n  }\n/>\n')),Object(a.b)("h2",{id:"disabled"},"Disabled"),Object(a.b)(i.a,{type:"advarsel",mdxType:"Alertstripe"},"Merk at disabled bør unngås, og at bruken heller bør løses på andre måter, da fks kombinert med tydelige feilmeldinger hvis handlingen av en eller annen grunn ikke er tillatt. Ler mer om dette på"," ",Object(a.b)(c.a,{href:"/accessibility/disabled",mdxType:"Lenke"},"siden vår om `disabled`"),"."),Object(a.b)(u,{mdxType:"Example"},Object(a.b)(o.Input,{label:"Inputfelt-label",disabled:!0,mdxType:"Input"})),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'<Input label="Inputfelt-label" disabled />\n')),Object(a.b)("h2",{id:"innhold-mellom-label-og-skjemafelt"},"Innhold mellom label og skjemafelt"),Object(a.b)("p",null,"Bruk ",Object(a.b)("inlineCode",{parentName:"p"},"description"),"-propen for å legge inn egendefinert HTML-innhold mellom labelen og skjemafeltet."),Object(a.b)(u,{mdxType:"Example"},Object(a.b)(o.Input,{label:"Inputfelt-label",description:"En kort beskrivelse av feltet",mdxType:"Input"})),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'<Input label="Inputfelt-label" description="En kort beskrivelse av feltet" />\n')),Object(a.b)("h2",{id:"feilmarkering"},"Feilmarkering"),Object(a.b)("h3",{id:"normal-1"},"Normal"),Object(a.b)(u,{mdxType:"Example"},Object(a.b)(o.Input,{label:"Inputfelt-label",feil:"Her er det noe feil",mdxType:"Input"})),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'<Input label="Inputfelt-label" feil="Her er det noe feil" />\n')),Object(a.b)("h3",{id:"forenklet"},"Forenklet"),Object(a.b)(u,{mdxType:"Example"},Object(a.b)(o.Input,{label:"Inputfelt-label",feil:!0,mdxType:"Input"})),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'<Input label="Inputfelt-label" feil />\n')),Object(a.b)("h2",{id:"lengde"},"Lengde"),Object(a.b)("p",null,"Lengden på inputfelt skal tilpasses det antallet tegn bruker skal fylle inn. For å holde skjemaene\nryddige og oversiktlige, samt for å lette utviklingen er det satt et sett med faste bredder. Velg\nden bredden som passer best til dataene bruker skal fylle inn."),Object(a.b)(u,{mdxType:"Example"},Object(a.b)(o.SkjemaGruppe,{mdxType:"SkjemaGruppe"},Object(a.b)(o.Input,{label:"Fullbredde inputfelt:",bredde:"fullbredde",mdxType:"Input"}),Object(a.b)(o.Input,{label:"XXL inputfelt",bredde:"XXL",mdxType:"Input"}),Object(a.b)(o.Input,{label:"XL inputfelt",bredde:"XL",mdxType:"Input"}),Object(a.b)(o.Input,{label:"L inputfelt",bredde:"L",mdxType:"Input"}),Object(a.b)(o.Input,{label:"M inputfelt",bredde:"M",mdxType:"Input"}),Object(a.b)(o.Input,{label:"S inputfelt",bredde:"S",mdxType:"Input"}),Object(a.b)(o.Input,{label:"XS inputfelt",bredde:"XS",mdxType:"Input"}),Object(a.b)(o.Input,{label:"XXS inputfelt",bredde:"XXS",mdxType:"Input"}))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'<Input label="Fullbredde inputfelt:" bredde="fullbredde" />\n<Input label="XXL inputfelt" bredde="XXL" />\n<Input label="XL inputfelt" bredde="XL" />\n<Input label="L inputfelt" bredde="L" />\n<Input label="M inputfelt" bredde="M" />\n<Input label="S inputfelt" bredde="S" />\n<Input label="XS inputfelt" bredde="XS" />\n<Input label="XXS inputfelt" bredde="XXS" />\n')),Object(a.b)("h2",{id:"mini"},"Mini"),Object(a.b)("p",null,"Man kan også rendre en mindre ",Object(a.b)("inlineCode",{parentName:"p"},"32px")," versjon ved å bruke ",Object(a.b)("inlineCode",{parentName:"p"},"mini"),"-attributtet."),Object(a.b)(i.a,{type:"advarsel",mdxType:"Alertstripe"},"Som hovedregel skal vi ",Object(a.b)("strong",null,"alltid")," bruke de store inputfeltene våre. For tilfeller med svært begrenset plass kan de mindre inputfeltene brukes ",Object(a.b)("strong",null,"unntaksvis ved klart behov"),"."),Object(a.b)(u,{mdxType:"Example"},Object(a.b)(o.Input,{mini:!0,mdxType:"Input"})),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"<Input mini />\n")))}O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-nav-frontend-skjema-md-input-input-overview-mdx-790fd083802876e34304.js.map