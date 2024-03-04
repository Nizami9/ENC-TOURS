export const localeCodes = ["en","de","du"]

export const localeMessages = {
}

export const additionalMessages = Object({"de":[],"du":[],})

export const resolveNuxtI18nOptions = async (context) => {
  const nuxtI18nOptions = Object({})
  const vueI18nOptionsLoader = async (context) => Object({"legacy":false,"locale":"en","messages": Object({"en":{
  "home": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Home"])};fn.source="Home";return fn;})(),
  "aboutUs": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["About Us"])};fn.source="About Us";return fn;})(),
  "contacts": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Contacts"])};fn.source="Contacts";return fn;})(),
  "services": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Services"])};fn.source="Services";return fn;})(),
  "mainPageH1": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["enc cultural and heritage tours"])};fn.source="enc cultural and heritage tours";return fn;})()
},"de":{
  "home": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Startseite"])};fn.source="Startseite";return fn;})(),
  "aboutUs": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Über Uns"])};fn.source="Über Uns";return fn;})(),
  "contact": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kontakt"])};fn.source="Kontakt";return fn;})(),
  "services": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Dienstleistungen"])};fn.source="Dienstleistungen";return fn;})(),
  "mainPageH1": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["ENC Kultur- und Kulturerbetouren"])};fn.source="ENC Kultur- und Kulturerbetouren";return fn;})()
},"es":{
  "home": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Startpagina"])};fn.source="Startpagina";return fn;})(),
  "aboutUs": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sobre nosotros"])};fn.source="Sobre nosotros";return fn;})(),
  "contact": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Contactos"])};fn.source="Contactos";return fn;})(),
  "services": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Servicios"])};fn.source="Servicios";return fn;})(),
  "mainPageH1": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["ENC Tours culturales y patrimoniales"])};fn.source="ENC Tours culturales y patrimoniales";return fn;})()
},"it":{
  "home": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Startpagina"])};fn.source="Startpagina";return fn;})(),
  "aboutUs": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sobre nosotros"])};fn.source="Sobre nosotros";return fn;})(),
  "contact": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Contactos"])};fn.source="Contactos";return fn;})(),
  "services": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Servicios"])};fn.source="Servicios";return fn;})(),
  "mainPageH1": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["ENC Tours culturales y patrimoniales"])};fn.source="ENC Tours culturales y patrimoniales";return fn;})()
},}),})
  nuxtI18nOptions.vueI18n = await vueI18nOptionsLoader(context)
  nuxtI18nOptions.locales = ["en","de","du"]
  nuxtI18nOptions.defaultLocale = "en"
  nuxtI18nOptions.defaultDirection = "ltr"
  nuxtI18nOptions.routesNameSeparator = "___"
  nuxtI18nOptions.trailingSlash = false
  nuxtI18nOptions.defaultLocaleRouteNameSuffix = "default"
  nuxtI18nOptions.strategy = "prefix_except_default"
  nuxtI18nOptions.lazy = false
  nuxtI18nOptions.langDir = null
  nuxtI18nOptions.rootRedirect = null
  nuxtI18nOptions.detectBrowserLanguage = Object({"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true})
  nuxtI18nOptions.differentDomains = false
  nuxtI18nOptions.baseUrl = ""
  nuxtI18nOptions.dynamicRouteParams = false
  nuxtI18nOptions.customRoutes = "page"
  nuxtI18nOptions.pages = Object({})
  nuxtI18nOptions.skipSettingLocaleOnNavigate = false
  nuxtI18nOptions.onBeforeLanguageSwitch = (() => "")
  nuxtI18nOptions.onLanguageSwitched = (() => null)
  nuxtI18nOptions.types = undefined
  nuxtI18nOptions.debug = false
  return nuxtI18nOptions
}

export const nuxtI18nOptionsDefault = Object({vueI18n: undefined,locales: [],defaultLocale: "",defaultDirection: "ltr",routesNameSeparator: "___",trailingSlash: false,defaultLocaleRouteNameSuffix: "default",strategy: "prefix_except_default",lazy: false,langDir: null,rootRedirect: null,detectBrowserLanguage: Object({"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true}),differentDomains: false,baseUrl: "",dynamicRouteParams: false,customRoutes: "page",pages: Object({}),skipSettingLocaleOnNavigate: false,onBeforeLanguageSwitch: (() => ""),onLanguageSwitched: (() => null),types: undefined,debug: false})

export const nuxtI18nInternalOptions = Object({__normalizedLocales: [Object({"code":"en","iso":"en"}),Object({"code":"de","iso":"de"}),Object({"code":"du","iso":"du"})]})
export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const isSSG = false
export const isSSR = true
