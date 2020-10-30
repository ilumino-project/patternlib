/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"client": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/client.js","vendors~client"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../components/legacy/index.js":
/*!***************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/legacy/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib */ "../../components/legacy/lib/index.js");


/***/ }),

/***/ "../../components/legacy/lib/index.js":
/*!*******************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/legacy/lib/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    css: __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js").css,
    keyframes: __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js").keyframes,
    ServerStyleSheet: __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js").ServerStyleSheet,
    styled: __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js").default,
    StyleSheetManager: __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js").StyleSheetManager,
    ThemeProvider: __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js").ThemeProvider,
    Button: __webpack_require__(/*! @patternplate/component-button */ "../../components/next-generation/button/lib/index.js").Button,
    Flag: __webpack_require__(/*! @patternplate/component-flag */ "../../components/next-generation/flag/lib/index.js").Flag,
    Headline: __webpack_require__(/*! @patternplate/component-headline */ "../../components/next-generation/headline/lib/index.js").Headline,
    Icon: __webpack_require__(/*! @patternplate/component-icon */ "../../components/next-generation/icon/lib/index.js").Icon,
    InfoPane: __webpack_require__(/*! @patternplate/component-info-pane */ "../../components/next-generation/info-pane/lib/index.js").InfoPane,
    InnerInfoPane: __webpack_require__(/*! @patternplate/component-info-pane */ "../../components/next-generation/info-pane/lib/index.js").InnerInfoPane,
    IconDefinitions: __webpack_require__(/*! @patternplate/component-icon */ "../../components/next-generation/icon/lib/index.js").definitions,
    injection: __webpack_require__(/*! @patternplate/component-utility/injection */ "../../components/next-generation/utility/injection.js"),
    Link: __webpack_require__(/*! @patternplate/component-link */ "../../components/next-generation/link/lib/index.js").Link,
    Logo: __webpack_require__(/*! @patternplate/component-logo */ "../../components/next-generation/logo/lib/index.js").Logo,
    MainHeader: __webpack_require__(/*! @patternplate/component-main-header */ "../../components/next-generation/main-header/lib/index.js").MainHeader,
    MainNavigation: __webpack_require__(/*! ./main-navigation */ "../../components/legacy/lib/main-navigation/index.js"),
    Markdown: __webpack_require__(/*! @patternplate/component-markdown */ "../../components/next-generation/markdown/lib/markdown.js").Markdown,
    NavigationItem: __webpack_require__(/*! ./navigation-item */ "../../components/legacy/lib/navigation-item/index.js"),
    NavigationLabel: __webpack_require__(/*! ./navigation-label */ "../../components/legacy/lib/navigation-label/index.js"),
    NavigationToolbar: __webpack_require__(/*! ./navigation-toolbar */ "../../components/legacy/lib/navigation-toolbar/index.js"),
    NavigationTree: __webpack_require__(/*! ./navigation-tree */ "../../components/legacy/lib/navigation-tree/index.js"),
    Search: __webpack_require__(/*! @patternplate/component-search */ "../../components/next-generation/search/index.js"),
    Symbol: __webpack_require__(/*! @patternplate/component-icon */ "../../components/next-generation/icon/lib/index.js").Symbol,
    Tag: __webpack_require__(/*! @patternplate/component-tag */ "../../components/next-generation/tag/lib/index.js").Tag,
    ThemeProvider: __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js").ThemeProvider,
    Text: __webpack_require__(/*! @patternplate/component-text */ "../../components/next-generation/text/lib/index.js").Text,
    themes: __webpack_require__(/*! @patternplate/component-themes */ "../../components/next-generation/themes/lib/index.js"),
    svg: __webpack_require__(/*! @patternplate/component-svg */ "../../components/next-generation/svg/lib/svg.js")
};



/***/ }),

/***/ "../../components/legacy/lib/main-navigation/index.js":
/*!***********************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/legacy/lib/main-navigation/index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js").default;
const Header = __webpack_require__(/*! @patternplate/component-main-header */ "../../components/next-generation/main-header/lib/index.js").MainHeader;
const NavigationTree = __webpack_require__(/*! ../navigation-tree */ "../../components/legacy/lib/navigation-tree/index.js");
const NavigationToolbar = __webpack_require__(/*! ../navigation-toolbar */ "../../components/legacy/lib/navigation-toolbar/index.js");
const NavigationLabel = __webpack_require__(/*! ../navigation-label */ "../../components/legacy/lib/navigation-label/index.js");
class Navigation extends React.Component {
    constructor(...args) {
        super(...args);
        this.getRef = this.getRef.bind(this);
        this.handleScrollRequest = this.handleScrollRequest.bind(this);
    }
    handleScrollRequest(e) {
        // noop
    }
    getRef(ref) {
        this.ref = ref;
    }
    render() {
        const { props } = this;
        const children = React.Children.toArray(props.children);
        const toolbar = children.find(child => child.type === NavigationToolbar);
        const header = children.find(child => child.type === NavigationHeader);
        return (React.createElement(StyledNavigation, { onKeyDown: this.handleKeyDown }, header ? (header) : (React.createElement(StyledHeader, { title: props.applicationTitle, symbol: "patternplate" })), React.createElement(StyledNavigationTree, { ref: this.getRef }, React.createElement(Documentation, { visible: props.docs.children.length > 0, active: props.active, docs: props.docs, onItemClick: props.onItemClick, onLabelClick: props.onLabelClick, onScrollRequest: this.handleScrollRequest, query: props.query }), props.showComponents &&
            React.createElement(React.Fragment, null, React.createElement(NavigationLabel, { visible: props.navigation.children.length > 0, enabled: props.componentsEnabled, name: "components", highlight: true, onClick: props.onLabelClick, size: "S" }, "Components"), React.createElement(NavigationTree, { name: "components", visible: props.componentsEnabled && props.navigation.children.length > 0, active: props.active, data: props.navigation.children, onItemClick: props.onItemClick, onScrollRequest: this.handleScrollRequest, prefix: "/component", query: props.query }))), toolbar && (React.createElement(StyledNavigationToolbar, null, toolbar))));
    }
}
module.exports = Navigation;
module.exports.NavigationToolbar = NavigationToolbar;
module.exports.NavigationHeader = NavigationHeader;
Navigation.defaultProps = {
    tools: []
};
function NavigationHeader(props) {
    return React.createElement(StyledNavigatHeader, null, props.children);
}
const StyledNavigatHeader = styled.div `
  box-sizing: border-box;
  min-height: 60px;
  background: ${props => props.theme.colors.backgroundSecondary};
`;
function getPadding(el) {
    const style = global.getComputedStyle(el, null);
    return direction => parseInt(style.getPropertyValue(`padding-${direction}`), 10);
}
const StyledHeader = styled(Header) `
  height: 60px;
  box-sizing: border-box;
  flex-shrink: 0;
`;
const StyledNavigation = styled.div `
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background-color: ${props => props.theme.colors.background};
`;
const PASSAGE_HEIGHT = 50;
const StyledNavigationTree = styled.div `
  flex-grow: 1;
  flex-shrink: 1;
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
  -webkit-overflow-scroll: touch;
  mask-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) ${PASSAGE_HEIGHT}px
  );
  -webkit-mask-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) ${PASSAGE_HEIGHT}px
  );
  & > *:last-child {
    margin-bottom: ${PASSAGE_HEIGHT}px;
  }
  @media screen {
    mask-image: none;
    -webkit-mask-image: none;
  }
`;
const StyledNavigationToolbar = styled.div `
  flex-grow: 0;
  flex-shrink: 0;
`;
function Documentation(props) {
    return (React.createElement(StyledDocumentationTree, { visible: props.visible, active: props.active, data: props.docs.children, onItemClick: props.onItemClick, onLabelClick: props.onLabelClick, onScrollRequest: props.onScrollRequest, prefix: "/doc", query: props.query }));
}
const StyledDocumentationTree = styled(NavigationTree) `
  margin-bottom: 5px;
  padding-bottom: 5px;
`;


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../components/legacy/lib/navigation-item/index.js":
/*!***********************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/legacy/lib/navigation-item/index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const tag = __webpack_require__(/*! tag-hoc */ "../../node_modules/tag-hoc/dist/tag.js").default;
const color = __webpack_require__(/*! color */ "../../node_modules/color/index.js");
const styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js").default;
const remark = __webpack_require__(/*! remark */ "../../node_modules/remark/index.js");
const emoji = __webpack_require__(/*! remark-gemoji-to-emoji */ "../../node_modules/remark-gemoji-to-emoji/index.js");
const Icon = __webpack_require__(/*! @patternplate/component-icon */ "../../components/next-generation/icon/lib/index.js").Icon;
const Link = __webpack_require__(/*! @patternplate/component-link */ "../../components/next-generation/link/lib/index.js").Link;
const processor = remark().use(emoji);
class NavigationItem extends React.Component {
    constructor(...args) {
        super(...args);
        this.getRef = this.getRef.bind(this);
    }
    getRef(ref) {
        this.ref = ref;
    }
    componentDidMount() {
        if (this.props.active && this.ref) {
            setTimeout(() => {
                this.props.onScrollRequest({ target: this.ref, props: this.props });
            });
        }
    }
    componentWillUpdate(next) {
        if (this.props.type === "folder") {
            return;
        }
        if (next.active && this.ref) {
            this.props.onScrollRequest({ target: this.ref, props: next });
        }
    }
    render() {
        const { props } = this;
        const title = props.title || `Navigate to ${props.name} ${props.type}`;
        const symbol = props.active ? props.symbolActive : props.symbol;
        const name = processor.processSync(props.name).contents;
        return (React.createElement(StyledNavigationItem, { active: props.active, className: props.className, ref: this.getRef, type: props.type }, React.createElement(StyledNavigationLink, { active: props.active, external: props.external, onClick: props.onClick, href: props.href, sticky: props.type === "folder" && props.active, type: props.type, title: title, nested: props.nested, iconSize: "s", grow: true, hint: true }, symbol && (React.createElement(StyledIcon, { active: props.active, size: "m", symbol: symbol })), React.createElement(StyledName, null, props.name), props.meta && (React.createElement(StyledMeta, { active: props.active }, props.meta))), props.active && props.children));
    }
}
module.exports = NavigationItem;
const StyledIcon = styled(Icon) `
  flex: 0 0 auto;
  fill: ${props => props.theme.colors.color};
  ${props => props.active && `fill: ${color(props.theme.colors.active)}`};
  padding: 10px 0 10px 9px;
`;
const StyledName = styled.div `
  box-sizing: border-box;
  flex: 1 1 100%;
  padding: 10px;
`;
const StyledMeta = styled.div `
  flex: 1 0 auto;
  margin: 0 ${props => (props.active ? 6 : 10)}px 0 auto;
`;
const StyledNavigationItem = styled.div `
  width: 100%;
  box-sizing: border-box;
  margin-left: 1px;
`;
const LinkTag = tag(["active", "type"])(Link);
const StyledNavigationLink = styled(LinkTag) `
  box-sizing: border-box;
  display: flex;
  width: 100%;
  align-items: center;
  text-decoration: none;
  font-size: ${props => props.theme.fonts.fontSize}px;
  line-height: 20px;
  font-family: ${props => props.theme.fonts.default};
  font-weight: ${props => props.theme.fonts.fontWeight};
  padding-left: ${props => props.nested ? 30 : 0}px;
  :link,
  :visited {
    color: ${props => props.theme.colors.color};
    ${props => props.active && `color: ${color(props.theme.colors.active)}`};
  }
`;



/***/ }),

/***/ "../../components/legacy/lib/navigation-label/index.js":
/*!************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/legacy/lib/navigation-label/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js").default;
const Icon = __webpack_require__(/*! @patternplate/component-icon */ "../../components/next-generation/icon/lib/index.js").Icon;
const Link = __webpack_require__(/*! @patternplate/component-link */ "../../components/next-generation/link/lib/index.js").Link;
const remark = __webpack_require__(/*! remark */ "../../node_modules/remark/index.js");
const emoji = __webpack_require__(/*! remark-gemoji-to-emoji */ "../../node_modules/remark-gemoji-to-emoji/index.js");
const processor = remark().use(emoji);
module.exports = NavigationLabel;
function NavigationLabel(props) {
    return (React.createElement(StyledLabelContainer, { "data-toggle-name": props.name, "data-trigger-name": props.name, "data-toggle-enabled": props.enabled, visible: props.visible, highlight: props.highlight }, React.createElement(StyledLabel, { highlight: props.highlight, enabled: props.enabled, size: props.size }, React.createElement(StyledLabelLink, { highlight: props.highlight, title: `${props.enabled ? 'Close' : 'Expand'} ${props.children} list`, query: { [`${props.name}-enabled`]: !props.enabled } }, React.createElement(StyledLabelIcon, { enabled: props.enabled }, React.createElement(Icon, { symbol: "arrow-right" })), processor.processSync(props.children).contents))));
}
const SIZES = {
    S: 0.9,
    M: 1
};
const StyledLabel = styled.div `
  box-sizing: border-box;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  font-family: ${props => props.theme.fonts.default};
  font-size: ${({ size, theme }) => SIZES[size] * theme.fonts.fontSize}px;
  color: ${props => props.theme.colors.color};
  background-color: ${({ enabled, theme }) => enabled ? theme.colors.backgroundTertiary : theme.colors.background};
  border-style: solid;
  border-top-color: ${({ enabled, theme }) => enabled ? theme.colors.backgroundSecondary : theme.colors.border};
  border-bottom-color: ${props => props.enabled ? 'transparent' : props.theme.colors.border};
  border-width: ${props => props.highlight ? 1 : 0}px 0;
  width: 100%;
`;
const StyledLabelIcon = styled.span `
  margin-right: 10px;
  transform-origin: center;
  transform: rotate(${props => props.enabled ? 90 : 0}deg);
`;
const StyledLabelContainer = styled.div `
  display: ${props => props.visible ? "block" : "none"};
  position: sticky;
  top: -1px;
  left: 0;

  /* Styling that can be toggled by a predetonation script */
  &[data-toggle-enabled="true"] {
    ${StyledLabel} {
      background-color: ${({ theme }) => theme.colors.backgroundTertiary};
      border-top-color: ${({ theme }) => theme.colors.backgroundSecondary};
      border-bottom-color: transparent;
    }

    ${StyledLabelIcon} {
      transform: rotate(90deg);
    }
  }

  &[data-toggle-enabled="false"] {
    ${StyledLabel} {
      background-color: ${({ theme }) => theme.colors.background};
      border-top-color: ${({ theme }) => theme.colors.border};
      border-bottom-color: ${props => props.theme.colors.border};
    }

    ${StyledLabelIcon} {
      transform: rotate(0);
    }
  }
`;
const StyledLabelLink = styled(Link) `
  display: block;
  color: ${props => props.theme.colors.color};
  cursor: pointer;
  text-decoration: none;
  width: 100%;
`;



/***/ }),

/***/ "../../components/legacy/lib/navigation-toolbar/index.js":
/*!**************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/legacy/lib/navigation-toolbar/index.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js").default;
module.exports = NavigationToolbar;
function NavigationToolbar(props) {
    return React.createElement(StyledNavigationToolbar, null, props.children);
}
NavigationToolbar.defaultProps = {
    children: []
};
const StyledNavigationToolbar = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 10px 15px;
  background-color: ${props => props.theme.colors.backgroundSecondary};
  box-sizing: "border-box";
`;



/***/ }),

/***/ "../../components/legacy/lib/navigation-tree/index.js":
/*!***********************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/legacy/lib/navigation-tree/index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js").default;
const tag = __webpack_require__(/*! tag-hoc */ "../../node_modules/tag-hoc/dist/tag.js").default;
const NavigationLabel = __webpack_require__(/*! ../navigation-label */ "../../components/legacy/lib/navigation-label/index.js");
const NavigationItem = __webpack_require__(/*! ../navigation-item */ "../../components/legacy/lib/navigation-item/index.js");
const Flag = __webpack_require__(/*! @patternplate/component-flag */ "../../components/next-generation/flag/lib/index.js").Flag;
module.exports = NavigationTree;
function NavigationTree(props) {
    return (React.createElement(StyledNavigationTree, { className: props.className, visible: props.visible, "data-toggle-name": props.name, "data-toggle-enabled": props.visible }, props.children, (props.data || [])
        .filter(item => typeof item.manifest === "object")
        .map((item, index) => {
        // TODO: this should not have to deal with normalization
        const options = (item.manifest.options || {});
        const hidden = options.hidden || false;
        const icon = selectSymbol(item);
        const iconActive = selectActiveSymbol(item);
        const name = selectName(item);
        const enabled = (props.query || {})[`${name}-enabled`] === "true";
        switch (item.type) {
            case "folder":
                return (React.createElement(React.Fragment, { key: item.id }, React.createElement(NavigationLabel, { visible: (item.children || []).length > 0, enabled: enabled, name: name, highlight: false, size: "M" }, item.manifest.displayName || item.manifest.name), React.createElement(NavigationItemList, { "data-toggle-name": name, "data-toggle-enabled": (item.children || []).length > 0 && enabled, visible: (item.children || []).length > 0 && enabled }, (item.children || []).map((child, index) => {
                    return (React.createElement(NavigationItem, { key: child.id, active: child.active, href: child.href, id: child.id, meta: (child.warnings || []).map(warning => (React.createElement(NavigationMeta, { key: warning.value, warning: warning }))), name: child.manifest.displayName, nested: true, onClick: props.onItemClick, onScrollRequest: props.onScrollRequest, prefix: props.prefix, symbol: selectSymbol(child), symbolActive: selectActiveSymbol(child), type: child.type }));
                }))));
            case "item":
                return (React.createElement(NavigationItem, { key: item.id, active: item.active, hidden: hidden, href: options.href || item.href, external: Boolean(options.href), id: item.id, meta: (item.warnings || []).map(warning => (React.createElement(NavigationMeta, { key: warning.value, warning: warning }))), name: item.manifest.displayName, onClick: props.onItemClick, onScrollRequest: props.onScrollRequest, prefix: props.prefix, symbol: icon, symbolActive: iconActive, type: item.type }));
        }
    })));
}
const StyledNavigationTree = styled(tag(["visible"])("div")) `
  display: ${props => props.visible ? "block" : "none"};
  &[data-toggle-enabled="false"] {
    display: none;
  }
  &[data-toggle-enabled="true"] {
    display: block;
  }
`;
const NavigationItemList = styled(tag(["visible"])("div")) `
  display: ${props => props.visible ? "block" : "none"};
  &[data-toggle-enabled="false"] {
    display: none;
  }
  &[data-toggle-enabled="true"] {
    display: block;
  }
`;
function NavigationMeta(props) {
    switch (props.warning.type) {
        case "flag":
        default:
            return React.createElement(Flag, { title: props.warning.message }, props.warning.value);
    }
}
function selectActiveSymbol(item) {
    if (item.type === "item") {
        return null;
    }
    if (item.manifest.options.iconActive) {
        return item.manifest.options.iconActive;
    }
    if (item.type === "folder") {
        return "arrow-down";
    }
    return null;
}
function selectSymbol(item) {
    if (item.type === "item") {
        return null;
    }
    if (item.manifest.options.icon) {
        return item.manifest.options.icon;
    }
    if (item.type === "folder") {
        return "arrow-right";
    }
    return null;
}
function selectName(item) {
    if (typeof item.manifest.name === "string" && item.manifest.name) {
        return item.manifest.name;
    }
    if (typeof item.manifest.displayName === "string" && item.manifest.displayName) {
        return encodeURIComponent(item.manifest.displayName.replace(/[^\w]/g, '-').toLowerCase());
    }
    return encodeURIComponent(item.id.replace(/[^\w]/g, '-').toLowerCase());
}



/***/ }),

/***/ "../../components/next-generation/button/lib/button.js":
/*!************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/button/lib/button.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
const tag_hoc_1 = __webpack_require__(/*! tag-hoc */ "../../node_modules/tag-hoc/dist/tag.js");
const component_icon_1 = __webpack_require__(/*! @patternplate/component-icon */ "../../components/next-generation/icon/lib/index.js");
const component_link_1 = __webpack_require__(/*! @patternplate/component-link */ "../../components/next-generation/link/lib/index.js");
const InnerButton = props => {
    const { className, title, onClick, external, href, type, symbol, children } = props;
    const OuterElement = type === ButtonTypes.link
        ? tag_hoc_1.default(["external", "type"])(component_link_1.Link)
        : tag_hoc_1.default(["external"])("button");
    return (React.createElement(OuterElement, { className: className, title: title, onClick: onClick, external: external, href: href, type: type }, children && React.createElement(StyledLabel, null, children), symbol && React.createElement(StyledIcon, { symbol: symbol })));
};
const StyledLabel = styled_components_1.default.span `
  font-family: ${props => props.theme.fonts.default};
`;
const StyledIcon = styled_components_1.default(component_icon_1.Icon) `
  &:not(:first-child) {
    margin-left: 5px;
  }
`;
var ButtonTypes;
(function (ButtonTypes) {
    ButtonTypes[ButtonTypes["button"] = 0] = "button";
    ButtonTypes[ButtonTypes["link"] = 1] = "link";
})(ButtonTypes = exports.ButtonTypes || (exports.ButtonTypes = {}));
exports.Button = styled_components_1.default(InnerButton) `
  appearance: none;
  display: inline-flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: none;
  outline: 0;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.color};
  font: inherit;
  box-sizing: border-box;
  vertical-align: top;
  ${props => props.frameless && styled_components_1.css `
    padding: 4px;
    border: 1px solid currentColor;
  `};
  background: ${props => props.transparent && 'transparent'}
`;
exports.Button.defaultProps = {
    type: ButtonTypes.button
};


/***/ }),

/***/ "../../components/next-generation/button/lib/index.js":
/*!***********************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/button/lib/index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./button */ "../../components/next-generation/button/lib/button.js"));


/***/ }),

/***/ "../../components/next-generation/code/lib/code.js":
/*!********************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/code/lib/code.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
const refractor = __webpack_require__(/*! refractor/core.js */ "../../node_modules/refractor/core.js");
const toh = __webpack_require__(/*! hast-to-hyperscript */ "../../node_modules/hast-to-hyperscript/index.js");
// in core: css
refractor.register(__webpack_require__(/*! refractor/lang/less.js */ "../../node_modules/refractor/lang/less.js"));
refractor.register(__webpack_require__(/*! refractor/lang/scss.js */ "../../node_modules/refractor/lang/scss.js"));
refractor.register(__webpack_require__(/*! refractor/lang/stylus.js */ "../../node_modules/refractor/lang/stylus.js"));
// in core: js
refractor.register(__webpack_require__(/*! refractor/lang/jsx.js */ "../../node_modules/refractor/lang/jsx.js"));
refractor.register(__webpack_require__(/*! refractor/lang/typescript.js */ "../../node_modules/refractor/lang/typescript.js"));
refractor.register(__webpack_require__(/*! refractor/lang/tsx.js */ "../../node_modules/refractor/lang/tsx.js"));
refractor.register(__webpack_require__(/*! refractor/lang/json.js */ "../../node_modules/refractor/lang/json.js"));
// in core: xml, html, svg
refractor.register(__webpack_require__(/*! refractor/lang/markdown.js */ "../../node_modules/refractor/lang/markdown.js"));
refractor.register(__webpack_require__(/*! refractor/lang/bash.js */ "../../node_modules/refractor/lang/bash.js"));
refractor.register(__webpack_require__(/*! refractor/lang/diff.js */ "../../node_modules/refractor/lang/diff.js"));
module.exports.highlight = highlight;
module.exports.toElements = toElements;
exports.Code = props => {
    const source = highlightCode(props.language, props.children);
    const highlights = Array.isArray(props.highlights) ? props.highlights : [];
    return props.block ? (React.createElement(StyledPre, null, React.createElement(StyledCode, { className: props.className }, source), highlights.length > 0 && (React.createElement(StyledLines, null, props.children.split("\n").map((line, index) => (React.createElement(StyledLine, { key: index, highlight: highlights.indexOf(index + 1) > -1 }, line || React.createElement("span", null, " ")))))))) : (React.createElement(StyledCode, { className: props.className }, source));
};
const themes = {
    dark: {
        mono1: "#abb2bf",
        mono2: "#818896",
        mono3: "#5c6370",
        hue1: "#56b6c2",
        hue2: "#61aeee",
        hue3: "#c678dd",
        hue4: "#7ec699",
        hue5: "#e2777a",
        hue52: "#be5046",
        hue6: "#f8c555",
        hue62: "#f08d49"
    },
    light: {
        mono1: "#383a42",
        mono2: "#686b77",
        mono3: "#a0a1a7",
        hue1: "#0184bb",
        hue2: "#4078f2",
        hue3: "#a626a4",
        hue4: "#50a14f",
        hue5: "#e45649",
        hue52: "#c91243",
        hue6: "#f08d49",
        hue62: "#c18401"
    }
};
const themed = key => props => themes[props.theme.name][key];
const StyledPre = styled_components_1.default.pre `
  position: relative;
  white-space: pre-wrap;
`;
const BACKGROUND = props => {
    if (!props.highlight) {
        return "transparent";
    }
    return props.theme.name === "dark"
        ? "rgba(0, 0, 0, .5)"
        : "rgba(0, 0, 0, .075)";
};
const StyledLine = styled_components_1.default.div `
  position: relative;
  color: transparent;

  &::after,
  &::before {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    background: ${BACKGROUND};
  }

  &::after {
    left: 50%;
    right: -50%;
  }

  &::before {
    left: -50%;
    right: 50%;
  }
`;
const StyledCode = styled_components_1.default.code `
  position: relative;
  z-index: 2;
  display: block;
  padding: 0.5em;
  color: ${themed("mono1")};
  font-family: ${props => props.theme.fonts.code};
  box-sizing: border-box;
  font-size: 15.3px;
  line-height: 23px;
  overflow: hidden;
  ${props => props.css}

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${themed("mono3")};
  }

  .token.punctuation {
    color: ${themed("mono1")};
  }

  .token.tag,
  .token.attr-name,
  .token.namespace,
  .token.deleted {
    color: ${themed("hue5")};
  }

  .token.function-name {
    color: #6196cc;
  }

  .token.boolean,
  .token.number,
  .token.function {
    color: ${themed("hue62")};
  }

  .token.property,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: ${themed("hue6")};
  }

  .token.selector,
  .token.important,
  .token.atrule,
  .token.keyword,
  .token.builtin {
    color: ${themed("hue2")};
  }

  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable {
    color: ${themed("hue4")};
  }

  .token.operator,
  .token.entity,
  .token.url {
    color: ${themed("hue5")};
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.inserted {
    color: green;
  }
`;
const StyledLines = styled_components_1.default(StyledCode) `
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  overflow: visible;
`;
function highlightCode(language, source = "") {
    if (!language) {
        return source;
    }
    if (!source) {
        return source;
    }
    const hast = highlight(language, source);
    return toElements(hast);
}
const ALIASES = {
    md: "markdown",
    sh: "bash"
};
function highlight(language, source) {
    const lang = ALIASES[language] || language;
    if (!refractor.registered(lang)) {
        return source;
    }
    return refractor.highlight(source, lang);
}
function toElements(children) {
    if (!Array.isArray(children)) {
        return children;
    }
    const root = toh(React.createElement, {
        type: "element",
        tagName: "div",
        children
    });
    return root.props.children;
}


/***/ }),

/***/ "../../components/next-generation/code/lib/index.js":
/*!*********************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/code/lib/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./code */ "../../components/next-generation/code/lib/code.js"));


/***/ }),

/***/ "../../components/next-generation/flag/lib/flag.js":
/*!********************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/flag/lib/flag.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const flag_styles_1 = __webpack_require__(/*! ./flag.styles */ "../../components/next-generation/flag/lib/flag.styles.js");
exports.Flag = props => {
    return React.createElement(flag_styles_1.StyledText, { className: props.className }, props.children);
};


/***/ }),

/***/ "../../components/next-generation/flag/lib/flag.styles.js":
/*!***************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/flag/lib/flag.styles.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
const text = __webpack_require__(/*! react-addons-text-content */ "../../node_modules/react-addons-text-content/dist/react-addons-text-content.js");
exports.StyledText = styled_components_1.default.span `
  display: inline-block;
  padding: 2px 4px;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 3px;
  font-family: ${props => props.theme.fonts.default};
  ${props => {
    const color = getFlagColor(text(props.children), props.theme.colors);
    return `
			border-color: ${color};
			color: ${color};
		`;
}};
`;
function getFlagColor(flag, theme) {
    switch (flag) {
        case "alpha":
            return theme.error;
        case "beta":
            return theme.warning;
        case "rc":
            return theme.info;
        case "stable":
            return theme.success;
        case "deprecated":
            return theme.error;
        default:
            return theme.error;
    }
}


/***/ }),

/***/ "../../components/next-generation/flag/lib/index.js":
/*!*********************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/flag/lib/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./flag */ "../../components/next-generation/flag/lib/flag.js"));


/***/ }),

/***/ "../../components/next-generation/headline/lib/headline.js":
/*!****************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/headline/lib/headline.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
const component_text_1 = __webpack_require__(/*! @patternplate/component-text */ "../../components/next-generation/text/lib/index.js");
const ORDERS = {
    0: 72,
    1: 36,
    2: 27,
    3: 23,
    4: 18
};
const InnerHeadline = props => {
    const as = props.as || 'h1';
    return React.createElement(component_text_1.Text, { as: as, className: props.className, id: props.id }, props.children);
};
exports.Headline = styled_components_1.default(InnerHeadline) `
  color: ${(props) => props.theme.colors.color};
  font-size: ${props => ORDERS[props.order]}px;
  font-family: ${props => props.theme.fonts.headline};
  margin: 60px 0 16px 0;
  font-weight: 300;
  line-height: 1.25;
`;


/***/ }),

/***/ "../../components/next-generation/headline/lib/index.js":
/*!*************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/headline/lib/index.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./headline */ "../../components/next-generation/headline/lib/headline.js"));


/***/ }),

/***/ "../../components/next-generation/icon/lib/icon.js":
/*!********************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/icon/lib/icon.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
const Icons = __webpack_require__(/*! ./icons */ "../../components/next-generation/icon/lib/icons.js");
const symbol_1 = __webpack_require__(/*! ./symbol */ "../../components/next-generation/icon/lib/symbol.js");
const SIZES = {
    s: "14px",
    m: "22px",
    l: "38px",
    text: ".8em"
};
const iconNames = Object.keys(Icons.icons);
__export(__webpack_require__(/*! ./symbol */ "../../components/next-generation/icon/lib/symbol.js"));
var icons_1 = __webpack_require__(/*! ./icons */ "../../components/next-generation/icon/lib/icons.js");
exports.definitions = icons_1.definitions;
exports.Icon = props => {
    const creator = typeof Icons.icons[props.symbol] === 'function'
        ? Icons.icons[props.symbol]
        : Icons.icons.placeholder;
    return (React.createElement(StyledIcon, { className: props.className, size: props.size, inline: props.inline, title: props.title, viewBox: "0 0 24 24" }, React.createElement(symbol_1.Symbol, { id: props.symbol, definition: creator() })));
};
exports.symbols = iconNames;
exports.Icon.defaultProps = {
    size: "m",
    symbol: "placeholder"
};
const StyledIcon = styled_components_1.default.svg `
  display: ${props => (props.inline ? "inline-flex" : "flex")};
  flex-shrink: 0;
  width: ${props => SIZES[props.size]};
  height: ${props => SIZES[props.size]};
  justify-content: center;
  align-items: center;
  color: inherit;
  fill: currentColor;
`;


/***/ }),

/***/ "../../components/next-generation/icon/lib/icons.js":
/*!*********************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/icon/lib/icons.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* eslint-disable max-len */
const arrowLeft = "M9.452 13.233c-.14-.148-.258-.31-.344-.494-.215-.465-.215-1.01 0-1.475.085-.184.203-.346.343-.494l3.543-3.544 1.06 1.06c-1.183 1.186-2.46 2.285-3.55 3.558-.058.075-.073.175-.033.262.013.03.033.054.056.078l3.527 3.527-1.06 1.06-3.54-3.54z";
const arrowRight = "m 14.202,10.767 c 0.14,0.147 0.258,0.31 0.344,0.494 0.215,0.464 0.215,1.01 0,1.474 -0.085,0.185 -0.203,0.347 -0.343,0.494 L 10.66,16.775 9.6,15.715 c 1.183,-1.186 2.46,-2.285 3.55,-3.558 0.058,-0.075 0.073,-0.176 0.033,-0.262 -0.013,-0.03 -0.033,-0.055 -0.056,-0.08 L 9.601,8.29 l 1.06,-1.06 3.54,3.54 z";
const arrowDown = {
    d: "m 14.202,10.767 c 0.14,0.147 0.258,0.31 0.344,0.494 0.215,0.464 0.215,1.01 0,1.474 -0.085,0.185 -0.203,0.347 -0.343,0.494 L 10.66,16.775 9.6,15.715 c 1.183,-1.186 2.46,-2.285 3.55,-3.558 0.058,-0.075 0.073,-0.176 0.033,-0.262 -0.013,-0.03 -0.033,-0.055 -0.056,-0.08 L 9.601,8.29 l 1.06,-1.06 3.54,3.54 z",
    transform: "rotate(90, 12.1536, 12.0025)"
};
const code = "M20.54 10.76l-3.313-3.313-.777 1.344 3.03 3.03c.098.1.098.257 0 .354l-3.533 3.538 1.06 1.06 3.536-3.538c.68-.683.68-1.792-.002-2.473zM4.52 11.82L8.05 8.29l-1.06-1.06L3.46 10.76c-.682.683-.683 1.79-.003 2.474l3.316 3.32.777-1.345-3.032-3.036c-.097-.097-.097-.255 0-.353zM7.6 18.12l7.5-12.99 1.3.75-7.5 12.99z";
const close = [
    "M11.988 1.333C6.08 1.333 1.274 6.14 1.274 12.047c0 5.908 4.806 10.714 10.714 10.714s10.714-4.806 10.714-10.714c0-5.907-4.807-10.714-10.714-10.714zm0 19.78c-5 0-9.066-4.067-9.066-9.066s4.067-9.065 9.066-9.065 9.065 4.066 9.065 9.065-4.067 9.066-9.065 9.066z",
    "M17.232 6.802a.824.824 0 0 0-1.165 0l-4.08 4.08-4.079-4.08a.824.824 0 1 0-1.165 1.166l4.08 4.08-4.08 4.079a.824.824 0 1 0 1.165 1.165l4.08-4.08 4.079 4.08a.82.82 0 0 0 1.165 0 .824.824 0 0 0 0-1.165l-4.08-4.08 4.08-4.079a.824.824 0 0 0 0-1.166z"
];
const dark = "M12 16v3.227L5.52 15.15l-.02-6.3L12 4.77V8l-2 2 4 4-2 2zm0-13L4 8.02l.02 7.96L12 21l7.937-5L20 8l-8-5z";
const dependencies = "M9.453 20.026L6.75 21.378v-4.17l3.256-1.627v3.56c0 .38-.214.73-.553.9m-6.906 0c-.34-.17-.553-.515-.553-.893v-3.55l3.256 1.62v4.17L2.547 20.03zm3.006-7.062c.14-.07.294-.106.447-.106.153 0 .306.036.447.106l2.72 1.36L6 15.906 2.833 14.32l2.72-1.36zm4.57.16L7.12 11.62c-.345-.17-.732-.263-1.118-.263-.386 0-.773.09-1.118.26L1.878 13.12c-.854.423-1.384 1.28-1.384 2.233v3.77c0 .953.53 1.81 1.382 2.237l3.006 1.503c.345.174.732.266 1.118.266.386 0 .773-.09 1.118-.27l3.006-1.505c.852-.427 1.382-1.283 1.382-2.236v-3.77c0-.954-.53-1.81-1.382-2.237m11.33 6.906l-2.704 1.35V17.2l3.256-1.625v3.55c0 .38-.214.728-.553.897m-6.906 0c-.34-.17-.553-.517-.553-.895v-3.55l3.256 1.627v4.17l-2.703-1.353zm3.006-7.064c.14-.07.294-.104.447-.104.153 0 .306.04.447.11l2.72 1.36L18 15.91l-3.167-1.583 2.72-1.36zm4.57.16l-3.005-1.5c-.345-.17-.732-.262-1.118-.262-.386 0-.773.097-1.118.27l-3.006 1.502c-.852.425-1.382 1.28-1.382 2.234v3.772c0 .952.53 1.81 1.382 2.236l3.006 1.503c.345.17.732.262 1.118.262.386 0 .773-.092 1.118-.264l3.006-1.5c.852-.43 1.382-1.287 1.382-2.24v-3.77c0-.953-.53-1.81-1.382-2.236M8.547 9.53c-.34-.17-.553-.516-.553-.894v-3.55l3.256 1.627v4.17L8.547 9.53zm3.006-7.063c.14-.07.294-.106.447-.106.153 0 .306.04.447.11l2.72 1.36L12 5.41 8.833 3.827l2.72-1.36zm3.9 7.063l-2.703 1.352v-4.17l3.256-1.627v3.55c0 .38-.214.726-.553.895m.67 1.342c.853-.427 1.383-1.283 1.383-2.236V4.864c0-.953-.53-1.81-1.382-2.236l-3.006-1.503C12.773.953 12.386.86 12 .86c-.386 0-.773.093-1.118.265L7.876 2.628c-.852.427-1.382 1.283-1.382 2.236v3.772c0 .952.53 1.81 1.382 2.236l3.006 1.503c.345.172.732.264 1.118.264.386 0 .773-.1 1.118-.27l3.006-1.51z";
const ecospheres = "M18.052 15.315c0 .287-.162.55-.418.677l-5.296 2.648c-.107.053-.222.08-.338.08-.116 0-.232-.027-.34-.08l-5.295-2.648c-.256-.128-.418-.39-.418-.677v-6.63c0-.287.162-.55.418-.677L11.66 5.36c.108-.053.224-.08.34-.08.116 0 .23.027.338.08l5.296 2.648c.256.128.418.39.418.677v6.63zm.253-8.65L13.01 4.02c-.313-.155-.662-.238-1.01-.238-.35 0-.698.083-1.01.238L5.696 6.666c-.77.385-1.248 1.16-1.248 2.02v6.63c0 .86.478 1.633 1.247 2.017l5.296 2.648c.315.16.66.24 1.01.24s.7-.08 1.01-.235l5.298-2.65c.77-.383 1.247-1.157 1.247-2.017v-6.63c0-.86-.478-1.634-1.247-2.02";
const externalLink = [
    {
        d: "m20.35093,4.63239l-7.85822,7.85822a0.69591,0.69591 0 0 1 -0.98402,-0.98402l7.85822,-7.85822l-5.27918,0a0.69591,0.69591 0 0 1 0,-1.39182l6.9591,0a0.69591,0.69591 0 0 1 0.69591,0.69591l0,6.95911a0.69591,0.69591 0 0 1 -1.39182,0l0,-5.27918zm-12.52639,0.4078l-3.48095,0c-1.15243,0 -2.08634,0.93113 -2.08634,2.08216l0,12.53892c0,1.14825 0.94505,2.08216 2.09052,2.08216l12.51943,0a2.08773,2.08773 0 0 0 2.09051,-2.09052l0,-3.47677a0.69591,0.69591 0 0 0 -1.39182,0l0,3.47677a0.69591,0.69591 0 0 1 -0.69869,0.6987l-12.51943,0a0.70148,0.70148 0 0 1 -0.69869,-0.69035l0,-12.53892c0,-0.38136 0.31038,-0.69034 0.69452,-0.69034l3.48095,0a0.69591,0.69591 0 0 0 0,-1.39182z",
        fillmode: "nonzero"
    }
];
const folder = "M10.5 4.5h-8v14c0 .552.448 1 1 1h17c.552 0 1-.448 1-1v-11h-11v-3zM9 6v3h11v9H4V6h5";
const fullscreen = "M9 3.75v-1.5l-5 .003c-.966 0-1.75.785-1.75 1.75V9h1.5V4.813L8.38 9.44l1.06-1.06-4.63-4.63H9zm-.62 10.81l-4.63 4.626V15h-1.5v4.997c0 .964.785 1.75 1.75 1.75l5 .002v-1.5l-4.19-.005 4.63-4.626-1.06-1.06zM20 2.25l-5-.005v1.5l4.194.003-4.634 4.63 1.06 1.06 4.63-4.624v4.18h1.5V4c0-.966-.785-1.75-1.75-1.75m.25 16.936l-4.63-4.626-1.06 1.06 4.634 4.63-4.194.005v1.5l5-.004c.965 0 1.75-.782 1.75-1.75v-4.993h-1.5v4.18z";
const globals = "M12 20.5c-3.046 0-5.716-1.616-7.217-4.03l.16.065 1.75-4.25c.08-.196.075-.416-.015-.607l-1.936-4.08c.595-.977 1.38-1.824 2.305-2.49L8.25 6.31V9c0 .116.028.23.08.335l3 6c.1.2.282.343.498.394.057.01.115.02.172.02.16 0 .32-.06.45-.15l4-3c.167-.13.275-.32.296-.53l.283-2.746 2.83-.543c.404.99.632 2.075.632 3.21 0 4.688-3.814 8.5-8.5 8.5M3.92 9.37l1.258 2.65-1.172 2.848C3.686 13.97 3.5 13.008 3.5 12c0-.92.15-1.802.422-2.63M19.138 7.4l-2.94.564c-.324.06-.57.33-.604.66l-.306 2.972-3.02 2.264L9.75 8.823V6c0-.2-.08-.39-.22-.53L8.38 4.32c1.1-.52 2.325-.82 3.62-.82 2.992 0 5.623 1.558 7.138 3.9M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2";
const environment = globals;
const home = "M12.055 2l-11 10h1.89v9.02c0 .524.422.95.943.95h7.223V18.2H13v3.77l7.103.03h.008c.524 0 .947-.424.947-.95v-9.01l1.89-.04-10.89-10zm-.005 2.032l7.505 6.892v9.574l-5.055-.023V16.7H9.61v3.77H4.445v-9.525L12.05 4.03";
const light = "M12 8V4.773l6.48 4.078.018 6.3L12 19.23V16l2-2-4-4 2-2zm0 13l8-5.02-.02-7.96L12 3 4.063 8 4 16l8 5z";
const link = [
    "M13.836 15.767h-.749c-.05 0-.105 0-.155-.01a3.425 3.425 0 0 1-.935-.151 3.772 3.772 0 0 1-1.918-1.346 3.146 3.146 0 0 1-.321-.502 2.998 2.998 0 0 1-.216-.502c-.146-.393-.222-.814-.222-1.256s.076-.864.222-1.256h1.37c.096 0 .186.01.277.03a2.264 2.264 0 0 0 0 2.45c.1.152.216.293.351.418.136.13.286.241.457.337.321.176.693.281 1.09.281h3.516c1.245 0 2.26-1.014 2.26-2.26s-1.015-2.26-2.26-2.26h-1.487a4.758 4.758 0 0 0-1.28-1.507h2.767a3.768 3.768 0 0 1 0 7.534h-2.767z",
    "M12.46 10.358a2.156 2.156 0 0 0-.462-.336 2.198 2.198 0 0 0-1.085-.282H7.397c-1.245 0-2.26 1.014-2.26 2.26s1.015 2.26 2.26 2.26h1.492c.316.587.753 1.1 1.275 1.507H7.397a3.768 3.768 0 0 1 0-7.534h3.516c.055 0 .105 0 .156.01.321.005.632.06.929.15a3.73 3.73 0 0 1 1.918 1.347c.13.16.236.326.327.502.085.16.16.326.216.502.146.391.22.814.22 1.256s-.074.863-.22 1.255h-1.371a1.19 1.19 0 0 1-.276-.03c.23-.351.361-.773.361-1.225a2.223 2.223 0 0 0-.714-1.642z"
];
const molecules = "M6.372 4.75h11.255v1.5H6.372zM12.9 16.172c.32.124.617.31.868.56.12.12.222.248.312.383l5.626-9.143c-.514-.06-.99-.274-1.377-.624l-5.43 8.824zM6.08 6.886c-.09.135-.193.263-.312.382-.25.25-.548.437-.87.56l5.43 8.825c.388-.35.864-.564 1.378-.624L6.08 6.883zm4.86 10.554c-.587.586-.587 1.536 0 2.12.585.587 1.535.587 2.12 0 .586-.584.586-1.534 0-2.12-.585-.586-1.535-.586-2.12 0m10.12-13c-.585-.586-1.535-.586-2.12 0-.586.586-.586 1.536 0 2.12.585.587 1.535.587 2.12 0 .587-.584.587-1.534 0-2.12m-16 0c-.585-.586-1.535-.586-2.12 0-.586.586-.586 1.536 0 2.12.585.587 1.535.587 2.12 0 .587-.584.587-1.534 0-2.12";
const organisms = "M6.475 15.75c.008.084.025.165.025.25 0 .48-.142.922-.376 1.302l3.766 2.37c.287-.455.715-.808 1.224-1.002l-4.64-2.92zm11.05-.004l-4.64 2.923c.51.19.937.54 1.225 1l3.765-2.37c-.233-.38-.375-.83-.375-1.3 0-.09.017-.17.026-.26m2.454-5.25c-.564-.004-1.078-.203-1.495-.524l-.032 4.08c.417-.33.934-.54 1.505-.55l.023-3.005zm-15.973.01l.008 3c.567.003 1.083.203 1.5.524l-.01-4.042c-.418.318-.933.515-1.498.516m13.515-2.28c-.007-.08-.022-.15-.022-.22 0-.49.145-.94.386-1.32l-3.773-2.36c-.285.45-.71.81-1.22 1l4.63 2.893zm-11.046.01l4.635-2.91c-.5-.194-.93-.548-1.22-1.003L6.12 6.69c.237.383.38.83.38 1.31 0 .082-.016.16-.024.238M4 9.5c.828 0 1.5-.672 1.5-1.5S4.828 6.5 4 6.5 2.5 7.172 2.5 8 3.172 9.5 4 9.5m8-5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5m-8 10c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m8 5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m8-5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m-8-4c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m8-1c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5";
const pattern = "M12.75 18.948v-7.412c.846-.34 2.457-1.153 5.75-2.892v7.43l-5.75 2.874zM5.5 8.588l5.75 2.874v7.486L5.5 16.073V8.588zm6.5-3.91l5.546 2.772c-3.208 1.687-4.896 2.514-5.47 2.75l-5.56-2.78L12 4.676zm7.447 2.046l-7-3.5c-.14-.07-.294-.106-.447-.106-.153 0-.306.035-.447.106l-7 3.5c-.34.17-.553.515-.553.894v8.764c0 .38.214.725.553.894l7 3.5c.14.07.294.106.447.106.153 0 .307-.035.447-.106l7-3.5c.34-.17.553-.515.553-.894V7.618c0-.38-.214-.725-.553-.894";
const patternplate = [
    "M12.002 20.426a1.264 1.264 0 0 1-.675-.189l-9.05-5.63a.86.86 0 1 1 .906-1.455l8.819 5.494 8.815-5.494a.86.86 0 1 1 .906 1.456l-9.047 5.643a1.267 1.267 0 0 1-.674.175z",
    "M12 17.055a1.244 1.244 0 0 1-.657-.185l-8.886-5.545a1.193 1.193 0 0 1 0-2.023l8.886-5.542a1.25 1.25 0 0 1 1.314 0l8.886 5.542a1.193 1.193 0 0 1 0 2.023l-8.886 5.541a1.24 1.24 0 0 1-.657.19zm-7.99-6.742l7.99 4.98 7.99-4.98L12 5.334l-7.99 4.98z"
];
const polymers = "M6.475 15.75c.008.084.025.165.025.25 0 .48-.142.922-.376 1.302l3.766 2.37c.287-.455.715-.808 1.224-1.002l-4.64-2.92zm11.05-.004l-4.64 2.923c.51.19.937.54 1.225 1l3.765-2.37c-.233-.38-.375-.83-.375-1.3 0-.09.017-.17.026-.26m2.454-5.25c-.564-.008-1.078-.207-1.495-.528l-.032 4.08c.417-.33.934-.54 1.505-.55l.023-3.005zm-15.973.01l.008 3c.567 0 1.083.2 1.5.52l-.01-4.04c-.418.32-.933.514-1.498.515m13.515-2.28c-.007-.08-.022-.15-.022-.22 0-.49.145-.94.386-1.32l-3.773-2.36c-.285.45-.71.81-1.22 1l4.63 2.893zm-11.046.01l4.635-2.91c-.5-.194-.93-.548-1.22-1.003L6.12 6.69c.237.383.38.83.38 1.31 0 .082-.016.16-.024.238m11.064.152l-4.79 2.392v-5.41c-.238.076-.486.127-.75.127-.262 0-.51-.06-.75-.13v5.44l-4.79-2.4c-.088.51-.327.98-.68 1.34l4.512 2.26-4.502 2.24c.35.36.58.82.67 1.34l4.79-2.397v5.42c.24-.074.48-.127.75-.127s.51.05.75.126v-5.38l4.78 2.394c.077-.516.31-.983.653-1.35l-4.543-2.27 4.56-2.27c-.35-.36-.584-.827-.666-1.343M4 9.5c.828 0 1.5-.672 1.5-1.5S4.828 6.5 4 6.5 2.5 7.172 2.5 8 3.172 9.5 4 9.5m8-5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5m-8 10c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m8 5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m8-5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m0-5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5";
const react = "M 16.019531 3 C 15.671125 3.00715 15.300981 3.091375 14.921875 3.2324219 C 14.163662 3.5145156 13.340776 4.0384002 12.503906 4.7753906 C 12.340395 4.9193891 12.176009 5.0979185 12.011719 5.2578125 C 11.901617 5.1513016 11.791835 5.0267433 11.681641 4.9277344 C 10.795655 4.1316628 9.9236686 3.5712298 9.125 3.2695312 C 8.7256657 3.1186821 8.3365968 3.0284378 7.9726562 3.0195312 C 7.6087157 3.0106212 7.270437 3.0833582 6.9726562 3.2578125 C 6.3972498 3.5948924 6.0860013 4.2551581 5.9492188 5.0585938 C 5.8124361 5.8620294 5.8476604 6.8442943 6.0605469 7.9453125 C 6.1031041 8.1654193 6.1740595 8.4036874 6.2304688 8.6328125 C 5.97484 8.7063633 5.7047008 8.7722283 5.46875 8.8554688 C 4.432811 9.2209626 3.5945928 9.6796197 2.9921875 10.201172 C 2.3897822 10.722724 2 11.327349 2 11.984375 C 2 12.662118 2.4082566 13.289795 3.0429688 13.839844 C 3.6776808 14.389892 4.5645597 14.878259 5.65625 15.255859 C 5.8317684 15.316571 6.0331245 15.360088 6.21875 15.414062 C 6.1582822 15.66053 6.0832065 15.917073 6.0390625 16.152344 C 5.8346362 17.241844 5.8098143 18.204961 5.9550781 18.992188 C 6.1003415 19.779412 6.4197964 20.423275 6.9863281 20.753906 C 7.5707485 21.094948 8.3167421 21.047508 9.1054688 20.765625 C 9.8941954 20.483741 10.754805 19.951627 11.623047 19.183594 C 11.761961 19.060717 11.898899 18.906452 12.037109 18.771484 C 12.216283 18.945766 12.396455 19.138171 12.574219 19.292969 C 13.405466 20.016801 14.218158 20.522511 14.966797 20.789062 C 15.715436 21.055615 16.430103 21.095246 16.996094 20.763672 C 17.579942 20.42164 17.910332 19.748024 18.0625 18.917969 C 18.214668 18.087913 18.188624 17.069767 17.964844 15.925781 C 17.929929 15.747281 17.867388 15.554788 17.822266 15.371094 C 17.950462 15.332733 18.093563 15.303037 18.216797 15.261719 C 19.34199 14.884455 20.256474 14.401339 20.914062 13.853516 C 21.571651 13.305692 22 12.675711 22 11.984375 C 22 11.316537 21.592337 10.708795 20.972656 10.185547 C 20.352976 9.6622986 19.494727 9.2034761 18.445312 8.8378906 C 18.238082 8.7656964 18.000825 8.7093156 17.779297 8.6445312 C 17.816133 8.4924793 17.870208 8.3318492 17.900391 8.1835938 C 18.13931 7.0099907 18.183182 5.96782 18.042969 5.1191406 C 17.902756 4.2704612 17.578578 3.5803124 16.982422 3.2324219 C 16.694443 3.0643682 16.367938 2.9928547 16.019531 3 z M 16.023438 3.8652344 C 16.246408 3.8595757 16.422746 3.9010322 16.548828 3.9746094 C 16.815675 4.1303292 17.07873 4.5521623 17.195312 5.2578125 C 17.311895 5.9634627 17.281462 6.9169667 17.058594 8.0117188 C 17.032589 8.1394545 16.984815 8.2822106 16.953125 8.4140625 C 16.134284 8.2234679 15.235015 8.0912672 14.294922 8.0019531 C 13.751908 7.2186476 13.191061 6.4913648 12.617188 5.8652344 C 12.768776 5.7177962 12.922862 5.5514965 13.072266 5.4199219 C 13.849433 4.7355084 14.600382 4.2698533 15.220703 4.0390625 C 15.530864 3.9236671 15.800467 3.8708931 16.023438 3.8652344 z M 7.9667969 3.8847656 C 8.204941 3.8916645 8.4921202 3.9495056 8.8222656 4.0742188 C 9.4825566 4.3236447 10.28203 4.8247788 11.107422 5.5664062 C 11.205243 5.6542984 11.305753 5.7681072 11.404297 5.8632812 C 10.828373 6.4891798 10.260402 7.2150849 9.7109375 8 C 8.7742691 8.0878313 7.878881 8.2210717 7.0605469 8.4082031 C 7.0093893 8.1995211 6.9427183 7.979966 6.9042969 7.78125 C 6.7063246 6.7573656 6.6823383 5.8644203 6.7949219 5.203125 C 6.9075054 4.5418297 7.1543156 4.1475862 7.40625 4 C 7.5395435 3.9219104 7.7286527 3.8778668 7.9667969 3.8847656 z M 12.011719 6.4746094 C 12.406433 6.9082361 12.7994 7.4001799 13.1875 7.9238281 C 12.794349 7.9049913 12.404259 7.8808594 12 7.8808594 C 11.601264 7.8808594 11.215567 7.9055035 10.826172 7.9238281 C 11.218061 7.4011371 11.614064 6.9090918 12.011719 6.4746094 z M 12 8.7402344 C 12.62139 8.7402344 13.227614 8.7668454 13.818359 8.8125 C 14.151039 9.3088157 14.475839 9.8245485 14.785156 10.365234 C 15.09578 10.908201 15.379531 11.451329 15.642578 11.990234 C 15.381336 12.536206 15.099335 13.084929 14.787109 13.632812 C 14.47815 14.17496 14.155199 14.694701 13.826172 15.193359 C 13.231026 15.236716 12.621925 15.263672 12 15.263672 C 11.385158 15.263672 10.783354 15.241979 10.195312 15.203125 C 9.857099 14.704207 9.5270761 14.182489 9.2148438 13.636719 C 8.9026472 13.090995 8.6226165 12.543692 8.3652344 12.001953 C 8.6223479 11.459349 8.9033118 10.912375 9.2128906 10.369141 C 9.5231725 9.8246773 9.8493881 9.3072485 10.183594 8.8125 C 10.77474 8.7671354 11.382161 8.7402344 12 8.7402344 z M 9.0917969 8.9335938 C 8.8809698 9.2664173 8.6672078 9.5936441 8.4667969 9.9453125 C 8.26942 10.29166 8.0992881 10.639079 7.921875 10.986328 C 7.6728423 10.387485 7.4513424 9.8008736 7.2792969 9.2402344 C 7.8448649 9.1122912 8.4555981 9.0142998 9.0917969 8.9335938 z M 14.912109 8.9335938 C 15.551594 9.0156474 16.16691 9.1173252 16.734375 9.2480469 C 16.562073 9.8064733 16.34146 10.391171 16.089844 10.988281 C 15.90762 10.63874 15.729215 10.288907 15.529297 9.9394531 C 15.33083 9.5925325 15.120651 9.264526 14.912109 8.9335938 z M 6.4472656 9.4648438 C 6.6951622 10.278405 7.0319189 11.134632 7.4277344 12.003906 C 7.026288 12.886892 6.6864667 13.756169 6.4355469 14.582031 C 6.272336 14.53433 6.0902943 14.49621 5.9375 14.443359 C 4.9277033 14.094085 4.1309727 13.643168 3.6074219 13.189453 C 3.0838711 12.735738 2.859375 12.295484 2.859375 11.984375 C 2.859375 11.681865 3.0645925 11.275878 3.5546875 10.851562 C 4.0447825 10.427248 4.7971191 10.004273 5.7558594 9.6660156 C 5.9674342 9.5913747 6.2155634 9.5317521 6.4472656 9.4648438 z M 17.5625 9.4765625 C 17.761147 9.5349289 17.977705 9.5841952 18.162109 9.6484375 C 19.135811 9.987647 19.909923 10.414765 20.417969 10.84375 C 20.926014 11.272735 21.140625 11.684825 21.140625 11.984375 C 21.140625 12.30116 20.909935 12.739581 20.365234 13.193359 C 19.820534 13.647138 18.990692 14.096108 17.943359 14.447266 C 17.839835 14.481976 17.715549 14.506445 17.607422 14.539062 C 17.350826 13.718687 16.99339 12.85937 16.583984 11.988281 C 16.977973 11.130028 17.315538 10.284009 17.5625 9.4765625 z M 16.097656 12.992188 C 16.360815 13.600657 16.599902 14.199577 16.779297 14.767578 C 16.197615 14.901882 15.568725 15.005518 14.908203 15.085938 C 15.119082 14.747835 15.331463 14.412597 15.533203 14.058594 C 15.735416 13.703757 15.915097 13.347868 16.097656 12.992188 z M 7.921875 13.021484 C 8.1000429 13.369168 8.2716246 13.716461 8.4707031 14.064453 C 8.6760168 14.423334 8.8964141 14.759151 9.1132812 15.099609 C 8.4651932 15.026399 7.8402627 14.934137 7.2675781 14.808594 C 7.4427132 14.236002 7.6671378 13.634621 7.921875 13.021484 z M 16.994141 15.599609 C 17.033614 15.76138 17.090652 15.934214 17.121094 16.089844 C 17.32857 17.150499 17.342782 18.076459 17.216797 18.763672 C 17.090815 19.450885 16.824358 19.868082 16.5625 20.021484 C 16.307877 20.17065 15.861548 20.194868 15.253906 19.978516 C 14.646267 19.762166 13.908649 19.315011 13.138672 18.644531 C 12.976886 18.503647 12.809552 18.324509 12.644531 18.164062 C 13.213719 17.533605 13.768067 16.796304 14.304688 16.009766 C 15.256548 15.924226 16.164838 15.793207 16.994141 15.599609 z M 7.046875 15.644531 C 7.8734712 15.828556 8.7843105 15.944441 9.7285156 16.021484 C 10.281098 16.80836 10.851201 17.535739 11.429688 18.164062 C 11.304718 18.286056 11.178838 18.429245 11.054688 18.539062 C 10.250844 19.250131 9.4655785 19.725022 8.8164062 19.957031 C 8.1672342 20.18904 7.6820257 20.164669 7.4199219 20.011719 C 7.1650564 19.862976 6.9174785 19.478939 6.7988281 18.835938 C 6.6801777 18.192936 6.695132 17.321208 6.8847656 16.310547 C 6.9241429 16.100681 6.9927179 15.866659 7.046875 15.644531 z M 13.201172 16.083984 C 12.816824 16.612397 12.428545 17.113513 12.037109 17.550781 C 11.636336 17.112875 11.235674 16.616934 10.839844 16.089844 C 11.2244 16.104917 11.606956 16.123047 12 16.123047 C 12.406689 16.123047 12.803605 16.101833 13.201172 16.083984 z";
const reload = "M17.266 6.664C15.91 5.327 14.05 4.5 12 4.5c-4.135 0-7.5 3.365-7.5 7.5s3.365 7.5 7.5 7.5 7.5-3.365 7.5-7.5c0-.544-.058-1.074-.168-1.586h1.53C20.95 10.93 21 11.46 21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.453 0 4.677.98 6.3 2.572v-.986h1.5v3.578h-3.578v-1.5h1.044zM12 13.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5c.828 0 1.5.673 1.5 1.5s-.672 1.5-1.5 1.5z";
const rulers = "M21 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm-.5 8.5H18V13h-1.5v2.5h-2V13H13v2.5h-2V13H9.5v2.5h-2V13H6v2.5H3.5v-7h17z";
const search = "M8.65 14.248c-.376-.46-.697-.962-.955-1.496-.335-.695-.56-1.44-.668-2.205-.11-.787-.096-1.59.044-2.373.13-.726.37-1.432.71-2.09.75-1.448 1.96-2.636 3.43-3.343.64-.3 1.32-.52 2.02-.64.35-.05.69-.08 1.04-.09h.29c.35.01.7.03 1.04.09.7.11 1.39.32 2.03.62 1.53.717 2.8 1.95 3.55 3.466.32.63.54 1.31.67 2.006.14.78.16 1.584.05 2.37-.106.76-.332 1.51-.667 2.204-.393.81-.933 1.55-1.586 2.174-.675.643-1.472 1.16-2.34 1.515-.895.365-1.862.553-2.832.553s-1.933-.186-2.83-.553c-.684-.28-1.325-.66-1.9-1.13-2.09 2.21-4.294 4.307-6.437 6.464-.09.08-.186.15-.3.187-.1.034-.205.046-.31.035-.072-.01-.145-.03-.213-.058-.308-.13-.497-.455-.454-.79.02-.15.088-.28.184-.395 2.09-2.23 4.3-4.343 6.46-6.506zM14.377 3.5c-.28.006-.56.027-.836.07-.56.085-1.1.25-1.62.49-1.16.542-2.13 1.457-2.74 2.58-.28.518-.48 1.075-.6 1.65-.13.65-.15 1.318-.07 1.974.08.612.25 1.21.52 1.77.31.655.73 1.253 1.25 1.758.54.523 1.17.945 1.86 1.236.715.302 1.486.462 2.26.472.777.01 1.554-.13 2.277-.416.695-.275 1.34-.682 1.885-1.192.53-.492.97-1.08 1.29-1.726.276-.55.464-1.144.557-1.753.1-.63.09-1.273-.01-1.9-.094-.56-.266-1.103-.51-1.613-.58-1.197-1.555-2.185-2.744-2.776-.505-.252-1.047-.43-1.603-.53-.273-.05-.55-.077-.83-.09-.1-.003-.204-.004-.31-.004z";
const atoms = [
    "M12 3c-1.39 0-2.7.324-3.874.886.355.357.608.807.75 1.305.952-.436 2.008-.69 3.124-.69 4.135 0 7.5 3.367 7.5 7.5s-3.365 7.5-7.5 7.5-7.5-3.363-7.5-7.5c0-1.114.252-2.17.69-3.123-.497-.14-.947-.395-1.304-.75C3.324 9.3 3 10.612 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9-4.03-9-9-9",
    "M13.5 12c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5M6 7.5c.828 0 1.5-.672 1.5-1.5S6.828 4.5 6 4.5 4.5 5.172 4.5 6 5.172 7.5 6 7.5"
];
const arrowDoubleLeft = [
    "M7.452 13.233c-.14-.148-.258-.31-.344-.494-.215-.465-.215-1.01 0-1.475.085-.184.203-.346.343-.494l3.543-3.544 1.06 1.06c-1.183 1.186-2.46 2.285-3.55 3.558-.058.075-.073.175-.033.262.013.03.033.054.056.078l3.527 3.527-1.06 1.06-3.54-3.54z",
    "M12.452 13.233c-.14-.148-.258-.31-.344-.494-.215-.465-.215-1.01 0-1.475.085-.184.203-.346.343-.494l3.543-3.544 1.06 1.06c-1.183 1.186-2.46 2.285-3.55 3.558-.058.075-.073.175-.033.262.013.03.033.054.056.078l3.527 3.527-1.06 1.06-3.54-3.54z"
];
const arrowDoubleRight = [
    "M16.548 10.767c.14.147.258.31.344.494.215.464.215 1.01 0 1.474-.085.185-.203.347-.343.494l-3.543 3.546-1.06-1.06c1.183-1.186 2.46-2.285 3.55-3.558.058-.075.073-.176.033-.262-.013-.03-.033-.055-.056-.08L11.947 8.29l1.06-1.06 3.54 3.54z",
    "M11.548 10.767c.14.147.258.31.344.494.215.464.215 1.01 0 1.474-.085.185-.203.347-.343.494l-3.543 3.546-1.06-1.06c1.183-1.186 2.46-2.285 3.55-3.558.058-.075.073-.176.033-.262-.013-.03-.033-.055-.056-.08L6.947 8.29l1.06-1.06 3.54 3.54z"
];
const folderOpen = [
    {
        d: "M20 18H4V9h5v3h11v6zM10.5 7.5v-3h-8v14c0 .552.448 1 1 1h17c.552 0 1-.448 1-1v-11h-11z"
    }
];
const documentation = [
    "M18.375 16.625h-9v-13h9v13zm-10.5-14.5v15c0 .552.447 1 1 1h11v-16h-12z",
    "M14.125 20.375h-8.25c-.137 0-.25-.112-.25-.25V6.875h1.25v-1.5h-2.75v14.75c0 .965.786 1.75 1.75 1.75h9.75v-2.75h-1.5v1.25z",
    {
        tagName: "circle",
        cx: 14,
        cy: 6.5,
        r: 1.5
    },
    "M14.75 9h.75v1.5h-.75v3H16V15h-4v-1.5h1.25v-3h-.75V9h.75v-.004h1.5V9z"
];
const issue = [
    "M19.98 10.99l-2.647-5.295c-.385-.77-1.158-1.248-2.02-1.248h-6.63c-.858 0-1.633.48-2.018 1.248L4.018 10.99c-.156.313-.238.66-.238 1.01s.082.697.237 1.01l2.648 5.295c.385.77 1.16 1.248 2.02 1.248h6.63c.86 0 1.633-.48 2.018-1.247l2.647-5.296c.156-.312.24-.66.24-1.01s-.083-.697-.24-1.01zm-1.34 1.35l-2.648 5.295c-.127.256-.39.418-.677.418h-6.63c-.287 0-.55-.162-.677-.418L5.36 12.34c-.053-.11-.08-.225-.08-.34 0-.116.026-.23.08-.338l2.647-5.297c.128-.256.39-.418.677-.418h6.63c.287 0 .55.162.677.418l2.65 5.297c.053.106.08.222.08.338 0 .115-.027.23-.08.34z",
    {
        tagName: "circle",
        cx: 12,
        cy: 15,
        r: 1.5
    },
    "M11.25 7.474h1.5v4.5h-1.5z"
];
const command = [
    "M20.5 5.5h-17c-.55 0-1 .45-1 1v11c0 .552.45 1 1 1h17c.552 0 1-.448 1-1v-11c0-.55-.448-1-1-1zM20 17H4V7h16v10z",
    "M8.375 14.25h7.25v1.5h-7.25zm-2.875-6H7v1.5H5.5zm2.875 0h1.5v1.5h-1.5zm2.875 0h1.5v1.5h-1.5zm5.75 0h1.5v1.5H17zm-2.875 0h1.5v1.5h-1.5zm-4.313 3h1.5v1.5h-1.5zm2.876 0h1.5v1.5h-1.5zm-7.188 0h2.938v1.5H5.5zm10.078 0h2.938v1.5h-2.938zm-10.078 3H7v1.5H5.5zm11.516 0h1.5v1.5h-1.5z"
];
const placeholder = [
    {
        tagName: "rect",
        x: 0,
        y: 0,
        width: 24,
        height: 24
    }
];
const hamburger = [
    "M7.86 12.83V11.53c0-.24.193-.433.432-.433h12.12c.239 0 .433.194.433.433v1.299c0 .24-.194.433-.432.433H8.292a.433.433 0 0 1-.432-.433zm0 5.194v-1.299c0-.24.193-.433.432-.433h12.12c.239 0 .433.194.433.433v1.299c0 .24-.194.432-.432.432H8.292a.433.433 0 0 1-.432-.432zm0-10.388V6.337c0-.24.193-.432.432-.432h12.12c.239 0 .433.193.433.432v1.299c0 .24-.194.433-.432.433H8.292a.433.433 0 0 1-.432-.433zM3.315 13.05v-1.74a.43.43 0 0 1 .43-.428h1.738a.43.43 0 0 1 .43.429v1.74a.43.43 0 0 1-.43.428H3.744a.43.43 0 0 1-.429-.429zm0 5.194v-1.74a.43.43 0 0 1 .43-.428h1.738a.43.43 0 0 1 .43.429v1.74a.43.43 0 0 1-.43.428H3.744a.43.43 0 0 1-.429-.429zm0-10.388V6.117a.43.43 0 0 1 .43-.429h1.738a.43.43 0 0 1 .43.43v1.738a.43.43 0 0 1-.43.43H3.744a.43.43 0 0 1-.429-.43z"
];
exports.icons = {
    "arrow-double-left": () => arrowDoubleLeft,
    "arrow-double-right": () => arrowDoubleRight,
    "arrow-down": () => arrowDown,
    "arrow-left": () => arrowLeft,
    "arrow-right": () => arrowRight,
    atoms: () => atoms,
    "checkers-inverted": () => checkers(true),
    checkers: () => checkers(),
    close: () => close,
    code: () => code,
    command: () => command,
    dark: () => dark,
    dependencies: () => dependencies,
    documentation: () => documentation,
    doc: () => documentation,
    ecospheres: () => ecospheres,
    "external-link": () => externalLink,
    environment: () => environment,
    placeholder: () => placeholder,
    "folder-open": () => folderOpen,
    folder: () => folder,
    fullscreen: () => fullscreen,
    globals: () => globals,
    hamburger: () => hamburger,
    home: () => home,
    issue: () => issue,
    light: () => light,
    link: () => link,
    molecules: () => molecules,
    organisms: () => organisms,
    pattern: () => pattern,
    patternplate: () => patternplate,
    polymers: () => polymers,
    react: () => react,
    reload: () => reload,
    rulers: () => rulers,
    search: () => search
};
exports.definitions = {
    patternplate
};
function checkers(inverted) {
    const length = 20;
    const count = 5;
    const dim = length / count;
    const offset = (24 - length) / 2;
    const field = count * count / 2;
    const fields = range(count * count)
        .map((_, i) => {
        const x = i % count;
        const y = (i - x) / count;
        const filled = y % 2 === 0 ? x % 2 === 0 : x % 2 !== 0;
        if (!filled) {
            return null;
        }
        const product = (y + 1) * (x + 1);
        const inArea = inverted ? true : product <= field;
        if (!inArea) {
            return null;
        }
        return rect({
            x: offset + x * dim,
            y: offset + y * dim,
            width: dim,
            height: dim
        });
    })
        .filter(Boolean);
    return joinPaths(fields);
}
function rect(props) {
    const p = lodash_1.omit(props, ["width", "height", "x", "y"]);
    const d = `M${props.x},${props.y}h${props.width}v${props.height}h-${props.width}z`;
    return lodash_1.merge({}, p, { d });
}
function range(count) {
    return Array(count).fill(true);
}
function joinPaths(paths) {
    const d = paths.map(path => path.d).join("");
    return [
        {
            d
        }
    ];
}


/***/ }),

/***/ "../../components/next-generation/icon/lib/index.js":
/*!*********************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/icon/lib/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./icon */ "../../components/next-generation/icon/lib/icon.js"));


/***/ }),

/***/ "../../components/next-generation/icon/lib/path.js":
/*!********************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/icon/lib/path.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const lodash_1 = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
exports.Path = props => {
    const { definition } = props;
    const def = typeof definition === "string" ? { d: definition } : definition;
    const p = lodash_1.omit(def, ["tagName"]);
    const Component = def.tagName || "path";
    return React.createElement(Component, Object.assign({}, p));
};


/***/ }),

/***/ "../../components/next-generation/icon/lib/symbol.js":
/*!**********************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/icon/lib/symbol.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const path_1 = __webpack_require__(/*! ./path */ "../../components/next-generation/icon/lib/path.js");
exports.Symbol = (props) => {
    const paths = Array.isArray(props.definition)
        ? props.definition
        : [props.definition];
    if (props.emit) {
        return (React.createElement("g", { style: props.style }, paths.map(p => React.createElement(path_1.Path, { key: p, definition: p }))));
    }
    return (React.createElement(React.Fragment, null, paths.map(p => React.createElement(path_1.Path, { key: p, definition: p }))));
};


/***/ }),

/***/ "../../components/next-generation/info-pane/lib/index.js":
/*!**************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/info-pane/lib/index.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./info-pane */ "../../components/next-generation/info-pane/lib/info-pane.js"));


/***/ }),

/***/ "../../components/next-generation/info-pane/lib/info-pane-toggle.js":
/*!*************************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/info-pane/lib/info-pane-toggle.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const toggle_head_1 = __webpack_require__(/*! ./toggle-head */ "../../components/next-generation/info-pane/lib/toggle-head.js");
const S = __webpack_require__(/*! ./info-pane-toggle.styles */ "../../components/next-generation/info-pane/lib/info-pane-toggle.styles.js");
exports.InfoPaneToggle = function InfoPaneToggle(props) {
    return (React.createElement(S.StyledToggle, null, React.createElement(toggle_head_1.ToggleHead, { name: props.name, enabled: props.enabled }, props.head), props.enabled && React.createElement(S.StyledToggleBody, null, props.children)));
};


/***/ }),

/***/ "../../components/next-generation/info-pane/lib/info-pane-toggle.styles.js":
/*!********************************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/info-pane/lib/info-pane-toggle.styles.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
exports.StyledToggle = styled_components_1.default.div `
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
  min-height: 30px;
`;
exports.StyledToggleBody = styled_components_1.default.div `
  display: flex;
  color: ${props => props.theme.colors.color};
  box-sizing: border-box;
  width: 100%;
  padding: 5px 15px 5px 20px;
  box-sizing: border-box;
  background: ${props => props.theme.colors.background};
`;


/***/ }),

/***/ "../../components/next-generation/info-pane/lib/info-pane-version.js":
/*!**************************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/info-pane/lib/info-pane-version.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const search_trigger_1 = __webpack_require__(/*! ./search-trigger */ "../../components/next-generation/info-pane/lib/search-trigger.js");
const component_text_1 = __webpack_require__(/*! @patternplate/component-text */ "../../components/next-generation/text/lib/index.js");
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
const info_pane_utils_1 = __webpack_require__(/*! ./info-pane.utils */ "../../components/next-generation/info-pane/lib/info-pane.utils.js");
exports.InfoPaneVersion = function InfoPaneVersion(props) {
    return (React.createElement(exports.StyledInfoPaneVersion, { className: props.className, search: props.search, field: "version" }, React.createElement(component_text_1.Text, null, props.search)));
};
exports.StyledInfoPaneVersion = styled_components_1.default(search_trigger_1.SearchTrigger) `
  color: ${info_pane_utils_1.versionColor};
  &:link,
  &:visited {
    text-decoration: none;
    color: ${info_pane_utils_1.versionColor};
  }
`;


/***/ }),

/***/ "../../components/next-generation/info-pane/lib/info-pane.constants.js":
/*!****************************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/info-pane/lib/info-pane.constants.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BORDER_RADIUS = 10;


/***/ }),

/***/ "../../components/next-generation/info-pane/lib/info-pane.js":
/*!******************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/info-pane/lib/info-pane.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const lodash_1 = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
const component_flag_1 = __webpack_require__(/*! @patternplate/component-flag */ "../../components/next-generation/flag/lib/index.js");
const S = __webpack_require__(/*! ./info-pane.styles */ "../../components/next-generation/info-pane/lib/info-pane.styles.js");
const info_pane_utils_1 = __webpack_require__(/*! ./info-pane.utils */ "../../components/next-generation/info-pane/lib/info-pane.utils.js");
const search_trigger_1 = __webpack_require__(/*! ./search-trigger */ "../../components/next-generation/info-pane/lib/search-trigger.js");
const info_pane_version_1 = __webpack_require__(/*! ./info-pane-version */ "../../components/next-generation/info-pane/lib/info-pane-version.js");
const info_pane_toggle_1 = __webpack_require__(/*! ./info-pane-toggle */ "../../components/next-generation/info-pane/lib/info-pane-toggle.js");
exports.InfoPane = function InfoPane(props) {
    const { className } = props;
    const innerProps = lodash_1.omit(props, ["className"]);
    return (React.createElement(S.StyledInfoPane, { className: className, hermit: props.hermit }, React.createElement(exports.InnerInfoPane, Object.assign({}, innerProps))));
};
exports.InnerInfoPane = function InnerInfoPane(props) {
    return (React.createElement(S.StyledInnerPane, { className: props.className }, React.createElement(S.StyledName, null, React.createElement(S.StyledDisplayName, null, props.name), React.createElement(S.StyledId, null, props.id)), props.children && React.createElement(S.StyledToolbar, null, props.children), React.createElement(S.StyledData, null, React.createElement("tbody", null, React.createElement("tr", null, React.createElement(S.StyledDataCell, null, React.createElement(S.StyledKey, null, "Version")), React.createElement(S.StyledDataCell, null, React.createElement(info_pane_version_1.InfoPaneVersion, { search: props.version }, props.version))), React.createElement("tr", null, React.createElement(S.StyledDataCell, null, React.createElement(S.StyledKey, null, "Flag")), React.createElement(S.StyledDataCell, null, React.createElement(search_trigger_1.SearchTrigger, { field: "flag", search: props.flag }, React.createElement(component_flag_1.Flag, null, props.flag)))), info_pane_utils_1.has(props.tags) && (React.createElement("tr", null, React.createElement(S.StyledDataCell, null, React.createElement(S.StyledKey, null, "Tags")), React.createElement(S.StyledDataCell, null, props.tags.map(t => React.createElement(S.StyledTag, { key: t }, t))))))), React.createElement(info_pane_toggle_1.InfoPaneToggle, { head: "Manifest", enabled: props.manifestEnabled, name: "manifest" }, React.createElement(S.StyledCode, { block: true, language: "json" }, props.manifest))));
};


/***/ }),

/***/ "../../components/next-generation/info-pane/lib/info-pane.styles.js":
/*!*************************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/info-pane/lib/info-pane.styles.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
const component_code_1 = __webpack_require__(/*! @patternplate/component-code */ "../../components/next-generation/code/lib/index.js");
const component_tag_1 = __webpack_require__(/*! @patternplate/component-tag */ "../../components/next-generation/tag/lib/index.js");
const component_text_1 = __webpack_require__(/*! @patternplate/component-text */ "../../components/next-generation/text/lib/index.js");
const C = __webpack_require__(/*! ./info-pane.constants */ "../../components/next-generation/info-pane/lib/info-pane.constants.js");
exports.StyledInfoPane = styled_components_1.default.div `
  position: relative;
  width: 300px;
  min-height: 300px;
  height: 100%;
  box-sizing: border-box;
  border-radius: ${props => props.hermit
    ? `${C.BORDER_RADIUS}px`
    : `${C.BORDER_RADIUS}px 0 0 ${C.BORDER_RADIUS}px`};
  border-right: 1px solid ${props => props.theme.colors.border};
  border-right-width: ${props => (props.hermit ? 0 : 1)}px;
  overflow: scroll;
  overflow-x: hidden;
  background: ${props => props.theme.colors.background};
`;
exports.StyledInnerPane = styled_components_1.default.div `
  position: relative;
  z-index: 1;
  background: ${props => props.theme.colors.background};
`;
exports.StyledName = styled_components_1.default.div `
  position: relative;
  z-index: 1;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 15px 0 15px;
`;
exports.StyledToolbar = styled_components_1.default.div `
  display: flex;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0 15px 10px 15px;
`;
exports.StyledDisplayName = styled_components_1.default(component_text_1.Text) `
  flex: 1 0 auto;
  color: ${props => props.theme.colors.color};
  margin-right: 10px;
`;
exports.StyledId = styled_components_1.default(component_text_1.Text) `
  flex: 0 1 auto;
  color: ${props => props.theme.colors.recess};
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
exports.StyledData = styled_components_1.default.table `
  position: relative;
  z-index: 1;
  flex: 0 0 auto;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;
exports.StyledDataCell = styled_components_1.default.td `
  box-sizing: border-box;
  height: 30px;
  padding: 4px 6px;
  border-top: 1px solid ${props => props.theme.colors.border};
  &:first-child {
    padding-left: 20px;
  }
  &:last-child {
    text-align: right;
    padding-right: 15px;
  }
`;
exports.StyledKey = styled_components_1.default(component_text_1.Text) `
  font-weight: bold;
  color: ${props => props.theme.colors.color};
`;
exports.StyledTag = styled_components_1.default(component_tag_1.Tag) `
  display: inline-block;
  padding: 2px 4px;
  margin-top: 1.5px;
  margin-bottom: 1.5px;
  border: 1px solid ${props => props.theme.colors.color};
  border-radius: 3px;
  &:link,
  &:visited,
  &:active {
    text-decoration: none;
    color: ${props => props.theme.colors.color};
  }
  &:nth-child(2n) {
    margin-left: 3px;
  }
`;
exports.StyledCode = styled_components_1.default(component_code_1.Code) `
  width: 100%;
`;


/***/ }),

/***/ "../../components/next-generation/info-pane/lib/info-pane.utils.js":
/*!************************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/info-pane/lib/info-pane.utils.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const semver = __webpack_require__(/*! semver */ "../../node_modules/semver/semver.js");
const text = __webpack_require__(/*! react-addons-text-content */ "../../node_modules/react-addons-text-content/dist/react-addons-text-content.js");
exports.versionColor = (props) => {
    const v = text(props.children);
    if (!semver.valid(v)) {
        return props.theme.colors.error;
    }
    if (semver.satisfies(v, "<=0.1")) {
        return props.theme.colors.error;
    }
    if (semver.satisfies(v, "> 0.1 < 1")) {
        return props.theme.colors.warning;
    }
    return props.theme.colors.success;
};
function has(val) {
    return Array.isArray(val) && val.length > 0;
}
exports.has = has;


/***/ }),

/***/ "../../components/next-generation/info-pane/lib/search-trigger.js":
/*!***********************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/info-pane/lib/search-trigger.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const component_link_1 = __webpack_require__(/*! @patternplate/component-link */ "../../components/next-generation/link/lib/index.js");
exports.SearchTrigger = function SearchTrigger(props) {
    return (React.createElement(component_link_1.Link, { className: props.className, query: {
            "search-enabled": true,
            search: `${props.field}=${props.search}`
        }, title: `Search other patterns with ${props.field} "${props.search}"` }, props.children));
};


/***/ }),

/***/ "../../components/next-generation/info-pane/lib/toggle-head.js":
/*!********************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/info-pane/lib/toggle-head.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const component_text_1 = __webpack_require__(/*! @patternplate/component-text */ "../../components/next-generation/text/lib/index.js");
const Styles = __webpack_require__(/*! ./toggle-head.styles */ "../../components/next-generation/info-pane/lib/toggle-head.styles.js");
exports.ToggleHead = function ToggleHead(props) {
    const query = { [`${props.name}-enabled`]: !props.enabled };
    return (React.createElement(Styles.StyledToggleHead, { query: query, className: props.className, title: `${props.enabled ? "Hide" : "Show"} ${props.name}` }, React.createElement(component_text_1.Text, null, props.children), React.createElement(Styles.StyledArrow, { rotated: props.enabled }, "\u25BC")));
};


/***/ }),

/***/ "../../components/next-generation/info-pane/lib/toggle-head.styles.js":
/*!***************************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/info-pane/lib/toggle-head.styles.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
const component_link_1 = __webpack_require__(/*! @patternplate/component-link */ "../../components/next-generation/link/lib/index.js");
const component_text_1 = __webpack_require__(/*! @patternplate/component-text */ "../../components/next-generation/text/lib/index.js");
const StyledHead = styled_components_1.default(component_link_1.Link) `
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
`;
exports.StyledToggleHead = styled_components_1.default(StyledHead) `
  display: flex;
  align-items: center;
  height: 30px;
  font-weight: bold;
  color: ${props => props.theme.colors.color};
  padding: 3px 15px 3px 20px;
  box-sizing: border-box;
  border-top: 1px solid ${props => props.theme.colors.border};
  cursor: pointer;
`;
exports.StyledArrow = styled_components_1.default(component_text_1.Text) `
  font-size: 0.8em;
  transform: ${props => (props.rotated ? `rotate(0deg)` : `rotate(-90deg)`)};
`;


/***/ }),

/***/ "../../components/next-generation/link/lib/index.js":
/*!*********************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/link/lib/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./link */ "../../components/next-generation/link/lib/link.js"));


/***/ }),

/***/ "../../components/next-generation/link/lib/link.js":
/*!********************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/link/lib/link.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
const component_utility_1 = __webpack_require__(/*! @patternplate/component-utility */ "../../components/next-generation/utility/index.js");
const component_icon_1 = __webpack_require__(/*! @patternplate/component-icon */ "../../components/next-generation/icon/lib/index.js");
class RawLink extends React.Component {
    render() {
        const { props } = this;
        const target = selectTarget(props);
        return (React.createElement("a", { target: target, rel: target === "_blank" ? "noopener noreferrer" : null, className: props.className, href: props.href, onClick: props.onClick, onMouseOver: props.onHover, title: props.title, "data-id": props["data-id"] }, React.createElement(StyledLinkContainer, { grow: props.grow, external: props.external }, React.createElement(StyledLinkLabel, { grow: props.grow }, props.children), props.external && props.hint && (React.createElement(component_icon_1.Icon, { symbol: "external-link", size: props.iconSize || 'text', inline: true })))));
    }
}
exports.RawLink = RawLink;
exports.Link = component_utility_1.inject(RawLink);
exports.Link.RawLink = RawLink;
const StyledLinkContainer = styled_components_1.default.span `
  display: inline-flex;
  align-items: center;
  flex-grow: ${props => props.grow ? 1 : 0};
  > span {
    display: inline-flex;
    align-items: ${props => props.external ? 'baseline' : 'center'};
  }
  > svg {
    margin-left: .25em;
  }
`;
const StyledLinkLabel = styled_components_1.default.span `
  width: ${props => props.grow ? 'calc(100% - 40px)' : 'auto'};
`;
function selectTarget(props) {
    if (props.target) {
        return props.target;
    }
    return props.external ? "_blank" : null;
}
;


/***/ }),

/***/ "../../components/next-generation/logo/lib/index.js":
/*!*********************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/logo/lib/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./logo */ "../../components/next-generation/logo/lib/logo.js"));


/***/ }),

/***/ "../../components/next-generation/logo/lib/logo.js":
/*!********************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/logo/lib/logo.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
const component_link_1 = __webpack_require__(/*! @patternplate/component-link */ "../../components/next-generation/link/lib/index.js");
const component_icon_1 = __webpack_require__(/*! @patternplate/component-icon */ "../../components/next-generation/icon/lib/index.js");
const StyledLink = styled_components_1.default(component_link_1.Link) `
  display: block;
  margin: 0 auto;
  &:link,
  &:visited {
    color: ${props => props.theme.colors.active};
  }
`;
const InnerLogo = props => {
    if (props.source) {
        return (React.createElement("div", { className: props.className }, React.createElement(StyledLink, { external: "base", href: "/", query: null, target: "_self" }, React.createElement("div", { dangerouslySetInnerHTML: { __html: props.source } }))));
    }
    return (React.createElement("div", { className: props.className }, React.createElement(StyledLink, { external: "base", href: "/", query: null, target: "_self" }, React.createElement(component_icon_1.Icon, { symbol: "patternplate", size: "l" }))));
};
const StyledLogo = styled_components_1.default(InnerLogo) `
  box-sizing: border-box;
  display: flex;
  width: 100%;
  fill: currentColor;
  stroke: currentColor;
  stroke-width: 0;
  align-items: center;
  padding: 10px;
  background: ${props => props.theme.colors.backgroundSecondary};
`;
exports.Logo = props => React.createElement(StyledLogo, Object.assign({}, props));


/***/ }),

/***/ "../../components/next-generation/main-header/lib/index.js":
/*!****************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/main-header/lib/index.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./main-header */ "../../components/next-generation/main-header/lib/main-header.js"));


/***/ }),

/***/ "../../components/next-generation/main-header/lib/main-header.js":
/*!**********************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/main-header/lib/main-header.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
exports.MainHeader = function MainHeader(props) {
    return (React.createElement(StyledMainHeader, { className: props.className, title: props.title }, props.image, props.title && React.createElement(StyledTitle, null, props.title)));
};
const StyledMainHeader = styled_components_1.default.div `
  width: 100%;
  height: auto;
  color: ${props => props.theme.colors.color};
  ${props => !props.image &&
    `
      display: flex;
      padding: 10px 15px;
      color: ${props.theme.active};
      align-items: center;
      justify-content: center;
    `};
`;
const StyledTitle = styled_components_1.default.span `
  font-family: ${props => props.theme.fonts.default};
`;


/***/ }),

/***/ "../../components/next-generation/markdown/lib/handlers.js":
/*!****************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/markdown/lib/handlers.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Select = __webpack_require__(/*! unist-util-select */ "../../node_modules/unist-util-select/index.js");
const toHast = __webpack_require__(/*! mdast-util-to-hast */ "../../node_modules/mdast-util-to-hast/index.js");
exports.videoHandler = (h, video) => {
    return {
        type: "element",
        tagName: "x-video",
        properties: Object.assign({}, video.config, { controls: typeof video.config.controls !== 'undefined' ? String(video.config.controls) : undefined, src: video.src, provider: video.provider }),
        children: undefined
    };
};
exports.gridHandler = (_, grid) => {
    const node = {
        type: "element",
        tagName: "x-grid",
        children: Select.selectAll("grid-columnCustomBlock", grid).map(column => {
            const title = Select.select("grid-columnCustomBlockHeading", column) || {
                children: []
            };
            const content = Select.select("grid-columnCustomBlockBody", column) || {
                children: []
            };
            const range = title.children
                .filter(c => c.type === "text")
                .map(c => c.value)
                .join("")
                .split("-")
                .filter(Boolean)
                .map(i => i.trim())
                .map(i => parseInt(i, 10))
                .filter(i => typeof i === "number" && !Number.isNaN(i));
            return {
                type: "element",
                tagName: "x-grid-column",
                properties: {
                    start: range[0],
                    end: range[1]
                },
                children: content.children
                    .map(c => toHast(c, { handlers: { video: exports.videoHandler } }))
            };
        })
    };
    return node;
};


/***/ }),

/***/ "../../components/next-generation/markdown/lib/markdown-components/index.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/markdown/lib/markdown-components/index.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./markdown-div */ "../../components/next-generation/markdown/lib/markdown-components/markdown-div.js"));
__export(__webpack_require__(/*! ./markdown-details */ "../../components/next-generation/markdown/lib/markdown-components/markdown-details.js"));
__export(__webpack_require__(/*! ./markdown-blockquote */ "../../components/next-generation/markdown/lib/markdown-components/markdown-blockquote.js"));
__export(__webpack_require__(/*! ./markdown-code */ "../../components/next-generation/markdown/lib/markdown-components/markdown-code.js"));
__export(__webpack_require__(/*! ./markdown-code-block */ "../../components/next-generation/markdown/lib/markdown-components/markdown-code-block.js"));
__export(__webpack_require__(/*! ./markdown-copy */ "../../components/next-generation/markdown/lib/markdown-components/markdown-copy.js"));
__export(__webpack_require__(/*! ./markdown-headline */ "../../components/next-generation/markdown/lib/markdown-components/markdown-headline.js"));
__export(__webpack_require__(/*! ./markdown-hr */ "../../components/next-generation/markdown/lib/markdown-components/markdown-hr.js"));
__export(__webpack_require__(/*! ./markdown-image */ "../../components/next-generation/markdown/lib/markdown-components/markdown-image.js"));
__export(__webpack_require__(/*! ./markdown-item */ "../../components/next-generation/markdown/lib/markdown-components/markdown-item.js"));
__export(__webpack_require__(/*! ./markdown-list */ "../../components/next-generation/markdown/lib/markdown-components/markdown-list.js"));
__export(__webpack_require__(/*! ./markdown-link */ "../../components/next-generation/markdown/lib/markdown-components/markdown-link.js"));
__export(__webpack_require__(/*! ./markdown-widget */ "../../components/next-generation/markdown/lib/markdown-components/markdown-widget.js"));
__export(__webpack_require__(/*! ./markdown-pre */ "../../components/next-generation/markdown/lib/markdown-components/markdown-pre.js"));
__export(__webpack_require__(/*! ./markdown-video */ "../../components/next-generation/markdown/lib/markdown-components/markdown-video.js"));


/***/ }),

/***/ "../../components/next-generation/markdown/lib/markdown-components/markdown-blockquote.js":
/*!***********************************************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/markdown/lib/markdown-components/markdown-blockquote.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const reactAddonsTextContent = __webpack_require__(/*! react-addons-text-content */ "../../node_modules/react-addons-text-content/dist/react-addons-text-content.js");
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
const styled_components_2 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
const component_text_1 = __webpack_require__(/*! @patternplate/component-text */ "../../components/next-generation/text/lib/index.js");
const component_themes_1 = __webpack_require__(/*! @patternplate/component-themes */ "../../components/next-generation/themes/lib/index.js");
const Color = __webpack_require__(/*! color */ "../../node_modules/color/index.js");
const symbols = ["❔", "ℹ️", "✅", "❌", "⚠️"];
const InnerMarkdownBlockquote = props => {
    return (React.createElement(component_text_1.Text, { className: props.className, as: "blockquote" }, props.children));
};
const PlainMarkdownBlockquote = styled_components_1.default(InnerMarkdownBlockquote) `
  grid-column: first / span 12;
  margin: 0 0 16px 0;
  font-size: 18px;
  line-height: 27px;
  padding-left: 18px;
  border-left: 4.5px solid ${props => props.theme.colors.recess};
  color: ${props => props.theme.colors.recess};
`;
const NOTE_BACKGROUND = (props) => {
    switch (props.symbol) {
        case "❔":
            return (props.theme.colors.border ||
                props.theme.colors.colorBackgroundNote);
        case "ℹ️":
            return (props.theme.colors.colorBackgroundInfoNote || props.theme.colors.info);
        case "✅":
            return (props.theme.colors.colorBackgroundSuccessNote ||
                props.theme.colors.success);
        case "❌":
            return (props.theme.colors.colorBackgroundErrorNote || props.theme.colors.error);
        case "⚠️":
            return (props.theme.colors.colorBackgroundWarningNote ||
                props.theme.colors.warning);
    }
};
const MarkdownNote = styled_components_1.default.div `
  box-sizing: border-box;
  padding: 16px;
  margin-bottom: 32px;
  background: ${NOTE_BACKGROUND};
  > :last-child {
    margin: 0;
  }
  a,
  a:link,
  a:visited,
  a span,
  a:link span,
  a:visited span {
    color: inherit;
    text-decoration: underline dotted;
  }
`;
exports.MarkdownBlockquote = styled_components_2.withTheme(props => {
    const textContent = reactAddonsTextContent(props.children);
    const [_, symbol] = textContent.split("\n");
    if (symbols.indexOf(symbol) > -1) {
        const ps = React.Children
            .toArray(props.children)
            .map(p => remove(p, symbol));
        const isDark = Color.hsl(NOTE_BACKGROUND({ symbol, theme: props.theme })).luminosity() >
            0.4;
        const themes = component_themes_1.getThemes();
        return (React.createElement(MarkdownNote, { symbol: symbol }, React.createElement(styled_components_2.ThemeProvider, { theme: isDark ? themes.light : themes.dark }, React.createElement(React.Fragment, null, ps))));
    }
    return React.createElement(PlainMarkdownBlockquote, Object.assign({}, props));
});
function remove(node, symbol) {
    if (Array.isArray(node)) {
        return node.map(n => remove(n, symbol));
    }
    const n = node;
    if (typeof node === "object" && n.props && n.props.children) {
        return Object.assign({}, n, { props: Object.assign({}, n.props, { children: React.Children
                    .toArray(n.props.children)
                    .map(c => remove(c, symbol)) }) });
    }
    if (typeof node == "string") {
        return node.split(symbol).join("");
    }
    return node;
}


/***/ }),

/***/ "../../components/next-generation/markdown/lib/markdown-components/markdown-code-block.js":
/*!***********************************************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/markdown/lib/markdown-components/markdown-code-block.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
const textContent = __webpack_require__(/*! react-addons-text-content */ "../../node_modules/react-addons-text-content/dist/react-addons-text-content.js");
const component_code_1 = __webpack_require__(/*! @patternplate/component-code */ "../../components/next-generation/code/lib/index.js");
const StyledMarkdownCodeBlock = styled_components_1.default.div `
  grid-column: first / span 12;
  border-radius: 3px;
  font-size: 15.3px;
  line-height: 23px;
  padding: 0 16px;
  margin-bottom: 16px;
  background: ${props => props.theme.colors.backgroundSecondary};
  overflow: hidden;
`;
exports.MarkdownCodeBlock = props => {
    const code = textContent(props.children);
    return (React.createElement(StyledMarkdownCodeBlock, null, React.createElement(component_code_1.Code, { block: true, language: props.language, highlights: props.highlights }, code)));
};


/***/ }),

/***/ "../../components/next-generation/markdown/lib/markdown-components/markdown-code.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/markdown/lib/markdown-components/markdown-code.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
const component_code_1 = __webpack_require__(/*! @patternplate/component-code */ "../../components/next-generation/code/lib/index.js");
exports.MarkdownCode = styled_components_1.default(component_code_1.Code) `
  display: inline;
  padding: 0;
  background: ${props => props.theme.colors.backgroundSecondary};
  border-radius: 3px;
  font-size: 15.3px;
  line-height: 23px;
  padding: 3px;
`;


/***/ }),

/***/ "../../components/next-generation/markdown/lib/markdown-components/markdown-copy.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/markdown/lib/markdown-components/markdown-copy.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
const component_text_1 = __webpack_require__(/*! @patternplate/component-text */ "../../components/next-generation/text/lib/index.js");
exports.MarkdownCopy = styled_components_1.default(InnerMarkdownCopy) `
  grid-column: first / span 12;
  margin: 0 0 16px 0;
  font-size: 18px;
  line-height: 27px;
  color: ${props => props.theme.colors.color};
`;
function InnerMarkdownCopy(props) {
    return (React.createElement(component_text_1.Text, { as: "p", className: props.className }, props.children));
}


/***/ }),

/***/ "../../components/next-generation/markdown/lib/markdown-components/markdown-details.js":
/*!********************************************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/markdown/lib/markdown-components/markdown-details.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
exports.MarkdownDetails = styled_components_1.default.details `
  grid-column: first / span 12;
  margin: 0 0 16px 0;
  font-size: 18px;
  line-height: 27px;
  font-family: ${props => props.theme.fonts.default};
  color: ${props => props.theme.colors.color};

  > summary {
    cursor: pointer;
  }
`;


/***/ }),

/***/ "../../components/next-generation/markdown/lib/markdown-components/markdown-div.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/markdown/lib/markdown-components/markdown-div.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
const tag_hoc_1 = __webpack_require__(/*! tag-hoc */ "../../node_modules/tag-hoc/dist/tag.js");
exports.MarkdownDiv = styled_components_1.default(tag_hoc_1.default(["grid", "start", "end"])("div")) `
  @media (min-width: 480px) {
    display: ${props => props.grid ? 'grid' : 'block'};
  }
  ${props => props.grid ? 'grid-template-columns: repeat(12, 1fr);' : ''}
  ${props => props.grid ? 'grid-gap: 16px;' : ''}
  ${props => props.start ? `grid-column-start: ${props.start};` : ''}
  ${props => props.end ? `grid-column-end: ${props.end}` : ''}
`;


/***/ }),

/***/ "../../components/next-generation/markdown/lib/markdown-components/markdown-headline.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/markdown/lib/markdown-components/markdown-headline.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
const component_headline_1 = __webpack_require__(/*! @patternplate/component-headline */ "../../components/next-generation/headline/lib/index.js");
const component_icon_1 = __webpack_require__(/*! @patternplate/component-icon */ "../../components/next-generation/icon/lib/index.js");
const component_link_1 = __webpack_require__(/*! @patternplate/component-link */ "../../components/next-generation/link/lib/index.js");
const reactAddonsTextContent = __webpack_require__(/*! react-addons-text-content */ "../../node_modules/react-addons-text-content/dist/react-addons-text-content.js");
const ThemedIcon = styled_components_1.default(component_icon_1.Icon) `
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  padding-right: 10px;
  fill: ${props => props.theme.colors.color};
  opacity: 0;
`;
const StyledLink = styled_components_1.default(component_link_1.Link) `
  color: ${props => props.theme.colors.color};
  text-decoration: none;
  &:hover ${ThemedIcon} {
    opacity: 1;
  }
`;
const StyledTarget = styled_components_1.default.div `
  width: 0;
  height: 0;
`;
const StyledHeadline = styled_components_1.default(component_headline_1.Headline) `
  font-family: ${props => props.theme.fonts.headline};
`;
const InnerMarkdownHeadline = (props) => {
    const name = reactAddonsTextContent(props.children);
    const id = name
        .split(" ")
        .map(word => encodeURIComponent(word))
        .join("-")
        .toLowerCase();
    return (React.createElement(StyledHeadline, { as: `h${props.order + 1}`, order: props.order, className: props.className, id: id }, props.linkable ? (React.createElement(MarkdownHeadlineLink, { name: name, id: id }, props.children)) : (props.children)));
};
exports.MarkdownHeadline = styled_components_1.default(InnerMarkdownHeadline) `
  grid-column: first / span 12;
  position: relative;
  color: ${props => props.theme.colors.color};
  margin: 60px 0 16px 0;
  font-weight: 300;
  line-height: 1.25;
`;
function MarkdownHeadlineLink(props) {
    return (React.createElement(StyledLink, { title: `Link to "${props.name}"`, hash: props.id }, React.createElement(StyledTarget, { id: props.id }), React.createElement(ThemedIcon, { symbol: "link", size: "m" }), props.children));
}


/***/ }),

/***/ "../../components/next-generation/markdown/lib/markdown-components/markdown-hr.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/markdown/lib/markdown-components/markdown-hr.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
exports.MarkdownHr = styled_components_1.default.hr `
  grid-column: first / span 12;
  height: 0.25em;
  padding: 0;
  margin: 24px 0;
  background-color: ${props => props.theme.colors.border};
  border: 0;
`;


/***/ }),

/***/ "../../components/next-generation/markdown/lib/markdown-components/markdown-image.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/markdown/lib/markdown-components/markdown-image.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
exports.MarkdownImage = styled_components_1.default.img `
  grid-column: first / span 12;
  max-width: 100%;
  height: auto;
`;


/***/ }),

/***/ "../../components/next-generation/markdown/lib/markdown-components/markdown-item.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/markdown/lib/markdown-components/markdown-item.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
const component_text_1 = __webpack_require__(/*! @patternplate/component-text */ "../../components/next-generation/text/lib/index.js");
exports.MarkdownItem = function MarkdownItem(props) {
    return (React.createElement(StyledItem, null, React.createElement(component_text_1.Text, null, props.children)));
};
const StyledItem = styled_components_1.default.li `
  grid-column: first / span 12;
  font-size: 18px;
  line-height: 27px;
  color: ${props => props.theme.colors.color};
  margin-top: 4.5px;
`;


/***/ }),

/***/ "../../components/next-generation/markdown/lib/markdown-components/markdown-link.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/markdown/lib/markdown-components/markdown-link.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
const component_link_1 = __webpack_require__(/*! @patternplate/component-link */ "../../components/next-generation/link/lib/index.js");
const Url = __webpack_require__(/*! url */ "../../node_modules/url/url.js");
const queryString = __webpack_require__(/*! query-string */ "../../node_modules/query-string/index.js");
exports.MarkdownLink = (props) => {
    const abs = absolute(props.href);
    const query = abs ? {} : queryString.parse(Url.parse(props.href).query);
    return (React.createElement(StyledLink, { hint: true, href: props.href, query: query }, props.children));
};
const StyledLink = styled_components_1.default(component_link_1.Link) `
  font-size: 18px;
  line-height: 27px;
  color: ${props => props.theme.colors.color};
  text-decoration: none;
  &:link,
  &:visited {
    color: ${props => props.theme.colors.active};
  }
  &:hover,
  &:active {
    text-decoration: underline;
  }
`;
function absolute(href) {
    const parsed = Url.parse(href || "./");
    if (parsed.protocol) {
        return true;
    }
    if (href.startsWith("/api/static/")) {
        return true;
    }
}


/***/ }),

/***/ "../../components/next-generation/markdown/lib/markdown-components/markdown-list.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/markdown/lib/markdown-components/markdown-list.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
exports.MarkdownList = styled_components_1.default.ul `
  grid-column: first / span 12;
  margin: 0 0 16px 0;
  padding-left: 36px;
  white-space: nowrap;

  > * {
    white-space: normal;
  }
`;


/***/ }),

/***/ "../../components/next-generation/markdown/lib/markdown-components/markdown-pre.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/markdown/lib/markdown-components/markdown-pre.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const rangeParser = __webpack_require__(/*! parse-numeric-range */ "../../node_modules/parse-numeric-range/index.js");
const markdown_widget_1 = __webpack_require__(/*! ./markdown-widget */ "../../components/next-generation/markdown/lib/markdown-components/markdown-widget.js");
const markdown_code_block_1 = __webpack_require__(/*! ./markdown-code-block */ "../../components/next-generation/markdown/lib/markdown-components/markdown-code-block.js");
const ReactAddonsTextContent = __webpack_require__(/*! react-addons-text-content */ "../../node_modules/react-addons-text-content/dist/react-addons-text-content.js");
class MarkdownPre extends React.Component {
    render() {
        const { props } = this;
        const [language] = getLanguages(props);
        const [highlights] = getHighlights(props);
        if (language === "widget") {
            return (React.createElement(markdown_widget_1.MarkdownWidget, { code: ReactAddonsTextContent(props.children) }));
        }
        return (React.createElement(markdown_code_block_1.MarkdownCodeBlock, { language: language, highlights: highlights }, props.children));
    }
}
exports.MarkdownPre = MarkdownPre;
function getLanguagePayload({ children }) {
    const child = children[0];
    if (!child) {
        return [];
    }
    const className = child.props.className;
    if (!className) {
        return [];
    }
    return className.split(" ").map(n => n.replace("language-", ""));
}
function getLanguages({ children }) {
    const payload = getLanguagePayload({ children })
        .map(n => n.replace(/\{[\d\-,\s]*\}$/, ""))
        .find(n => typeof n === "string" && n.length > 0);
    if (!payload) {
        return [];
    }
    return payload.split(":");
}
function getHighlights({ children }) {
    return getLanguagePayload({ children })
        .map(n => n.match(/\{([\d\-,\s]*)\}$/))
        .map(n => (n !== null ? n[1] : ""))
        .map(n => rangeParser.parse(n));
}


/***/ }),

/***/ "../../components/next-generation/markdown/lib/markdown-components/markdown-video.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/markdown/lib/markdown-components/markdown-video.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
            if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
const StyledVideo = styled_components_1.default.video `
  width: auto;
  max-width: 100%;
`;
const StyledEmbed = styled_components_1.default.div `
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	height: 0;
  max-width: 100%;
  margin-bottom: 16px;
  width: ${props => props.width};
`;
const StyledFrame = styled_components_1.default.iframe `
  position: absolute;
	top: 0;
  right: 0;
  bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
  border: none;
  margin-bottom: 16px;
`;
exports.MarkdownVideo = props => {
    const controls = flag(props.controls, true);
    const autoPlay = def(props.autoPlay, false);
    const loop = def(props.loop, false);
    const playsInline = def(props.playsInline, false);
    const muted = def(props.muted, false);
    if (props.provider === "youtube") {
        const frags = props.src.split('/').filter(Boolean);
        const id = (frags[frags.length - 1] || '').split('?')[0];
        return (React.createElement(StyledEmbed, { width: props.width }, React.createElement(StyledFrame, { src: `https://www.youtube-nocookie.com/embed/${id}/`, allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" })));
    }
    if (props.provider === "vimeo") {
        const frags = props.src.split('/').filter(Boolean);
        const id = (frags[frags.length - 1] || '').split('?')[0];
        return (React.createElement(StyledEmbed, { width: props.width }, React.createElement(StyledFrame, { src: `https://player.vimeo.com/video/${id}/`, allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" })));
    }
    const { provider: _, src: __, controls: ___ } = props, p = __rest(props, ["provider", "src", "controls"]);
    return React.createElement(StyledVideo, { src: props.src, controls: controls, autoPlay: autoPlay, loop: loop, playsInline: playsInline, muted: muted });
};
function def(input, fb) {
    if (typeof input === 'undefined') {
        return fb;
    }
    return input;
}
function flag(input, fb) {
    return typeof input === "undefined"
        ? fb
        : input === "true";
}


/***/ }),

/***/ "../../components/next-generation/markdown/lib/markdown-components/markdown-widget.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/markdown/lib/markdown-components/markdown-widget.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const widget_frame_1 = __webpack_require__(/*! ./widget-frame */ "../../components/next-generation/markdown/lib/markdown-components/widget-frame.js");
const markdown_1 = __webpack_require__(/*! ../markdown */ "../../components/next-generation/markdown/lib/markdown.js");
class MarkdownWidget extends React.Component {
    render() {
        const { props } = this;
        return (React.createElement(markdown_1.MarkdownWidgetSrc.Consumer, null, widgetSrc => (React.createElement(markdown_1.MarkdownWidgetState.Consumer, null, widgetState => (React.createElement(widget_frame_1.WidgetFrame, { srcDoc: createDoc({ code: props.code, widgetSrc, widgetState }), src: "/" }))))));
    }
}
exports.MarkdownWidget = MarkdownWidget;
const createDoc = (o) => {
    return [
        `<!doctype html>`,
        `<html>`,
        `<head>`,
        `<script src="${o.widgetSrc}"></script>`,
        `</head>`,
        `<body>`,
        `<div data-widget-mount></div>`,
        `<textarea data-widget-state style="display: none;">`,
        encodeURIComponent(JSON.stringify({
            state: o.widgetState,
            code: o.code
        })),
        `</textarea>`,
        `</body>`,
        `</html>`
    ].join("");
};


/***/ }),

/***/ "../../components/next-generation/markdown/lib/markdown-components/widget-frame.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/markdown/lib/markdown-components/widget-frame.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
const resizer = __webpack_require__(/*! iframe-resizer */ "../../node_modules/iframe-resizer/index.js");
class WidgetFrame extends React.Component {
    componentDidMount() {
        if (this.ref) {
            resizer.iframeResizer({
                log: false
            }, this.ref);
        }
    }
    render() {
        const { props } = this;
        return React.createElement(StyledWidgetFrame, Object.assign({ ref: ref => (this.ref = ref) }, props));
    }
}
exports.WidgetFrame = WidgetFrame;
const StyledWidgetFrame = styled_components_1.default.iframe `
  border: none;
  grid-column: first / span 12;
  width: 100%;
`;


/***/ }),

/***/ "../../components/next-generation/markdown/lib/markdown.js":
/*!****************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/markdown/lib/markdown.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
const remark = __webpack_require__(/*! remark */ "../../components/next-generation/markdown/node_modules/remark/index.js");
const remarkFrontmatter = __webpack_require__(/*! remark-frontmatter */ "../../node_modules/remark-frontmatter/index.js");
const remarkEmoji = __webpack_require__(/*! remark-gemoji-to-emoji */ "../../node_modules/remark-gemoji-to-emoji/index.js");
const remarkCustomBlocks = __webpack_require__(/*! remark-custom-blocks */ "../../node_modules/remark-custom-blocks/dist/index.js");
const remark_video_1 = __webpack_require__(/*! ./remark-video */ "../../components/next-generation/markdown/lib/remark-video.js");
const remarkRehype = __webpack_require__(/*! remark-rehype */ "../../node_modules/remark-rehype/index.js");
const rehypeReact = __webpack_require__(/*! rehype-react */ "../../node_modules/rehype-react/index.js");
const rehypeSanitize = __webpack_require__(/*! rehype-sanitize */ "../../node_modules/rehype-sanitize/index.js");
const sanitize_1 = __webpack_require__(/*! ./sanitize */ "../../components/next-generation/markdown/lib/sanitize.js");
const Handlers = __webpack_require__(/*! ./handlers */ "../../components/next-generation/markdown/lib/handlers.js");
const M = __webpack_require__(/*! ./markdown-components */ "../../components/next-generation/markdown/lib/markdown-components/index.js");
var markdown_components_1 = __webpack_require__(/*! ./markdown-components */ "../../components/next-generation/markdown/lib/markdown-components/index.js");
exports.MarkdownList = markdown_components_1.MarkdownList;
exports.MarkdownItem = markdown_components_1.MarkdownItem;
exports.MarkdownLink = markdown_components_1.MarkdownLink;
exports.MarkdownWidgetSrc = React.createContext('');
exports.MarkdownWidgetState = React.createContext({});
class Markdown extends React.Component {
    constructor() {
        super(...arguments);
        this.processor = remark()
            .use(remarkFrontmatter)
            .use(remark_video_1.remarkVideo)
            .use(remarkCustomBlocks, {
            details: {
                title: "optional",
                details: true
            },
            grid: {
                title: "optional"
            },
            ["grid-column"]: {
                title: "required"
            }
        })
            .use(remarkEmoji)
            .use(remarkRehype, {
            handlers: {
                gridCustomBlock: Handlers.gridHandler,
                video: Handlers.videoHandler
            }
        })
            .use(rehypeSanitize, sanitize_1.sanitize)
            .use(rehypeReact, {
            createElement: React.createElement,
            components: {
                a: M.MarkdownLink,
                div: M.MarkdownDiv,
                blockquote: M.MarkdownBlockquote,
                code: M.MarkdownCode,
                h1: prop({ order: 1, linkable: true })(M.MarkdownHeadline),
                h2: prop({ order: 2, linkable: true })(M.MarkdownHeadline),
                h3: prop({ order: 3, linkable: true })(M.MarkdownHeadline),
                h4: prop({ order: 4 })(M.MarkdownHeadline),
                h5: prop({ order: 4 })(M.MarkdownHeadline),
                h6: prop({ order: 4 })(M.MarkdownHeadline),
                hr: M.MarkdownHr,
                img: M.MarkdownImage,
                li: M.MarkdownItem,
                p: M.MarkdownCopy,
                pre: M.MarkdownPre,
                ul: is("ul")(M.MarkdownList),
                ol: is("ol")(M.MarkdownList),
                details: M.MarkdownDetails,
                "x-grid": (props) => React.createElement(M.MarkdownDiv, { grid: true }, props.children),
                "x-grid-column": M.MarkdownDiv,
                "x-video": M.MarkdownVideo
            }
        });
    }
    render() {
        const { props } = this;
        const elements = this.processor.processSync(props.source).contents;
        const context = { widgetState: this.props.widgetState, widgetSrc: this.props.widgetSrc };
        return (React.createElement(StyledMarkdown, { className: props.className }, React.createElement(exports.MarkdownWidgetSrc.Provider, { value: this.props.widgetSrc }, React.createElement(exports.MarkdownWidgetState.Provider, { value: this.props.widgetState }, props.source && elements))));
    }
}
exports.Markdown = Markdown;
const StyledMarkdown = styled_components_1.default.div `
  & table {
    text-align: left;
    display: block;
    width: 100%;
    overflow: auto;
    margin: 0 0 16px 0;
    border-spacing: 0;
    border-collapse: collapse;
    font-size: 18px;
    line-height: 24px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  & tr {
    color: ${props => props.theme.colors.color};
    border-top: 1px solid ${props => props.theme.colors.border};
    background: transparent;
  }
  & tbody tr:nth-child(odd) {
    background: ${props => props.theme.colors.backgroundTertiary};
  }
  & th {
    font-weight: 600;
  }
  & th,
  & td {
    padding: 20px 16px;
    border: 1px solid ${props => props.theme.colors.border};
    vertical-align: top;
  }
`;
function is(is) {
    return Component => props => React.createElement(Component, Object.assign({ as: is }, props));
}
function prop(p) {
    return Component => props => React.createElement(Component, Object.assign({}, props, p));
}
function getLanguagePayload({ children }) {
    const [child] = children;
    if (!child) {
        return [];
    }
    const className = child.props.className;
    if (!className) {
        return [];
    }
    return className.split(" ").map(n => n.replace("language-", ""));
}


/***/ }),

/***/ "../../components/next-generation/markdown/lib/remark-video.js":
/*!********************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/markdown/lib/remark-video.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function remarkVideo() {
    const Parser = this.Parser;
    // Inject blockTokenizer
    const blockTokenizers = Parser.prototype.blockTokenizers;
    const blockMethods = Parser.prototype.blockMethods;
    blockTokenizers.videos = videoBlockTokenizer;
    blockMethods.splice(blockMethods.indexOf('blockquote') + 1, 0, 'videos');
    if (this.Compiler) {
        const visitors = this.Compiler.prototype.visitors;
        if (!visitors)
            return;
        visitors.video = (node) => `!(${node.provider}:${node.src})`;
    }
}
exports.remarkVideo = remarkVideo;
function videoBlockTokenizer(eat, value) {
    const parsed = parse(value);
    if (parsed.type !== 'success') {
        return;
    }
    eat(parsed.matched)(Object.assign({ type: 'video' }, parsed.payload));
}
const MATCHER = /^!\((video|youtube|vimeo):(?:(\{.*\}):)?(.*)\)\s*?/;
function parse(input) {
    try {
        const matches = MATCHER.exec(input);
        if (matches === null) {
            return {
                type: 'error',
            };
        }
        const [all, provider, two, three] = matches;
        const config = two !== null && three !== null ? tryParse(two) : {};
        const src = two !== null && three !== null ? three : two;
        if (!provider || !src) {
            return {
                type: 'error',
            };
        }
        return {
            type: 'success',
            matched: matches[0],
            position: {
                start: matches.index,
                end: all.length - 1
            },
            payload: {
                provider,
                config,
                src
            }
        };
    }
    catch (err) {
        return {
            type: 'error',
            error: err
        };
    }
}
function tryParse(input) {
    try {
        return JSON.parse(input);
    }
    catch (err) {
        return {};
    }
}


/***/ }),

/***/ "../../components/next-generation/markdown/lib/sanitize.js":
/*!****************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/markdown/lib/sanitize.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitize = {
    strip: ["script"],
    clobberPrefix: "user-content-",
    clobber: ["name", "id"],
    ancestors: {
        li: ["ol", "ul"],
        summary: ["details"],
        tbody: ["table"],
        tfoot: ["table"],
        thead: ["table"],
        td: ["table"],
        th: ["table"],
        tr: ["table"],
        "x-grid-column": ["x-grid"]
    },
    protocols: {
        href: ["http", "https", "mailto"],
        cite: ["http", "https"],
        src: ["http", "https"],
        longDesc: ["http", "https"]
    },
    tagNames: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "h7",
        "h8",
        "br",
        "b",
        "i",
        "strong",
        "em",
        "a",
        "pre",
        "code",
        "img",
        "tt",
        "div",
        "ins",
        "del",
        "sup",
        "sub",
        "p",
        "ol",
        "ul",
        "table",
        "thead",
        "tbody",
        "tfoot",
        "blockquote",
        "dl",
        "dt",
        "dd",
        "kbd",
        "q",
        "samp",
        "var",
        "hr",
        "ruby",
        "rt",
        "rp",
        "li",
        "tr",
        "td",
        "th",
        "s",
        "strike",
        "summary",
        "details",
        "summary",
        "x-grid",
        "x-grid-column",
        "x-video"
    ],
    attributes: {
        a: ["href"],
        code: ["className"],
        img: ["src", "longDesc"],
        div: ["itemScope", "itemType"],
        blockquote: ["cite"],
        del: ["cite"],
        ins: ["cite"],
        q: ["cite"],
        "x-grid-column": ["start", "end"],
        "x-video": [
            "provider",
            "src",
            "autoPlay",
            "autoplay",
            "controls",
            "playsInline",
            "playsinline",
            "muted",
            "loop",
            "color",
            "poster"
        ],
        "*": [
            "abbr",
            "accept",
            "acceptCharset",
            "accessKey",
            "action",
            "align",
            "alt",
            "axis",
            "border",
            "cellPadding",
            "cellSpacing",
            "char",
            "charoff",
            "charSet",
            "checked",
            "clear",
            "cols",
            "colSpan",
            "color",
            "compact",
            "coords",
            "dateTime",
            "dir",
            "disabled",
            "encType",
            "htmlFor",
            "frame",
            "headers",
            "height",
            "hrefLang",
            "hspace",
            "isMap",
            "id",
            "label",
            "lang",
            "maxLength",
            "media",
            "method",
            "multiple",
            "name",
            "nohref",
            "noshade",
            "nowrap",
            "open",
            "prompt",
            "readOnly",
            "rel",
            "rev",
            "rows",
            "rowSpan",
            "rules",
            "scope",
            "selected",
            "shape",
            "size",
            "span",
            "start",
            "summary",
            "tabIndex",
            "target",
            "title",
            "type",
            "useMap",
            "valign",
            "value",
            "vspace",
            "width",
            "itemProp"
        ]
    }
};


/***/ }),

/***/ "../../components/next-generation/search/index.js":
/*!*******************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/search/index.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib */ "../../components/next-generation/search/lib/index.js");


/***/ }),

/***/ "../../components/next-generation/search/lib/index.js":
/*!***********************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/search/lib/index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./search */ "../../components/next-generation/search/lib/search.js"));
__export(__webpack_require__(/*! ./search-field */ "../../components/next-generation/search/lib/search-field.js"));
__export(__webpack_require__(/*! ./search-result */ "../../components/next-generation/search/lib/search-result.js"));
__export(__webpack_require__(/*! ./search-result-list */ "../../components/next-generation/search/lib/search-result-list.js"));
__export(__webpack_require__(/*! ./search-slots */ "../../components/next-generation/search/lib/search-slots.js"));
__export(__webpack_require__(/*! ./search-close */ "../../components/next-generation/search/lib/search-close.js"));
__export(__webpack_require__(/*! ./search-legend */ "../../components/next-generation/search/lib/search-legend.js"));
__export(__webpack_require__(/*! ./search-field-box */ "../../components/next-generation/search/lib/search-field-box.js"));
__export(__webpack_require__(/*! ./search-result-list-heading */ "../../components/next-generation/search/lib/search-result-list-heading.js"));
__export(__webpack_require__(/*! ./search-result-preview */ "../../components/next-generation/search/lib/search-result-preview.js"));


/***/ }),

/***/ "../../components/next-generation/search/lib/search-close.js":
/*!******************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/search/lib/search-close.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
const component_link_1 = __webpack_require__(/*! @patternplate/component-link */ "../../components/next-generation/link/lib/index.js");
const component_icon_1 = __webpack_require__(/*! @patternplate/component-icon */ "../../components/next-generation/icon/lib/index.js");
const StyledClose = styled_components_1.default(component_link_1.Link) `
  font-size: 0;
  line-height: 0;
`;
const StyledCloseIcon = styled_components_1.default(component_icon_1.Icon) `
  fill: ${props => props.theme.colors.color};
`;
exports.SearchClose = function SearchClose(props) {
    const verb = props.clears ? `Clear` : "Close";
    const query = props.clears ? { search: null } : { "search-enabled": null };
    const symbol = "close";
    return (React.createElement(StyledClose, { query: query, title: `${verb} search ${props.shortcut.toString()}` }, React.createElement(StyledCloseIcon, { size: "m", symbol: symbol }), verb));
};


/***/ }),

/***/ "../../components/next-generation/search/lib/search-field-box.js":
/*!**********************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/search/lib/search-field-box.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
exports.SearchFieldBox = styled_components_1.default.div `
  position: relative;
  z-index: 1;
  flex: 0 0 auto;
`;


/***/ }),

/***/ "../../components/next-generation/search/lib/search-field.js":
/*!******************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/search/lib/search-field.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const Styles = __webpack_require__(/*! ./search-field.styles */ "../../components/next-generation/search/lib/search-field.styles.js");
class SearchField extends React.Component {
    constructor() {
        super(...arguments);
        this.ref = null;
        this.saveRef = (ref) => {
            this.ref = ref;
        };
    }
    componentDidMount() {
        if (this.props.autoFocus && this.ref) {
            const length = this.props.value.length;
            if (this.ref.tagName === 'INPUT') {
                const ref = this.ref;
                ref.focus();
                ref.setSelectionRange(length, length);
            }
        }
    }
    render() {
        const { props } = this;
        return (React.createElement(Styles.StyledSearchField, null, React.createElement(Styles.StyledIcon, { symbol: "search" }), React.createElement(Styles.StyledInputContainer, null, React.createElement(Styles.StyledInputSuggestion, { value: props.suggestion || "" }), React.createElement(Styles.StyledInput, { autoComplete: "off", autoFocus: props.autoFocus, name: props.name, onBlur: props.onBlur, onChange: props.onChange, onFocus: props.onFocus, onKeyDown: props.onKeyDown, placeholder: props.placeholder, title: props.title, type: "text", value: props.value, "data-search": props.mark, ref: this.saveRef })), props.children));
    }
}
exports.SearchField = SearchField;


/***/ }),

/***/ "../../components/next-generation/search/lib/search-field.styles.js":
/*!*************************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/search/lib/search-field.styles.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
const component_icon_1 = __webpack_require__(/*! @patternplate/component-icon */ "../../components/next-generation/icon/lib/index.js");
exports.StyledSearchField = styled_components_1.default.label `
  display: flex;
  align-items: center;
  height: 60px;
  padding: 10px 15px;
`;
exports.StyledIcon = styled_components_1.default(component_icon_1.Icon) `
  flex-grow: 0;
  flex-shrink: 0;
  fill: ${props => props.theme.colors.color};
`;
exports.StyledInput = styled_components_1.default.input `
  position: relative;
  z-index: 2;
  width: 100%;
  border: 0;
  border-radius: 0;
  background: transparent;
  font-size: 16px;
  color: ${props => props.theme.colors.color};
  padding: 0;
  appearance: none;
  border-radius: 0;
  border: none;
  :focus {
    outline: none;
  }
`;
exports.StyledInputContainer = styled_components_1.default.div `
  position: relative;
  display: flex;
  align-items: center;
  flex-grow: 1;
  flex-shrink: 0;
  margin-left: 10px;
`;
exports.StyledInputSuggestion = styled_components_1.default(exports.StyledInput).attrs({ readOnly: true }) `
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  opacity: 0.3;
`;


/***/ }),

/***/ "../../components/next-generation/search/lib/search-legend.js":
/*!*******************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/search/lib/search-legend.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const Styles = __webpack_require__(/*! ./search-legend.styles */ "../../components/next-generation/search/lib/search-legend.styles.js");
exports.SearchLegend = function SearchLegend(props) {
    return (React.createElement(Styles.StyledSearchLegend, { className: props.className }, props.name && React.createElement(Styles.StyledLegendName, null, props.name), React.createElement(Styles.StyledSearchLegendBox, null, props.items.map(field => {
        return (React.createElement(Styles.StyledField, { key: field.key }, React.createElement(Styles.StyledFieldLink, { title: field.description, query: { search: field.value } }, field.key)));
    }))));
};


/***/ }),

/***/ "../../components/next-generation/search/lib/search-legend.styles.js":
/*!**************************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/search/lib/search-legend.styles.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
const component_link_1 = __webpack_require__(/*! @patternplate/component-link */ "../../components/next-generation/link/lib/index.js");
const component_text_1 = __webpack_require__(/*! @patternplate/component-text */ "../../components/next-generation/text/lib/index.js");
exports.StyledSearchLegend = styled_components_1.default.div `
  display: flex;
  align-items: center;
  height: 30px;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 0 15px;
  border: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.border};
  ${props => withTint(props)};
`;
exports.StyledSearchLegendBox = styled_components_1.default.div `
  display: flex;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  position: relative;
  z-index: 1;
  ::-webkit-scrollbar {
    display: none;
  }
`;
exports.StyledField = styled_components_1.default(component_text_1.Text) `
  padding: 0 10px;
  color: ${props => props.theme.colors.color};
  &:first-child {
    padding-left: 0;
  }
`;
exports.StyledLegendName = styled_components_1.default(exports.StyledField) `
  padding-right: 20px;
  font-weight: bold;
  color: ${props => props.theme.colors.color};
  position: relative;
  z-index: 1;
`;
exports.StyledFieldLink = styled_components_1.default(component_link_1.Link) `
  white-space:nowrap;
  &:link,
  &:active,
  &:visited,
  &:hover {
    color: ${props => props.theme.colors.color}
  }
`;
function withTint(props) {
    return `
		&::before {
			content: '';
			position: absolute;
			z-index: 0;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: ${props.theme.colors.background};
			opacity: 0.975;
		}
	`;
}


/***/ }),

/***/ "../../components/next-generation/search/lib/search-result-list-heading.js":
/*!********************************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/search/lib/search-result-list-heading.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
const component_text_1 = __webpack_require__(/*! @patternplate/component-text */ "../../components/next-generation/text/lib/index.js");
exports.SearchResultListHeading = styled_components_1.default(component_text_1.Text) `
  box-sizing: border-box;
  position: -webkit-sticky;
  position: sticky;
  z-index: 1;
  top: 0;
  margin: 0;
  font-size: 14px;
  padding: 3px 15px;
  border-width: 1px 0;
  border-style: solid;
  border-color: ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.color};
  background: ${props => props.theme.colors.background};
`;


/***/ }),

/***/ "../../components/next-generation/search/lib/search-result-list.js":
/*!************************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/search/lib/search-result-list.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
exports.SearchResultList = styled_components_1.default.div `
  flex: 1 0 40%;
  overflow: scroll;
  border-right: 1px solid rgb(26, 24, 68);
`;


/***/ }),

/***/ "../../components/next-generation/search/lib/search-result-preview.js":
/*!***************************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/search/lib/search-result-preview.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
exports.SearchResultPreview = styled_components_1.default.div `
  flex: 1 1 60%;
  overflow: scroll;
  -webkit-touch-scroll: auto;
`;


/***/ }),

/***/ "../../components/next-generation/search/lib/search-result.js":
/*!*******************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/search/lib/search-result.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const Styles = __webpack_require__(/*! ./search-result.styles */ "../../components/next-generation/search/lib/search-result.styles.js");
const component_text_1 = __webpack_require__(/*! @patternplate/component-text */ "../../components/next-generation/text/lib/index.js");
class SearchResult extends React.Component {
    constructor() {
        super(...arguments);
        this.ref = null;
        this.saveRef = (ref) => {
            this.ref = ref;
        };
    }
    componentWillUpdate(next) {
        if (next.active && this.ref) {
            this.props.onScrollRequest({ target: this.ref });
        }
    }
    render() {
        const props = this.props;
        return (React.createElement(Styles.StyledResult, { ref: this.saveRef, title: `Navigation to pattern ${props.name}`, "data-id": props.id }, React.createElement(Styles.StyledResultLink, { active: props.active, href: props.href, query: { "search-enabled": false } }, React.createElement(Styles.StyledResultLinkText, { active: props.active }, props.name)), React.createElement(Styles.StyledPreviewLink, { active: props.active, query: { "search-preview": props.index } }, React.createElement(component_text_1.Text, null, "Preview"))));
    }
}
exports.SearchResult = SearchResult;


/***/ }),

/***/ "../../components/next-generation/search/lib/search-result.styles.js":
/*!**************************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/search/lib/search-result.styles.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
const component_link_1 = __webpack_require__(/*! @patternplate/component-link */ "../../components/next-generation/link/lib/index.js");
const component_text_1 = __webpack_require__(/*! @patternplate/component-text */ "../../components/next-generation/text/lib/index.js");
exports.StyledResult = styled_components_1.default.div `
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  &:hover {
    mask-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0) 75px,
      rgba(0, 0, 0, 1) 125px
    );
    -webkit-mask-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0) 75px,
      rgba(0, 0, 0, 1) 125px
    );
  }
  &:hover {
    opacity: 1;
  }
`;
exports.StyledResultLink = styled_components_1.default(component_link_1.Link) `
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 15px;
  &:link,
  &:visited,
  &:active {
    color: ${props => props.active ? props.theme.colors.active : props.theme.colors.color};
    text-decoration: none;
  }
`;
exports.StyledResultLinkText = styled_components_1.default(component_text_1.Text) `
  line-height: 20px;
  color: ${props => props.active ? props.theme.colors.active : props.theme.colors.color};
  text-decoration: none;
`;
exports.StyledPreviewLink = styled_components_1.default(component_link_1.Link) `
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  text-decoration: none;
  color: ${props => props.theme.colors.border};
  opacity: 0;
  &:hover {
    color: ${props => props.theme.colors.color};
    text-decoration: underline;
  }
`;


/***/ }),

/***/ "../../components/next-generation/search/lib/search-slots.js":
/*!******************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/search/lib/search-slots.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
exports.SearchFieldSlot = function SearchFieldSlot(props) {
    return React.createElement(React.Fragment, null, props.children);
};
exports.SearchLegendSlot = function SearchFieldSlot(props) {
    return React.createElement(React.Fragment, null, props.children);
};
exports.SearchPassThroughSlot = function PassThroughSlot(props) {
    return React.createElement(React.Fragment, null, props.children);
};
exports.SearchResultListSlot = function SearchResultListSlot(props) {
    return React.createElement(React.Fragment, null, props.children);
};
exports.SearchResultPreviewSlot = function SearchResultPreviewSlot(props) {
    return React.createElement(React.Fragment, null, props.children);
};
function withSlot(children, { slot }) {
    return React.Children.toArray(children)
        .filter((child) => typeof child === 'object' && typeof child.type !== 'undefined')
        .filter(child => child.type === slot);
}
exports.withSlot = withSlot;


/***/ }),

/***/ "../../components/next-generation/search/lib/search.constants.js":
/*!**********************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/search/lib/search.constants.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SEARCH_HEIGHT = "55vh";
exports.SEARCH_FIELD_HEIGHT = "80px";
exports.SEARCH_LEGEND_HEIGHT = "30px";


/***/ }),

/***/ "../../components/next-generation/search/lib/search.js":
/*!************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/search/lib/search.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const Styles = __webpack_require__(/*! ./search.styles */ "../../components/next-generation/search/lib/search.styles.js");
const Slots = __webpack_require__(/*! ./search-slots */ "../../components/next-generation/search/lib/search-slots.js");
const search_field_box_1 = __webpack_require__(/*! ./search-field-box */ "../../components/next-generation/search/lib/search-field-box.js");
const NOOP = function NOOP() { };
exports.Search = function Search(props) {
    const searchResultList = Slots.withSlot(props.children, { slot: Slots.SearchResultListSlot });
    const searchPreviewChildren = Slots.withSlot(props.children, { slot: Slots.SearchResultPreviewSlot });
    const searchField = Slots.withSlot(props.children, { slot: Slots.SearchFieldSlot });
    const searchLegend = Slots.withSlot(props.children, { slot: Slots.SearchLegendSlot });
    const passThrough = Slots.withSlot(props.children, { slot: Slots.SearchPassThroughSlot });
    return (React.createElement(Styles.StyledFormBox, { enabled: props.enabled, inline: props.inline, onClick: props.inline && !props.enabled ? props.onFocus : NOOP }, React.createElement(Styles.StyledForm, { onSubmit: props.onSubmit, method: "GET" }, React.createElement(search_field_box_1.SearchFieldBox, { onClick: props.inline ? props.onClick : NOOP }, searchField, passThrough, React.createElement("input", { type: "submit", style: { display: 'none' } })), searchLegend, React.createElement(Styles.StyledResults, null, searchResultList, searchPreviewChildren))));
};


/***/ }),

/***/ "../../components/next-generation/search/lib/search.styles.js":
/*!*******************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/search/lib/search.styles.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
const component_icon_1 = __webpack_require__(/*! @patternplate/component-icon */ "../../components/next-generation/icon/lib/index.js");
const C = __webpack_require__(/*! ./search.constants */ "../../components/next-generation/search/lib/search.constants.js");
exports.StyledResults = styled_components_1.default.div `
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  max-height: calc(
    ${C.SEARCH_HEIGHT} - ${C.SEARCH_FIELD_HEIGHT} - ${C.SEARCH_LEGEND_HEIGHT}
  );
`;
exports.StyledFormBox = styled_components_1.default.div `
  width: 100%;
  height: 100%;
  border-radius: 10px;
  pointer-events: all;
  overflow: hidden;
  margin: ${props => (props.inline ? "calc(12.5vh - 30px) 0 60px 0" : "0")};
  opacity: ${props => (props.inline && props.enabled ? "0" : "1")};
`;
exports.StyledForm = styled_components_1.default.form `
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  width: 100%;
  max-height: ${C.SEARCH_HEIGHT};
  ${props => withTint(props)};
`;
exports.StyledResultList = styled_components_1.default.div `
  flex: 1 0 40%;
  overflow: scroll;
  -webkit-touch-scroll: auto;
  border-right: 1px solid ${props => props.theme.colors.border};
`;
exports.StyledIcon = styled_components_1.default(component_icon_1.Icon) `
  flex: 0 0 auto;
  fill: ${props => props.active ? props.theme.colors.active : props.theme.colors.color};
  margin-right: 10px;
`;
function withTint(props) {
    return `
		&::before {
			content: '';
			position: absolute;
			z-index: 0;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: ${props.theme.colors.background};
			opacity: 0.975;
		}
	`;
}


/***/ }),

/***/ "../../components/next-generation/svg/lib/svg.js":
/*!******************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/svg/lib/svg.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
            if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
const lodash_1 = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
const xmldom_1 = __webpack_require__(/*! xmldom */ "../../node_modules/xmldom/dom-parser.js");
const b = __webpack_require__(/*! btoa */ "../../node_modules/btoa/index.js");
const parser = new xmldom_1.DOMParser();
const serializer = new xmldom_1.XMLSerializer();
/**
 * These attributes are valid on all SVG elements and accepted by this
 * renderer.
 * All attributes will be converted to their camelCase version.
 * This allows using valid SVG strings.
 * Extend this list to allow additional default SVG attributes.
 *
 * @type {Array}
 */
const SHARED_ATTRIBUTES = ["fill", "filter", "stroke", "stroke-width"];
const ATTRIBUTES = {
    defs: [...SHARED_ATTRIBUTES],
    symbol: ["id"],
    linearGradient: [...SHARED_ATTRIBUTES, "id", "x1", "y1", "x2", "y2"],
    stop: ["offset", "stop-color"],
    circle: [...SHARED_ATTRIBUTES, "cx", "cy", "r", "style"],
    g: [...SHARED_ATTRIBUTES, "x", "y"],
    path: [...SHARED_ATTRIBUTES, "d", "style"],
    polygon: [...SHARED_ATTRIBUTES, "points"],
    rect: [...SHARED_ATTRIBUTES, "x", "y", "width", "height", "style"],
    svg: ["width", "height", "viewBox", "x", "y", "style", "xmlns", "xmlns:xlink"]
};
const TAG_NAMES = Object.keys(ATTRIBUTES);
function attributes(node, key) {
    return (ATTRIBUTES[node.tagName] || []).reduce((props, name) => {
        const attribute = node.attributes.getNamedItem(name);
        const reactProp = lodash_1.camelCase(name);
        if (attribute && attribute.specified) {
            props[reactProp] = attribute.value;
        }
        return props;
    }, { key });
}
function btoa(source) {
    return `data:image/svg+xml;base64,${b(source)}`;
}
exports.btoa = btoa;
function parse(source) {
    const doc = parser.parseFromString(source, "image/svg+xml");
    const parsed = Array.prototype.slice.call(doc.childNodes).find(node => node.tagName === "svg");
    parsed.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    return parsed;
}
exports.parse = parse;
function png(source) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        const canvas = document.createElement("canvas");
        const ratio = window.devicePixelRatio || 1;
        canvas.width = 16 * ratio;
        canvas.height = 16 * ratio;
        const context = canvas.getContext("2d");
        img.onload = () => {
            context.drawImage(img, 0, 0);
            resolve(canvas.toDataURL("image/png"));
        };
        img.src = btoa(source);
    });
}
exports.png = png;
function purge(parsed) {
    return Array.prototype.slice.call(parsed)
        .filter(node => TAG_NAMES.indexOf(node.tagName) > -1)
        .map(node => {
        node.childNodes = purge(node.childNodes);
        const attributes = ATTRIBUTES[node.tagName] || [];
        for (let i = 0; i < node.attributes.length; i++) {
            const attribute = node.attributes[i];
            if (attributes.indexOf(attribute.name) === -1) {
                node.removeAttribute(attribute.name);
            }
        }
        return node;
    });
}
exports.purge = purge;
;
function render(renderable) {
    const [tagName, props, children = []] = renderable;
    const { style } = props, rest = __rest(props, ["style"]);
    const tag = styled_components_1.default(tagName) `
    ${style};
  `;
    return react_1.createElement(tag, rest, children.map(c => render(c)));
}
exports.render = render;
function sanitize(parsed) {
    return Array.from(parsed)
        .filter((node) => node.hasOwnProperty('tagName'))
        .map((node, i) => [
        node.tagName,
        attributes(node, i),
        sanitize(Array.from(node.childNodes))
    ]);
}
exports.sanitize = sanitize;
function stringify(tree) {
    return serializer.serializeToString(tree);
}
exports.stringify = stringify;
function fromSource(source) {
    return render(sanitize(purge([parse(source)]))[0]);
}
exports.fromSource = fromSource;


/***/ }),

/***/ "../../components/next-generation/tag/lib/index.js":
/*!********************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/tag/lib/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./tag */ "../../components/next-generation/tag/lib/tag.js"));


/***/ }),

/***/ "../../components/next-generation/tag/lib/tag.js":
/*!******************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/tag/lib/tag.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
const component_text_1 = __webpack_require__(/*! @patternplate/component-text */ "../../components/next-generation/text/lib/index.js");
const InnerTag = (props) => React.createElement(component_text_1.Text, { className: props.className }, props.children);
exports.Tag = styled_components_1.default(InnerTag) `
  display: inline-block;
  padding: 2px 4px;
  margin-top: 1.5px;
  margin-bottom: 1.5px;
  color: ${props => props.theme.colors.color};
  border: 1px solid ${props => props.theme.colors.color};
  border-radius: 3px;
  &:link,
  &:visited,
  &:active {
    text-decoration: none;
    color: ${props => props.theme.colors.color};
  }
  &:nth-child(2n) {
    margin-left: 3px;
  }
`;


/***/ }),

/***/ "../../components/next-generation/text/lib/index.js":
/*!*********************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/text/lib/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./text */ "../../components/next-generation/text/lib/text.js"));


/***/ }),

/***/ "../../components/next-generation/text/lib/text.js":
/*!********************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/text/lib/text.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
exports.Text = styled_components_1.default.div `
  font-family: ${props => props.theme.fonts.default};
  color: ${props => props.theme.colors.color};
`;


/***/ }),

/***/ "../../components/next-generation/themes/lib/fonts.js":
/*!***********************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/themes/lib/fonts.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EMOJI = [
    "\"Apple Color Emoji\"",
    "\"Segoe UI Emoji\"",
    "\"Segoe UI Symbol\""
];
const SYSTEM_FONTS = [
    "-apple-system",
    "BlinkMacSystemFont",
    "\"Segoe UI\"",
    "Helvetica",
    "Arial",
    "sans-serif",
    ...EMOJI
];
const CODE_FONTS = [
    "SFMono-Regular",
    "Consolas",
    "Liberation Mono",
    "Menlo",
    "Courier",
    "monospace",
    ...EMOJI
];
function fonts() {
    return {
        default: SYSTEM_FONTS.join(", "),
        code: CODE_FONTS.join(", ")
    };
}
exports.fonts = fonts;


/***/ }),

/***/ "../../components/next-generation/themes/lib/index.js":
/*!***********************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/themes/lib/index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./themes */ "../../components/next-generation/themes/lib/themes.js"));


/***/ }),

/***/ "../../components/next-generation/themes/lib/themes.js":
/*!************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/themes/lib/themes.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Color = __webpack_require__(/*! color */ "../../node_modules/color/index.js");
const lodash_1 = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
const fonts_1 = __webpack_require__(/*! ./fonts */ "../../components/next-generation/themes/lib/fonts.js");
function getThemes(ui = {}) {
    const defaultMainColor = Color.rgb(26, 119, 215);
    const grayBaseTone = Color.hsl(0, 0, 100);
    const colorGroups = {
        lightBlue: {
            300: defaultMainColor.darken(0.3),
            600: defaultMainColor.darken(0.4)
        },
        marine: {
            500: defaultMainColor.desaturate(0.5).darken(0.5),
            700: defaultMainColor.desaturate(0.5).darken(0.8),
            800: defaultMainColor.desaturate(0.5).darken(0.85),
            900: defaultMainColor.desaturate(0.5).darken(0.9)
        },
        gray: {
            50: grayBaseTone.darken(0.05),
            100: grayBaseTone.darken(0.15),
            400: grayBaseTone.darken(0.4),
            700: grayBaseTone.darken(0.735)
        }
    };
    const active = ui.colorActive
        ? Color(ui.colorActive)
        : defaultMainColor;
    const error = ui.colorError
        ? Color(ui.colorError)
        : Color.rgb(250, 63, 69);
    const warning = ui.colorWarning
        ? Color(ui.colorWarning)
        : Color.rgb(255, 189, 46);
    const info = ui.colorInfo
        ? Color(ui.colorInfo)
        : Color.rgb(80, 179, 221);
    const success = ui.colorSuccess
        ? Color(ui.colorSuccess)
        : Color.rgb(74, 165, 74);
    const background = ui.colorBackgroundDark
        ? Color(ui.colorBackgroundDark)
        : colorGroups.marine[900];
    const backgroundSecondary = ui.colorBackgroundSecondaryDark
        ? Color(ui.colorBackgroundSecondaryDark)
        : colorGroups.marine[800];
    const backgroundTertiary = ui.colorBackgroundTertiaryDark
        ? Color(ui.colorBackgroundTertiaryDark)
        : colorGroups.marine[700];
    const border = ui.colorBorderDark
        ? Color(ui.colorBorderDark)
        : colorGroups.marine[800];
    const textColor = ui.colorTextDark
        ? Color(ui.colorTextDark)
        : colorGroups.gray[50];
    const textColorNegated = ui.colorTextNegatedDark
        ? Color(ui.colorTextNegatedDark)
        : colorGroups.gray[700];
    const recess = ui.colorRecessDark
        ? Color(ui.colorRecessDark)
        : colorGroups.gray[400];
    const backgroundLight = ui.colorBackgroundLight
        ? Color(ui.colorBackgroundLight)
        : Color.hsl(255, 0, 100);
    const backgroundSecondaryLight = ui.colorBackgroundSecondaryLight
        ? Color(ui.colorBackgroundSecondaryLight)
        : Color.rgb(246, 248, 250);
    const backgroundTertiaryLight = ui.colorBackgroundTertiaryLight
        ? Color(ui.colorBackgroundTertiaryLight)
        : Color.rgb(246, 248, 250);
    const borderLight = ui.colorBorderLight
        ? Color(ui.colorBorderLight)
        : Color.rgb(228, 228, 228);
    const colorLight = ui.colorTextLight
        ? Color(ui.colorTextLight)
        : Color.rgb(68, 68, 68);
    const colorLightNegated = ui.colorTextNegatedLight
        ? Color(ui.colorTextNegatedLight)
        : Color.rgb(238, 238, 238);
    const colorRecessLight = ui.colorRecessLight
        ? Color(ui.colorRecessLight)
        : Color.rgb(106, 115, 125);
    const backgroundNote = ui.colorBackgroundNote
        ? Color(ui.colorBackgroundNote)
        : backgroundSecondary;
    const backgroundInfoNote = ui.colorBackgroundInfoNote
        ? Color(ui.colorBackgroundInfoNote)
        : info;
    const backgroundSucessNote = ui.colorBackgroundSuccessNote
        ? Color(ui.colorBackgroundSuccessNote)
        : success;
    const backgroundErrorNote = ui.colorBackgroundErrorNote
        ? Color(ui.colorBackgroundErrorNote)
        : error;
    const backgroundWarningNote = ui.colorBackgroundWarningNote
        ? Color(ui.colorBackgroundWarningNote)
        : warning;
    const noteLight = Color(ui.colorNoteLight) || colorLightNegated;
    const noteDark = Color(ui.colorNoteDark) || colorLight;
    const fontFaces = fonts_1.fonts();
    const common = {
        colors: {
            active: active.string(),
            error: error.string(),
            warning: warning.string(),
            info: info.string(),
            success: success.string(),
            colorBackgroundNote: backgroundNote.string(),
            colorBackgroundInfoNote: backgroundInfoNote.string(),
            colorBackgroundSuccessNote: backgroundSucessNote.string(),
            colorBackgroundErrorNote: backgroundErrorNote.string(),
            colorBackgroundWarningNote: backgroundWarningNote.string(),
            colorNoteLight: noteLight.string(),
            colorNoteDark: noteDark.string(),
        },
        fonts: {
            fontWeight: 100,
            fontSize: 14,
            default: ui.fontDefault || fontFaces.default,
            code: ui.fontCode || fontFaces.code,
            headline: ui.fontHeadline || fontFaces.default
        }
    };
    const dark = lodash_1.merge({}, common, {
        name: "dark",
        colors: {
            background: background.string(),
            backgroundSecondary: backgroundSecondary.string(),
            backgroundTertiary: backgroundTertiary.string(),
            border: border.string(),
            color: textColor.string(),
            colorNegated: textColorNegated.string(),
            recess: recess.string()
        }
    });
    const light = lodash_1.merge({}, common, {
        name: "light",
        colors: {
            background: backgroundLight.string(),
            backgroundSecondary: backgroundSecondaryLight.string(),
            backgroundTertiary: backgroundTertiaryLight.string(),
            border: borderLight.string(),
            color: colorLight.string(),
            colorNegated: colorLightNegated.string(),
            recess: colorRecessLight.string()
        }
    });
    return {
        dark,
        light
    };
}
exports.getThemes = getThemes;
;


/***/ }),

/***/ "../../components/next-generation/utility/index.js":
/*!********************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/utility/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib */ "../../components/next-generation/utility/lib/index.js");


/***/ }),

/***/ "../../components/next-generation/utility/injection.js":
/*!************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/utility/injection.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/injection */ "../../components/next-generation/utility/lib/injection.js");


/***/ }),

/***/ "../../components/next-generation/utility/lib/global.js":
/*!*************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/utility/lib/global.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Styled = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
exports.Global = Styled.createGlobalStyle `
  html,
  body {
    margin: 0;
  }
`;


/***/ }),

/***/ "../../components/next-generation/utility/lib/index.js":
/*!************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/utility/lib/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./global */ "../../components/next-generation/utility/lib/global.js"));
__export(__webpack_require__(/*! ./injection */ "../../components/next-generation/utility/lib/injection.js"));
__export(__webpack_require__(/*! ./themer */ "../../components/next-generation/utility/lib/themer.js"));


/***/ }),

/***/ "../../components/next-generation/utility/lib/injection.js":
/*!****************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/utility/lib/injection.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const PropTypes = __webpack_require__(/*! prop-types */ "../../components/next-generation/utility/node_modules/prop-types/index.js");
const childContextTypes = {
    injections: PropTypes.arrayOf(PropTypes.shape({
        target: PropTypes.any,
        source: PropTypes.any
    }))
};
class InjectionProvider extends React.Component {
    getChildContext() {
        return { injections: this.props.injections };
    }
    render() {
        const { props } = this;
        return React.Children.only(props.children);
    }
}
InjectionProvider.childContextTypes = childContextTypes;
exports.InjectionProvider = InjectionProvider;
function inject(RawComponent) {
    const InjectedComponent = (props, context) => {
        const injections = Array.isArray(context.injections)
            ? context.injections
            : [];
        const applicable = injections.find(injection => {
            return (injection.target === RawComponent ||
                injection.target.RawComponent === RawComponent);
        });
        if (!applicable) {
            return React.createElement(RawComponent, Object.assign({}, props), props.children);
        }
        const Source = applicable.source;
        return React.createElement(Source, Object.assign({}, props), props.children);
    };
    InjectedComponent.RawComponent = RawComponent;
    InjectedComponent.contextTypes = childContextTypes;
    return InjectedComponent;
}
exports.inject = inject;


/***/ }),

/***/ "../../components/next-generation/utility/lib/themer.js":
/*!*************************************************************************************************!*\
  !*** /Users/ilumino-cto/Projects/patternplate/components/next-generation/utility/lib/themer.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
const styled_components_1 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
const styled_components_2 = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
const component_themes_1 = __webpack_require__(/*! @patternplate/component-themes */ "../../components/next-generation/themes/lib/index.js");
const tag_hoc_1 = __webpack_require__(/*! tag-hoc */ "../../node_modules/tag-hoc/dist/tag.js");
const global_1 = __webpack_require__(/*! ./global */ "../../components/next-generation/utility/lib/global.js");
exports.Themer = props => {
    const themes = component_themes_1.getThemes();
    return (React.createElement(StyledThemer, null, React.createElement(global_1.Global, null), React.createElement(styled_components_2.ThemeProvider, { key: "dark", theme: themes.dark }, React.createElement(StyledThemeContainer, { spacing: Boolean(props.spacing), full: props.full ? "true" : undefined }, props.children)), React.createElement(styled_components_2.ThemeProvider, { key: "light", theme: themes.light }, React.createElement(StyledThemeContainer, { spacing: Boolean(props.spacing), full: props.full ? "true" : undefined }, props.children))));
};
const StyledThemeContainer = styled_components_1.default(tag_hoc_1.default("spacing", "full")("div")) `
  background: ${(props) => props.theme.colors.background};
  padding: ${(props) => props.spacing ? 15 : 0}px;
  width: ${(props) => props.full ? "100%" : "auto"};
`;
const StyledThemer = styled_components_1.default.div `
  display: flex;
  flex-wrap: wrap;
`;


/***/ }),

/***/ "../search/index.js":
/*!**************************!*\
  !*** ../search/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib */ "../search/lib/index.js");


/***/ }),

/***/ "../search/lib/create-search.js":
/*!**************************************!*\
  !*** ../search/lib/create-search.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Query = __webpack_require__(/*! ./query */ "../search/lib/query.js");
const Registry = __webpack_require__(/*! ./registry */ "../search/lib/registry/index.js");
const Search = __webpack_require__(/*! ./search */ "../search/lib/search.js");
const Term = __webpack_require__(/*! ./term */ "../search/lib/term.js");
function createSearch(items) {
    const search = Search.create(items);
    const registry = Registry.create(items);
    return function performSearch(queryString) {
        const query = Query.parse(queryString);
        return Query.perform(query, termString => {
            const term = Term.parse(termString);
            if (term.valid) {
                return registry.search(term);
            }
            return search.search(term.raw);
        });
    };
}
exports.createSearch = createSearch;


/***/ }),

/***/ "../search/lib/index.js":
/*!******************************!*\
  !*** ../search/lib/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const Query = __webpack_require__(/*! ./query */ "../search/lib/query.js");
exports.Query = Query;
const Term = __webpack_require__(/*! ./term */ "../search/lib/term.js");
exports.Term = Term;
__export(__webpack_require__(/*! ./create-search */ "../search/lib/create-search.js"));


/***/ }),

/***/ "../search/lib/query.js":
/*!******************************!*\
  !*** ../search/lib/query.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
const q = __webpack_require__(/*! logic-query-parser */ "../../node_modules/logic-query-parser/lib/index.js");
function parse(queryString) {
    const values = typeof queryString === "string" ? [queryString] : [];
    try {
        const parsed = q.parse(queryString);
        const query = q.utils.binaryTreeToQueryJson(parsed);
        if (query.type) {
            return query;
        }
        return { type: "and", values };
    }
    catch (err) {
        return { type: "and", values };
    }
}
exports.parse = parse;
function perform(query, predicate) {
    if (typeof query === "string") {
        return predicate(query);
    }
    switch (query.type) {
        case "and": {
            const items = () => query.values.map(value => perform(value, predicate));
            return lodash_1.intersection(...items());
        }
        case "or": {
            const items = () => query.values.map(value => perform(value, predicate));
            return lodash_1.flatten([...items()]);
        }
        case "string": {
            const value = typeof query.value === "string" ? query.value : "";
            return predicate(value);
        }
        default: {
            throw new TypeError(`@patternplate/search.perform: Unknown query: ${JSON.stringify(query)}`);
        }
    }
}
exports.perform = perform;


/***/ }),

/***/ "../search/lib/registry/index.js":
/*!***************************************!*\
  !*** ../search/lib/registry/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./registry */ "../search/lib/registry/registry.js"));


/***/ }),

/***/ "../search/lib/registry/matchers/get.js":
/*!**********************************************!*\
  !*** ../search/lib/registry/matchers/get.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const M = __webpack_require__(/*! ./match */ "../search/lib/registry/matchers/match.js");
function get(field, value, options) {
    const depends = M.matchDepends(value, options);
    const has = M.matchHas(value);
    const provides = M.matchProvides(value, options);
    const flag = M.matchFlag(value, options);
    const tags = M.matchTags(value, options);
    const version = M.matchVersion(value, options);
    const is = M.matchIs(value);
    const path = M.matchPath(value, options);
    return item => {
        switch (field) {
            case "depends":
                return depends(item);
            case "flag":
                return flag(item);
            case "has":
                return has(item);
            case "is":
                return is(item);
            case "provides":
                return provides(item);
            case "tag":
            case "tags":
                return tags(item);
            case "version":
                return version(item);
            case "flag":
                return flag(item);
            case "path":
                return path(item);
            default:
                return item[field] === value || item.manifest[field] === value;
        }
    };
}
exports.get = get;


/***/ }),

/***/ "../search/lib/registry/matchers/index.js":
/*!************************************************!*\
  !*** ../search/lib/registry/matchers/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./get */ "../search/lib/registry/matchers/get.js"));


/***/ }),

/***/ "../search/lib/registry/matchers/match-depends.js":
/*!********************************************************!*\
  !*** ../search/lib/registry/matchers/match-depends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function matchDepends(value, options) {
    const depends = item => (item.dependencies || []).filter(i => typeof i === "string");
    if (options.startsWith) {
        return item => depends(item).length > 0 && depends(item).some(d => d.startsWith(value));
    }
    if (options.includes) {
        return item => depends(item).length > 0 && depends(item).some(d => d.includes(value));
    }
    return item => depends(item).includes(value);
}
exports.matchDepends = matchDepends;


/***/ }),

/***/ "../search/lib/registry/matchers/match-flag.js":
/*!*****************************************************!*\
  !*** ../search/lib/registry/matchers/match-flag.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Flags = {
    deprecated: 0,
    alpha: 1,
    beta: 2,
    rc: 3,
    stable: 4
};
function matchFlag(value, options) {
    const i = Flags[value] || 0;
    const flag = item => item.manifest.flag;
    const index = item => Flags[flag(item)] || 0;
    if (options.lower) {
        return item => (options.equals ? index(item) <= i : index(item) < i);
    }
    if (options.greater) {
        return item => (options.equals ? index(item) >= i : index(item) > i);
    }
    if (options.startsWith) {
        return item => flag(item).startsWith(value);
    }
    if (options.includes) {
        return item => flag(item).includes(value);
    }
    return item => flag(item) === value;
}
exports.matchFlag = matchFlag;


/***/ }),

/***/ "../search/lib/registry/matchers/match-has.js":
/*!****************************************************!*\
  !*** ../search/lib/registry/matchers/match-has.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function matchHas(value) {
    return item => {
        switch (value) {
            case "dependencies":
                return (item.dependencies || []).length > 0;
            case "dependents":
                return (item.dependents || []).length > 0;
            case "description":
                return Boolean(item.manifest.description);
            case "displayName":
                return Boolean((item.rawManifest || {}).displayName);
            case "doc":
            case "docs":
                return item.contentType === "pattern" && Boolean(item.contents);
            case "flag":
                return Boolean((item.rawManifest || {}).flag);
            case "tag":
            case "tags":
                return (item.manifest.tags || []).length > 0;
            case "version":
                return Boolean((item.rawManifest || {}).version);
            default:
                return false;
        }
    };
}
exports.matchHas = matchHas;


/***/ }),

/***/ "../search/lib/registry/matchers/match-is.js":
/*!***************************************************!*\
  !*** ../search/lib/registry/matchers/match-is.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function matchIs(value) {
    return item => item.contentType === value;
}
exports.matchIs = matchIs;


/***/ }),

/***/ "../search/lib/registry/matchers/match-path.js":
/*!*****************************************************!*\
  !*** ../search/lib/registry/matchers/match-path.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Matcher = __webpack_require__(/*! matcher */ "../../node_modules/matcher/index.js");
function matchPath(value, options) {
    if (options.matches) {
        const patterns = (value || '').split(',').filter(Boolean);
        return item => {
            const p = typeof item.path === 'string' ? item.path : '';
            return patterns.some(pattern => Matcher.isMatch(p, pattern));
        };
    }
    return item => item.path === value;
}
exports.matchPath = matchPath;


/***/ }),

/***/ "../search/lib/registry/matchers/match-provides.js":
/*!*********************************************************!*\
  !*** ../search/lib/registry/matchers/match-provides.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function matchProvides(value, options) {
    const dependents = item => (item.dependents || []).filter(i => typeof i === "string");
    if (options.startsWith) {
        return item => dependents(item).length > 0 &&
            dependents(item).some(d => d.startsWith(value));
    }
    if (options.includes) {
        return item => dependents(item).length > 0 &&
            dependents(item).some(d => d.includes(value));
    }
    return item => dependents(item).includes(value);
}
exports.matchProvides = matchProvides;


/***/ }),

/***/ "../search/lib/registry/matchers/match-tags.js":
/*!*****************************************************!*\
  !*** ../search/lib/registry/matchers/match-tags.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function matchTags(value, options) {
    const tags = item => item.manifest.tags || [];
    if (options.startsWith) {
        return item => tags(item).length > 0 && tags(item).some(tag => tag.startsWith(value));
    }
    if (options.includes) {
        return item => tags(item).length > 0 && tags(item).some(tag => tag.includes(value));
    }
    return item => tags(item).includes(value);
}
exports.matchTags = matchTags;


/***/ }),

/***/ "../search/lib/registry/matchers/match-version.js":
/*!********************************************************!*\
  !*** ../search/lib/registry/matchers/match-version.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const semver = __webpack_require__(/*! semver */ "../../node_modules/semver/semver.js");
function matchVersion(value, options) {
    const version = item => item.manifest.version;
    const modified = options.lower || options.greater || options.startsWith || options.includes;
    const valid = item => semver.valid(version(item));
    if (modified) {
        return item => valid(item)
            ? semver.satisfies(version(item), `${options.operators}${options.value}`)
            : false;
    }
    return item => valid(item) ? semver.satisfies(version(item), options.value) : false;
}
exports.matchVersion = matchVersion;


/***/ }),

/***/ "../search/lib/registry/matchers/match.js":
/*!************************************************!*\
  !*** ../search/lib/registry/matchers/match.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./match-depends */ "../search/lib/registry/matchers/match-depends.js"));
__export(__webpack_require__(/*! ./match-flag */ "../search/lib/registry/matchers/match-flag.js"));
__export(__webpack_require__(/*! ./match-has */ "../search/lib/registry/matchers/match-has.js"));
__export(__webpack_require__(/*! ./match-is */ "../search/lib/registry/matchers/match-is.js"));
__export(__webpack_require__(/*! ./match-path */ "../search/lib/registry/matchers/match-path.js"));
__export(__webpack_require__(/*! ./match-provides */ "../search/lib/registry/matchers/match-provides.js"));
__export(__webpack_require__(/*! ./match-tags */ "../search/lib/registry/matchers/match-tags.js"));
__export(__webpack_require__(/*! ./match-version */ "../search/lib/registry/matchers/match-version.js"));


/***/ }),

/***/ "../search/lib/registry/registry.js":
/*!******************************************!*\
  !*** ../search/lib/registry/registry.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const M = __webpack_require__(/*! ./matchers */ "../search/lib/registry/matchers/index.js");
function create(items) {
    return {
        search(term) {
            const matcher = M.get(term.field, term.value, term);
            return items
                .filter(item => typeof item.manifest === "object")
                .filter(item => (term.negated ? !matcher(item) : matcher(item)))
                .map(i => i.id);
        }
    };
}
exports.create = create;


/***/ }),

/***/ "../search/lib/search.js":
/*!*******************************!*\
  !*** ../search/lib/search.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Fuse = __webpack_require__(/*! fuse.js */ "../search/node_modules/fuse.js/dist/fuse.js");
function create(items) {
    return new Fuse(items, {
        id: "id",
        keys: [
            "id",
            "contents",
            "manifest.displayName",
            "manifest.description",
            "manifest.name",
            "manifest.version",
            "manifest.tags",
            "manifest.flag"
        ]
    });
}
exports.create = create;


/***/ }),

/***/ "../search/lib/term.js":
/*!*****************************!*\
  !*** ../search/lib/term.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const OPERATORS = /([^!><^~\*\n=]+)?(?:(!)?(\*|>|<|\^|~)?(=)?)([^!><^~\n=]+)?/;
function parse(termString) {
    const found = termString.match(OPERATORS) || [];
    const [raw, field, negator, modifier, equality, value] = found;
    return {
        field,
        value,
        raw,
        operators: [modifier, equality].join(""),
        negated: negator === "!",
        greater: modifier === ">",
        lower: modifier === "<",
        matches: equality === "=" && modifier === "*",
        startsWith: equality === "=" && modifier === "^",
        includes: equality === "=" && modifier === "~",
        equals: equality === "=",
        valid: Boolean(field &&
            value &&
            (typeof modifier === "string" || typeof equality === "string"))
    };
}
exports.parse = parse;


/***/ }),

/***/ "../websocket-client/index.js":
/*!************************************!*\
  !*** ../websocket-client/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib */ "../websocket-client/lib/index.js");


/***/ }),

/***/ "../websocket-client/lib/index.js":
/*!****************************************!*\
  !*** ../websocket-client/lib/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./websocket-client */ "../websocket-client/lib/websocket-client.js"));


/***/ }),

/***/ "../websocket-client/lib/websocket-client.js":
/*!***************************************************!*\
  !*** ../websocket-client/lib/websocket-client.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = __webpack_require__(/*! events */ "../../node_modules/events/events.js");
class WebSocketClient {
    constructor({ src, reconnect, interval }) {
        this.opened = false;
        this.ended = false;
        this.ee = new events_1.EventEmitter();
        this.src = src;
        this.reconnect = reconnect;
        this.interval = interval;
    }
    exec(type, args) {
        this.ee.listeners(type).forEach(l => l(...args));
    }
    open() {
        const open = () => {
            this.instance = new WebSocket(this.src);
            // Make Chrome behave and close the websocket connection
            // before unloading the browsing context. Ref: https://github.com/websockets/ws/issues/1256
            window.addEventListener("beforeunload", this.close);
            this.instance.addEventListener("open", (...args) => {
                this.opened = true;
                this.exec("open", args);
            });
            this.instance.addEventListener("close", (...args) => {
                window.removeEventListener("beforeunload", this.close);
                this.opened = false;
                this.exec("close", args);
            });
            this.instance.addEventListener("error", (...args) => {
                window.removeEventListener("beforeunload", this.close);
                this.opened = false;
                this.exec("error", args);
            });
            this.instance.addEventListener("message", (...args) => {
                this.exec("message", args);
            });
        };
        open();
        if (this.reconnect) {
            this.loop = setInterval(() => {
                if (this.ended || this.opened) {
                    return;
                }
                open();
            }, this.interval);
        }
    }
    close() {
        this.ended = true;
        if (this.opened) {
            this.instance.close();
        }
    }
    onOpen(handler) {
        this.ee.on("open", handler);
    }
    onClose(handler) {
        this.ee.on("close", handler);
        this.instance.addEventListener("close", handler);
    }
    onError(handler) {
        this.ee.on("error", handler);
        this.instance.addEventListener("error", handler);
    }
    onMessage(handler) {
        this.ee.on("message", handler);
        this.instance.addEventListener("message", handler);
    }
}
exports.WebSocketClient = WebSocketClient;


/***/ }),

/***/ "./src/app/actions/activate-node.js":
/*!******************************************!*\
  !*** ./src/app/actions/activate-node.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! ./ */ "./src/app/actions/index.js");
exports.default = activateNode;
exports.type = "ACTIVATE_NODE";
function activateNode(id) {
    return dispatch => {
        dispatch(_1.patchLocation({
            query: {
                "active-node": id
            }
        }));
    };
}
activateNode.key = "";
activateNode.property = "";
activateNode.type = exports.type;


/***/ }),

/***/ "./src/app/actions/apply-state.js":
/*!****************************************!*\
  !*** ./src/app/actions/apply-state.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = applyState;
exports.type = "@@APPLY_STATE";
function applyState(payload) {
    return {
        type: exports.type,
        payload
    };
}


/***/ }),

/***/ "./src/app/actions/arrow.js":
/*!**********************************!*\
  !*** ./src/app/actions/arrow.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_redux_1 = __webpack_require__(/*! react-router-redux */ "../../node_modules/react-router-redux/lib/index.js");
const toggle_navigation_1 = __importDefault(__webpack_require__(/*! ./toggle-navigation */ "./src/app/actions/toggle-navigation.js"));
const pool_1 = __webpack_require__(/*! ../selectors/pool */ "./src/app/selectors/pool.js");
exports.default = arrow;
exports.type = "ARROW";
const OFFSETS = {
    up: -1,
    down: 1,
    default: 0
};
function arrow(payload) {
    return (dispatch, getState) => {
        const state = getState();
        // Is handled locally
        if (state.searchEnabled) {
            return;
        }
        switch (payload) {
            case "right": {
                if (state.navigationEnabled) {
                    return dispatch(toggle_navigation_1.default());
                }
                return;
            }
            case "left": {
                if (!state.navigationEnabled) {
                    return dispatch(toggle_navigation_1.default());
                }
                return;
            }
            case "up":
            case "down":
            default: {
                if (!state.navigationEnabled) {
                    return;
                }
                const offset = payload in OFFSETS ? OFFSETS[payload] : OFFSETS.default;
                const pool = pool_1.flat(state);
                const index = pool.findIndex((item) => `${item.contentType}/${item.id}` === state.id || state.id === '/' && item.id === '/root');
                const next = pool[index + offset];
                if (next) {
                    go(dispatch)(next.href);
                }
            }
        }
    };
}
function go(dispatch) {
    return next => dispatch(react_router_redux_1.push(next));
}


/***/ }),

/***/ "./src/app/actions/change-concern.js":
/*!*******************************************!*\
  !*** ./src/app/actions/change-concern.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(__webpack_require__(/*! path */ "../../node_modules/path-browserify/index.js"));
const url_query_1 = __importDefault(__webpack_require__(/*! ../utils/url-query */ "./src/app/utils/url-query.js"));
const _1 = __webpack_require__(/*! ./ */ "./src/app/actions/index.js");
exports.default = changeConcern;
exports.type = "CHANGE_CONCERN";
function changeConcern(concern) {
    return (dispatch, getState) => {
        const state = getState();
        const location = state.routing.locationBeforeTransitions;
        const parsed = url_query_1.default.parse(location.query.source);
        const previous = parsed.pathname;
        const ext = path_1.default.extname(previous);
        const hasDemo = state.pattern.files.some(file => {
            return file.concern === "demo" && file.type === ext.slice(1);
        });
        const type = concern === "index" && hasDemo ? "source" : parsed.query.type;
        const source = url_query_1.default.format({
            pathname: `${path_1.default.dirname(previous)}/${concern}${ext}`,
            query: Object.assign({}, parsed.query, { type })
        });
        dispatch(_1.patchLocation({
            query: {
                source
            }
        }));
    };
}
changeConcern.type = exports.type;


/***/ }),

/***/ "./src/app/actions/change-type.js":
/*!****************************************!*\
  !*** ./src/app/actions/change-type.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(__webpack_require__(/*! assert */ "../../node_modules/assert/assert.js"));
const lodash_1 = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
const url_query_1 = __importDefault(__webpack_require__(/*! ../utils/url-query */ "./src/app/utils/url-query.js"));
const _1 = __webpack_require__(/*! ./ */ "./src/app/actions/index.js");
exports.default = changeType;
exports.type = "CHANGE_TYPE";
function changeType(input) {
    assert_1.default.equal(typeof input, "string", "input for changeType action must be of type string");
    return (dispatch, getState) => {
        const location = getState().routing.locationBeforeTransitions;
        const parsed = url_query_1.default.parse(location.query.source || "");
        const type = lodash_1.includes(["source", "transformed"], input) ? input : "source";
        const query = { type };
        const source = url_query_1.default.format(lodash_1.merge({}, parsed, { query }));
        dispatch(_1.patchLocation({ query: { source } }));
    };
}
changeType.type = exports.type;


/***/ }),

/***/ "./src/app/actions/close-all-the-things.js":
/*!*************************************************!*\
  !*** ./src/app/actions/close-all-the-things.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! ./ */ "./src/app/actions/index.js");
exports.default = closeAllTheThings;
exports.type = "CLOSE_ALL_THE_THINGS";
function closeAllTheThings() {
    return dispatch => {
        dispatch(_1.dismissAllMessages());
        dispatch(_1.patchLocation({
            query: {
                issue: null,
                lightbox: null,
                "menu-enabled": null,
                "network-enabled": null,
                "search-enabled": null,
                source: null,
                "source-expanded": null
            }
        }));
    };
}
closeAllTheThings.type = exports.type;


/***/ }),

/***/ "./src/app/actions/demo-content-resize.js":
/*!************************************************!*\
  !*** ./src/app/actions/demo-content-resize.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const redux_actions_1 = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");
exports.default = redux_actions_1.createAction("DEMO_CONTENT_RESIZE", ({ width, height }) => ({
    width,
    height
}));


/***/ }),

/***/ "./src/app/actions/dismiss-all-messages.js":
/*!*************************************************!*\
  !*** ./src/app/actions/dismiss-all-messages.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const redux_actions_1 = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");
exports.default = redux_actions_1.createAction("DISMISS_ALL_MESSAGES");


/***/ }),

/***/ "./src/app/actions/dismiss-message.js":
/*!********************************************!*\
  !*** ./src/app/actions/dismiss-message.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const redux_actions_1 = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");
exports.default = redux_actions_1.createAction("DISMISS_MESSAGE");


/***/ }),

/***/ "./src/app/actions/handle-dependent-actions.js":
/*!*****************************************************!*\
  !*** ./src/app/actions/handle-dependent-actions.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(__webpack_require__(/*! assert */ "../../node_modules/assert/assert.js"));
const redux_actions_1 = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");
const lodash_1 = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
exports.default = handleDependentActions;
function partialReduce(deps) {
    return handlers => {
        return lodash_1.entries(handlers).reduce((registry, entry) => {
            const [name, fn] = entry;
            registry[name] = (state, action) => {
                return fn(state, action, deps);
            };
            return registry;
        }, {});
    };
}
function handleDependentActions(actionHandlers, options) {
    assert_1.default.ok(Array.isArray(options.dependencies), "options.dependencies must be an array");
    const handler = (...args) => {
        const [, , dependencies = {}] = args;
        if (Object.keys(dependencies).length > 0) {
            const missing = options.dependencies.filter(dependency => !(dependency in dependencies));
            assert_1.default.ok(missing.length === 0, `dependencies for ${Object.keys(actionHandlers).join(", ")} must be present in state. missing: ${missing.join(",")}. available: ${Object.keys(dependencies)}`);
        }
        const deps = lodash_1.pick(dependencies, options.dependencies);
        const handlers = partialReduce(deps)(actionHandlers);
        const reducer = redux_actions_1.handleActions(handlers, options.defaultValue);
        return reducer(...args);
    };
    handler.dependencies = options.dependencies;
    return handler;
}


/***/ }),

/***/ "./src/app/actions/index.js":
/*!**********************************!*\
  !*** ./src/app/actions/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const activate_node_1 = __importDefault(__webpack_require__(/*! ./activate-node */ "./src/app/actions/activate-node.js"));
exports.activateNode = activate_node_1.default;
const apply_state_1 = __importDefault(__webpack_require__(/*! ./apply-state */ "./src/app/actions/apply-state.js"));
exports.applyState = apply_state_1.default;
const arrow_1 = __importDefault(__webpack_require__(/*! ./arrow */ "./src/app/actions/arrow.js"));
exports.arrow = arrow_1.default;
const change_concern_1 = __importDefault(__webpack_require__(/*! ./change-concern */ "./src/app/actions/change-concern.js"));
exports.changeConcern = change_concern_1.default;
const change_type_1 = __importDefault(__webpack_require__(/*! ./change-type */ "./src/app/actions/change-type.js"));
exports.changeType = change_type_1.default;
const close_all_the_things_1 = __importDefault(__webpack_require__(/*! ./close-all-the-things */ "./src/app/actions/close-all-the-things.js"));
exports.closeAllTheThings = close_all_the_things_1.default;
const demo_content_resize_1 = __importDefault(__webpack_require__(/*! ./demo-content-resize */ "./src/app/actions/demo-content-resize.js"));
exports.demoContentResize = demo_content_resize_1.default;
const dismiss_all_messages_1 = __importDefault(__webpack_require__(/*! ./dismiss-all-messages */ "./src/app/actions/dismiss-all-messages.js"));
exports.dismissAllMessages = dismiss_all_messages_1.default;
const dismiss_message_1 = __importDefault(__webpack_require__(/*! ./dismiss-message */ "./src/app/actions/dismiss-message.js"));
exports.dismissMessage = dismiss_message_1.default;
const listen_1 = __importDefault(__webpack_require__(/*! ./listen */ "./src/app/actions/listen.js"));
exports.listen = listen_1.default;
const load_pattern_demo_1 = __importDefault(__webpack_require__(/*! ./load-pattern-demo */ "./src/app/actions/load-pattern-demo.js"));
exports.loadPatternDemo = load_pattern_demo_1.default;
const load_schema_1 = __importDefault(__webpack_require__(/*! ./load-schema */ "./src/app/actions/load-schema.js"));
exports.loadSchema = load_schema_1.default;
const open_documentation_1 = __importDefault(__webpack_require__(/*! ./open-documentation */ "./src/app/actions/open-documentation.js"));
exports.openDocumentation = open_documentation_1.default;
const open_fullscreen_1 = __importDefault(__webpack_require__(/*! ./open-fullscreen */ "./src/app/actions/open-fullscreen.js"));
exports.openFullscreen = open_fullscreen_1.default;
const patch_location_1 = __importDefault(__webpack_require__(/*! ./patch-location */ "./src/app/actions/patch-location.js"));
exports.patchLocation = patch_location_1.default;
const reload_1 = __importDefault(__webpack_require__(/*! ./reload */ "./src/app/actions/reload.js"));
exports.reload = reload_1.default;
const resize_demo_1 = __importDefault(__webpack_require__(/*! ./resize-demo */ "./src/app/actions/resize-demo.js"));
exports.resizeDemo = resize_demo_1.default;
const scroll_demo_1 = __importDefault(__webpack_require__(/*! ./scroll-demo */ "./src/app/actions/scroll-demo.js"));
exports.scrollDemo = scroll_demo_1.default;
const scroll_to_1 = __importDefault(__webpack_require__(/*! ./scroll-to */ "./src/app/actions/scroll-to.js"));
exports.scrollTo = scroll_to_1.default;
const search_1 = __importDefault(__webpack_require__(/*! ./search */ "./src/app/actions/search.js"));
exports.search = search_1.default;
const search_preview_1 = __importDefault(__webpack_require__(/*! ./search-preview */ "./src/app/actions/search-preview.js"));
exports.searchPreview = search_preview_1.default;
const theme_loaded_1 = __importDefault(__webpack_require__(/*! ./theme-loaded */ "./src/app/actions/theme-loaded.js"));
exports.themeLoaded = theme_loaded_1.default;
const toggle_code_1 = __importDefault(__webpack_require__(/*! ./toggle-code */ "./src/app/actions/toggle-code.js"));
exports.toggleCode = toggle_code_1.default;
const toggle_console_1 = __importDefault(__webpack_require__(/*! ./toggle-console */ "./src/app/actions/toggle-console.js"));
exports.toggleConsole = toggle_console_1.default;
const toggle_dependencies_1 = __importDefault(__webpack_require__(/*! ./toggle-dependencies */ "./src/app/actions/toggle-dependencies.js"));
exports.toggleDependencies = toggle_dependencies_1.default;
const toggle_dependents_1 = __importDefault(__webpack_require__(/*! ./toggle-dependents */ "./src/app/actions/toggle-dependents.js"));
exports.toggleDependents = toggle_dependents_1.default;
const toggle_doc_1 = __importDefault(__webpack_require__(/*! ./toggle-doc */ "./src/app/actions/toggle-doc.js"));
exports.toggleDoc = toggle_doc_1.default;
const toggle_hide_1 = __importDefault(__webpack_require__(/*! ./toggle-hide */ "./src/app/actions/toggle-hide.js"));
exports.toggleHide = toggle_hide_1.default;
const toggle_info_1 = __importDefault(__webpack_require__(/*! ./toggle-info */ "./src/app/actions/toggle-info.js"));
exports.toggleInfo = toggle_info_1.default;
const toggle_keyboard_shortcuts_1 = __importDefault(__webpack_require__(/*! ./toggle-keyboard-shortcuts */ "./src/app/actions/toggle-keyboard-shortcuts.js"));
exports.toggleKeyboardShortcuts = toggle_keyboard_shortcuts_1.default;
const toggle_manifest_1 = __importDefault(__webpack_require__(/*! ./toggle-manifest */ "./src/app/actions/toggle-manifest.js"));
exports.toggleManifest = toggle_manifest_1.default;
const toggle_navigation_1 = __importDefault(__webpack_require__(/*! ./toggle-navigation */ "./src/app/actions/toggle-navigation.js"));
exports.toggleNavigation = toggle_navigation_1.default;
const toggle_network_1 = __importDefault(__webpack_require__(/*! ./toggle-network */ "./src/app/actions/toggle-network.js"));
exports.toggleNetwork = toggle_network_1.default;
const toggle_opacity_1 = __importDefault(__webpack_require__(/*! ./toggle-opacity */ "./src/app/actions/toggle-opacity.js"));
exports.toggleOpacity = toggle_opacity_1.default;
const toggle_components_enabled_1 = __importDefault(__webpack_require__(/*! ./toggle-components-enabled */ "./src/app/actions/toggle-components-enabled.js"));
exports.toggleComponentsEnabled = toggle_components_enabled_1.default;
const toggle_rulers_1 = __importDefault(__webpack_require__(/*! ./toggle-rulers */ "./src/app/actions/toggle-rulers.js"));
exports.toggleRulers = toggle_rulers_1.default;
const toggle_search_1 = __importDefault(__webpack_require__(/*! ./toggle-search */ "./src/app/actions/toggle-search.js"));
exports.toggleSearch = toggle_search_1.default;
const toggle_theme_1 = __importDefault(__webpack_require__(/*! ./toggle-theme */ "./src/app/actions/toggle-theme.js"));
exports.toggleTheme = toggle_theme_1.default;
const window_resize_1 = __importDefault(__webpack_require__(/*! ./window-resize */ "./src/app/actions/window-resize.js"));
exports.windowResize = window_resize_1.default;


/***/ }),

/***/ "./src/app/actions/listen.js":
/*!***********************************!*\
  !*** ./src/app/actions/listen.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = __importDefault(__webpack_require__(/*! url */ "../../node_modules/url/url.js"));
const websocket_client_1 = __webpack_require__(/*! @patternplate/websocket-client */ "../websocket-client/index.js");
const arson_1 = __importDefault(__webpack_require__(/*! arson */ "../../node_modules/arson/index.js"));
const promise_thunk_action_1 = __webpack_require__(/*! ./promise-thunk-action */ "./src/app/actions/promise-thunk-action.js");
const load_pattern_demo_1 = __importDefault(__webpack_require__(/*! ./load-pattern-demo */ "./src/app/actions/load-pattern-demo.js"));
const load_schema_1 = __importDefault(__webpack_require__(/*! ./load-schema */ "./src/app/actions/load-schema.js"));
const _1 = __webpack_require__(/*! ./ */ "./src/app/actions/index.js");
exports.default = promise_thunk_action_1.createPromiseThunkAction("LISTEN", (payload, dispatch, getState) => {
    const { WebSocket } = global;
    if (!WebSocket) {
        return;
    }
    const state = getState();
    window.addEventListener("message", envelope => {
        if (typeof envelope.data !== "string") {
            return;
        }
        if (envelope.data.indexOf("[iFrameSizer]") === 0) {
            return;
        }
        const message = safeParse(envelope.data);
        if (message.type === "navigate") {
            dispatch(_1.patchLocation({
                pathname: [message.itemType, message.id].join("/")
            }));
        }
    });
    if (state.isStatic) {
        return;
    }
    const source = url_1.default.resolve(state.base, payload.url);
    const ws = new websocket_client_1.WebSocketClient({
        src: `ws://${global.location.host}${source}/`,
        reconnect: true,
        interval: 1000
    });
    ws.open();
    ws.onOpen(() => dispatch({ type: "LISTEN_HEARTBEAT", payload: {} }));
    ws.onClose(() => dispatch({ type: "ERROR_HEARTBEAT", payload: {} }));
    ws.onError(() => dispatch({ type: "ERROR_HEARTBEAT", payload: {} }));
    ws.onMessage((envelope) => __awaiter(this, void 0, void 0, function* () {
        const message = arson_1.default.parse(envelope.data);
        const { type, payload } = message;
        switch (type) {
            case "error":
                return dispatch({
                    type: "ERROR_HEARTBEAT",
                    payload
                });
            case "start": {
                dispatch(load_schema_1.default());
                // TODO: only reload pattern if the current pattern is affected
                return dispatch(load_pattern_demo_1.default({ force: false }));
            }
            case "done": {
                return dispatch({
                    type: "LISTEN_HEARTBEAT",
                    payload: {}
                });
            }
            case "change": {
                return dispatch(load_schema_1.default());
            }
            default: {
                throw new TypeError(`Received unknown message of type ${type}`);
            }
        }
    }));
});
function safeParse(data) {
    try {
        return JSON.parse(data);
    }
    catch (err) {
        return {};
    }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/app/actions/load-pattern-demo.js":
/*!**********************************************!*\
  !*** ./src/app/actions/load-pattern-demo.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const isomorphic_fetch_1 = __importDefault(__webpack_require__(/*! isomorphic-fetch */ "../../node_modules/isomorphic-fetch/fetch-npm-browserify.js"));
const demo = __importStar(__webpack_require__(/*! ../selectors/demo */ "./src/app/selectors/demo.js"));
exports.default = (payload) => {
    return (dispatch, getState) => __awaiter(this, void 0, void 0, function* () {
        const getSrc = src(getState);
        const uri = getSrc();
        if (!uri) {
            return;
        }
        dispatch({
            type: "LOAD_PATTERN_DEMO_START",
            payload: { id: uri }
        });
        const response = yield isomorphic_fetch_1.default(uri, {
            headers: { Accept: "text/html" }
        });
        // Bail if the src changed in the meantime
        if (uri !== getSrc()) {
            return;
        }
        const body = yield response.text();
        // Bail if the src changed in the meantime
        if (uri !== getSrc()) {
            return;
        }
        if (response.status >= 400) {
            return dispatch({
                type: "LOAD_PATTERN_DEMO_ERROR",
                payload: { id: uri, error: body }
            });
        }
        dispatch({
            type: "LOAD_PATTERN_DEMO_SUCCESS",
            payload: { id: uri, contents: body, force: payload.force }
        });
    });
};
function src(getState) {
    return () => demo.selectSrc(getState());
}


/***/ }),

/***/ "./src/app/actions/load-schema.js":
/*!****************************************!*\
  !*** ./src/app/actions/load-schema.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_thunk_action_1 = __webpack_require__(/*! ./promise-thunk-action */ "./src/app/actions/promise-thunk-action.js");
const fetch_1 = __importDefault(__webpack_require__(/*! ../utils/fetch */ "./src/app/utils/fetch.js"));
exports.default = promise_thunk_action_1.createPromiseThunkAction("LOAD_SCHEMA", (_, __, getState) => __awaiter(this, void 0, void 0, function* () {
    const response = yield fetch_1.default(`${prefix(getState().base)}/api/state.json`);
    return response.json();
}));
function prefix(base) {
    return base.charAt(base.length - 1) === "/"
        ? base.slice(0, base.length - 1)
        : base;
}


/***/ }),

/***/ "./src/app/actions/open-documentation.js":
/*!***********************************************!*\
  !*** ./src/app/actions/open-documentation.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! ./ */ "./src/app/actions/index.js");
exports.default = openDocumentation;
exports.type = "OPEN_DOCUMENTATION";
function openDocumentation() {
    return (dispatch, getState) => {
        const state = getState();
        const pathname = state.base;
        dispatch(_1.patchLocation({ pathname }));
    };
}
openDocumentation.key = "";
openDocumentation.property = "";
openDocumentation.type = exports.type;


/***/ }),

/***/ "./src/app/actions/open-fullscreen.js":
/*!********************************************!*\
  !*** ./src/app/actions/open-fullscreen.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_query_1 = __importDefault(__webpack_require__(/*! ../utils/url-query */ "./src/app/utils/url-query.js"));
const item_1 = __webpack_require__(/*! ../selectors/item */ "./src/app/selectors/item.js");
exports.default = openFullscreen;
exports.type = "OPEN_FULLSCREEN";
function openFullscreen() {
    return (dispatch, getState) => {
        if (!global.open) {
            return;
        }
        const state = getState();
        const contentType = item_1.selectContentType(state);
        if (contentType !== "pattern") {
            return;
        }
        const id = item_1.selectId(state);
        if (!id) {
            return;
        }
        const href = url_query_1.default.format({
            pathname: `${state.base}api/demo/${id}.html`
        });
        global.open(href, "_blank");
    };
}
openFullscreen.key = "";
openFullscreen.property = "";
openFullscreen.type = exports.type;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/app/actions/patch-location.js":
/*!*******************************************!*\
  !*** ./src/app/actions/patch-location.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
const react_router_redux_1 = __webpack_require__(/*! react-router-redux */ "../../node_modules/react-router-redux/lib/index.js");
exports.default = patchLocation;
exports.type = "PATCH_LOCATION";
function patchLocation(payload) {
    return (dispatch, getState) => {
        const state = getState();
        const location = state.routing.locationBeforeTransitions;
        if (payload.hasOwnProperty("pathname")) {
            payload.pathname = payload.pathname.indexOf(state.base) === 0
                ? payload.pathname
                : `${prefix(state.base)}/${payload.pathname}`;
        }
        dispatch(react_router_redux_1.push(lodash_1.merge({}, location, payload)));
    };
}
patchLocation.type = exports.type;
function prefix(base) {
    return base.charAt(base.length - 1) === "/"
        ? base.slice(0, base.length - 1)
        : base;
}


/***/ }),

/***/ "./src/app/actions/promise-thunk-action.js":
/*!*************************************************!*\
  !*** ./src/app/actions/promise-thunk-action.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_actions_1 = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");
const handle_dependent_actions_1 = __importDefault(__webpack_require__(/*! ./handle-dependent-actions */ "./src/app/actions/handle-dependent-actions.js"));
const ident = i => i;
const asyncIdent = (i) => __awaiter(this, void 0, void 0, function* () { return i; });
function createPromiseThunkAction(name, rawCreator) {
    const creator = rawCreator || asyncIdent;
    const fn = payload => {
        const delayedAction = redux_actions_1.createAction(`${name}_DELAYED`);
        const successAction = redux_actions_1.createAction(`${name}_SUCCESS`);
        const startAction = redux_actions_1.createAction(`${name}_START`);
        const throwsAction = redux_actions_1.createAction(`${name}_THROWS`);
        return (dispatch, getState) => __awaiter(this, void 0, void 0, function* () {
            dispatch(startAction(payload, ident, getState));
            const delayedTimer = global.setTimeout(() => {
                dispatch(delayedAction(payload, ident, getState));
            }, 1000);
            try {
                const result = yield Promise.resolve(creator(payload, dispatch, getState));
                global.clearTimeout(delayedTimer);
                dispatch(successAction(result));
                return result;
            }
            catch (error) {
                console.error(error);
                global.clearTimeout(delayedTimer);
                dispatch(throwsAction(error));
                return error;
            }
        });
    };
    fn.__name = name;
    return fn;
}
exports.createPromiseThunkAction = createPromiseThunkAction;
function handlePromiseThunkAction(rawName, handler, options = {}) {
    const name = rawName.__name || rawName;
    options.dependencies = options.dependencies || [];
    const reducer = handle_dependent_actions_1.default({
        [`${name}_START`]: handler.start || ident,
        [`${name}_DELAYED`]: handler.delayed || ident,
        [`${name}_SUCCESS`]: handler.success || ident,
        [`${name}_THROWS`]: handler.throws || ident
    }, options);
    return reducer;
}
exports.handlePromiseThunkAction = handlePromiseThunkAction;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/app/actions/reload.js":
/*!***********************************!*\
  !*** ./src/app/actions/reload.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! ./ */ "./src/app/actions/index.js");
exports.default = reload;
function reload() {
    return (dispatch) => __awaiter(this, void 0, void 0, function* () {
        const actions = [
            () => __awaiter(this, void 0, void 0, function* () { return dispatch(yield Promise.resolve(_1.loadSchema())); }),
            _1.loadPatternDemo({ force: true })
        ];
        yield Promise.all(actions.map(dispatch));
    });
}
reload.type = "RELOAD";
reload.key = "";
reload.property = "";


/***/ }),

/***/ "./src/app/actions/resize-demo.js":
/*!****************************************!*\
  !*** ./src/app/actions/resize-demo.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! ./ */ "./src/app/actions/index.js");
exports.default = resizeDemo;
exports.type = "RESIZE_DEMO";
function resizeDemo(payload) {
    return dispatch => {
        dispatch(_1.patchLocation({
            query: {
                width: payload.x,
                height: payload.y
            }
        }));
    };
}
resizeDemo.type = exports.type;


/***/ }),

/***/ "./src/app/actions/scroll-demo.js":
/*!****************************************!*\
  !*** ./src/app/actions/scroll-demo.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = scrollDemo;
exports.type = "SCROLL_DEMO";
let loop;
let frame;
function scrollDemo(payload) {
    return (dispatch, getState) => {
        function run() {
            loop = global.requestAnimationFrame(() => {
                const state = getState();
                if (state.scrollDemoX.x !== frame.x) {
                    dispatch({
                        type: "SCROLL_DEMO_X",
                        payload: frame.x
                    });
                }
                if (state.scrollDemoY.y !== frame.y) {
                    dispatch({
                        type: "SCROLL_DEMO_Y",
                        payload: frame.y
                    });
                }
                run();
            });
        }
        if (!loop) {
            run();
        }
        frame = payload;
    };
}
scrollDemo.type = exports.type;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/app/actions/scroll-to.js":
/*!**************************************!*\
  !*** ./src/app/actions/scroll-to.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const scrollparent_1 = __importDefault(__webpack_require__(/*! scrollparent */ "../../node_modules/scrollparent/scrollparent.js"));
exports.default = scrollTo;
exports.type = "SCROLL_TO";
const NOOP = () => { };
function scrollTo(to) {
    const { document } = global;
    if (!document) {
        return NOOP;
    }
    const target = getTarget(to);
    if (!target) {
        return NOOP;
    }
    const parent = scrollparent_1.default(target);
    if (!parent) {
        return NOOP;
    }
    parent.scrollTop = target.offsetParent.offsetTop;
    return dispatch => {
        dispatch({
            type: "SCROLLED_TO",
            payload: to
        });
    };
}
function getTarget(to) {
    if (typeof to === "string") {
        return document.getElementById(to);
    }
    return to;
}
scrollTo.type = exports.type;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/app/actions/search-preview.js":
/*!*******************************************!*\
  !*** ./src/app/actions/search-preview.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! ./ */ "./src/app/actions/index.js");
exports.default = searchPreview;
exports.type = "SEARCH_PREVIEW";
const MOVEMENTS = {
    up: -1,
    down: 1
};
function searchPreview(payload) {
    if (typeof payload === "number") {
        return dispatch => {
            dispatch(_1.patchLocation({
                query: {
                    "search-preview": payload
                }
            }));
        };
    }
    return (dispatch, getState) => {
        const state = getState();
        const delta = MOVEMENTS[payload] || 0;
        dispatch(_1.patchLocation({
            query: {
                "search-preview": state.searchPreview + delta
            }
        }));
    };
}
searchPreview.type = exports.type;


/***/ }),

/***/ "./src/app/actions/search.js":
/*!***********************************!*\
  !*** ./src/app/actions/search.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const raf_1 = __importDefault(__webpack_require__(/*! raf */ "../../node_modules/raf/index.js"));
const _1 = __webpack_require__(/*! ./ */ "./src/app/actions/index.js");
exports.default = search;
exports.type = "SEARCH";
function search(payload) {
    return (dispatch, getState) => {
        const state = getState();
        dispatch({
            type: "SET_SEARCH",
            payload: payload.value
        });
        raf_1.default(() => {
            if (payload.persist) {
                dispatch(_1.patchLocation({
                    query: {
                        search: payload.value,
                        "search-preview": state.search === payload.value ? state.searchPreview : 0
                    }
                }));
            }
            else if (payload.perform) {
                dispatch({
                    type: "PERFORM_SEARCH",
                    payload: payload.value
                });
            }
        });
    };
}
search.type = exports.type;


/***/ }),

/***/ "./src/app/actions/theme-loaded.js":
/*!*****************************************!*\
  !*** ./src/app/actions/theme-loaded.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const redux_actions_1 = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");
exports.default = redux_actions_1.createAction("THEME_LOADED");


/***/ }),

/***/ "./src/app/actions/toggle-code.js":
/*!****************************************!*\
  !*** ./src/app/actions/toggle-code.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const toggle_1 = __webpack_require__(/*! ./toggle */ "./src/app/actions/toggle.js");
exports.default = toggle_1.toggle("code-enabled");


/***/ }),

/***/ "./src/app/actions/toggle-components-enabled.js":
/*!******************************************************!*\
  !*** ./src/app/actions/toggle-components-enabled.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const toggle_1 = __webpack_require__(/*! ./toggle */ "./src/app/actions/toggle.js");
exports.default = toggle_1.toggle("components-enabled");


/***/ }),

/***/ "./src/app/actions/toggle-console.js":
/*!*******************************************!*\
  !*** ./src/app/actions/toggle-console.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const toggle_1 = __webpack_require__(/*! ./toggle */ "./src/app/actions/toggle.js");
exports.default = toggle_1.toggle("console-enabled");


/***/ }),

/***/ "./src/app/actions/toggle-dependencies.js":
/*!************************************************!*\
  !*** ./src/app/actions/toggle-dependencies.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const toggle_1 = __webpack_require__(/*! ./toggle */ "./src/app/actions/toggle.js");
exports.default = toggle_1.toggle("dependencies-enabled");


/***/ }),

/***/ "./src/app/actions/toggle-dependents.js":
/*!**********************************************!*\
  !*** ./src/app/actions/toggle-dependents.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const toggle_1 = __webpack_require__(/*! ./toggle */ "./src/app/actions/toggle.js");
exports.default = toggle_1.toggle("dependents-enabled");


/***/ }),

/***/ "./src/app/actions/toggle-doc.js":
/*!***************************************!*\
  !*** ./src/app/actions/toggle-doc.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const toggle_1 = __webpack_require__(/*! ./toggle */ "./src/app/actions/toggle.js");
exports.default = toggle_1.toggle("doc-enabled");


/***/ }),

/***/ "./src/app/actions/toggle-hide.js":
/*!****************************************!*\
  !*** ./src/app/actions/toggle-hide.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const toggle_1 = __webpack_require__(/*! ./toggle */ "./src/app/actions/toggle.js");
exports.default = toggle_1.toggle("hide-enabled");


/***/ }),

/***/ "./src/app/actions/toggle-info.js":
/*!****************************************!*\
  !*** ./src/app/actions/toggle-info.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const toggle_1 = __webpack_require__(/*! ./toggle */ "./src/app/actions/toggle.js");
exports.default = toggle_1.toggle("info-enabled");


/***/ }),

/***/ "./src/app/actions/toggle-keyboard-shortcuts.js":
/*!******************************************************!*\
  !*** ./src/app/actions/toggle-keyboard-shortcuts.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const toggle_1 = __webpack_require__(/*! ./toggle */ "./src/app/actions/toggle.js");
exports.default = toggle_1.toggle("shortcuts");


/***/ }),

/***/ "./src/app/actions/toggle-manifest.js":
/*!********************************************!*\
  !*** ./src/app/actions/toggle-manifest.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const toggle_1 = __webpack_require__(/*! ./toggle */ "./src/app/actions/toggle.js");
exports.default = toggle_1.toggle("manifest-enabled");


/***/ }),

/***/ "./src/app/actions/toggle-navigation.js":
/*!**********************************************!*\
  !*** ./src/app/actions/toggle-navigation.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const toggle_1 = __webpack_require__(/*! ./toggle */ "./src/app/actions/toggle.js");
exports.default = toggle_1.toggle("navigation-enabled");


/***/ }),

/***/ "./src/app/actions/toggle-network.js":
/*!*******************************************!*\
  !*** ./src/app/actions/toggle-network.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const toggle_1 = __webpack_require__(/*! ./toggle */ "./src/app/actions/toggle.js");
exports.default = toggle_1.toggle("network-enabled");


/***/ }),

/***/ "./src/app/actions/toggle-opacity.js":
/*!*******************************************!*\
  !*** ./src/app/actions/toggle-opacity.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const toggle_1 = __webpack_require__(/*! ./toggle */ "./src/app/actions/toggle.js");
exports.default = toggle_1.toggle("opacity");


/***/ }),

/***/ "./src/app/actions/toggle-rulers.js":
/*!******************************************!*\
  !*** ./src/app/actions/toggle-rulers.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const toggle_1 = __webpack_require__(/*! ./toggle */ "./src/app/actions/toggle.js");
exports.default = toggle_1.toggle("rulers");


/***/ }),

/***/ "./src/app/actions/toggle-search.js":
/*!******************************************!*\
  !*** ./src/app/actions/toggle-search.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! ./ */ "./src/app/actions/index.js");
exports.default = toggleSearch;
exports.type = "TOGGLE_SEARCH_ENABLED";
function toggleSearch(payload = {}) {
    return (dispatch, getState) => {
        const state = getState();
        if (payload.sync) {
            focus(state.searchEnabled);
            return;
        }
        const next = "focus" in payload ? payload.focus : !state.searchEnabled;
        if (!next) {
            dispatch(_1.search({ persist: true, value: value() }));
        }
        dispatch(_1.patchLocation({ query: { "search-enabled": next, "search-preview": 0 } }));
    };
}
toggleSearch.type = exports.type;
toggleSearch.key = "search-enabled";
toggleSearch.property = "searchEnabled";
function focus(next) {
    if (!next) {
        return;
    }
    if (!("document" in global)) {
        return;
    }
    setTimeout(() => {
        const el = global.document.querySelector("input[data-search]");
        if (!el) {
            return;
        }
        if (global.document.activeElement !== el) {
            el.focus();
        }
        const range = el.value.length;
        el.setSelectionRange(range, range);
    }, 100);
}
function value() {
    if (!("document" in global)) {
        return;
    }
    const el = global.document.querySelector("input[data-search]");
    if (!el) {
        return;
    }
    return el.value;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/app/actions/toggle-theme.js":
/*!*****************************************!*\
  !*** ./src/app/actions/toggle-theme.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! ./ */ "./src/app/actions/index.js");
exports.default = toggleTheme;
exports.type = "TOGGLE_THEME";
function toggleTheme(forced) {
    return (dispatch, getState) => {
        const theme = forced
            ? forced
            : getState().theme === "dark" ? "light" : "dark";
        dispatch(_1.patchLocation({
            query: {
                theme
            }
        }));
    };
}
toggleTheme.type = exports.type;


/***/ }),

/***/ "./src/app/actions/toggle.js":
/*!***********************************!*\
  !*** ./src/app/actions/toggle.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
const _1 = __webpack_require__(/*! ./ */ "./src/app/actions/index.js");
function toggle(key) {
    const property = lodash_1.camelCase(key);
    const fn = (payload = {}) => {
        return (dispatch, getState) => {
            const next = "forced" in payload ? payload.forced : !getState()[property];
            dispatch(_1.patchLocation({ query: { [key]: next } }));
        };
    };
    fn.type = `TOGGLE_${lodash_1.snakeCase(key).toUpperCase()}`;
    fn.property = property;
    fn.key = key;
    return fn;
}
exports.toggle = toggle;


/***/ }),

/***/ "./src/app/actions/window-resize.js":
/*!******************************************!*\
  !*** ./src/app/actions/window-resize.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const redux_actions_1 = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");
exports.default = redux_actions_1.createAction("WINDOW_RESIZE", ({ width, height }) => ({
    width,
    height
}));


/***/ }),

/***/ "./src/app/behaviours.js":
/*!*******************************!*\
  !*** ./src/app/behaviours.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
function mountable(Component) {
    return class MountableComponent extends react_1.default.Component {
        componentDidMount() {
            if (typeof this.props.onMount === "function") {
                this.props.onMount();
            }
        }
        render() {
            const _a = this.props, { onMount } = _a, rest = __rest(_a, ["onMount"]);
            return react_1.default.createElement(Component, Object.assign({}, rest));
        }
    };
}
exports.mountable = mountable;
function skippable(Component, prop = "active") {
    return props => (props[prop] === true ? react_1.default.createElement(Component, Object.assign({}, props)) : null);
}
exports.skippable = skippable;


/***/ }),

/***/ "./src/app/client.js":
/*!***************************!*\
  !*** ./src/app/client.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const react_dom_1 = __webpack_require__(/*! react-dom */ "../../node_modules/react-dom/index.js");
const react_router_1 = __webpack_require__(/*! @marionebl/react-router */ "../../node_modules/@marionebl/react-router/lib/index.js");
const react_redux_1 = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
const react_router_redux_1 = __webpack_require__(/*! react-router-redux */ "../../node_modules/react-router-redux/lib/index.js");
const routes_1 = __importDefault(__webpack_require__(/*! ./routes */ "./src/app/routes.js"));
const store_1 = __importDefault(__webpack_require__(/*! ./store */ "./src/app/store.js"));
function default_1(data, el) {
    const store = store_1.default(react_router_1.browserHistory, data);
    window.store = store;
    const history = react_router_redux_1.syncHistoryWithStore(react_router_1.browserHistory, store);
    const router = (react_1.default.createElement(react_redux_1.Provider, { store: store },
        react_1.default.createElement(react_router_1.Router, { history: history }, routes_1.default(store))));
    return react_dom_1.hydrate(router, el);
}
exports.default = default_1;


/***/ }),

/***/ "./src/app/components/common/toggle-button.js":
/*!****************************************************!*\
  !*** ./src/app/components/common/toggle-button.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const components_1 = __webpack_require__(/*! @patternplate/components */ "../../components/legacy/index.js");
exports.default = ToggleButton;
function ToggleButton(props) {
    const title = props.title ||
        `${props.shortcut.description(props)} ${props.shortcut.toString()}`;
    if (props.active === false) {
        return (react_1.default.createElement(StandIn, { className: props.className, title: title }, props.children));
    }
    return (react_1.default.createElement(components_1.Link, { className: props.className, title: title, query: { [props.shortcut.key]: !props.enabled } }, props.children));
}
const StandIn = components_1.styled.div `
  font-size: 0;
  line-height: 0;
`;


/***/ }),

/***/ "./src/app/components/documentation.js":
/*!*********************************************!*\
  !*** ./src/app/components/documentation.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const components_1 = __webpack_require__(/*! @patternplate/components */ "../../components/legacy/index.js");
const react_dom_1 = __webpack_require__(/*! react-dom */ "../../node_modules/react-dom/index.js");
const react_helmet_1 = __importDefault(__webpack_require__(/*! react-helmet */ "../../node_modules/react-helmet/lib/Helmet.js"));
const markdown_1 = __importDefault(__webpack_require__(/*! ../containers/markdown */ "./src/app/containers/markdown.js"));
class Documentation extends react_1.default.Component {
    componentWillUpdate(nextProps) {
        const { props } = this;
        const changed = props.location.pathname !== nextProps.location.pathname;
        if (changed && typeof props.requestScroll === "function") {
            props.requestScroll(react_dom_1.findDOMNode(this.ref));
        }
    }
    render() {
        const { props } = this;
        return (react_1.default.createElement(StyledDocumentation, { ref: ref => this.ref = ref },
            react_1.default.createElement("div", { id: "doctop" }),
            react_1.default.createElement(react_helmet_1.default, { title: props.displayName }),
            react_1.default.createElement(markdown_1.default, { linkable: true, source: props.doc })));
    }
}
exports.default = Documentation;
const StyledDocumentation = components_1.styled.div `
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  max-width: 860px;
  padding: 80px 15px 15px 15px;
  @media screen and (min-width: 720px) {
    padding: 60px;
  }
`;


/***/ }),

/***/ "./src/app/components/favicon.js":
/*!***************************************!*\
  !*** ./src/app/components/favicon.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const server_1 = __webpack_require__(/*! react-dom/server */ "../../node_modules/react-dom/server.browser.js");
const react_helmet_1 = __importDefault(__webpack_require__(/*! react-helmet */ "../../node_modules/react-helmet/lib/Helmet.js"));
const components_1 = __webpack_require__(/*! @patternplate/components */ "../../components/legacy/index.js");
const platform_1 = __importDefault(__webpack_require__(/*! platform */ "../../node_modules/platform/platform.js"));
const THEMES = components_1.themes.getThemes();
const SVG_FAVICON_SUPPORT = ["Firefox"];
class FavIcon extends react_1.default.Component {
    constructor(...args) {
        super(...args);
        this.state = {};
    }
    componentDidMount() {
        if (SVG_FAVICON_SUPPORT.indexOf(platform_1.default.name) > -1) {
            return;
        }
        components_1.svg
            .png(getSource(this.props))
            .then(pngHref => this.setState({
            pngHref
        }))
            .catch(err => {
            console.error(err);
            this.setState({
                pngHref: null
            });
        });
    }
    componentWillReceiveProps(next) {
        if (SVG_FAVICON_SUPPORT.indexOf(platform_1.default.name) > -1) {
            return;
        }
        components_1.svg
            .png(getSource(next))
            .then(pngHref => this.setState({
            pngHref
        }))
            .catch(err => {
            console.error(err);
            this.setState({
                pngHref: null
            });
        });
    }
    render() {
        const source = getSource(this.props);
        const svgHref = components_1.svg.btoa(source);
        return (react_1.default.createElement(react_helmet_1.default, { link: [
                ...(this.state.pngHref ? [{ rel: "icon", href: this.state.pngHref, type: "image/png" }] : []),
                {
                    rel: "icon",
                    href: svgHref,
                    type: "image/svg+xml"
                }
            ] }));
    }
}
const StyledFavicon = components_1.styled(FavIcon) `
  width: 100%;
  height: auto;
  stroke: ${props => props.theme.colors.color};
  stroke-width: 0;
  fill: ${props => props.theme.colors.color};
`;
exports.default = props => react_1.default.createElement(StyledFavicon, Object.assign({}, props));
function getSource(props) {
    if (!props.source) {
        return server_1.renderToStaticMarkup(react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
            react_1.default.createElement(components_1.Symbol, { definition: components_1.IconDefinitions.patternplate, emit: true, style: { fill: getFill(props) } })));
    }
    const [purged] = components_1.svg.purge([components_1.svg.parse(props.source)]);
    return components_1.svg.stringify(purged);
}
function getFill(props) {
    if (props.error) {
        return THEMES.dark.error;
    }
    return THEMES.dark.active;
}


/***/ }),

/***/ "./src/app/components/indicator.js":
/*!*****************************************!*\
  !*** ./src/app/components/indicator.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const components_1 = __webpack_require__(/*! @patternplate/components */ "../../components/legacy/index.js");
exports.default = Indicator;
function Indicator(props) {
    return (react_1.default.createElement(StyledIndicator, { onClick: props.onClick, title: isValid(props.status) ? `Force sync ${props.shortcut.toString()}` : "" },
        react_1.default.createElement(StyledLabel, { size: "s", status: props.status }, getLabel(props)),
        react_1.default.createElement(StyledDot, { status: props.status })));
}
const StyledDot = components_1.styled.div `
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  height: 7.5px;
  width: 7.5px;
  margin-right: 5px;
  border-radius: 50%;
  background: ${props => props.status === "error" || props.status === "offline"
    ? "rgb(205, 63, 69)"
    : props.theme.colors.active};
  transition: background 0.4s ease-in-out, opacity 0.5s ease-in;
  opacity: ${props => (props.status ? 1 : 0)};
  cursor: ${props => (props.status ? "pointer" : "")};
  ${props => getGlow(props)};
`;
const StyledIndicator = components_1.styled.div `
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;
const StyledLabel = components_1.styled(components_1.Text) `
  position: absolute;
  right: 20px;
  color: ${props => props.theme.colors.color};
  ${props => getOut(props)};
`;
function getGlow(props) {
    return components_1.css `
		&::before {
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			height: 12px;
			width: 12px;
			filter: blur(3px);
			background: inherit;
			transform: translate(-50%, -50%);
			opacity: .6;
			${getPulse(props)};
		}
	`;
}
const out = components_1.keyframes `
	to {
		opacity: 0;
	}
`;
function getOut(props) {
    if (props.status !== "loaded") {
        return;
    }
    return components_1.css `
    animation: ${out} 1s 0.15s;
    animation-fill-mode: forwards;
  `;
}
function getLabel(props) {
    switch (props.status) {
        case "error":
            return "error";
        case "offline":
            return "offline";
        case "loaded":
            return "synced";
        case "loading":
            return "syncing";
        default:
            return "";
    }
}
const pulse = components_1.keyframes `
  from {
    opacity: .6;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(.75);
  }
  to {
    opacity: .6;
    transform: translate(-50%, -50%) scale(1);
  }
`;
function getPulse(props) {
    if (props.status !== "loading") {
        return;
    }
    return components_1.css `
    animation: ${pulse} 1s infinite;
  `;
}
function isValid(status) {
    return ["loading", "loaded"].includes(status);
}


/***/ }),

/***/ "./src/app/components/message.js":
/*!***************************************!*\
  !*** ./src/app/components/message.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const components_1 = __webpack_require__(/*! @patternplate/components */ "../../components/legacy/index.js");
exports.default = Message;
function Message(props) {
    return (react_1.default.createElement(StyledMessage, null,
        react_1.default.createElement(StyledMessageContent, null,
            props.message,
            props.details && (react_1.default.createElement(StyledDetails, null,
                props.summary && react_1.default.createElement(StyledSummary, null, props.summary),
                props.details)))));
}
const StyledMessage = components_1.styled.div `
  background: ${props => props.theme.colors.error};
  box-sizing: border-box;
  width: 100%;
  padding: 10px 20px;
`;
const StyledMessageContent = components_1.styled.pre `
  color: #fff;
  max-height: calc(100vh - 160px);
  overflow: scroll;
`;
const StyledDetails = components_1.styled.details `
  margin: 10px 0;
`;
const StyledSummary = components_1.styled.summary `
  outline: none;
  cursor: pointer;
  user-select: none;
`;


/***/ }),

/***/ "./src/app/components/pattern/index.js":
/*!*********************************************!*\
  !*** ./src/app/components/pattern/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, Buffer) {
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const react_helmet_1 = __importDefault(__webpack_require__(/*! react-helmet */ "../../node_modules/react-helmet/lib/Helmet.js"));
const components_1 = __webpack_require__(/*! @patternplate/components */ "../../components/legacy/index.js");
const tag_hoc_1 = __importDefault(__webpack_require__(/*! tag-hoc */ "../../node_modules/tag-hoc/dist/tag.js"));
const Transition_1 = __importDefault(__webpack_require__(/*! react-transition-group/Transition */ "../../node_modules/react-transition-group/Transition.js"));
const pattern_demo_1 = __importDefault(__webpack_require__(/*! ./pattern-demo */ "./src/app/components/pattern/pattern-demo.js"));
const pattern_sheet_1 = __importDefault(__webpack_require__(/*! ./pattern-sheet */ "./src/app/components/pattern/pattern-sheet.js"));
const btoa = global.btoa ? global.btoa : input => Buffer.from(input).toString('base64');
const VISIBILITY = props => (props.checkers ? "block" : "none");
const CROSSES = props => btoa(`
<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
  <path stroke-width="1" stroke="#f2f2f2" fill="none" d="M10 6v8M6 10h8"/>
</svg>
`);
const PAD = props => props.padded ? 50 : 0;
const OFF = props => props.navigationEnabled ? 300 : 0;
const OFFSET = props => PAD(props) + OFF(props);
const StyledPattern = components_1.styled(tag_hoc_1.default(["checkers", "navigationEnabled", "padded"])("div")) `
  position: fixed;
  width: calc(100% - ${props => OFFSET(props) + PAD(props)}px);
  top: ${PAD}px;
  left: ${props => OFFSET(props)}px;
  right: ${PAD}px;
  bottom: ${PAD}px;
  box-sizing: border-box;
  height: 100%;
  &::before {
    content: "";
    display: ${VISIBILITY};
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml;base64,${CROSSES}");
    background-size: 20px 20px;
    background-repeat: repeat;
    background-position: 50% 50%;
  }
`;
const StyledPatternFolder = components_1.styled.div `
  height: 100%;
  width: 100%;
`;
const StyledPatternDoc = components_1.styled.div `
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  box-sizing: border-box;
`;
const StyledPatternDemo = components_1.styled.div `
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  max-width: 1920px;
  margin: 0 auto;
`;
const StyledPatternLoader = components_1.styled.div `
  position: absolute;
  z-index: 3;
  top: 0;
  right: 0;
  left: 0;
  height: 3px;
  ${props => props.hidden ? 'display: none;' : ''}
  &::after {
    position: absolute;
    top: 0;
    z-index: 2;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: ${props => props.error ? props.theme.colors.error : props.theme.colors.active};
    opacity: 1;
    transition: ${props => (props.error ? "none" : "transform 1s ease-in-out")};
    ${props => {
    switch (props.status) {
        case "entering":
            return `
            transform: translateX(-100%);
          `;
        case "entered":
            return `${props => props.error ? "" : "transform: translateX(-15%);"}`;
        case "exiting":
            return `
            transition: transform .3s ease-out;
            transform: translateX(0);
          `;
        case "exited":
        default:
            return `
            transform: translateX(-100%);
            transition: opacity .3s .25s ease-out;
          `;
    }
}};
  }
`;
const PatternContainer = components_1.styled.div `
  height: 100%;
  padding-left: ${props => props.navigationEnabled ? 0 : 60}px;
`;
class Pattern extends react_1.default.Component {
    constructor(...args) {
        super(...args);
        this.state = { srcdoc: false };
    }
    render() {
        const { props } = this;
        if (props.contentType !== "pattern") {
            return null;
        }
        if (props.type === "folder") {
            return (react_1.default.createElement(StyledPatternFolder, null,
                react_1.default.createElement(StyledPatternDoc, null,
                    react_1.default.createElement(components_1.Markdown, { source: props.docs }))));
        }
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(StyledPattern, { padded: props.screenshot, checkers: props.opacity, navigationEnabled: props.navigationEnabled },
                react_1.default.createElement(react_helmet_1.default, { title: [getPrefix(props), props.displayName]
                        .filter(Boolean)
                        .join(": ") }),
                react_1.default.createElement(Transition_1.default, { in: props.loading || props.error, timeout: { enter: 1000, exit: 850 } }, status => (react_1.default.createElement(StyledPatternLoader, { hidden: props.screenshot, status: status, error: props.error }))),
                react_1.default.createElement(StyledPatternDemo, null,
                    react_1.default.createElement(PatternContainer, { navigationEnabled: props.navigationEnabled },
                        react_1.default.createElement(pattern_demo_1.default, { src: props.src, contents: props.contents, loading: props.loading, updated: props.updated })))),
            react_1.default.createElement(pattern_sheet_1.default, null)));
    }
}
exports.default = Pattern;
function getPrefix(props) {
    if (props.loading) {
        return "Load";
    }
    if (props.error) {
        return "Error";
    }
    return "";
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../../../../node_modules/buffer/index.js */ "../../node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/app/components/pattern/pattern-demo.js":
/*!****************************************************!*\
  !*** ./src/app/components/pattern/pattern-demo.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const components_1 = __webpack_require__(/*! @patternplate/components */ "../../components/legacy/index.js");
const StyledDemo = components_1.styled.iframe `
  width: 100%;
  height: calc(100% - 30vh);
  border: 0;
`;
function PatternDemo(props) {
    const src = typeof props.updated === "number"
        ? `${props.src}?reload=${props.updated}`
        : props.src;
    return react_1.default.createElement(StyledDemo, { src: src, referrerPolicy: "no-referrer" });
}
exports.default = PatternDemo;


/***/ }),

/***/ "./src/app/components/pattern/pattern-sheet.js":
/*!*****************************************************!*\
  !*** ./src/app/components/pattern/pattern-sheet.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const remark_1 = __importDefault(__webpack_require__(/*! remark */ "./node_modules/remark/index.js"));
const remark_gemoji_to_emoji_1 = __importDefault(__webpack_require__(/*! remark-gemoji-to-emoji */ "../../node_modules/remark-gemoji-to-emoji/index.js"));
const components_1 = __webpack_require__(/*! @patternplate/components */ "../../components/legacy/index.js");
const item = __importStar(__webpack_require__(/*! ../../selectors/item */ "./src/app/selectors/item.js"));
const trigger_fullscreen_1 = __importDefault(__webpack_require__(/*! ../../containers/trigger-fullscreen */ "./src/app/containers/trigger-fullscreen.js"));
const toggle_opacity_1 = __importDefault(__webpack_require__(/*! ../../containers/toggle-opacity */ "./src/app/containers/toggle-opacity.js"));
const processor = remark_1.default().use(remark_gemoji_to_emoji_1.default);
exports.default = react_redux_1.connect(mapProps)(PatternSheet);
function PatternSheet(props) {
    return (react_1.default.createElement(StyledPatternSheet, { screenshot: props.screenshot },
        react_1.default.createElement(StyledPatternSheetContainer, null,
            react_1.default.createElement(StyledControlsBox, null,
                react_1.default.createElement(StyledName, null,
                    props.name,
                    react_1.default.createElement(StyledVersion, null,
                        "@",
                        props.version)),
                react_1.default.createElement(components_1.ThemeProvider, { theme: components_1.themes.getThemes().dark },
                    react_1.default.createElement(StyledControlsArea, { orient: "right" },
                        react_1.default.createElement(StyledControlsItem, null,
                            react_1.default.createElement(toggle_opacity_1.default, null)),
                        react_1.default.createElement(StyledControlsItem, null,
                            react_1.default.createElement(trigger_fullscreen_1.default, null))))),
            props.description &&
                react_1.default.createElement(StyledDescription, null, processor.processSync(props.description).contents),
            react_1.default.createElement(StyledBoxLine, null,
                react_1.default.createElement(SearchTrigger, { field: "flag", search: props.flag },
                    react_1.default.createElement(components_1.Flag, null, props.flag)),
                react_1.default.createElement(StyledTagList, null, props.tags.map((tag, index) => (react_1.default.createElement(SearchTrigger, { key: `${tag}-${index}`, field: "tags", search: tag },
                    react_1.default.createElement(components_1.Tag, null, tag)))))),
            typeof props.doc === "string" &&
                react_1.default.createElement(StyledMarkdownBox, null,
                    react_1.default.createElement(components_1.Markdown, { linkable: true, source: props.doc })))));
}
const StyledSearchTrigger = components_1.styled.span `
  &:not(:first-child) {
    margin-left: 10px;
  }
`;
const StyledLink = components_1.styled(components_1.Link) `
  text-decoration: none;
`;
function SearchTrigger(props) {
    return (react_1.default.createElement(StyledSearchTrigger, null,
        react_1.default.createElement(StyledLink, { className: props.className, query: {
                "search-enabled": true,
                search: `${props.field}=${props.search}`
            }, title: `Search other patterns with ${props.field} "${props.search}"` }, props.children)));
}
function mapProps(state) {
    return {
        doc: item.selectContents(state),
        description: item.selectDescription(state),
        id: state.id,
        icon: item.selectIcon(state),
        type: item.selectType(state),
        name: item.selectName(state),
        flag: item.selectFlag(state),
        tags: item.selectTags(state),
        version: item.selectVersion(state),
        screenshot: state.routing.locationBeforeTransitions.query.screenshot === "true"
    };
}
const TOOLBAR_HEIGHT = 60;
const StyledName = components_1.styled(props => react_1.default.createElement(components_1.Headline, Object.assign({}, props, { as: "h1", order: 1 }))) `
  margin: 0 0 10px 0;
`;
const StyledVersion = components_1.styled(props => react_1.default.createElement(components_1.Headline, Object.assign({}, props, { as: "small", order: 3 }))) `
  display: inline-block;
  color: ${props => props.theme.colors.color};
  margin: 0;
`;
const StyledDescription = components_1.styled(components_1.Text) `
  color: ${props => props.theme.colors.recess};
  margin-bottom: 20px;
`;
const StyledPatternSheet = components_1.styled.div `
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  width: 100%;
  min-height: 30vh;
  margin-top: 70vh;
  padding: 30px 60px;
  border-top: 1px solid ${props => props.theme.colors.border};
  background: ${props => props.theme.colors.background};
`;
const ORIENTATION = props => {
    const direction = props.orient === "right" ? "left" : "right";
    return `margin-${direction}: auto`;
};
const StyledPatternSheetContainer = components_1.styled.div `
  margin: 0 auto;
  max-width: 740px;
`;
const StyledControlsArea = components_1.styled.div `
  display: flex;
  ${ORIENTATION};
`;
const StyledControlsBox = components_1.styled.div `
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  background: white;
`;
const StyledControlsItem = components_1.styled.div `
  & + & {
    padding-left: 10px;
  }
`;
const StyledTagList = components_1.styled.div `
  display: inline-block;
  margin-left: 10px;
  padding: 2px 10px;
  border-left: 1px solid ${props => props.theme.colors.border};
`;
const StyledBoxLine = components_1.styled.div `
  display: flex;
  align-items: center;
  min-height: 32px;
`;
const StyledMarkdownBox = components_1.styled.div `
  margin-top: 30px;
`;


/***/ }),

/***/ "./src/app/components/search-field.js":
/*!********************************************!*\
  !*** ./src/app/components/search-field.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const lodash_1 = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
const Components = __importStar(__webpack_require__(/*! @patternplate/components */ "../../components/legacy/index.js"));
class SearchFieldContainer extends react_1.default.Component {
    constructor(...args) {
        super(...args);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.timer = null;
        this.onStop = lodash_1.debounce(this.props.onStop, 1000);
    }
    handleChange(e) {
        e.persist();
        this.props.onChange(e);
        this.onStop(e);
    }
    handleKeyDown(e) {
        const { target } = e;
        const hasValue = target.value.length > 0;
        const atEnd = hasValue && target.selectionStart === target.value.length;
        if (e.which === 32 && e.altKey && e.ctrlKey) {
            e.preventDefault();
            this.props.onClose();
        }
        if (e.which !== 27) {
            e.stopPropagation();
        }
        if (e.which === 27 && hasValue) {
            e.preventDefault();
            this.props.onClear();
        }
        if (e.which === 38) {
            this.props.onUp(e);
        }
        if (e.which === 39 && atEnd && this.props.suggestion) {
            e.preventDefault();
            this.props.onComplete(this.props.suggestion);
        }
        if (e.which === 40 && atEnd) {
            e.preventDefault();
            this.props.onDown(e);
        }
    }
    render() {
        const props = this.props;
        return (react_1.default.createElement(Components.Search.SearchField, { autoFocus: props.autoFocus, name: props.name, onBlur: props.onBlur, onChange: this.handleChange, onFocus: props.onFocus, onKeyDown: this.handleKeyDown, placeholder: props.placeholder, suggestion: props.suggestion, title: props.title, value: props.value, "data-search": props.mark }, props.children));
    }
}
SearchFieldContainer.defaultProps = {
    blur: () => { },
    onChange: () => { },
    onFocus: () => { },
    onUp: () => { },
    onDown: () => { },
    onBlur: () => { },
    onStop: () => { },
    value: ""
};
exports.default = SearchFieldContainer;


/***/ }),

/***/ "./src/app/components/search-preview.js":
/*!**********************************************!*\
  !*** ./src/app/components/search-preview.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const Components = __importStar(__webpack_require__(/*! @patternplate/components */ "../../components/legacy/index.js"));
const lodash_1 = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
function SearchResultPreview(props) {
    const item = props.activeItem;
    switch (item.contentType) {
        case "doc":
            return (react_1.default.createElement(Components.Search.SearchResultPreview, Object.assign({}, props),
                react_1.default.createElement(Components.Markdown, { source: item.contents })));
        default:
            return (react_1.default.createElement(Components.Search.SearchResultPreview, Object.assign({}, props),
                react_1.default.createElement(Components.InfoPane, { active: true, demoDependencies: lodash_1.values(item.demoDependencies), demoDependents: lodash_1.values(item.demoDependents), dependencies: lodash_1.values(item.dependencies), dependents: lodash_1.values(item.dependents), flag: item.manifest.flag, id: item.id, manifest: JSON.stringify(item.manifest, null, "  "), name: item.manifest.displayName, tags: item.manifest.tags, version: item.manifest.version })));
    }
}
exports.default = SearchResultPreview;


/***/ }),

/***/ "./src/app/components/search-result-list.js":
/*!**************************************************!*\
  !*** ./src/app/components/search-result-list.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const Components = __importStar(__webpack_require__(/*! @patternplate/components */ "../../components/legacy/index.js"));
const search_result_1 = __importDefault(__webpack_require__(/*! ./search-result */ "./src/app/components/search-result.js"));
class SearchResultList extends react_1.default.Component {
    render() {
        const { props } = this;
        const activeId = this.props.activeItem
            ? this.props.activeItem.id
            : undefined;
        const withComponents = props.components.length > 0;
        const withDocs = props.docs.length > 0;
        return (react_1.default.createElement(Components.Search.SearchResultList, { ref: this.props.getListRef },
            withDocs > 0 && (react_1.default.createElement(Components.Search.SearchResultListHeading, null,
                "Docs (",
                props.docs.length,
                ")")),
            props.docs.map(d => (react_1.default.createElement(search_result_1.default, { key: d.id, item: d, activeId: activeId, onActivate: this.props.onActivate, onScrollRequest: this.props.onScrollRequest, type: "doc" }))),
            withComponents > 0 && (react_1.default.createElement(Components.Search.SearchResultListHeading, { navigationEnabled: props.navigationEnabled },
                "Components (",
                props.components.length,
                ")")),
            props.components.map(c => (react_1.default.createElement(search_result_1.default, { key: c.id, item: c, activeId: activeId, onActivate: this.props.onActivate, onScrollRequest: this.props.onScrollRequest, type: "pattern" })))));
    }
}
exports.default = SearchResultList;


/***/ }),

/***/ "./src/app/components/search-result.js":
/*!*********************************************!*\
  !*** ./src/app/components/search-result.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const Components = __importStar(__webpack_require__(/*! @patternplate/components */ "../../components/legacy/index.js"));
function SearchResult(props) {
    return (react_1.default.createElement(Components.Search.SearchResult, { active: props.item.id === props.activeId, href: props.item.href, id: props.item.id, index: props.index, icon: props.item.manifest.icon || props.item.type, name: props.item.manifest.displayName, key: props.item.id, onActivate: props.onActivate, onScrollRequest: props.onScrollRequest, type: props.type }));
}
exports.default = SearchResult;


/***/ }),

/***/ "./src/app/components/search.js":
/*!**************************************!*\
  !*** ./src/app/components/search.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const Components = __importStar(__webpack_require__(/*! @patternplate/components */ "../../components/legacy/index.js"));
const search_field_1 = __importDefault(__webpack_require__(/*! ./search-field */ "./src/app/components/search-field.js"));
const search_preview_1 = __importDefault(__webpack_require__(/*! ./search-preview */ "./src/app/components/search-preview.js"));
const pass_through_1 = __importDefault(__webpack_require__(/*! ../containers/pass-through */ "./src/app/containers/pass-through.js"));
const search_result_list_1 = __importDefault(__webpack_require__(/*! ./search-result-list */ "./src/app/components/search-result-list.js"));
const NOOP = () => { };
class SearchContainer extends react_1.default.Component {
    constructor(...args) {
        super(...args);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUp = this.handleUp.bind(this);
        this.handleDown = this.handleDown.bind(this);
        this.handleActivate = this.handleActivate.bind(this);
        this.handleScrollRequest = this.handleScrollRequest.bind(this);
        this.getListRef = this.getListRef.bind(this);
    }
    handleScrollRequest(e) {
        if (!this.list) {
            return;
        }
        const l = this.list.getBoundingClientRect();
        const i = e.target.getBoundingClientRect();
        if (i.bottom > l.bottom) {
            this.list.scrollTop = e.target.offsetTop - l.height + i.height;
        }
        if (i.top < l.top) {
            this.list.scrollTop = e.target.offsetTop - 30;
        }
    }
    getListRef(ref) {
        this.list = ref;
    }
    componentDidMount() {
        if (typeof this.props.onMount === "function") {
            this.props.onMount();
        }
    }
    handleActivate(e) {
        const id = e.target.getAttribute("data-id");
        const index = [...this.props.docs, ...this.props.components].findIndex(i => i.id === id);
        if (index > -1) {
            this.props.onActivate(index);
        }
    }
    handleUp(e) {
        e.stopPropagation();
        if (this.props.activeItem && this.props.activeItem.index > 0) {
            e.preventDefault();
            this.props.onUp();
        }
    }
    handleDown(e) {
        e.stopPropagation();
        const available = this.props.components.length + this.props.docs.length - 2;
        if (this.props.activeItem && available >= this.props.activeItem.index) {
            this.props.onDown();
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        const { props } = this;
        if (!props.activeItem) {
            return props.onSubmit(e);
        }
        const { activeItem } = props;
        props.onNavigate(activeItem);
    }
    render() {
        const { props } = this;
        const withComponents = props.components.length > 0;
        const withDocs = props.docs.length > 0;
        return (react_1.default.createElement(Components.Search.Search, { activeItem: props.activeItem, docs: props.docs, enabled: props.enabled, inline: props.inline, onActivate: props.inline ? NOOP : this.handleActivate, onClickOutside: props.inline ? NOOP : props.onClickOutside, onBlur: props.inline ? NOOP : props.onBlur, onChange: props.inline ? NOOP : props.onChange, onClear: props.inline ? NOOP : props.onClear, onComplete: props.inline ? NOOP : props.onComplete, onDown: props.inline ? NOOP : this.handleDown, onFocus: props.inline ? NOOP : props.onFocus, onStop: props.inline ? NOOP : props.onStop, onSubmit: props.inline ? NOOP : this.handleSubmit, onUp: props.inline ? NOOP : this.handleUp, shortcuts: props.shortcuts, suggestion: props.suggestion },
            react_1.default.createElement(Components.Search.SearchFieldSlot, null,
                react_1.default.createElement(search_field_1.default, { autoFocus: !props.inline, linkTo: "/search", mark: props.inline ? null : true, name: props.inline ? "inline-search" : "search", onBlur: props.onBlur, onChange: props.onChange, onClear: props.onClear, onClose: props.onClose, onComplete: props.onComplete, onDown: this.handleDown, onFocus: props.onFocus, onStop: props.onStop, onUp: this.handleUp, placeholder: "Search", suggestion: props.suggestion, title: `Search for patterns ${props.shortcuts.toggleSearch.toString()}`, value: props.value }, props.enabled && (react_1.default.createElement(Components.Search.SearchClose, { shortcut: props.shortcuts.close, clears: typeof props.value === "string" && props.value.length > 0 })))),
            react_1.default.createElement(Components.Search.SearchLegendSlot, null,
                react_1.default.createElement(Components.Search.SearchLegend, Object.assign({}, props.legend))),
            react_1.default.createElement(Components.Search.SearchPassThroughSlot, null,
                react_1.default.createElement(pass_through_1.default, { query: { "search-enabled": true, search: null } })),
            react_1.default.createElement(Components.Search.SearchResultListSlot, null,
                react_1.default.createElement(search_result_list_1.default, { activeItem: this.props.activeItem, components: this.props.components, docs: this.props.docs, getListRef: this.getListRef, onActivate: this.props.onActivate, onScrollRequest: this.handleScrollRequest })),
            react_1.default.createElement(Components.Search.SearchResultPreviewSlot, null, (withComponents || withDocs) && react_1.default.createElement(search_preview_1.default, Object.assign({}, this.props)))));
    }
}
exports.default = SearchContainer;
/**
 *


 */


/***/ }),

/***/ "./src/app/components/toggle-navigation.js":
/*!*************************************************!*\
  !*** ./src/app/components/toggle-navigation.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const components_1 = __webpack_require__(/*! @patternplate/components */ "../../components/legacy/index.js");
const toggle_button_1 = __importDefault(__webpack_require__(/*! ./common/toggle-button */ "./src/app/components/common/toggle-button.js"));
exports.default = Hamburger;
function Hamburger(props) {
    return (react_1.default.createElement(StyledToggleButton, { enabled: props.enabled, shortcut: props.shortcut },
        react_1.default.createElement(components_1.Icon, { symbol: "hamburger" }),
        props.shortcut.toString()));
}
const StyledToggleButton = components_1.styled(toggle_button_1.default) `
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0;
  line-height: 0;
  width: 60px;
  height: 60px;
  cursor: pointer;
  color: inherit;
`;


/***/ }),

/***/ "./src/app/components/toggle-opacity.js":
/*!**********************************************!*\
  !*** ./src/app/components/toggle-opacity.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const components_1 = __webpack_require__(/*! @patternplate/components */ "../../components/legacy/index.js");
const toggle_button_1 = __importDefault(__webpack_require__(/*! ./common/toggle-button */ "./src/app/components/common/toggle-button.js"));
exports.default = Opacity;
function Opacity(props) {
    return (react_1.default.createElement(StyledToggleButton, { enabled: props.enabled, shortcut: props.shortcut },
        react_1.default.createElement(StyledIcon, { symbol: "checkers-inverted" }),
        " ",
        props.shortcut.toString()));
}
const StyledIcon = components_1.styled(components_1.Icon) `
  fill: ${props => props.theme.colors.background};
`;
const StyledToggleButton = components_1.styled(toggle_button_1.default) `
  font-size: 0;
  line-height: 0;
`;


/***/ }),

/***/ "./src/app/components/toggle-search.js":
/*!*********************************************!*\
  !*** ./src/app/components/toggle-search.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const components_1 = __webpack_require__(/*! @patternplate/components */ "../../components/legacy/index.js");
exports.default = SearchButton;
function SearchButton(props) {
    return (react_1.default.createElement(StyledLink, { debug: true, title: `Enable search ${props.shortcut.toString()}`, query: { "search-enabled": !props.enabled } },
        react_1.default.createElement(StyledIcon, { base: props.base, symbol: "search" }),
        "Search"));
}
const StyledIcon = components_1.styled(components_1.Icon) `
  fill: ${props => props.theme.colors.color};
`;
const StyledLink = components_1.styled(components_1.Link) `
  font-size: 0;
`;


/***/ }),

/***/ "./src/app/components/trigger-fullscreen.js":
/*!**************************************************!*\
  !*** ./src/app/components/trigger-fullscreen.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const components_1 = __webpack_require__(/*! @patternplate/components */ "../../components/legacy/index.js");
exports.default = Fullscreen;
function Fullscreen(props) {
    return (react_1.default.createElement(StyledLink, { external: true, title: `Open pattern demo for "${props.id}" in a new tab`, href: props.href },
        react_1.default.createElement(StyledIcon, { symbol: "fullscreen" })));
}
const StyledIcon = components_1.styled(components_1.Icon) `
  fill: ${props => props.theme.colors.background};
`;
const StyledLink = components_1.styled(components_1.Link) `
  font-size: 0;
  line-height: 0;
`;


/***/ }),

/***/ "./src/app/connectors/with-active-for-pattern.js":
/*!*******************************************************!*\
  !*** ./src/app/connectors/with-active-for-pattern.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
const item_1 = __importDefault(__webpack_require__(/*! ../selectors/item */ "./src/app/selectors/item.js"));
exports.default = react_redux_1.connect(withActiveForPattern);
function withActiveForPattern(state) {
    const item = item_1.default(state);
    return {
        active: item ? item.contentType === "pattern" : false
    };
}


/***/ }),

/***/ "./src/app/connectors/with-id.js":
/*!***************************************!*\
  !*** ./src/app/connectors/with-id.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
const item_1 = __importDefault(__webpack_require__(/*! ../selectors/item */ "./src/app/selectors/item.js"));
exports.default = react_redux_1.connect(withId);
function withId(state) {
    const item = item_1.default(state);
    return {
        id: item ? item.id : null
    };
}


/***/ }),

/***/ "./src/app/connectors/with-toggle.js":
/*!*******************************************!*\
  !*** ./src/app/connectors/with-toggle.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(__webpack_require__(/*! assert */ "../../node_modules/assert/assert.js"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
const lodash_1 = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
const shortcuts_1 = __importDefault(__webpack_require__(/*! ../shortcuts */ "./src/app/shortcuts.js"));
const s = lodash_1.values(shortcuts_1.default());
function withToggle(action) {
    const shortcut = s.find(i => i.key === action.key);
    assert_1.default(shortcut, `${action} passed to withToggle has no matching shortcut found for ${action.key}`);
    return Component => {
        const mapProps = state => {
            const enabled = state[action.property];
            return { enabled, shortcut };
        };
        return react_redux_1.connect(mapProps)(Component);
    };
}
exports.default = withToggle;


/***/ }),

/***/ "./src/app/containers/application.js":
/*!*******************************************!*\
  !*** ./src/app/containers/application.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const react_helmet_1 = __importDefault(__webpack_require__(/*! react-helmet */ "../../node_modules/react-helmet/lib/Helmet.js"));
const tag_hoc_1 = __importDefault(__webpack_require__(/*! tag-hoc */ "../../node_modules/tag-hoc/dist/tag.js"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
const redux_1 = __webpack_require__(/*! redux */ "../../node_modules/redux/es/index.js");
const reselect_1 = __webpack_require__(/*! reselect */ "../../node_modules/reselect/lib/index.js");
const component_link_1 = __webpack_require__(/*! @patternplate/component-link */ "../../components/next-generation/link/lib/index.js");
const components_1 = __webpack_require__(/*! @patternplate/components */ "../../components/legacy/index.js");
const actions = __importStar(__webpack_require__(/*! ../actions */ "./src/app/actions/index.js"));
const demo = __importStar(__webpack_require__(/*! ../selectors/demo */ "./src/app/selectors/demo.js"));
const logo_1 = __importDefault(__webpack_require__(/*! ./logo */ "./src/app/containers/logo.js"));
const favicon_1 = __importDefault(__webpack_require__(/*! ./favicon */ "./src/app/containers/favicon.js"));
const indicator_1 = __importDefault(__webpack_require__(/*! ./indicator */ "./src/app/containers/indicator.js"));
const link_1 = __importDefault(__webpack_require__(/*! ./link */ "./src/app/containers/link.js"));
const message_1 = __importDefault(__webpack_require__(/*! ./message */ "./src/app/containers/message.js"));
const navigation_1 = __importStar(__webpack_require__(/*! ./navigation */ "./src/app/containers/navigation.js"));
const toggle_navigation_1 = __importDefault(__webpack_require__(/*! ./toggle-navigation */ "./src/app/containers/toggle-navigation.js"));
const toggle_search_1 = __importDefault(__webpack_require__(/*! ./toggle-search */ "./src/app/containers/toggle-search.js"));
const search_1 = __importDefault(__webpack_require__(/*! ./search */ "./src/app/containers/search.js"));
const selectThemes = reselect_1.createSelector(state => state.config.ui, ui => components_1.themes.getThemes(ui));
const selectLines = reselect_1.createSelector(state => state.messages, demo.selectSrc, (messages, src) => (messages[src] || "").split("\n").filter(Boolean));
const selectMessage = reselect_1.createSelector(selectLines, lines => lines
    .slice(0, 2)
    .map(l => l.trim())
    .join("\n"));
const selectHasMessage = reselect_1.createSelector(selectMessage, message => typeof message === "string" && message !== "");
function mapProps(state) {
    const q = state.routing.locationBeforeTransitions.query;
    return {
        base: state.base,
        description: state.schema.description,
        lightbox: state.lightbox,
        location: state.routing.locationBeforeTransitions,
        networkEnabled: state.networkEnabled,
        logo: state.config.ui.renderedLogo,
        navigationEnabled: state.navigationEnabled,
        searchEnabled: state.searchEnabled,
        theme: state.theme,
        themes: selectThemes(state),
        title: state.config.title || state.schema.name,
        hasMessage: selectHasMessage(state),
        screenshot: q.screenshot === "true",
        showComponents: state.config.ui.showComponents === undefined ? true : state.config.ui.showComponents,
        jsWarningEnabled: q["js-warning-enabled"] !== "false" && q["js-warning-enabled"] !== false,
        browserWarningEnabled: q["browser-warning-enabled"] !== "false" && q["browser-warning-enabled"] !== false,
    };
}
function mapDispatch(dispatch) {
    return redux_1.bindActionCreators({
        onLoad: () => actions.listen({ url: "api" }),
        onResize: actions.windowResize
    }, dispatch);
}
const injections = [
    {
        target: component_link_1.Link,
        source: link_1.default
    },
    {
        target: components_1.Link,
        source: link_1.default
    }
];
class Application extends react_1.default.Component {
    componentDidMount() {
        document.body.style.overflow = this.props.screenshot ? "hidden" : "auto";
    }
    componentDidUpdate() {
        document.body.style.overflow = this.props.screenshot ? "hidden" : "auto";
    }
    render() {
        const { props } = this;
        return (react_1.default.createElement(components_1.injection.InjectionProvider, { injections: injections },
            react_1.default.createElement(components_1.ThemeProvider, { theme: props.themes[props.theme] },
                react_1.default.createElement(StyledApplication, { screenshot: props.screenshot },
                    react_1.default.createElement(react_helmet_1.default, { meta: meta(props), title: props.title }),
                    react_1.default.createElement(favicon_1.default, null),
                    react_1.default.createElement(components_1.ThemeProvider, { theme: props.themes.dark },
                        react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement(NavigationControl, { "data-toggle-name": "navigation", "data-trigger-name": "navigation", "data-toggle-enabled": props.navigationEnabled, enabled: props.navigationEnabled },
                                react_1.default.createElement(toggle_navigation_1.default, null)),
                            react_1.default.createElement(StyledNavigationBox, { "data-toggle-name": "navigation", "data-toggle-enabled": props.visible, enabled: props.navigationEnabled },
                                react_1.default.createElement(navigation_1.default, { showComponents: props.showComponents },
                                    react_1.default.createElement(navigation_1.NavigationHeader, null,
                                        react_1.default.createElement(logo_1.default, null)),
                                    react_1.default.createElement(navigation_1.NavigationToolbar, null,
                                        react_1.default.createElement("div", null),
                                        react_1.default.createElement(toggle_search_1.default, null),
                                        react_1.default.createElement(indicator_1.default, null)))))),
                    react_1.default.createElement(StyledContentContainer, { "data-scrolling": true },
                        react_1.default.createElement(StyledContent, null,
                            props.browserWarningEnabled &&
                                react_1.default.createElement(StyledBrowserWarning, { navigationEnabled: props.navigationEnabled, "data-browser-warning": true },
                                    react_1.default.createElement(StyledBrowserContainer, null,
                                        react_1.default.createElement(StyledBrowserContent, null,
                                            react_1.default.createElement(StyledWarningLabel, null, "Nice browser. Is it antique?"),
                                            react_1.default.createElement(StyledBrowserText, null, "No, seriously - your browser is so old that some features of patternplate don't work as expected."),
                                            react_1.default.createElement(StyledBrowserText, null, "Don't worry - you can either continue with a restricted version or install an up-to-date browser.")),
                                        react_1.default.createElement(StyledBrowserContainerClose, { title: `Close browser warning`, query: { "browser-warning-enabled": false } },
                                            react_1.default.createElement(components_1.Icon, { symbol: "close" })))),
                            props.jsWarningEnabled &&
                                react_1.default.createElement(StyledBrowserWarning, { navigationEnabled: props.navigationEnabled, "data-js-warning": true },
                                    react_1.default.createElement(StyledBrowserContainer, null,
                                        react_1.default.createElement(StyledBrowserContent, null,
                                            react_1.default.createElement(StyledWarningLabel, null, "We messed up."),
                                            react_1.default.createElement(StyledBrowserText, null, "Sorry, but your user experience might be affected."),
                                            react_1.default.createElement(components_1.Text, null, "- Try reloading the page"),
                                            react_1.default.createElement(components_1.Text, null, "- Report the problem at github.com/patternplate/patternplate")),
                                        react_1.default.createElement(StyledBrowserContainerClose, { title: `Close browser warning`, query: { "js-warning-enabled": false } },
                                            react_1.default.createElement(components_1.Icon, { symbol: "close" })))),
                            props.hasMessage && (react_1.default.createElement(StyledMessageBox, null,
                                react_1.default.createElement(message_1.default, null))),
                            props.children,
                            props.searchEnabled && (react_1.default.createElement(components_1.ThemeProvider, { theme: props.themes.dark },
                                react_1.default.createElement(StyledSearchBox, { navigationEnabled: props.navigationEnabled, screenshot: props.screenshot },
                                    react_1.default.createElement(StyledSearchFrame, null,
                                        react_1.default.createElement(search_1.default, null)))))))))));
    }
}
exports.default = react_redux_1.connect(mapProps, mapDispatch)(Application);
const WIDTH = 300;
const NAVIGATION_WIDTH = props => (props.enabled ? WIDTH : 0);
const TOOLBAR_HEIGHT = 60;
const StyledWarningLabel = components_1.styled(components_1.Text) `
  font-weight: bold;
  margin-bottom: 1.3em;
`;
const StyledBrowserWarning = components_1.styled.div `
  display: none; /* overridden by separate js if needed */
  box-sizing: border-box;
  position: absolute;
  position: sticky;
  top: 0;
  z-index: 4;
  right: 0;
  left: 0;
  width: 100%;
  padding: 15px 20px;
  padding-left: ${props => (props.navigationEnabled ? 20 : 60)}px;
  background: ${props => props.theme.colors.warning};
`;
const StyledBrowserContainer = components_1.styled.div `
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  justify-content: space-between;
`;
const StyledBrowserContent = components_1.styled.div ``;
const StyledBrowserText = components_1.styled(components_1.Text) `
  margin-bottom: 1.3em;
`;
const StyledBrowserContainerClose = components_1.styled(component_link_1.Link) `
  flex-shrink: 0;
  margin-left: 15px;
  &:link,
  &:visited,
  &:active {
    color: ${props => props.theme.colors.color};
  }
`;
const StyledApplication = components_1.styled.div `
  position: relative;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.background};

  ${props => !props.screenshot
    ? ""
    : components_1.css `
          height: calc(100vh - 100px);
          width: calc(100vw - 100px);
          margin: 50px;
          border-radius: 10px;
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.15);
          overflow: hidden;
        `};
`;
const StyledNavigationBox = components_1.styled(tag_hoc_1.default(["enabled"])("div")) `
  position: relative;
  z-index: 2;
  height: 100%;
  width: ${NAVIGATION_WIDTH}px;
  flex: 0 0 ${NAVIGATION_WIDTH}px;
  overflow: hidden;
  &[data-toggle-enabled="true"] {
    display: block;
  }
  &[data-toggle-enabled="false"] {
    display: none;
  }
`;
const StyledMessageBox = components_1.styled.div `
  position: absolute;
  box-sizing: border-box;
  z-index: 3;
  padding: 15px;
  width: 100%;
  overflow: hidden;
`;
const StyledContent = components_1.styled.div `
  flex: 1 1 100%;
  width: 100%;
`;
const StyledContentContainer = components_1.styled.div `
  flex: 1 1 calc(100% - ${NAVIGATION_WIDTH}px);
  width: calc(100% - ${NAVIGATION_WIDTH}px);
  flex-direction: column;
  overflow: auto;
  position: relative;
`;
const WITH_SCREENSHOT_OFFSET = factor => props => {
    if (props.screenshot) {
        return factor * 50;
    }
    return 0;
};
const WITH_NAVIGATION_OFFSET = factor => props => {
    if (props.navigationEnabled) {
        return factor * 300;
    }
    return 0;
};
const SUM = (...args) => props => args.reduce((acc, fn) => acc + fn(props), 0);
const StyledSearchBox = components_1.styled.div `
  position: fixed;
  z-index: 2;
  top: 12.5vh;
  bottom: 10vh;
  right: ${WITH_SCREENSHOT_OFFSET(1)}px;
  left: ${SUM(WITH_NAVIGATION_OFFSET(1), WITH_SCREENSHOT_OFFSET(1))}px;
  width: calc(
    100% - ${SUM(WITH_NAVIGATION_OFFSET(1), WITH_SCREENSHOT_OFFSET(2))}px
  );
  pointer-events: none;
`;
const StyledSearchFrame = components_1.styled.div `
  width: 90%;
  min-width: 320px;
  max-width: 750px;
  max-height: 100%;
  margin: 0 auto;
  overflow: hidden;
`;
const StyledFloatingBox = components_1.styled.div `
  position: absolute;
  pointer-events: none;
  z-index: 2;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 10px 15px;
  height: 300px;
  display: flex;
`;
const StyledInfoPane = components_1.styled.div `
  flex: 0 0 auto;
  box-sizing: border-box;
  pointer-events: all;
`;
const StyledPane = components_1.styled.div `
  flex: 1 1 auto;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  overflow: hidden;
  pointer-events: all;
`;
const NavigationControl = components_1.styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 5;
  top: 0;
  left: ${props => (props.enabled ? 300 : 0)}px;
  transform: translate(-${props => (props.enabled ? 100 : 0)}%);
  color: ${props => props.enabled ? props.theme.colors.color : props.theme.colors.background};
  width: 60px;
  height: 60px;
  background: ${props => props.enabled ? props.theme.colors.backgroundSecondary : "#fff"};

  &[data-toggle-enabled="true"] {
    left: 300;
    transform: translate(-100%);
    color: ${props => props.theme.colors.color};
    background: ${props => props.theme.colors.backgroundSecondary};
  }

  &[data-toggle-enabled="false"] {
    left: 0;
    transform: translate(0);
    color: ${props => props.theme.colors.background};
    background: #fff;
  }

  @media screen and (min-width: 720px) {
    background: transparent;
    &::before {
      display: none;
    }
  }
`;
function meta(props) {
    return [
        { name: "description", content: props.description },
        { name: "viewport", content: "width=device-width, initial-scale=1" }
    ];
}


/***/ }),

/***/ "./src/app/containers/documentation.js":
/*!*********************************************!*\
  !*** ./src/app/containers/documentation.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = __webpack_require__(/*! @patternplate/components */ "../../components/legacy/index.js");
const react_redux_1 = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
const reselect_1 = __webpack_require__(/*! reselect */ "../../node_modules/reselect/lib/index.js");
const redux_1 = __webpack_require__(/*! redux */ "../../node_modules/redux/es/index.js");
const actions = __importStar(__webpack_require__(/*! ../actions */ "./src/app/actions/index.js"));
const documentation_1 = __importDefault(__webpack_require__(/*! ../components/documentation */ "./src/app/components/documentation.js"));
const item_1 = __importDefault(__webpack_require__(/*! ../selectors/item */ "./src/app/selectors/item.js"));
const pool_1 = __webpack_require__(/*! ../selectors/pool */ "./src/app/selectors/pool.js");
exports.default = react_redux_1.connect(mapState, mapDispatch)(documentation_1.default);
const selectNotFound = reselect_1.createSelector(state => state.routing.locationBeforeTransitions.pathname, url => `
# Documentation not found

> Pretty sure these aren't the hypertext documents you are looking for.

We looked everywhere and could not find a single thing at \`${url}\`.

You might want to navigate back to [Home](/) or use the [Search](?search-enabled=true).

---

Help us to make this message more helpful on [GitHub](https://github.com/patternplate/patternplate)
`);
const selectNoDocs = () => `
# :construction: Add documentation

> Undocumented software could not exist just as well.
>
> – The Voice of Common Sense

Currently there is no readme data at \`./patterns/readme.md\`, so we left this
friendly reminder here to change that soon.

You could start right away:

\`\`\`sh
echo "# Docs\\n This patternplate contains ..." > patterns/readme.md
\`\`\`

Some ideas on what to write into your pattern readme

*  Why this Living Styleguide interface exists, e.g. what problems it should solve
*  What the components in are intended for, e.g. a brand, website or product
*  The component hierarchy you use, e.g. Atomic Design
*  Naming conventions
*  Rules for dependencies
*  Browser matrix

---

Help us to make this message more helpful on [GitHub](https://github.com/patternplate/patternplate).
`;
const selectDocItem = reselect_1.createSelector(item_1.default, pool_1.flat, state => state.id, (item, pool, id) => {
    if (id === "/") {
        const first = pool.find(i => i.contentType === "doc");
        if (first) {
            return first;
        }
    }
    return item;
});
const selectDoc = reselect_1.createSelector(selectDocItem, selectNoDocs, selectNotFound, (item, noDocs, notFound) => {
    if (item && item.contents) {
        return item.contents;
    }
    if (item && !item.contents) {
        return noDocs;
    }
    return notFound;
});
const selectDisplayName = reselect_1.createSelector(selectDocItem, item => {
    if (!item) {
        return 'patternplate';
    }
    return item.manifest.displayName;
});
exports.selectType = reselect_1.createSelector(item_1.default, match => {
    if (match && match.contents) {
        return "doc";
    }
    if (match && !match.contents) {
        return "fallback";
    }
    return "not-found";
});
const selectThemes = reselect_1.createSelector(state => state.config.color, color => components_1.themes.getThemes(color));
function mapState(state) {
    return {
        displayName: selectDisplayName(state),
        doc: selectDoc(state),
        themes: selectThemes(state),
        type: exports.selectType(state),
        isStatic: state.isStatic
    };
}
function mapDispatch(dispatch) {
    return redux_1.bindActionCreators({
        requestScroll: actions.scrollTo
    }, dispatch);
}


/***/ }),

/***/ "./src/app/containers/favicon.js":
/*!***************************************!*\
  !*** ./src/app/containers/favicon.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
const favicon_1 = __importDefault(__webpack_require__(/*! ../components/favicon */ "./src/app/components/favicon.js"));
exports.default = react_redux_1.connect(mapState)(favicon_1.default);
function mapState(state) {
    return {
        error: state.demo.error,
        source: state.config.ui.favicon
    };
}


/***/ }),

/***/ "./src/app/containers/indicator.js":
/*!*****************************************!*\
  !*** ./src/app/containers/indicator.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = __webpack_require__(/*! redux */ "../../node_modules/redux/es/index.js");
const react_redux_1 = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
const actions = __importStar(__webpack_require__(/*! ../actions */ "./src/app/actions/index.js"));
const indicator_1 = __importDefault(__webpack_require__(/*! ../components/indicator */ "./src/app/components/indicator.js"));
exports.default = react_redux_1.connect(mapProps, mapDispatch)(indicator_1.default);
function mapProps(state) {
    return {
        status: selectStatus(state),
        shortcut: state.shortcuts.reload
    };
}
function mapDispatch(dispatch) {
    return redux_1.bindActionCreators({
        onClick: actions.reload
    }, dispatch);
}
function selectStatus(state) {
    if (state.demo.error) {
        return "error";
    }
    return state.connection;
}


/***/ }),

/***/ "./src/app/containers/link.js":
/*!************************************!*\
  !*** ./src/app/containers/link.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = __importDefault(__webpack_require__(/*! url */ "../../node_modules/url/url.js"));
const path_1 = __importDefault(__webpack_require__(/*! path */ "../../node_modules/path-browserify/index.js"));
const querystring_1 = __importDefault(__webpack_require__(/*! querystring */ "../../node_modules/querystring-es3/index.js"));
const components_1 = __webpack_require__(/*! @patternplate/components */ "../../components/legacy/index.js");
const lodash_1 = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
const react_redux_1 = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
const react_router_redux_1 = __webpack_require__(/*! react-router-redux */ "../../node_modules/react-router-redux/lib/index.js");
const redux_1 = __webpack_require__(/*! redux */ "../../node_modules/redux/es/index.js");
const actions_1 = __webpack_require__(/*! ../actions */ "./src/app/actions/index.js");
const item_1 = __importDefault(__webpack_require__(/*! ../selectors/item */ "./src/app/selectors/item.js"));
const pool_1 = __webpack_require__(/*! ../selectors/pool */ "./src/app/selectors/pool.js");
exports.default = react_redux_1.connect(mapLinkState, mapDispatch)(components_1.Link.RawLink);
function mapLinkState(state, own) {
    const location = state.routing.locationBeforeTransitions;
    if (isAbsolute(own.href)) {
        return Object.assign({}, own, { external: true });
    }
    return Object.assign({}, own, {
        href: getHref(own, {
            base: state.base,
            location,
            item: item_1.default(state),
            pool: pool_1.flat(state)
        })
    });
}
exports.mapLinkState = mapLinkState;
function mapDispatch(dispatch, ownProps) {
    return redux_1.bindActionCreators({
        onClick(e) {
            if (ownProps.external || isAbsolute(ownProps.href)) {
                return { type: null };
            }
            e.preventDefault();
            const parsed = url_1.default.parse(e.currentTarget.href);
            if (parsed.hash) {
                actions_1.scrollTo(parsed.hash.slice(1));
            }
            return react_router_redux_1.push([parsed.path, parsed.hash].join(""));
        }
    }, dispatch);
}
function getHref(props, context) {
    if (props.external === true || !context.location) {
        return props.href;
    }
    const parsed = props.href
        ? url_1.default.parse(props.href)
        : {
            pathname: context.location.pathname,
            query: querystring_1.default.stringify(context.location.query)
        };
    parsed.query = querystring_1.default.parse(parsed.query);
    const query = props.query === null
        ? {}
        : lodash_1.pickBy(Object.assign({}, context.location.query, parsed.query, props.query || context.location.query), (value, key) => {
            // TODO: deduce this for all keys from reduce config
            // special case "navigation-enabled", invert logic
            if (key === "navigation-enabled") {
                return value !== true && value !== "true";
            }
            // if the key is not in the current query, add it
            if (!context.location.query.hasOwnProperty(key)) {
                return true;
            }
            // omit "falsy" values to keep url shorter
            return value !== "false" && value !== "0" && !!value;
        });
    parsed.pathname =
        parsed.pathname !== null ? replaceExt(parsed.pathname, ".html") : null;
    if (parsed.pathname === "/") {
        return url_1.default.format({
            pathname: context.base,
            query,
            hash: props.hash || (parsed.hash || "#").slice(1)
        });
    }
    // Quirk: Search with prefix in static builds
    if (parsed.pathname &&
        parsed.pathname !== null &&
        (parsed.pathname.startsWith(`.${context.base}pattern/`) ||
            parsed.pathname.startsWith(`.${context.base}doc/`))) {
        const pathname = typeof parsed.pathname === "string"
            ? parsed.pathname.slice(1)
            : context.location.pathname;
        return url_1.default.format({
            pathname,
            query,
            hash: props.hash || (parsed.hash || "#").slice(1)
        });
    }
    // Legacy:
    // We used to require users to enter awkward relative/absolute paths
    // - `./doc/:docPath:`
    // - `./pattern/:patternId:`
    //
    // TODO: Deprecate this behaviour with next major version
    if (parsed.pathname &&
        parsed.pathname !== null &&
        // Older md documents might use the old linking format
        (parsed.pathname.startsWith("./pattern/") ||
            parsed.pathname.startsWith("./doc/") ||
            // Quirk: Search with prefix in static builds
            parsed.pathname.startsWith(`.${context.base}pattern/`) ||
            parsed.pathname.startsWith(`.${context.base}doc/`))) {
        const pathname = typeof parsed.pathname === "string"
            ? prefix(context.base, parsed.pathname.slice(1))
            : context.location.pathname;
        return url_1.default.format({
            pathname,
            query,
            hash: props.hash || (parsed.hash || "#").slice(1)
        });
    }
    // Try to resolve other relative links from the currently selected item
    if (context.item && !(parsed.pathname || "").startsWith("/")) {
        const rawTargetPath = (path_1.default.unix || path_1.default).join(path_1.default.dirname(context.item.path), parsed.pathname || "");
        const targetPath = replaceExt(rawTargetPath, ".md");
        const match = context.pool.find(item => item.contentType === "doc" && item.path === targetPath);
        if (match) {
            const parsedMatch = url_1.default.parse(match.href);
            return url_1.default.format({
                pathname: replaceExt(parsedMatch.pathname, ".html"),
                query,
                hash: props.hash || (parsedMatch.hash || "#").slice(1)
            });
        }
        const patternTargetPath = replaceExt(rawTargetPath, "");
        const patternMatch = context.pool.find(item => item.contentType === "pattern" &&
            path_1.default.dirname(item.path) === patternTargetPath);
        if (patternMatch) {
            const parsedMatch = url_1.default.parse(patternMatch.href);
            return url_1.default.format({
                pathname: replaceExt(parsedMatch.pathname, ".html"),
                query,
                hash: props.hash || (parsedMatch.hash || "#").slice(1)
            });
        }
    }
    return url_1.default.format({
        pathname: parsed.pathname,
        query,
        hash: props.hash || (parsed.hash || "#").slice(1)
    });
}
exports.getHref = getHref;
function prefix(base, pathname) {
    const b = norm(base);
    const p = norm(pathname);
    if (p === "") {
        return `/${b}`;
    }
    if (p.startsWith(b)) {
        return `/${p}`;
    }
    return `/${[norm(base), norm(pathname)].join("/")}`;
}
function norm(p) {
    return p
        .split("/")
        .filter(Boolean)
        .join("/");
}
function replaceExt(href, ext) {
    const parsed = url_1.default.parse(href);
    if (typeof parsed.pathname === "string" && parsed.pathname !== "/") {
        parsed.pathname = [
            path_1.default.dirname(parsed.pathname),
            `${path_1.default.basename(parsed.pathname, path_1.default.extname(parsed.path))}${ext}`
        ].join("/");
    }
    return url_1.default.format(parsed);
}
function isAbsolute(href) {
    const parsed = url_1.default.parse(href || "./");
    if (parsed.protocol) {
        return true;
    }
    if ((parsed.pathname || "").startsWith("/api/static/")) {
        return true;
    }
}


/***/ }),

/***/ "./src/app/containers/logo.js":
/*!************************************!*\
  !*** ./src/app/containers/logo.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
const components_1 = __webpack_require__(/*! @patternplate/components */ "../../components/legacy/index.js");
exports.default = react_redux_1.connect(mapState)(components_1.Logo);
function mapState(state) {
    return {
        source: state.config.ui.renderedLogo
    };
}


/***/ }),

/***/ "./src/app/containers/markdown.js":
/*!****************************************!*\
  !*** ./src/app/containers/markdown.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const reselect_1 = __webpack_require__(/*! reselect */ "../../node_modules/reselect/lib/index.js");
const redux_1 = __webpack_require__(/*! redux */ "../../node_modules/redux/es/index.js");
const react_redux_1 = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
const components_1 = __webpack_require__(/*! @patternplate/components */ "../../components/legacy/index.js");
const pool_1 = __webpack_require__(/*! ../selectors/pool */ "./src/app/selectors/pool.js");
const actions_1 = __webpack_require__(/*! ../actions */ "./src/app/actions/index.js");
const selectWidgetSrc = reselect_1.createSelector(state => state.staticBase, (staticBase, manifest) => `${staticBase}/widgets.js`);
const selectThemes = reselect_1.createSelector(state => state.config.ui, ui => components_1.themes.getThemes(ui));
function mapProps(state) {
    const location = state.routing.locationBeforeTransitions;
    return {
        base: state.base,
        hash: location.hash,
        pathname: location.pathname,
        query: location.query,
        widgetSrc: selectWidgetSrc(state),
        widgetState: {
            themes: selectThemes(state),
            base: state.base,
            pool: pool_1.flat(state)
        }
    };
}
function mapDispatch(dispatch) {
    return redux_1.bindActionCreators({ scrollTo: actions_1.scrollTo }, dispatch);
}
exports.mapDispatch = mapDispatch;
exports.default = react_redux_1.connect(mapProps, mapDispatch)(components_1.Markdown);


/***/ }),

/***/ "./src/app/containers/message.js":
/*!***************************************!*\
  !*** ./src/app/containers/message.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
const reselect_1 = __webpack_require__(/*! reselect */ "../../node_modules/reselect/lib/index.js");
const behaviours_1 = __webpack_require__(/*! ../behaviours */ "./src/app/behaviours.js");
const message_1 = __importDefault(__webpack_require__(/*! ../components/message */ "./src/app/components/message.js"));
const demo = __importStar(__webpack_require__(/*! ../selectors/demo */ "./src/app/selectors/demo.js"));
exports.default = react_redux_1.connect(mapState)(behaviours_1.skippable(message_1.default));
const selectLines = reselect_1.createSelector(state => state.messages, demo.selectSrc, (messages, src) => (messages[src] || "").split("\n").filter(Boolean));
const selectMessage = reselect_1.createSelector(selectLines, lines => lines
    .slice(0, 2)
    .map(l => l.trim())
    .join("\n"));
const selectDetails = reselect_1.createSelector(selectLines, lines => {
    if (lines.length <= 2) {
        return "";
    }
    return lines.join("\n");
});
const selectActive = reselect_1.createSelector(selectMessage, message => typeof message === "string" && message !== "");
function mapState(state) {
    return {
        active: selectActive(state),
        message: selectMessage(state),
        details: selectDetails(state),
        summary: "Details"
    };
}


/***/ }),

/***/ "./src/app/containers/navigation.js":
/*!******************************************!*\
  !*** ./src/app/containers/navigation.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = __importDefault(__webpack_require__(/*! url */ "../../node_modules/url/url.js"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
const react_router_redux_1 = __webpack_require__(/*! react-router-redux */ "../../node_modules/react-router-redux/lib/index.js");
const redux_1 = __webpack_require__(/*! redux */ "../../node_modules/redux/es/index.js");
const components_1 = __webpack_require__(/*! @patternplate/components */ "../../components/legacy/index.js");
const actions_1 = __webpack_require__(/*! ../actions */ "./src/app/actions/index.js");
const navigation_1 = __importDefault(__webpack_require__(/*! ../selectors/navigation */ "./src/app/selectors/navigation.js"));
const docs_1 = __importDefault(__webpack_require__(/*! ../selectors/docs */ "./src/app/selectors/docs.js"));
exports.default = react_redux_1.connect(mapProps, mapDispatch)(components_1.MainNavigation);
exports.NavigationHeader = components_1.MainNavigation.NavigationHeader;
exports.NavigationToolbar = components_1.MainNavigation.NavigationToolbar;
function mapProps(state) {
    return {
        active: state.id,
        docs: docs_1.default(state),
        componentsEnabled: state.componentsEnabled,
        navigation: navigation_1.default(state),
        query: state.routing.locationBeforeTransitions.query,
    };
}
function mapDispatch(dispatch) {
    return redux_1.bindActionCreators({
        onItemClick(e) {
            e.preventDefault();
            if (!e.currentTarget.href) {
                return { type: "noop" };
            }
            const parsed = url_1.default.parse(e.currentTarget.href);
            return react_router_redux_1.push(`${parsed.pathname}?${parsed.query}`);
        },
        onLabelClick(query) {
            return actions_1.patchLocation({ query });
        }
    }, dispatch);
}


/***/ }),

/***/ "./src/app/containers/not-found.js":
/*!*****************************************!*\
  !*** ./src/app/containers/not-found.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
const documentation_1 = __importDefault(__webpack_require__(/*! ../components/documentation */ "./src/app/components/documentation.js"));
exports.default = react_redux_1.connect(state => {
    return {
        base: state.base,
        id: state.id,
        docs: {
            contents: selectNotFound(state)
        }
    };
})(documentation_1.default);
function selectNotFound(state) {
    const url = state.routing.locationBeforeTransitions.pathname;
    return `
# Nothing found

> Pretty sure these aren't the hypertext documents you are looking for.

We looked everywhere and could not find a single thing at \`${url}\`.

You might want to navigate back to [Home](/) or use the search.

---

Help us to make this message more helpful on [GitHub](https://github.com/patternplate/patternplate)
`;
}


/***/ }),

/***/ "./src/app/containers/pass-through.js":
/*!********************************************!*\
  !*** ./src/app/containers/pass-through.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
exports.default = react_redux_1.connect(mapProps)(PassThrough);
function PassThrough(props) {
    return (react_1.default.createElement("div", null, props.items.map(([name, value]) => (react_1.default.createElement("input", { type: "hidden", key: name, name: name, value: value })))));
}
function mapProps(state, own) {
    const { query } = state.routing.locationBeforeTransitions;
    const q = Object.assign({}, query, (own.query || {}));
    const items = lodash_1.entries(q).filter(([, value]) => value !== null);
    return { items };
}


/***/ }),

/***/ "./src/app/containers/pattern.js":
/*!***************************************!*\
  !*** ./src/app/containers/pattern.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
const redux_1 = __webpack_require__(/*! redux */ "../../node_modules/redux/es/index.js");
const reselect_1 = __webpack_require__(/*! reselect */ "../../node_modules/reselect/lib/index.js");
const demo = __importStar(__webpack_require__(/*! ../selectors/demo */ "./src/app/selectors/demo.js"));
const item_1 = __importStar(__webpack_require__(/*! ../selectors/item */ "./src/app/selectors/item.js")), items = item_1;
const pattern_1 = __importDefault(__webpack_require__(/*! ../components/pattern */ "./src/app/components/pattern/index.js"));
const actions = __importStar(__webpack_require__(/*! ../actions */ "./src/app/actions/index.js"));
class PatternContainer extends react_1.default.Component {
    render() {
        const { props } = this;
        return (react_1.default.createElement(pattern_1.default, { contents: props.contents, contentType: props.contentType, docs: props.docs, error: props.error, displayName: props.displayName, loading: props.loading, opacity: props.opacity, src: props.src, type: props.type, updated: props.updated, navigationEnabled: props.navigationEnabled, screenshot: props.screenshot }));
    }
}
exports.default = react_redux_1.connect(mapState, mapDispatch)(PatternContainer);
const DEFAULT_PATTERN_CONTENTS = `
# :construction: Add documentation

> Undocumented software could not exist just as well.
>
> – The Voice of Common Sense

Currently there is no readme data for this pattern folder.
We left this friendly reminder for you to change that soon.

---

Help us to make this message more helpful on [GitHub](https://github.com/patternplate/patternplate).
`;
const NOT_FOUND = `
# Pattern not found

> Pretty sure this is not the component you are looking for.

We looked everywhere and could not find a single thing.

You might want to navigate back to [Home](/) or use the search.

---

Help us to make this message more helpful on [GitHub](https://github.com/patternplate/patternplate)
`;
const selectDocs = reselect_1.createSelector(item_1.default, items.selectType, items.selectContents, (pattern, type, contents) => {
    if (pattern && pattern.type === 'folder') {
        return contents;
    }
    if (type === "not-found") {
        return NOT_FOUND;
    }
    return contents || DEFAULT_PATTERN_CONTENTS;
});
function mapState(state) {
    return {
        contents: state.demo.contents,
        displayName: items.selectName(state),
        docs: selectDocs(state),
        error: state.demo.error,
        loading: state.demo.fetching,
        opacity: state.opacity,
        src: demo.selectSrc(state),
        type: items.selectType(state),
        contentType: items.selectContentType(state),
        updated: state.demo.updated,
        navigationEnabled: state.navigationEnabled,
        screenshot: state.routing.locationBeforeTransitions.query.screenshot === "true"
    };
}
function mapDispatch(dispatch) {
    return redux_1.bindActionCreators({
        onChange: actions.loadPatternDemo
    }, dispatch);
}


/***/ }),

/***/ "./src/app/containers/search.js":
/*!**************************************!*\
  !*** ./src/app/containers/search.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
const redux_1 = __webpack_require__(/*! redux */ "../../node_modules/redux/es/index.js");
const search_1 = __importDefault(__webpack_require__(/*! ../components/search */ "./src/app/components/search.js"));
const actions = __importStar(__webpack_require__(/*! ../actions */ "./src/app/actions/index.js"));
const found = __importStar(__webpack_require__(/*! ../selectors/found */ "./src/app/selectors/found.js"));
function mapProps(state) {
    return {
        activeItem: found.selectActiveItem(state),
        base: state.base,
        components: found.selectPatterns(state).map((pattern) => {
            if (pattern.href.startsWith('.')) {
                return pattern;
            }
            pattern.href = `.${pattern.href}`;
            return pattern;
        }),
        docs: found.selectDocs(state).map((doc) => {
            if (doc.href.startsWith('.')) {
                return doc;
            }
            doc.href = `.${doc.href}`;
            return doc;
        }),
        enabled: state.searchEnabled,
        legend: found.selectLegend(state),
        shortcuts: state.shortcuts,
        suggestion: found.selectSuggestion(state),
        value: state.searchValue // The synchronous search input value
    };
}
function mapDispatch(dispatch) {
    return redux_1.bindActionCreators({
        onChange: e => actions.search({
            persist: false,
            perform: false,
            value: e.target.value
        }),
        onClear: () => actions.search({ persist: true, perform: true, value: "" }),
        onClick: () => actions.toggleSearch({ focus: true }),
        onClickOutside: () => actions.toggleSearch({ focus: false }),
        onClose: () => actions.toggleSearch({ focus: false }),
        onComplete: value => actions.search({ persist: true, perform: true, value }),
        onFocus: () => actions.toggleSearch({ focus: true }),
        onMount: () => actions.toggleSearch({ sync: true }),
        onNavigate: item => {
            const pathname = `${item.contentType}/${item.id}`;
            return actions.patchLocation({ pathname, query: { "search-enabled": false } });
        },
        onSubmit: e => {
            e.preventDefault();
            return actions.search({
                persist: true,
                perform: true,
                value: e.target.search.value
            });
        },
        onUp: () => actions.searchPreview("up"),
        onDown: () => actions.searchPreview("down"),
        onActivate: index => actions.searchPreview(index),
        onStop: e => actions.search({ persist: true, perform: true, value: e.target.value })
    }, dispatch);
}
exports.default = react_redux_1.connect(mapProps, mapDispatch)(search_1.default);


/***/ }),

/***/ "./src/app/containers/toggle-navigation.js":
/*!*************************************************!*\
  !*** ./src/app/containers/toggle-navigation.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const actions = __importStar(__webpack_require__(/*! ../actions */ "./src/app/actions/index.js"));
const toggle_navigation_1 = __importDefault(__webpack_require__(/*! ../components/toggle-navigation */ "./src/app/components/toggle-navigation.js"));
const with_toggle_1 = __importDefault(__webpack_require__(/*! ../connectors/with-toggle */ "./src/app/connectors/with-toggle.js"));
exports.default = with_toggle_1.default(actions.toggleNavigation)(toggle_navigation_1.default);


/***/ }),

/***/ "./src/app/containers/toggle-opacity.js":
/*!**********************************************!*\
  !*** ./src/app/containers/toggle-opacity.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const actions = __importStar(__webpack_require__(/*! ../actions */ "./src/app/actions/index.js"));
const toggle_opacity_1 = __importDefault(__webpack_require__(/*! ../components/toggle-opacity */ "./src/app/components/toggle-opacity.js"));
const with_toggle_1 = __importDefault(__webpack_require__(/*! ../connectors/with-toggle */ "./src/app/connectors/with-toggle.js"));
const with_active_for_pattern_1 = __importDefault(__webpack_require__(/*! ../connectors/with-active-for-pattern */ "./src/app/connectors/with-active-for-pattern.js"));
const behaviours_1 = __webpack_require__(/*! ../behaviours */ "./src/app/behaviours.js");
const OpacityToggle = with_toggle_1.default(actions.toggleOpacity)(toggle_opacity_1.default);
exports.default = with_active_for_pattern_1.default(behaviours_1.skippable(OpacityToggle));


/***/ }),

/***/ "./src/app/containers/toggle-search.js":
/*!*********************************************!*\
  !*** ./src/app/containers/toggle-search.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const actions = __importStar(__webpack_require__(/*! ../actions */ "./src/app/actions/index.js"));
const toggle_search_1 = __importDefault(__webpack_require__(/*! ../components/toggle-search */ "./src/app/components/toggle-search.js"));
const with_toggle_1 = __importDefault(__webpack_require__(/*! ../connectors/with-toggle */ "./src/app/connectors/with-toggle.js"));
exports.default = with_toggle_1.default(actions.toggleSearch)(toggle_search_1.default);


/***/ }),

/***/ "./src/app/containers/trigger-fullscreen.js":
/*!**************************************************!*\
  !*** ./src/app/containers/trigger-fullscreen.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const querystring_1 = __importDefault(__webpack_require__(/*! querystring */ "../../node_modules/querystring-es3/index.js"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
const trigger_fullscreen_1 = __importDefault(__webpack_require__(/*! ../components/trigger-fullscreen */ "./src/app/components/trigger-fullscreen.js"));
const with_active_for_pattern_1 = __importDefault(__webpack_require__(/*! ../connectors/with-active-for-pattern */ "./src/app/connectors/with-active-for-pattern.js"));
const with_id_1 = __importDefault(__webpack_require__(/*! ../connectors/with-id */ "./src/app/connectors/with-id.js"));
const demo = __importStar(__webpack_require__(/*! ../selectors/demo */ "./src/app/selectors/demo.js"));
const behaviours_1 = __webpack_require__(/*! ../behaviours */ "./src/app/behaviours.js");
const SkippableFullscreen = with_active_for_pattern_1.default(behaviours_1.skippable(trigger_fullscreen_1.default));
const mapProps = state => {
    const q = querystring_1.default.stringify({
        reload: state.isStatic ? null : true
    });
    return {
        href: `${demo.selectSrc(state)}?${q}`
    };
};
exports.default = react_redux_1.connect(mapProps)(with_id_1.default(SkippableFullscreen));


/***/ }),

/***/ "./src/app/reducers/base.js":
/*!**********************************!*\
  !*** ./src/app/reducers/base.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (state) => {
    return state;
};


/***/ }),

/***/ "./src/app/reducers/components-enabled.js":
/*!************************************************!*\
  !*** ./src/app/reducers/components-enabled.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const actions = __importStar(__webpack_require__(/*! ../actions */ "./src/app/actions/index.js"));
const toggle_1 = __importDefault(__webpack_require__(/*! ./toggle */ "./src/app/reducers/toggle.js"));
exports.default = toggle_1.default(actions.toggleComponentsEnabled, { defaultValue: false });


/***/ }),

/***/ "./src/app/reducers/config.js":
/*!************************************!*\
  !*** ./src/app/reducers/config.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __webpack_require__(/*! react-dom/server */ "../../node_modules/react-dom/server.browser.js");
const lodash_1 = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
const components_1 = __webpack_require__(/*! @patternplate/components */ "../../components/legacy/index.js");
exports.default = (state, action) => {
    let copy;
    switch (action.type) {
        case "LOAD_SCHEMA_SUCCESS": {
            copy = lodash_1.merge({}, action.payload.config);
            break;
        }
        default: {
            copy = lodash_1.merge({}, state);
        }
    }
    if (!copy.hasOwnProperty("ui")) {
        copy.ui = {};
    }
    const { ui } = copy;
    ui.renderedLogo = ui.hasOwnProperty("logo")
        ? server_1.renderToString(components_1.svg.render(components_1.svg.sanitize(components_1.svg.purge([components_1.svg.parse(ui.logo)]))[0]))
        : "";
    const favicon = ui.favicon || ui.logo;
    ui.renderedFavicon = global.document && favicon
        ? components_1.svg.png(favicon)
        : Promise.resolve("");
    return copy;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/app/reducers/connection.js":
/*!****************************************!*\
  !*** ./src/app/reducers/connection.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handle_dependent_actions_1 = __importDefault(__webpack_require__(/*! ../actions/handle-dependent-actions */ "./src/app/actions/handle-dependent-actions.js"));
exports.default = handle_dependent_actions_1.default({
    LISTEN_HEARTBEAT: (...args) => handle(...args),
    FETCHING: (...args) => handle(...args),
    ERROR_HEARTBEAT: () => "offline"
}, {
    defaultValue: "",
    dependencies: ["fetching"]
});
function handle(state = "loading", action, { fetching }) {
    return fetching ? "loading" : "loaded";
}


/***/ }),

/***/ "./src/app/reducers/demo.js":
/*!**********************************!*\
  !*** ./src/app/reducers/demo.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const DEFAULT = {
    error: null,
    fetching: false,
    id: null,
    contents: null,
    updated: null
};
function demo(state = DEFAULT, action) {
    switch (action.type) {
        case "LOAD_PATTERN_DEMO_START":
            return {
                error: null,
                fetching: true,
                id: action.payload.id,
                contents: state.contents,
                updated: state.updated
            };
        case "LOAD_PATTERN_DEMO_SUCCESS": {
            return {
                error: null,
                fetching: false,
                id: action.payload.id,
                contents: action.payload.contents,
                updated: !action.payload.force && state.contents === action.payload.contents && state.id === action.payload.id
                    ? state.updated
                    : Date.now()
            };
        }
        case "LOAD_PATTERN_DEMO_ERROR":
            return {
                error: true,
                fetching: false,
                id: action.payload.id,
                contents: null,
                updated: Date.now()
            };
        default:
            return state;
    }
}
exports.default = demo;


/***/ }),

/***/ "./src/app/reducers/depth.js":
/*!***********************************!*\
  !*** ./src/app/reducers/depth.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const redux_actions_1 = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");
function getDepth(pathname) {
    const fragments = pathname.split("/").filter(Boolean);
    const fragmentIndex = ["pattern", "doc"]
        .map(known => fragments.indexOf(known))
        .find(index => index !== -1);
    const index = fragmentIndex === null ? fragments.length : fragmentIndex;
    return fragments.slice(0, index).filter(Boolean).length;
}
exports.getDepth = getDepth;
exports.default = redux_actions_1.handleAction("@@router/LOCATION_CHANGE", {
    next(_, { payload: { pathname } }) {
        return getDepth(pathname);
    }
}, ".");


/***/ }),

/***/ "./src/app/reducers/fetching.js":
/*!**************************************!*\
  !*** ./src/app/reducers/fetching.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const promise_thunk_action_1 = __webpack_require__(/*! ../actions/promise-thunk-action */ "./src/app/actions/promise-thunk-action.js");
const actions_1 = __webpack_require__(/*! ../actions */ "./src/app/actions/index.js");
exports.default = promise_thunk_action_1.handlePromiseThunkAction(actions_1.loadSchema, {
    start() {
        return true;
    },
    success() {
        return false;
    },
    error() {
        return false;
    }
}, {
    defaultValue: false
});


/***/ }),

/***/ "./src/app/reducers/hide-enabled.js":
/*!******************************************!*\
  !*** ./src/app/reducers/hide-enabled.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const actions = __importStar(__webpack_require__(/*! ../actions */ "./src/app/actions/index.js"));
const toggle_1 = __importDefault(__webpack_require__(/*! ./toggle */ "./src/app/reducers/toggle.js"));
exports.default = toggle_1.default(actions.toggleHide, { defaultValue: true });


/***/ }),

/***/ "./src/app/reducers/id.js":
/*!********************************!*\
  !*** ./src/app/reducers/id.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_id_by_pathname_1 = __importDefault(__webpack_require__(/*! ../utils/get-id-by-pathname */ "./src/app/utils/get-id-by-pathname.js"));
const handle_dependent_actions_1 = __importDefault(__webpack_require__(/*! ../actions/handle-dependent-actions */ "./src/app/actions/handle-dependent-actions.js"));
function handler(_, { payload }, { base }) {
    return get_id_by_pathname_1.default(payload.pathname, base) || "/";
}
exports.default = handle_dependent_actions_1.default({
    "@@router/LOCATION_CHANGE": handler
}, {
    dependencies: ["base"]
});


/***/ }),

/***/ "./src/app/reducers/index.js":
/*!***********************************!*\
  !*** ./src/app/reducers/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __importDefault(__webpack_require__(/*! ./base */ "./src/app/reducers/base.js"));
const config_1 = __importDefault(__webpack_require__(/*! ./config */ "./src/app/reducers/config.js"));
const connection_1 = __importDefault(__webpack_require__(/*! ./connection */ "./src/app/reducers/connection.js"));
const depth_1 = __importDefault(__webpack_require__(/*! ./depth */ "./src/app/reducers/depth.js"));
const demo_1 = __importDefault(__webpack_require__(/*! ./demo */ "./src/app/reducers/demo.js"));
const fetching_1 = __importDefault(__webpack_require__(/*! ./fetching */ "./src/app/reducers/fetching.js"));
const id_1 = __importDefault(__webpack_require__(/*! ./id */ "./src/app/reducers/id.js"));
const is_static_1 = __importDefault(__webpack_require__(/*! ./is-static */ "./src/app/reducers/is-static.js"));
const messages_1 = __importDefault(__webpack_require__(/*! ./messages */ "./src/app/reducers/messages.js"));
const navigation_enabled_1 = __importDefault(__webpack_require__(/*! ./navigation-enabled */ "./src/app/reducers/navigation-enabled.js"));
const opacity_1 = __importDefault(__webpack_require__(/*! ./opacity */ "./src/app/reducers/opacity.js"));
const components_enabled_1 = __importDefault(__webpack_require__(/*! ./components-enabled */ "./src/app/reducers/components-enabled.js"));
const search_1 = __importDefault(__webpack_require__(/*! ./search */ "./src/app/reducers/search.js"));
const search_enabled_1 = __importDefault(__webpack_require__(/*! ./search-enabled */ "./src/app/reducers/search-enabled.js"));
const search_preview_1 = __importDefault(__webpack_require__(/*! ./search-preview */ "./src/app/reducers/search-preview.js"));
const search_value_1 = __importDefault(__webpack_require__(/*! ./search-value */ "./src/app/reducers/search-value.js"));
const schema_1 = __importDefault(__webpack_require__(/*! ./schema */ "./src/app/reducers/schema.js"));
const shortcuts_1 = __importDefault(__webpack_require__(/*! ./shortcuts */ "./src/app/reducers/shortcuts.js"));
const theme_1 = __importDefault(__webpack_require__(/*! ./theme */ "./src/app/reducers/theme.js"));
const hide_enabled_1 = __importDefault(__webpack_require__(/*! ./hide-enabled */ "./src/app/reducers/hide-enabled.js"));
const window_1 = __importDefault(__webpack_require__(/*! ./window */ "./src/app/reducers/window.js"));
const ident = state => state || {};
const getDependencies = (reducer = {}) => reducer.dependencies || [];
exports.default = {
    base: base_1.default,
    config: config_1.default,
    connection: connection_1.default,
    demo: demo_1.default,
    depth: depth_1.default,
    fetching: fetching_1.default,
    hideEnabled: hide_enabled_1.default,
    id: id_1.default,
    isStatic: is_static_1.default,
    manifest: ident,
    messages: messages_1.default,
    navigationEnabled: navigation_enabled_1.default,
    opacity: opacity_1.default,
    componentsEnabled: components_enabled_1.default,
    schema: schema_1.default,
    search: search_1.default,
    searchEnabled: search_enabled_1.default,
    searchPreview: search_preview_1.default,
    searchValue: search_value_1.default,
    shortcuts: shortcuts_1.default,
    startBase: ident,
    staticBase: ident,
    theme: theme_1.default,
    window: window_1.default
};
exports.dependencies = {
    connection: getDependencies(connection_1.default)
};


/***/ }),

/***/ "./src/app/reducers/is-static.js":
/*!***************************************!*\
  !*** ./src/app/reducers/is-static.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (state = false) => state;


/***/ }),

/***/ "./src/app/reducers/messages.js":
/*!**************************************!*\
  !*** ./src/app/reducers/messages.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
exports.default = (state = {}, action) => {
    switch (action.type) {
        case "LOAD_PATTERN_DEMO_SUCCESS":
            if (action.payload.id in state) {
                return lodash_1.omit(state, action.payload.id);
            }
            return state;
        case "LOAD_PATTERN_DEMO_ERROR":
            return lodash_1.merge({}, state, { [action.payload.id]: action.payload.error });
        default:
            return state;
    }
};


/***/ }),

/***/ "./src/app/reducers/navigation-enabled.js":
/*!************************************************!*\
  !*** ./src/app/reducers/navigation-enabled.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const actions = __importStar(__webpack_require__(/*! ../actions */ "./src/app/actions/index.js"));
const toggle_1 = __importDefault(__webpack_require__(/*! ./toggle */ "./src/app/reducers/toggle.js"));
exports.default = toggle_1.default(actions.toggleNavigation, { defaultValue: true });


/***/ }),

/***/ "./src/app/reducers/opacity.js":
/*!*************************************!*\
  !*** ./src/app/reducers/opacity.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const actions = __importStar(__webpack_require__(/*! ../actions */ "./src/app/actions/index.js"));
const toggle_1 = __importDefault(__webpack_require__(/*! ./toggle */ "./src/app/reducers/toggle.js"));
exports.default = toggle_1.default(actions.toggleOpacity, { defaultValue: false });


/***/ }),

/***/ "./src/app/reducers/schema.js":
/*!************************************!*\
  !*** ./src/app/reducers/schema.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actions_1 = __webpack_require__(/*! ../actions */ "./src/app/actions/index.js");
const promise_thunk_action_1 = __webpack_require__(/*! ../actions/promise-thunk-action */ "./src/app/actions/promise-thunk-action.js");
exports.default = promise_thunk_action_1.handlePromiseThunkAction(actions_1.loadSchema, {
    success(state, action) {
        return action.payload;
    }
});


/***/ }),

/***/ "./src/app/reducers/search-enabled.js":
/*!********************************************!*\
  !*** ./src/app/reducers/search-enabled.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const actions = __importStar(__webpack_require__(/*! ../actions */ "./src/app/actions/index.js"));
const toggle_1 = __importDefault(__webpack_require__(/*! ./toggle */ "./src/app/reducers/toggle.js"));
exports.default = toggle_1.default(actions.toggleSearch, { defaultValue: false });


/***/ }),

/***/ "./src/app/reducers/search-preview.js":
/*!********************************************!*\
  !*** ./src/app/reducers/search-preview.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const redux_actions_1 = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");
const defaultValue = 0;
function onPreviewLocationChange(_, action) {
    const index = Number(action.payload.query["search-preview"]);
    return isNaN(index) ? 0 : Math.max(0, index);
}
function onPerformSeach() {
    return 0;
}
exports.default = redux_actions_1.handleActions({
    "@@router/LOCATION_CHANGE": onPreviewLocationChange,
    PERFORM_SEARCH: onPerformSeach
}, defaultValue);


/***/ }),

/***/ "./src/app/reducers/search-value.js":
/*!******************************************!*\
  !*** ./src/app/reducers/search-value.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const redux_actions_1 = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");
const defaultValue = "";
function onSetSearchLocationChange(_, action) {
    return action.payload.query.search;
}
function onSetSearch(_, action) {
    return action.payload;
}
function onPerformSearch(_, action) {
    return action.payload;
}
exports.default = redux_actions_1.handleActions({
    "@@router/LOCATION_CHANGE": onSetSearchLocationChange,
    SET_SEARCH: onSetSearch,
    PERFORM_SEARCH: onPerformSearch
}, defaultValue);


/***/ }),

/***/ "./src/app/reducers/search.js":
/*!************************************!*\
  !*** ./src/app/reducers/search.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const redux_actions_1 = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");
const defaultValue = "";
function onSearchLocationChange(_, action) {
    return action.payload.query.search;
}
function onPerformSeach(_, action) {
    return action.payload;
}
exports.default = redux_actions_1.handleActions({
    "@@router/LOCATION_CHANGE": onSearchLocationChange,
    PERFORM_SEARCH: onPerformSeach
}, defaultValue);


/***/ }),

/***/ "./src/app/reducers/shortcuts.js":
/*!***************************************!*\
  !*** ./src/app/reducers/shortcuts.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = state => state;


/***/ }),

/***/ "./src/app/reducers/theme.js":
/*!***********************************!*\
  !*** ./src/app/reducers/theme.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const redux_actions_1 = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");
const defaultValue = "light";
const locationChangeHandler = (_, { payload }) => {
    return payload.query.theme || defaultValue;
};
exports.default = redux_actions_1.handleActions({
    "@@router/LOCATION_CHANGE": locationChangeHandler
}, defaultValue);


/***/ }),

/***/ "./src/app/reducers/toggle.js":
/*!************************************!*\
  !*** ./src/app/reducers/toggle.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(__webpack_require__(/*! assert */ "../../node_modules/assert/assert.js"));
const redux_actions_1 = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");
exports.default = (action, options = {}) => {
    assert_1.default(typeof action === "function", `toggle needs an action to create a handler for, received ${action} of type ${typeof action}`);
    return redux_actions_1.handleActions({
        "@@router/LOCATION_CHANGE": (_, { payload }) => {
            if (!(action.key in payload.query)) {
                return options.defaultValue;
            }
            return payload.query[action.key] === "true";
        }
    }, options.defaultValue);
};


/***/ }),

/***/ "./src/app/reducers/window.js":
/*!************************************!*\
  !*** ./src/app/reducers/window.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
const redux_actions_1 = __webpack_require__(/*! redux-actions */ "../../node_modules/redux-actions/lib/index.js");
const actions_1 = __webpack_require__(/*! ../actions */ "./src/app/actions/index.js");
const defaultValue = {
    height: 0,
    width: 0
};
exports.default = redux_actions_1.handleActions({
    [actions_1.windowResize]: onWindowResize
}, defaultValue);
function onWindowResize(state, { payload }) {
    const next = { width: payload.width, height: payload.height };
    if (!lodash_1.isEqual(next, state)) {
        return next;
    }
    return state;
}


/***/ }),

/***/ "./src/app/routes.js":
/*!***************************!*\
  !*** ./src/app/routes.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const react_router_1 = __webpack_require__(/*! @marionebl/react-router */ "../../node_modules/@marionebl/react-router/lib/index.js");
const application_1 = __importDefault(__webpack_require__(/*! ./containers/application */ "./src/app/containers/application.js"));
const pattern_1 = __importDefault(__webpack_require__(/*! ./containers/pattern */ "./src/app/containers/pattern.js"));
const documentation_1 = __importDefault(__webpack_require__(/*! ./containers/documentation */ "./src/app/containers/documentation.js"));
const not_found_1 = __importDefault(__webpack_require__(/*! ./containers/not-found */ "./src/app/containers/not-found.js"));
function default_1(store) {
    const state = store.getState();
    return (react_1.default.createElement(react_router_1.Route, { path: state.base, component: application_1.default },
        react_1.default.createElement(react_router_1.IndexRoute, { component: documentation_1.default }),
        react_1.default.createElement(react_router_1.Route, { path: "pattern/*", component: pattern_1.default }),
        react_1.default.createElement(react_router_1.Route, { path: "doc/*", component: documentation_1.default }),
        react_1.default.createElement(react_router_1.Route, { path: "*", component: not_found_1.default })));
}
exports.default = default_1;


/***/ }),

/***/ "./src/app/selectors/demo.js":
/*!***********************************!*\
  !*** ./src/app/selectors/demo.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reselect_1 = __webpack_require__(/*! reselect */ "../../node_modules/reselect/lib/index.js");
const item_1 = __importDefault(__webpack_require__(/*! ./item */ "./src/app/selectors/item.js"));
exports.selectSrc = reselect_1.createSelector(item_1.default, state => state.base, (item, base) => {
    if (!item) {
        return null;
    }
    if (item.contentType !== "pattern") {
        return null;
    }
    return `${prefix(base)}/api/demo/${item.id}.html`;
});
function prefix(base) {
    return base.charAt(base.length - 1) === "/"
        ? base.slice(0, base.length - 1)
        : base;
}


/***/ }),

/***/ "./src/app/selectors/docs.js":
/*!***********************************!*\
  !*** ./src/app/selectors/docs.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const search_1 = __webpack_require__(/*! @patternplate/search */ "../search/index.js");
const lodash_1 = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
const reselect_1 = __webpack_require__(/*! reselect */ "../../node_modules/reselect/lib/index.js");
const navigation_1 = __webpack_require__(/*! ../selectors/navigation */ "./src/app/selectors/navigation.js");
const tree_1 = __webpack_require__(/*! ./tree */ "./src/app/selectors/tree.js");
const sd = reselect_1.createSelector(state => state.schema.docs, state => state.id, state => state.hideEnabled, state => state.routing.locationBeforeTransitions, state => state.base, () => () => [], (tree, id, hide, location, base, search) => {
    const context = { hide, id, prefix: "doc", location, base, search };
    return tree_1.flatten(tree_1.sanitize(lodash_1.merge({}, tree), context)).filter(item => item.type !== "folder");
});
const selectFlatPool = reselect_1.createSelector(sd, navigation_1.flat, state => ({
    hide: state.hideEnabled,
    id: state.id,
    location: state.routing.locationBeforeTransitions,
    base: state.base,
    prefix: "doc",
    search: () => []
}), (docs, nav, context) => {
    return docs
        .map(d => tree_1.enrich(d, context))
        .concat(nav)
        .filter(item => Boolean(item.id) && Boolean(item.contentType));
});
const selectSubSearch = reselect_1.createSelector(selectFlatPool, flatPool => {
    const search = search_1.createSearch(flatPool);
    return term => {
        const matches = search(term);
        return matches.map(item => flatPool.find(p => p.id === item));
    };
});
const selectDocsTree = reselect_1.createSelector(state => state.schema.docs, state => state.id, state => state.hideEnabled, state => state.routing.locationBeforeTransitions, state => state.base, selectSubSearch, (tree, id, hide, location, base, search) => {
    const context = { hide, id, prefix: "doc", location, base, search };
    return tree_1.sanitize(lodash_1.merge({}, tree), context);
});
const selectFirstItem = reselect_1.createSelector(selectDocsTree, (tree) => {
    const list = tree_1.flatten(tree);
    return list ? list[0] : null;
});
const selectQueries = reselect_1.createSelector(selectDocsTree, tree => tree_1.flatten(tree)
    .map(item => (item.manifest.options || {}).query)
    .filter(Boolean));
const selectQueried = reselect_1.createSelector(selectDocsTree, selectQueries, (tree, queries) => {
    const search = search_1.createSearch(tree_1.flatten(tree));
    return queries.reduce((acc, query) => {
        return acc.concat(search(query).filter(r => acc.indexOf(r) === -1));
    }, []);
});
const selectDocs = reselect_1.createSelector(selectDocsTree, selectFirstItem, selectQueried, state => state.id, (tree, first, queried, id) => {
    tree.children = tree.children.filter(child => child.type === "folder" || queried.indexOf(child.id) === -1);
    if (id === '/' && first) {
        first.active = true;
    }
    return tree;
});
exports.default = selectDocs;
exports.flat = reselect_1.createSelector(selectDocs, tree_1.flatten);


/***/ }),

/***/ "./src/app/selectors/found.js":
/*!************************************!*\
  !*** ./src/app/selectors/found.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const search_1 = __webpack_require__(/*! @patternplate/search */ "../search/index.js");
const lodash_1 = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
const reselect_1 = __webpack_require__(/*! reselect */ "../../node_modules/reselect/lib/index.js");
const semver_1 = __importDefault(__webpack_require__(/*! semver */ "./node_modules/semver/semver.js"));
const pool_1 = __webpack_require__(/*! ./pool */ "./src/app/selectors/pool.js");
const FLAGS = {
    alpha: 0,
    beta: 1,
    rc: 2,
    stable: 3,
    deprecated: 4
};
const FIELDS = [
    /* {
      type: "field",
      key: "depends",
      value: "depends",
      description: "patterns depending on id",
      operators: ["=", "!=", "^=", "~="]
    }, */
    {
        type: "field",
        key: "version",
        value: "version",
        description: "having version of [value]",
        operators: ["=", "!=", ">", ">=", "<", "<=", "^=", "~="]
    },
    {
        type: "field",
        key: "flag",
        value: "flag",
        description: "being flagged as [value]",
        operators: ["=", "!=", ">", ">=", "<", "<=", "^=", "~="]
    },
    /* {
      type: "field",
      key: "provides",
      value: "provides",
      description: "patterns providing for id",
      operators: ["=", "!=", "^=", "~="]
    }, */
    {
        type: "field",
        key: "tags",
        value: "tags",
        description: "having a tag of [value]",
        operators: ["=", "!=", "^=", "~="]
    },
    {
        type: "field",
        key: "path",
        value: "path",
        description: "saved at [value] relative to patternplate.config.js",
        operators: ["=", "*="]
    },
    {
        type: "field",
        key: "is",
        value: "is",
        description: "being of type [value]",
        operators: ["=", "!="]
    },
    {
        type: "field",
        key: "has",
        value: "has",
        description: "having data of [value]",
        operators: ["=", "!="]
    },
];
const OPERATORS = [
    {
        type: "op",
        key: "=",
        description: "exact match"
    },
    {
        type: "op",
        key: "!=",
        description: "negated match"
    },
    {
        type: "op",
        key: ">",
        description: "greater than"
    },
    {
        type: "op",
        key: ">=",
        description: "greater than or equal"
    },
    {
        type: "op",
        key: "<",
        description: "lesser than"
    },
    {
        type: "op",
        key: "<=",
        description: "lesser than or equal"
    },
    {
        type: "op",
        key: "^=",
        description: "starts with"
    },
    {
        type: "op",
        key: "~=",
        description: "contains"
    },
    {
        type: "op",
        key: "*=",
        description: "matches"
    }
];
const selectSearch = reselect_1.createSelector(pool_1.flat, search_1.createSearch);
const selectMatches = reselect_1.createSelector(selectSearch, state => state.search, (search, queryString) => {
    if (typeof queryString !== "string" || queryString.length < 3) {
        return [];
    }
    return search(queryString);
});
const selectParsedValue = reselect_1.createSelector(state => state.searchValue, search => search_1.Query.parse(search));
const selectLastQuery = reselect_1.createSelector(selectParsedValue, parsed => last(parsed));
function last(query) {
    switch (query.type) {
        case "string":
            return query.value;
        case "and":
        case "or":
        default: {
            const q = query || {};
            const values = q.values || [];
            const cand = values[values.length - 1];
            return cand ? last(cand) : "";
        }
    }
}
const selectFields = reselect_1.createSelector(selectLastQuery, query => FIELDS.filter(f => f.value.startsWith(query)));
const selectFieldHit = reselect_1.createSelector(state => state.searchValue, selectLastQuery, (value, query) => {
    if (query.length === 0) {
        return null;
    }
    return FIELDS.find(f => query.startsWith(f.value));
});
const selectParsedQuery = reselect_1.createSelector(selectLastQuery, query => search_1.Term.parse(query));
const selectOps = reselect_1.createSelector(selectParsedQuery, selectFieldHit, (parsed, hit) => {
    if (!hit) {
        return [];
    }
    return hit.operators
        .map(o => OPERATORS.find(op => op.key === o))
        .filter(o => !parsed.operators || o.key.includes(parsed.operators))
        .map(o => {
        o.value = `${hit.value}${o.key}`;
        return o;
    });
});
const selectOpsHit = reselect_1.createSelector(selectParsedQuery, selectOps, (query, ops) => {
    return ops.find(i => {
        if (query.negated) {
            return i.key === `!${query.operators}`;
        }
        return i.key === query.operators;
    });
});
exports.selectFound = reselect_1.createSelector(pool_1.flat, selectMatches, (pool, matches) => {
    const sorted = lodash_1.uniqBy(lodash_1.sortBy(matches.map(match => pool.find(p => p.id === match)), "contentType"), "id");
    return sorted.map((s, i) => {
        s.index = i;
        return s;
    });
});
exports.selectPatterns = reselect_1.createSelector(exports.selectFound, found => found.filter(f => f.contentType === "pattern"));
const selectPatternPool = reselect_1.createSelector(pool_1.flat, pool => pool.filter(f => f.contentType === "pattern"));
const selectOptions = reselect_1.createSelector(selectPatternPool, selectParsedQuery, selectFieldHit, selectOpsHit, (patterns, parsed, field, op) => {
    if (!field || !op) {
        return [];
    }
    switch (field.key) {
        case "has":
            return [
                {
                    type: "quality",
                    key: "docs",
                    value: [field.key, op.key, "docs"].join(""),
                    description: "colocated markdown"
                },
                /* {
                  type: "quality",
                  key: "dependencies",
                  value: [field.key, op.key, "dependencies"].join(""),
                  description: "patterns with dependencies"
                },
                {
                  type: "quality",
                  key: "dependents",
                  value: [field.key, op.key, "dependents"].join(""),
                  description: "patterns with dependents"
                }, */
                {
                    type: "quality",
                    key: "flag",
                    value: [field.key, op.key, "flag"].join(""),
                    description: "flag specified"
                },
                {
                    type: "quality",
                    key: "version",
                    value: [field.key, op.key, "version"].join(""),
                    description: "version specified"
                },
                {
                    type: "quality",
                    key: "description",
                    value: [field.key, op.key, "description"].join(""),
                    description: "description provided"
                },
                {
                    type: "quality",
                    key: "displayName",
                    value: [field.key, op.key, "displayName"].join(""),
                    description: "display name provided"
                },
                {
                    type: "quality",
                    key: "tags",
                    value: [field.key, op.key, "tags"].join(""),
                    description: "tag attached"
                }
            ];
        case "depends":
        case "provides":
            return patterns
                .filter(item => item.id.startsWith(parsed.value || ""))
                .map(item => {
                return {
                    type: "pattern",
                    key: item.id,
                    value: [field.key, op.key, item.id].join(""),
                    description: `${item.id}`
                };
            });
        case "tags":
            return lodash_1.uniq(lodash_1.flatten(patterns.map(item => item.manifest.tags)))
                .filter(Boolean)
                .map(tag => {
                return {
                    type: "tag",
                    key: tag,
                    value: [field.key, op.key, tag].join(""),
                    description: tag
                };
            });
        case "version": {
            const versions = lodash_1.uniqBy(patterns
                .filter(item => item.manifest.version.startsWith(parsed.value || ""))
                .map(item => item.manifest.version))
                .filter(version => semver_1.default.valid(version))
                .sort((a, b) => (semver_1.default.gt(a, b) ? 1 : -1));
            return versions.map(v => {
                return {
                    type: "version",
                    key: v,
                    value: [field.key, op.key, v].join(""),
                    description: `${v}`
                };
            });
        }
        case "flag": {
            const flags = lodash_1.uniqBy(patterns
                .filter(item => item.manifest.flag.startsWith(parsed.value || ""))
                .map(item => item.manifest.flag))
                .filter(flag => typeof flag === "string")
                .sort((a, b) => {
                const delta = (FLAGS[a] || 0) - (FLAGS[b] || 0);
                return delta === 0 ? a.localeCompare(b) : delta;
            });
            return flags.map(f => {
                return {
                    type: "flag",
                    key: f,
                    value: [field.key, op.key, f].join(""),
                    description: `${f}`
                };
            });
        }
        case "is":
            return [
                {
                    type: "is",
                    key: "pattern",
                    value: [field.key, op.key, "pattern"].join(""),
                    description: "is a pattern"
                },
                {
                    type: "is",
                    key: "doc",
                    value: [field.key, op.key, "doc"].join(""),
                    description: "is a doc"
                }
            ];
        default:
            return [];
    }
});
const selectOptionsHit = reselect_1.createSelector(selectParsedQuery, selectOptions, (query, ops) => ops.some(o => o.value === query.raw));
exports.selectLegend = reselect_1.createSelector(selectParsedValue, selectParsedQuery, selectFields, selectFieldHit, selectOps, selectOpsHit, selectOptions, selectOptionsHit, (parsedValue, parsed, fields, fieldHit, ops, opsHit, options, optionsHit) => {
    if (!fieldHit) {
        return {
            name: "Fields",
            items: fields
        };
    }
    if (!opsHit && !parsed.value) {
        return {
            name: "Operators",
            items: ops
        };
    }
    if (!optionsHit && fieldHit && opsHit) {
        return {
            name: fieldHit.key,
            items: options
        };
    }
    return {
        name: "",
        items: []
    };
});
exports.selectDocs = reselect_1.createSelector(exports.selectFound, found => found.filter(f => f.contentType === "doc"));
exports.selectSuggestion = reselect_1.createSelector(state => state.searchValue, pool_1.flat, exports.selectLegend, (search, pool, legend) => {
    if (typeof search !== "string" || search.length === 0) {
        return "";
    }
    const match = pool.find(m => [m.id, m.name, (m.manifest || {}).displayName].some(k => k && k.startsWith(search)));
    if (match) {
        return ([match.id, match.name, match.manifest.displayName].find(k => k && k.startsWith(search)) || "");
    }
    const lmatch = (legend.items || []).find(i => i.value.startsWith(search));
    return lmatch ? lmatch.value : null;
});
exports.selectActiveItem = reselect_1.createSelector(state => state, exports.selectFound, state => state.searchPreview, (state, found, preview) => {
    const index = Math.min(preview, found.length - 1);
    const item = found[index];
    return item
        ? Object.assign({}, item, {
            index,
            dependents: [],
            dependencies: [] // rel("dependencies")
        })
        : item;
});


/***/ }),

/***/ "./src/app/selectors/item.js":
/*!***********************************!*\
  !*** ./src/app/selectors/item.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reselect_1 = __webpack_require__(/*! reselect */ "../../node_modules/reselect/lib/index.js");
const docs_1 = __webpack_require__(/*! ./docs */ "./src/app/selectors/docs.js");
const pool_1 = __webpack_require__(/*! ./pool */ "./src/app/selectors/pool.js");
const relation_1 = __importDefault(__webpack_require__(/*! ./relation */ "./src/app/selectors/relation.js"));
const selectVirtual = reselect_1.createSelector(docs_1.flat, docs => {
    return docs.filter(d => {
        const { manifest } = d;
        const { options = {} } = manifest;
        const { query = "" } = options;
        return Boolean(query);
    });
});
const selectItem = reselect_1.createSelector(pool_1.flat, state => state.id, (pool, id) => {
    const item = pool.find(item => id === `${item.contentType}/${item.id}`);
    if (item) {
        return item;
    }
    if (id === '/') {
        return pool[0];
    }
});
exports.default = selectItem;
const filter = hidden => {
    return hidden
        ? item => (item.manifest.options || {}).hidden !== true
        : i => i;
};
const selectFilter = reselect_1.createSelector(state => state.hide, hide => filter(hide));
const relation = key => relation_1.default(key, selectItem, selectFilter);
exports.selectDependencies = relation("dependencies");
exports.selectDependents = relation("dependents");
exports.selectManifest = reselect_1.createSelector(selectItem, item => (item ? JSON.stringify(item.manifest, null, "  ") : ""));
exports.selectContentType = reselect_1.createSelector(selectItem, item => (item ? item.contentType : ""));
exports.selectType = reselect_1.createSelector(selectItem, item => (item ? item.type : ""));
exports.selectActive = reselect_1.createSelector(selectItem, state => state.searchEnabled, (item, search) => !search && item !== null && typeof item !== "undefined");
exports.selectIcon = reselect_1.createSelector(selectItem, item => (item ? item.manifest.icon || item.type : ""));
exports.selectName = reselect_1.createSelector(selectItem, item => (item ? item.manifest.displayName : ""));
exports.selectTags = reselect_1.createSelector(selectItem, item => (item ? item.manifest.tags || [] : []));
exports.selectVersion = reselect_1.createSelector(selectItem, item => (item ? item.manifest.version : ""));
exports.selectFlag = reselect_1.createSelector(selectItem, item => (item ? item.manifest.flag : ""));
exports.selectId = reselect_1.createSelector(selectItem, item => (item ? item.id : ""));
exports.selectContents = reselect_1.createSelector(selectItem, item => {
    if (!item) {
        return null;
    }
    return typeof item.contents === "string" ? item.contents : null;
});
exports.selectDescription = reselect_1.createSelector(selectItem, item => (item ? item.manifest.description : ""));


/***/ }),

/***/ "./src/app/selectors/navigation.js":
/*!*****************************************!*\
  !*** ./src/app/selectors/navigation.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
const reselect_1 = __webpack_require__(/*! reselect */ "../../node_modules/reselect/lib/index.js");
const tree_1 = __webpack_require__(/*! ./tree */ "./src/app/selectors/tree.js");
const navigation = reselect_1.createSelector(state => state.schema.meta, state => state.id, state => state.hideEnabled, state => state.routing.locationBeforeTransitions, state => state.base, (tree, id, hide, location, base) => {
    const context = { base, hide, id, prefix: "pattern", location };
    return tree_1.sanitize(lodash_1.merge({}, tree), context);
});
exports.default = navigation;
exports.flat = reselect_1.createSelector(navigation, tree_1.flatten);


/***/ }),

/***/ "./src/app/selectors/pool.js":
/*!***********************************!*\
  !*** ./src/app/selectors/pool.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const reselect_1 = __webpack_require__(/*! reselect */ "../../node_modules/reselect/lib/index.js");
const docs_1 = __webpack_require__(/*! ../selectors/docs */ "./src/app/selectors/docs.js");
const navigation_1 = __webpack_require__(/*! ../selectors/navigation */ "./src/app/selectors/navigation.js");
const tree_1 = __webpack_require__(/*! ../selectors/tree */ "./src/app/selectors/tree.js");
exports.selectFlatPool = reselect_1.createSelector(docs_1.flat, navigation_1.flat, state => ({
    hide: state.hideEnabled,
    id: state.id,
    location: state.routing.locationBeforeTransitions,
    base: state.base,
    prefix: "doc",
    search: () => []
}), (docs, nav, context) => {
    const enriched = flatten(docs.map(d => {
        return tree_1.enrich(d, context);
    }));
    return enriched
        .concat(nav)
        .filter(item => Boolean(item.id) && Boolean(item.contentType));
});
const selectSearch = reselect_1.createSelector(exports.selectFlatPool, flatPool => {
    const search = () => [];
    return term => {
        const matches = search(term);
        return matches.map(item => flatPool.find(p => p.id === item));
    };
});
const selectPool = reselect_1.createSelector(docs_1.flat, navigation_1.flat, state => ({
    hide: state.hideEnabled,
    id: state.id,
    location: state.routing.locationBeforeTransitions,
    base: state.base,
    prefix: "doc",
    search: selectSearch(state)
}), (docs, nav, context) => {
    const enriched = flatten(docs.map(d => {
        return tree_1.enrich(d, context);
    }));
    return enriched
        .concat(nav)
        .filter(item => Boolean(item.id) && Boolean(item.contentType));
});
function flatten(tree, initial = []) {
    return tree.reduce((acc, item) => {
        acc.push(item);
        if (Array.isArray(item.children)) {
            flatten(item.children, acc);
        }
        return acc;
    }, initial);
}
exports.default = selectPool;
exports.flat = reselect_1.createSelector(docs_1.flat, navigation_1.flat, (docs, nav) => flatten(docs.concat(nav)).filter(item => item.type === "item"));


/***/ }),

/***/ "./src/app/selectors/relation.js":
/*!***************************************!*\
  !*** ./src/app/selectors/relation.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reselect_1 = __webpack_require__(/*! reselect */ "../../node_modules/reselect/lib/index.js");
const navigation_1 = __importDefault(__webpack_require__(/*! ./navigation */ "./src/app/selectors/navigation.js"));
const find_1 = __importDefault(__webpack_require__(/*! ../utils/find */ "./src/app/utils/find.js"));
function createRelationSelector(key, selectItem) {
    return reselect_1.createSelector(navigation_1.default, selectItem, (patterns, item) => {
        if (!item) {
            return [];
        }
        return (item[key] || [])
            .map(id => find_1.default(patterns, `pattern/${id}.html`, { type: "pattern" }))
            .filter(Boolean);
    });
}
exports.default = createRelationSelector;


/***/ }),

/***/ "./src/app/selectors/tree.js":
/*!***********************************!*\
  !*** ./src/app/selectors/tree.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(__webpack_require__(/*! path */ "../../node_modules/path-browserify/index.js"));
const querystring_1 = __importDefault(__webpack_require__(/*! querystring */ "../../node_modules/querystring-es3/index.js"));
const url_1 = __importDefault(__webpack_require__(/*! url */ "../../node_modules/url/url.js"));
const WEIGHTS = {
    folder: 0,
    doc: 1,
    pattern: 2
};
function flatten(tree) {
    return tree.children;
}
exports.flatten = flatten;
function sanitize(tree, context) {
    const { id, config = {}, prefix, base, location, search } = context;
    tree.children = tree.children
        .map(child => {
        const enriched = enrich(child, {
            base,
            location,
            id,
            config,
            prefix,
            search,
        });
        return enriched.children
            ? sanitize(enriched, context)
            : enriched;
    })
        .sort((a, b) => {
        const order = ((((a.manifest || {}).options || {}).order || 0) - (((b.manifest || {}).options || {}).order || 0));
        const weight = (WEIGHTS[a.type] || 0) - (WEIGHTS[b.type] || 0);
        const comp = a.manifest.displayName.localeCompare(b.manifest.displayName);
        if (order !== 0) {
            return order;
        }
        if (weight !== 0) {
            return weight;
        }
        return comp;
    });
    return enrich(tree, { base, location, id, config, prefix, search });
}
exports.sanitize = sanitize;
function enrich(child, context) {
    const { id, prefix, search } = context;
    const childid = [child.contentType, child.id].join('/');
    child.active = (childid === id) || `doc/${context.parent}/${childid}` === id;
    const parsed = url_1.default.parse(child.href || path_1.default.join(prefix, child.id || child.path));
    const q = typeof parsed.query === "string"
        ? querystring_1.default.parse(parsed.query)
        : parsed.query;
    child.href = url_1.default.format({
        pathname: pre(context.base || '', parsed.pathname || ''),
        query: Object.assign({}, context.location.query, q)
    });
    child.warnings = child.warnings || [];
    child.type = child.contentType === "doc" && typeof ((child.manifest).options || {}).query === "string"
        ? "folder"
        : "item";
    if (child.type === "folder") {
        child.children = search(child.manifest.options.query)
            .filter(item => item.id !== child.id);
    }
    if (child.manifest &&
        child.type === "pattern" &&
        (child.manifest.flag === "alpha" || child.manifest.flag === "deprecated")) {
        child.warnings.push({
            type: "flag",
            value: child.manifest.flag,
            message: `${child.manifest.displayName} is flagged as ${child.manifest
                .flag}.`
        });
    }
    return child;
}
exports.enrich = enrich;
function pre(base, pathname) {
    const b = norm(base);
    const p = norm(pathname);
    if (p.startsWith(b)) {
        return `/${p}`;
    }
    return `/${[norm(base), norm(pathname)].join("/")}`;
}
function norm(p) {
    return p.split("/").filter(Boolean).join("/");
}


/***/ }),

/***/ "./src/app/shortcuts.js":
/*!******************************!*\
  !*** ./src/app/shortcuts.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const actions = __importStar(__webpack_require__(/*! ./actions */ "./src/app/actions/index.js"));
const shortcut_1 = __importDefault(__webpack_require__(/*! ./utils/shortcut */ "./src/app/utils/shortcut.js"));
exports.default = createShortcuts;
function createShortcuts() {
    const bind = store => {
        Object.keys(bind).forEach(name => {
            bind[name].bind(store);
        });
    };
    bind.toggleConsole = new shortcut_1.default({
        character: "c",
        description: props => `${props.enabled ? "Hide" : "Show"} console`,
        action: actions.toggleConsole
    });
    bind.toggleDoc = new shortcut_1.default({
        character: "d",
        description: () => `Open documentation for this pattern`,
        action: actions.toggleDoc
    });
    bind.openDocumentation = new shortcut_1.default({
        character: "7",
        description: () => `Navigate back to / route`,
        action: actions.openDocumentation
    });
    bind.openFullscreen = new shortcut_1.default({
        character: "f",
        description: () => `Open fullscreen view`,
        action: actions.openFullscreen
    });
    bind.toggleHide = new shortcut_1.default({
        character: "h",
        description: props => `${props.enabled ? "Show" : "Hide"} hidden items`,
        action: actions.toggleHide
    });
    bind.info = new shortcut_1.default({
        character: "i",
        description: props => `${props.enabled ? "Hide" : "Show"} pattern infos`,
        action: actions.toggleInfo
    });
    bind.toggleOpacity = new shortcut_1.default({
        character: "o",
        description: props => `${props.enabled ? "Hide" : "Show"} opacity indicators`,
        action: actions.toggleOpacity
    });
    bind.toggleShortcuts = new shortcut_1.default({
        character: "k",
        description: props => `${props.enabled ? "Hide" : "Show"} keyboard shortcuts`,
        action: actions.toggleKeyboardShortcuts
    });
    bind.toggleRulers = new shortcut_1.default({
        character: "l",
        description: props => `${props.enabled ? "Hide" : "Show"} rulers`,
        action: actions.toggleRulers
    });
    bind.toggleCode = new shortcut_1.default({
        character: "m",
        description: props => `${props.enabled ? "Hide" : "Show"} pattern code`,
        action: actions.toggleCode
    });
    bind.toggleNavigation = new shortcut_1.default({
        character: "n",
        description: props => `${props.enabled ? "Hide" : "Show"} navigation`,
        action: actions.toggleNavigation
    });
    bind.toggleNetwork = new shortcut_1.default({
        character: "d",
        description: props => `${props.enabled ? "Hide" : "Show"} dependency network`,
        action: actions.toggleNetwork
    });
    const reload = () => actions.reload({ reloadTime: Date.now() });
    reload.type = actions.reload.type;
    reload.key = actions.reload.key;
    reload.property = actions.reload.property;
    bind.reload = new shortcut_1.default({
        character: "r",
        description: () => `Force sync`,
        action: reload
    });
    bind.toggleSearch = new shortcut_1.default({
        character: "space",
        description: props => `${props.enabled ? "Disable" : "Enable"} search`,
        action: actions.toggleSearch
    });
    bind.toggleTheme = new shortcut_1.default({
        character: "t",
        description: "Toggle active theme",
        action: actions.toggleTheme
    });
    bind.close = new shortcut_1.default({
        character: "esc",
        modifiers: [],
        action: actions.closeAllTheThings
    });
    bind.up = new shortcut_1.default({
        character: "arrow-up",
        action: () => actions.arrow("up")
    });
    bind.right = new shortcut_1.default({
        character: "arrow-right",
        action: () => actions.arrow("right")
    });
    bind.down = new shortcut_1.default({
        character: "arrow-down",
        action: () => actions.arrow("down")
    });
    bind.left = new shortcut_1.default({
        character: "arrow-left",
        action: () => actions.arrow("left")
    });
    return bind;
}


/***/ }),

/***/ "./src/app/store.js":
/*!**************************!*\
  !*** ./src/app/store.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = __webpack_require__(/*! redux */ "../../node_modules/redux/es/index.js");
const react_router_redux_1 = __webpack_require__(/*! react-router-redux */ "../../node_modules/react-router-redux/lib/index.js");
const redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ "../../node_modules/redux-thunk/lib/index.js"));
const topologically_combine_reducers_1 = __importDefault(__webpack_require__(/*! topologically-combine-reducers */ "../../node_modules/topologically-combine-reducers/lib/index.js"));
const actions = __importStar(__webpack_require__(/*! ./actions */ "./src/app/actions/index.js"));
const shortcuts_1 = __importDefault(__webpack_require__(/*! ./shortcuts */ "./src/app/shortcuts.js"));
const reducers_1 = __importStar(__webpack_require__(/*! ./reducers */ "./src/app/reducers/index.js"));
function configureStore(history, initial) {
    const reducer = hydrateable(topologically_combine_reducers_1.default(Object.assign({ routing: react_router_redux_1.routerReducer }, reducers_1.default), reducers_1.dependencies));
    const enhance = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux_1.compose;
    const middlewares = [redux_thunk_1.default, react_router_redux_1.routerMiddleware(history)];
    const middleware = redux_1.applyMiddleware(...middlewares);
    const shortcuts = shortcuts_1.default();
    const store = redux_1.createStore(reducer, Object.assign({}, initial, { shortcuts }), enhance(middleware));
    listen(store, { url: "/api" });
    shortcuts(store);
    return store;
}
exports.default = configureStore;
function hydrateable(reducer) {
    return (state, action) => {
        switch (action.type) {
            case "@@APPLY_STATE":
                return reducer(action.payload, action);
            default:
                return reducer(state, action);
        }
    };
}
function listen(store, options) {
    store.dispatch(actions.listen({ url: options.url }));
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/app/utils/fetch.js":
/*!********************************!*\
  !*** ./src/app/utils/fetch.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! isomorphic-fetch */ "../../node_modules/isomorphic-fetch/fetch-npm-browserify.js");
const lodash_1 = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
exports.default = fetch;
const defaultHeaders = {
    headers: { accept: "application/json" },
    credentials: "include"
};
function fetch(uri, userHeaders) {
    const headers = userHeaders === false ? defaultHeaders : lodash_1.merge({}, userHeaders, defaultHeaders);
    return global.fetch(uri, headers);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/app/utils/find.js":
/*!*******************************!*\
  !*** ./src/app/utils/find.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = find;
function find(tree, id, { type }) {
    if (id === "/") {
        return tree;
    }
    if (!id || !id.startsWith(`${type}/`)) {
        return null;
    }
    const reg = new RegExp(`^${type}/`);
    const frags = id
        .replace(reg, "")
        .split("/")
        .filter(Boolean);
    const match = tree.children.find(child => {
        console.log(child);
        (child.path || []).every((s, i) => frags[i] === s) &&
            (child.type === type || child.type === "folder");
    });
    return match;
}


/***/ }),

/***/ "./src/app/utils/get-id-by-pathname.js":
/*!*********************************************!*\
  !*** ./src/app/utils/get-id-by-pathname.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(__webpack_require__(/*! path */ "../../node_modules/path-browserify/index.js"));
const url_query_1 = __importDefault(__webpack_require__(/*! ./url-query */ "./src/app/utils/url-query.js"));
function getIdByPathname(pathname, base = "/") {
    const parsed = url_query_1.default.parse(pathname);
    const fragments = (path_1.default.posix || path_1.default)
        .relative(base, parsed.pathname)
        .split("/");
    const last = fragments.pop();
    return [...fragments, path_1.default.basename(last, path_1.default.extname(last))].join("/");
}
exports.default = getIdByPathname;


/***/ }),

/***/ "./src/app/utils/shortcut.js":
/*!***********************************!*\
  !*** ./src/app/utils/shortcut.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const arson_1 = __importDefault(__webpack_require__(/*! arson */ "../../node_modules/arson/index.js"));
const CODES = {
    "arrow-up": 38,
    "arrow-right": 39,
    "arrow-down": 40,
    "arrow-left": 37,
    esc: 27,
    space: 32,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    h: 72,
    i: 73,
    o: 79,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    r: 82,
    t: 84
};
class Shortcut {
    constructor({ action, character, description, modifiers }) {
        this.character = character;
        this.code = CODES[character];
        this.action = action;
        this.key = this.action.key;
        this.active = "document" in global;
        this.description = description;
        this.modifiers = modifiers || ["ctrlKey", "altKey"];
        this.bind = this.bind.bind(this);
    }
    bind(store) {
        if (!this.active) {
            return;
        }
        const onKeyPress = e => {
            if (!this.modifiers.every(m => e[m])) {
                return;
            }
            if (e.keyCode !== this.code) {
                return false;
            }
            store.dispatch(this.action());
        };
        global.addEventListener("message", e => {
            try {
                const message = arson_1.default.parse(e.data);
                if (message.type === "keydown") {
                    onKeyPress(message.payload);
                }
            }
            catch (err) {
            }
        }, false);
        global.addEventListener("keydown", e => {
            const prevent = onKeyPress({
                altKey: e.altKey,
                ctrlKey: e.ctrlKey,
                keyCode: (e.data || e).keyCode,
            });
            if (prevent) {
                e.preventDefault();
            }
        });
    }
    toString() {
        const keys = [...this.modifiers, this.character].map(c => c.replace("Key", ""));
        return `[${keys.join("+")}]`;
    }
}
exports.default = Shortcut;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/app/utils/url-query.js":
/*!************************************!*\
  !*** ./src/app/utils/url-query.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(__webpack_require__(/*! path */ "../../node_modules/path-browserify/index.js"));
const url_1 = __importDefault(__webpack_require__(/*! url */ "../../node_modules/url/url.js"));
const lodash_1 = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
function has(token) {
    return item => lodash_1.includes(item, token);
}
function div(token) {
    return item => item.split(token).slice(0, 2);
}
function not(fn) {
    return (...args) => !fn(...args);
}
function shove(input) {
    const index = input.length - 1;
    if (input[index] === "/") {
        return input.slice(0, index);
    }
    return input;
}
function format(parsed = {}) {
    const query = lodash_1.entries(parsed.query || {}).reduce((result, entry) => [...result, entry.join("--")], []);
    const extension = path_1.default.extname(parsed.pathname || "");
    const before = extension
        ? path_1.default.dirname(parsed.pathname)
        : shove(parsed.pathname);
    const after = extension ? path_1.default.basename(parsed.pathname) : "";
    return [before, ...query, after].filter(Boolean).join("/");
}
exports.format = format;
function parse(urlPath = "") {
    const parsed = url_1.default.parse(urlPath);
    const raw = parsed.pathname || "";
    const pathname = raw
        .split("/")
        .filter(not(has("--")))
        .join("/");
    const query = raw
        .split("/")
        .filter(has("--"))
        .map(div("--"))
        .reduce((registry, entry) => {
        const [key, value] = entry;
        registry[key] = value;
        return registry;
    }, {});
    return {
        pathname,
        query
    };
}
exports.parse = parse;
exports.default = { parse, format };


/***/ }),

/***/ "./src/client.js":
/*!***********************!*\
  !*** ./src/client.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const ARSON = __webpack_require__(/*! arson */ "../../node_modules/arson/index.js");
const url = __webpack_require__(/*! url */ "../../node_modules/url/url.js");
const fetch = __webpack_require__(/*! isomorphic-fetch */ "../../node_modules/isomorphic-fetch/fetch-npm-browserify.js");
const platform = __webpack_require__(/*! platform */ "../../node_modules/platform/platform.js");
const router = __webpack_require__(/*! ./app/client */ "./src/app/client.js").default;
const { merge } = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
const { document } = global;
main().catch(err => {
    console.error(err);
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const slot = document.querySelector('[data-application-el="patternplate"]');
        const vault = document.querySelector('[data-application-state="patternplate"]');
        const data = yield getData(vault);
        const beforeMount = data.isStatic ?
            () => {
                const scrollTop = document.querySelector('[data-scrolling]').scrollTop;
                slot.innerHTML = '';
                return { scrollTop };
            }
            : () => ({});
        const afterMount = data.isStatic ?
            ctx => {
                const scrollElAfter = document.querySelector('[data-scrolling]');
                scrollElAfter.scrollTop = ctx.scrollTop;
                document.body.setAttribute("data-mounted", true);
            }
            : () => {
                document.body.setAttribute("data-mounted", true);
                return {};
            };
        const ctx = beforeMount();
        router(data, slot);
        afterMount(ctx);
    });
}
function getData(vault) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = ARSON.parse(decodeURIComponent(vault.textContent));
        const schema = yield getStateData(data.base);
        return merge(data, getPlatformData(), getWindowData(), {
            schema,
            navigation: schema.meta
        });
    });
}
function getStateData(base) {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield fetch(`${prefix(base)}/api/state.json`, { credentials: "include" })).json();
    });
}
function prefix(base) {
    return base.charAt(base.length - 1) === "/"
        ? base.slice(0, base.length - 1)
        : base;
}
function getPlatformData() {
    return {
        clientRuntimeName: platform.name,
        clientRuntimeVersion: platform.version,
        clientOsName: platform.os.name,
        clientOsVersion: platform.os.version
    };
}
function getWindowData() {
    return {
        window: {
            width: global.innerWidth,
            height: global.innerHeight
        }
    };
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ })

/******/ });
//# sourceMappingURL=client.6436dac8d6f8e187626e.js.map