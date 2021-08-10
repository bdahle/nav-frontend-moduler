(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{A6Ri:function(e,a,l){"use strict";l.r(a),l.d(a,"_frontmatter",(function(){return m})),l.d(a,"default",(function(){return u}));var t,n=l("+I+c"),i=(l("mXGw"),l("/FXl")),r=l("X0E2"),o=l.n(r),p=l("b4v9"),d=l.n(p),s=l("xBFs"),b=["components"],m={ingress:"Radioknapper brukes når brukeren bare skal få velge én av flere forhåndsbestemte alternativer."},c=(t="Example",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),j={_frontmatter:m};function u(e){var a=e.components,l=Object(n.a)(e,b);return Object(i.b)("wrapper",Object.assign({},j,l,{components:a,mdxType:"MDXLayout"}),Object(i.b)("nav",{className:"table-of-contents"},Object(i.b)("ol",{parentName:"nav",className:"toc-level toc-level-1"},Object(i.b)("li",{parentName:"ol",className:"toc-item toc-item-h2"},Object(i.b)("a",{parentName:"li",className:"toc-link toc-link-h2",href:"#normal"},"Normal")),Object(i.b)("li",{parentName:"ol",className:"toc-item toc-item-h2"},Object(i.b)("a",{parentName:"li",className:"toc-link toc-link-h2",href:"#disabled"},"Disabled")),Object(i.b)("li",{parentName:"ol",className:"toc-item toc-item-h2"},Object(i.b)("a",{parentName:"li",className:"toc-link toc-link-h2",href:"#radiogruppe"},"RadioGruppe"),Object(i.b)("ol",{parentName:"li",className:"toc-level toc-level-2"},Object(i.b)("li",{parentName:"ol",className:"toc-item toc-item-h3"},Object(i.b)("a",{parentName:"li",className:"toc-link toc-link-h3",href:"#felles-feilmelding"},"Felles feilmelding")),Object(i.b)("li",{parentName:"ol",className:"toc-item toc-item-h3"},Object(i.b)("a",{parentName:"li",className:"toc-link toc-link-h3",href:"#feilmelding-uten-propagering-av-feil-prop-til-children"},"Feilmelding uten propagering av feil-prop til children")))))),Object(i.b)("h2",{id:"normal"},"Normal"),Object(i.b)(c,{mdxType:"Example"},Object(i.b)(s.Radio,{label:"Radio-label",name:"minRadioKnapp",mdxType:"Radio"})),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'<Radio label={"Radio-label"} name="minRadioKnapp" />\n')),Object(i.b)("h2",{id:"disabled"},"Disabled"),Object(i.b)(o.a,{type:"advarsel",mdxType:"Alertstripe"},"Merk at disabled bør unngås, og at bruken heller bør løses på andre måter, da fks kombinert med tydelige feilmeldinger hvis handlingen av en eller annen grunn ikke er tillatt. Ler mer om dette på"," ",Object(i.b)(d.a,{href:"/accessibility/disabled",mdxType:"Lenke"},"siden vår om `disabled`"),"."),Object(i.b)(c,{mdxType:"Example"},Object(i.b)(s.Radio,{label:"Radio-label",name:"minRadioKnapp",disabled:!0,mdxType:"Radio"})),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'<Radio label={"Radio-label"} name="minRadioKnapp" disabled />\n')),Object(i.b)("h2",{id:"radiogruppe"},"RadioGruppe"),Object(i.b)("p",null,"Denne komponenten inkluderer også en ",Object(i.b)("inlineCode",{parentName:"p"},"RadioGruppe"),"-komponent som kan brukes til å gruppere flere radioknapper:"),Object(i.b)(o.a,{type:"info",mdxType:"Alertstripe"},"Dersom du har mer enn fem alternativer, kan du vurdere om det er mer hensiktsmessig å benytte en ",Object(i.b)(d.a,{href:"/components/select",mdxType:"Lenke"},"Select")," i stedet."),Object(i.b)(c,{mdxType:"Example"},Object(i.b)(s.RadioGruppe,{legend:"Hvor vil du sitte?",mdxType:"RadioGruppe"},Object(i.b)(s.Radio,{label:"Bakerst",name:"sitteplass",mdxType:"Radio"}),Object(i.b)(s.Radio,{label:"Midten",name:"sitteplass",mdxType:"Radio"}),Object(i.b)(s.Radio,{label:"Fremst",name:"sitteplass",mdxType:"Radio"}))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'import { RadioGruppe, Radio } from "nav-frontend-skjema";\n\n<RadioGruppe legend="Hvor vil du sitte?">\n  <Radio label={"Bakerst"} name="sitteplass" />\n  <Radio label={"Midten"} name="sitteplass" />\n  <Radio label={"Fremst"} name="sitteplass" />\n</RadioGruppe>;\n')),Object(i.b)("h3",{id:"felles-feilmelding"},"Felles feilmelding"),Object(i.b)(c,{mdxType:"Example"},Object(i.b)(s.RadioGruppe,{legend:"Hvor vil du sitte?",feil:"Feilmeldingstekst må gjenta nøkkelord fra label",mdxType:"RadioGruppe"},Object(i.b)(s.Radio,{label:"Bakerst",name:"sitteplass",mdxType:"Radio"}),Object(i.b)(s.Radio,{label:"Midten",name:"sitteplass",mdxType:"Radio"}),Object(i.b)(s.Radio,{label:"Fremst",name:"sitteplass",mdxType:"Radio"}))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'import { RadioGruppe, Radio } from "nav-frontend-skjema";\n\n<RadioGruppe\n  legend="Hvor vil du sitte?"\n  feil="Feilmeldingstekst må gjenta nøkkelord fra label"\n>\n  <Radio label={"Bakerst"} name="sitteplass" />\n  <Radio label={"Midten"} name="sitteplass" />\n  <Radio label={"Fremst"} name="sitteplass" />\n</RadioGruppe>;\n')),Object(i.b)("h3",{id:"feilmelding-uten-propagering-av-feil-prop-til-children"},"Feilmelding uten propagering av feil-prop til children"),Object(i.b)("p",null,"Bruk ",Object(i.b)("inlineCode",{parentName:"p"},"utenFeilPropagering"),"-propen for å bestemme om ",Object(i.b)("inlineCode",{parentName:"p"},"feil"),"-propen til ",Object(i.b)("inlineCode",{parentName:"p"},"RadioGruppe")," skal propageres til children."),Object(i.b)(c,{mdxType:"Example"},Object(i.b)(s.RadioGruppe,{legend:"Hvor vil du sitte?",feil:"Feilmeldingstekst må gjenta nøkkelord fra label",utenFeilPropagering:!0,mdxType:"RadioGruppe"},Object(i.b)(s.Radio,{label:"Bakerst",name:"sitteplass",mdxType:"Radio"}),Object(i.b)(s.Radio,{label:"Midten",name:"sitteplass",feil:!0,mdxType:"Radio"}),Object(i.b)(s.Radio,{label:"Fremst",name:"sitteplass",mdxType:"Radio"}))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'import { RadioGruppe, Radio } from "nav-frontend-skjema";\n\n<RadioGruppe\n  legend="Hvor vil du sitte?"\n  feil="Feilmeldingstekst må gjenta nøkkelord fra label"\n  utenFeilPropagering\n>\n  <Radio label={"Bakerst"} name="sitteplass" />\n  <Radio label={"Midten"} name="sitteplass" feil />\n  <Radio label={"Fremst"} name="sitteplass" />\n</RadioGruppe>;\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-nav-frontend-skjema-md-radio-radio-overview-mdx-964438c809a07a248900.js.map