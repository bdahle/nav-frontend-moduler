(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"1g+j":function(e,t,n){},PZAg:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ToggleGruppePure=t.ToggleGruppe=t.ToggleKnapp=t.ToggleKnappPure=void 0;var o=n("pH4S");Object.defineProperty(t,"ToggleKnappPure",{enumerable:!0,get:function(){return r(o).default}});var a=n("bkH5");Object.defineProperty(t,"ToggleKnapp",{enumerable:!0,get:function(){return r(a).default}});var i=n("wtFO");Object.defineProperty(t,"ToggleGruppe",{enumerable:!0,get:function(){return r(i).default}});var s=n("s164");Object.defineProperty(t,"ToggleGruppePure",{enumerable:!0,get:function(){return r(s).default}})},"XK/f":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return c}));var r,o=n("+I+c"),a=(n("mXGw"),n("/FXl")),i=n("PZAg"),s=["components"],p={ingress:'ToggleKnapp har to tilstander; på eller av. Komponenten kan brukes alene eller kombinert med flere i en <a href="/components/togglegruppe">ToggleGruppe</a>.'},u=(r="Example",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",e)}),l={_frontmatter:p};function c(e){var t=e.components,n=Object(o.a)(e,s);return Object(a.b)("wrapper",Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("nav",{className:"table-of-contents"},Object(a.b)("ol",{parentName:"nav",className:"toc-level toc-level-1"},Object(a.b)("li",{parentName:"ol",className:"toc-item toc-item-h2"},Object(a.b)("a",{parentName:"li",className:"toc-link toc-link-h2",href:"#normal"},"Normal")),Object(a.b)("li",{parentName:"ol",className:"toc-item toc-item-h2"},Object(a.b)("a",{parentName:"li",className:"toc-link toc-link-h2",href:"#kompakt"},"Kompakt")))),Object(a.b)("h2",{id:"normal"},"Normal"),Object(a.b)(u,{mdxType:"Example"},Object(a.b)(i.ToggleKnapp,{mdxType:"ToggleKnapp"},"Toggle")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"<ToggleKnapp>Toggle</ToggleKnapp>\n")),Object(a.b)("h2",{id:"kompakt"},"Kompakt"),Object(a.b)(u,{mdxType:"Example"},Object(a.b)(i.ToggleKnapp,{kompakt:!0,mdxType:"ToggleKnapp"},"Toggle")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"<ToggleKnapp>Toggle</ToggleKnapp>\n")))}c.isMDXComponent=!0},bkH5:function(e,t,n){"use strict";var r=n("QKC2"),o=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return a(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=i(n("mXGw")),u=n("FdHq"),l=s(n("pH4S")),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleClick=function(e){var t=!n.state.pressed;n.setState({pressed:t}),n.props.onClick&&n.props.onClick(e,t)},n.state={pressed:t.pressed},n}return r(t,e),t.prototype.render=function(){var e=u.omit(this.props,"children","pressed");return p.createElement(l.default,Object.assign({pressed:this.state.pressed},e,{onClick:this.handleClick}),this.props.children)},t}(p.Component);c.defaultProps={pressed:!1},t.default=c},pH4S:function(e,t,n){"use strict";var r=n("QKC2"),o=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return a(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ToggleKnappPurePropsShape=void 0;var p=i(n("mXGw")),u=i(n("W0B4")),l=s(n("8Jek")),c=n("FdHq");n("1g+j");var f=function(e){function t(){return e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e,t=c.omit(this.props,"children","pressed","kompakt","isRequired"),n=c.guid();return p.createElement("button",Object.assign({type:"button",id:n,className:(e=this.props,l.default("toggleKnapp",{"toggleKnapp--pressed":e.pressed,"toggleKnapp--kompakt":e.kompakt})),"aria-pressed":this.props.pressed},t),this.props.children)},t}(p.PureComponent);f.defaultProps={pressed:!1},t.ToggleKnappPurePropsShape=u.shape({children:u.oneOfType([u.arrayOf(u.node),u.node]),pressed:u.bool,kompakt:u.bool,onChange:u.func}).isRequired,t.default=f},s164:function(e,t,n){"use strict";var r=n("QKC2"),o=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return a(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=i(n("mXGw")),u=s(n("8Jek")),l=n("FdHq"),c=i(n("pH4S"));n("1g+j");var f=function(e){function t(){return e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=this,t=l.omit(this.props,"className","children","kompakt","toggles","defaultToggles");return p.createElement("div",Object.assign({className:u.default("toggleGruppe",this.props.className)},t),this.props.toggles.map((function(t,n){return p.createElement(c.default,Object.assign({key:l.guid(),kompakt:e.props.kompakt},t))})))},t}(p.PureComponent);t.default=f},wtFO:function(e,t,n){"use strict";var r=n("QKC2"),o=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return a(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=i(n("mXGw")),u=n("FdHq"),l=s(n("s164")),c=(n("pH4S"),function(e){function t(t){var n;return(n=e.call(this,t)||this).handleClick=function(e,t,r){"function"==typeof r&&r(e);var o=n.state.active.map((function(e,r,o){return n.props.multiSelect?n.props.minstEn&&1===o.filter(Boolean).length&&o.indexOf(!0)===t?e:r===t?!e:e:n.props.minstEn?r===t:r===t&&!e}));n.setState({active:o}),"function"==typeof n.props.onChange&&n.props.onChange(e,n.props.defaultToggles.map((function(e,t){return Object.assign(Object.assign({},e),{pressed:o[t]})})))},n.state={active:n.props.defaultToggles.map((function(e,t,r){return e.pressed||!!n.props.minstEn&&0===t&&r.every((function(e){return!e.pressed}))}))},n}return r(t,e),t.prototype.render=function(){var e=this,t=u.omit(this.props,"children","multiSelect","toggles","minstEn"),n=this.props.defaultToggles.map((function(t,n){return Object.assign(Object.assign({},t),{pressed:e.state.active[n],kompakt:e.props.kompakt,onClick:function(r){return e.handleClick(r,n,t.onClick)}})}));return p.createElement(l.default,Object.assign({},t,{toggles:n}))},t}(p.Component));t.default=c}}]);
//# sourceMappingURL=component---packages-nav-frontend-toggle-md-toggle-knapp-overview-mdx-289df94b89d7b949e189.js.map