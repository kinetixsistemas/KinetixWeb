(function () {
  var script = document.currentScript;
  var data = script ? script.dataset : {};
  var CFG = {
    name: data.name || 'Kinetix Sistemas',
    number: data.number || '584125353950',
    ga: data.ga || '',
    clarity: data.clarity || '',
    meta: data.meta || '',
    tiktok: data.tiktok || '',
    gtm: data.gtm || ''
  };
  var CONSENT_KEY = 'kinetix-cookie-consent';
  var ATTR_KEY = 'kinetix-attribution';
  var loaded = {};

  function read(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }

  function consent() {
    var value = read(CONSENT_KEY);
    return value === 'accepted' || value === 'rejected' ? value : null;
  }

  function attribution() {
    try {
      var stored = window.sessionStorage.getItem(ATTR_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch (e) { return null; }
  }

  function captureAttribution() {
    try {
      if (window.sessionStorage.getItem(ATTR_KEY)) return;
      var params = new URLSearchParams(window.location.search);
      window.sessionStorage.setItem(ATTR_KEY, JSON.stringify({
        utm_source: params.get('utm_source') || undefined,
        utm_medium: params.get('utm_medium') || undefined,
        utm_campaign: params.get('utm_campaign') || undefined,
        utm_content: params.get('utm_content') || undefined,
        referrer: document.referrer || undefined,
        landing_page: window.location.pathname,
        captured_at: new Date().toISOString()
      }));
    } catch (e) {}
  }

  function track(name, params) {
    if (consent() !== 'accepted') return;
    params = params || {};
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event: name }, params));
    if (typeof window.gtag === 'function') window.gtag('event', name, params);
    if (typeof window.fbq === 'function') window.fbq('trackCustom', name, params);
    if (window.ttq && typeof window.ttq.track === 'function') window.ttq.track(name, params);
  }

  function buildWhatsApp(params) {
    var url = new URL('https://wa.me/' + CFG.number);
    var parts = ['Hola ' + CFG.name + ','];
    parts.push(params && params.service ? 'me interesa ' + params.service : 'quiero solicitar información');
    if (params && params.page_path) parts.push('vi la página: ' + params.page_path);
    var attr = attribution();
    if (attr && attr.utm_source) parts.push('origen: ' + attr.utm_source);
    url.searchParams.set('text', parts.join(' ').replace(/\s+/g, ' ').trim() + '.');
    return url.toString();
  }

  function inject(id, src, inline) {
    if (loaded[id]) return;
    loaded[id] = true;
    if (src) {
      var external = document.createElement('script');
      external.async = true;
      external.src = src;
      document.head.appendChild(external);
    }
    if (inline) {
      var tag = document.createElement('script');
      tag.text = inline;
      document.head.appendChild(tag);
    }
  }

  function loadIntegrations() {
    if (consent() !== 'accepted') return;
    if (CFG.gtm) inject('gtm', '', '(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src="https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);})(window,document,"script","dataLayer","' + CFG.gtm + '");');
    if (CFG.ga) {
      inject('ga-src', 'https://www.googletagmanager.com/gtag/js?id=' + CFG.ga, '');
      inject('ga-config', '', 'gtag("config","' + CFG.ga + '",{send_page_view:false});gtag("consent","update",{analytics_storage:"granted",ad_storage:"granted",ad_user_data:"granted",ad_personalization:"granted",functionality_storage:"granted",personalization_storage:"granted"});');
    }
    if (CFG.clarity) inject('clarity', '', '(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","' + CFG.clarity + '");');
    if (CFG.meta) inject('meta', '', '!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s);}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","' + CFG.meta + '");fbq("track","PageView");');
    if (CFG.tiktok) inject('tiktok', '', '(function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.load=function(e){var n="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{};ttq._i[e]=[];var a=d.createElement("script");a.type="text/javascript";a.async=true;a.src=n;var r=d.getElementsByTagName("script")[0];r.parentNode.insertBefore(a,r)};ttq.load("' + CFG.tiktok + '");ttq.page();})(window,document,"ttq");');
  }

  function save(value) {
    try { window.localStorage.setItem(CONSENT_KEY, value); } catch (e) {}
    var banner = document.getElementById('kinetix-cookie-banner');
    if (banner) banner.remove();
    window.dispatchEvent(new Event('kinetix-consent-change'));
  }

  function renderBanner() {
    if (consent() !== null || document.getElementById('kinetix-cookie-banner')) return;
    var banner = document.createElement('div');
    banner.id = 'kinetix-cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Preferencias de cookies');
    banner.className = 'fixed bottom-4 left-4 right-4 z-[70] mx-auto max-w-2xl rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-5 shadow-xl md:bottom-6';
    banner.innerHTML = '<p class="text-sm leading-relaxed text-[var(--text-secondary)]">Usamos cookies para medir el tráfico y mejorar la experiencia. Ninguna herramienta de analítica se activa antes de tu decisión. Puedes aceptar, rechazar o configurarlas. Más información en <a href="/cookies" class="font-semibold text-[var(--primary)] underline">Cookies</a> y <a href="/privacidad" class="font-semibold text-[var(--primary)] underline">Privacidad</a>.</p><label id="kinetix-consent-config" class="mt-4 hidden items-center gap-3 text-sm text-[var(--text-primary)]"><input id="kinetix-analytics-toggle" type="checkbox" checked class="h-4 w-4 accent-[var(--emerald)]"> Permitir cookies de analítica y medición</label><div class="mt-5 flex flex-wrap gap-3"><button id="kinetix-accept" type="button" class="rounded-full bg-[var(--emerald)] px-5 py-2.5 text-sm font-bold text-[#04120c] hover:bg-[var(--emerald-hover)]">Aceptar</button><button id="kinetix-reject" type="button" class="rounded-full border border-[var(--surface-border)] px-5 py-2.5 text-sm font-bold text-[var(--text-primary)] hover:border-[var(--emerald)]">Rechazar</button><button id="kinetix-configure" type="button" class="rounded-full px-5 py-2.5 text-sm font-bold text-[var(--text-secondary)] underline">Configurar</button></div>';
    document.body.appendChild(banner);
    document.getElementById('kinetix-accept').addEventListener('click', function () {
      var toggle = document.getElementById('kinetix-analytics-toggle');
      save(toggle && !toggle.checked ? 'rejected' : 'accepted');
    });
    document.getElementById('kinetix-reject').addEventListener('click', function () { save('rejected'); });
    document.getElementById('kinetix-configure').addEventListener('click', function () {
      var config = document.getElementById('kinetix-consent-config');
      config.classList.toggle('hidden');
      config.classList.toggle('flex');
    });
  }

  document.addEventListener('click', function (event) {
    var element = event.target && event.target.closest ? event.target.closest('[data-track-event]') : null;
    if (!element) return;
    var name = element.getAttribute('data-track-event');
    var params = {};
    try { params = JSON.parse(element.getAttribute('data-track-params') || '{}'); } catch (e) { params = {}; }
    if (name === 'whatsapp_click') element.setAttribute('href', buildWhatsApp(params));
    track(name, params);
  });

  var triggered = {};
  window.addEventListener('scroll', function () {
    var scrollable = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollable <= 0) return;
    var percent = Math.round((window.scrollY / scrollable) * 100);
    [25, 50, 75, 90].forEach(function (threshold) {
      if (percent >= threshold && !triggered[threshold]) {
        triggered[threshold] = true;
        track('scroll_depth', { percent: percent, page_path: window.location.pathname });
      }
    });
  }, { passive: true });

  window.addEventListener('kinetix-consent-change', loadIntegrations);
  captureAttribution();
  loadIntegrations();
  renderBanner();
})();
