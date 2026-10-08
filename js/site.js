/* ==========================================================
   Masha Catering Service - shared site script
   Edit the SITE, TESTIMONIALS and GALLERY blocks to update details.
   ========================================================== */
(function () {
  'use strict';

  var SITE = {
    name: 'Masha Catering Service',
    wa: '917845212086',            // WhatsApp number (country code + number, no +)
    phone: '+917845212086',
    phone2: '+919600082016',
    phoneShow: '+91 78452 12086',
    phone2Show: '+91 96000 82016',
    email: 'mashacateringservice@gmail.com',
    address: 'Hameem Puram, 7th Street, Melapalayam, Palayamkottai, Tirunelveli, Tamil Nadu - 627005',
    fssai: '22426282000682',
    udyam: 'UDYAM-TN-18-0107593',
    facebook: '#',   // put your Facebook page link
    instagram: '#'   // put your Instagram page link
  };

  /* ---------- TESTIMONIALS ----------
     IMPORTANT: the entries below are SAMPLE text so you can see the layout.
     Replace them with REAL feedback from your customers (with their permission),
     then set SHOW_SAMPLE_NOTE to false. */
  var SHOW_SAMPLE_NOTE = false;
  // Add REAL customer reviews here (with permission), e.g.
  // { name: 'Customer Name', event: 'Wedding', stars: 5, text: 'Their feedback...' }
  var TESTIMONIALS = [];

  // GALLERY: add your photos in the folder  img/gallery/  and write the file name here (one per item).
  // Row 1 of the auto-scroll = first half, row 2 = second half. The Gallery page grid shows all of them.
  var GALLERY = ['gallery/wedding.jpg', 'gallery/lunch.jpg', 'gallery/b-0.jpg', 'gallery/party.jpg',
                 'gallery/breakfast.jpg', 'gallery/bulk.jpg', 'gallery/b-01.jpg', 'gallery/family.jpg',
                 'gallery/dinner.jpg', 'gallery/festival.jpg', 'gallery/banner-1.jpg', 'gallery/snacks.jpg',
                 'gallery/b-1.jpg', 'gallery/about-1.jpg', 'gallery/about-2.jpg'];

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var esc = function (t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); };
  var page = location.pathname.split('/').pop() || 'index.html';

  var IC = {
    wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 22v-8.2h2.8l.5-3.4h-3.3V8.3c0-1 .3-1.6 1.7-1.6h1.7V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.6H7.5v3.4h2.8V22h3.2z"/></svg>',
    call: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"/></svg>'
  };
  function ico(k) { return '<span class="svgi">' + IC[k] + '</span>'; }

  var LINKS = [['index.html', 'Home'], ['about.html', 'About Us'], ['services.html', 'Services'],
               ['menu.html', 'Menu'], ['gallery.html', 'Gallery'], ['contact.html', 'Contact Us']];

  /* ---------- Shared markup ---------- */
  var logo = '<a href="index.html" class="logo" aria-label="' + SITE.name + '"><img class="logo-img" src="img/logo-mark.png" alt="' + SITE.name + ' logo" width="110" height="70"></a>';

  var topbar = '<div class="topbar"><div class="container"><div class="tb-left">' +
    '<span><i class="fa fa-map-marker-alt"></i>Melapalayam, Tirunelveli</span>' +
    '<a href="tel:' + SITE.phone + '"><i class="fa fa-phone-alt"></i>' + SITE.phoneShow + '</a>' +
    '<a href="tel:' + SITE.phone2 + '" class="hide-m"><i class="fa fa-phone-alt"></i>' + SITE.phone2Show + '</a></div>' +
    
    '<div class="tb-right"><a href="https://wa.me/' + SITE.wa + '" aria-label="WhatsApp" target="_blank" rel="noopener">' + ico('wa') + '</a>' +
    '<a href="' + SITE.facebook + '" aria-label="Facebook">' + ico('fb') + '</a>' +
    '<a href="' + SITE.instagram + '" aria-label="Instagram">' + ico('ig') + '</a></div></div></div>';

  var nav = '<header class="nav" id="nav"><div class="container nav-in">' + logo +
    '<button class="burger" id="burger" aria-label="Open menu"><i class="fa fa-bars"></i></button>' +
    '<nav class="menu" id="menu">' +
    LINKS.map(function (l) { return '<a href="' + l[0] + '" class="' + (page === l[0] ? 'active' : '') + '">' + l[1] + '</a>'; }).join('') +
    '<a href="#" class="btn btn-gold" data-quote>Get Quote</a></nav></div></header>';

  var footer = '<footer><div class="container"><div class="f-grid">' +
    '<div>' + logo + '<p style="margin-top:20px; text-align:justify;">Professional event catering from the heart of Melapalayam, Tirunelveli. Fresh, hygienic and flavourful food, served with genuine hospitality, because every celebration deserves a memorable meal.</p>' +
    '<div class="f-reg"><i class="fa fa-shield-alt" style="color:var(--gold);margin-right:8px"></i>FSSAI Reg. No: ' + SITE.fssai +
    '<br><i class="fa fa-award" style="color:var(--gold);margin-right:8px"></i>Udyam Reg. No: ' + SITE.udyam +
    '<br><i class="fa fa-file-alt" style="color:var(--gold);margin-right:8px"></i><a href="img/udyam-1.jpg" data-cert="0">View MSME (Udyam) certificate</a></div>' +
    '<div class="socials"><a href="https://wa.me/' + SITE.wa + '" aria-label="WhatsApp" target="_blank" rel="noopener">' + ico('wa') + '</a>' +
    '<a href="' + SITE.facebook + '" aria-label="Facebook">' + ico('fb') + '</a>' +
    '<a href="' + SITE.instagram + '" aria-label="Instagram">' + ico('ig') + '</a></div></div>' +
    '<div><h4>Quick Links</h4><ul>' +
    LINKS.map(function (l) { return '<li><i class="fa fa-angle-right"></i><a href="' + l[0] + '">' + l[1] + '</a></li>'; }).join('') +
    '</ul></div>' +
    '<div><h4>Contact Us</h4><ul>' +
    
    '<li><i class="fa fa-phone-alt"></i><a href="tel:' + SITE.phone + '">' + SITE.phoneShow + '</a></li>' +
    '<li><i class="fa fa-phone-alt"></i><a href="tel:' + SITE.phone2 + '">' + SITE.phone2Show + '</a></li>' +
    '<li><i class="fa fa-envelope"></i><a href="mailto:' + SITE.email + '">' + SITE.email + '</a></li>' +
        '<li><i class="fa fa-map-marker-alt"></i><span>' + SITE.address + '</span></li></ul></div>' +
    '</div></div><div class="copy">&copy; ' + new Date().getFullYear() + ' ' + SITE.name + '. All rights reserved.' +
    '<div style="margin-top:6px">Powered by : <a href="https://devhubtechnologies.co.in/" class="devhub" target="_blank" rel="noopener">DevHub Technologies</a></div></div></footer>' +
    '<div class="fab"><a href="tel:' + SITE.phone + '" class="call" aria-label="Call us">' + ico('call') + '</a>' +
    '<a href="https://wa.me/' + SITE.wa + '" class="wa" aria-label="Chat on WhatsApp" target="_blank" rel="noopener">' + ico('wa') + '</a></div>' +
    '<button class="to-top" id="toTop" aria-label="Back to top"><i class="fa fa-arrow-up"></i></button>' +
    '<div class="selbar" id="selBar"><span><b id="selCount">0</b> dishes selected</span><button class="clear" id="selClear" type="button">Clear</button><a href="#" class="btn btn-gold" data-quote><i class="fab fa-whatsapp"></i> Send enquiry</a></div>';

  var EVENTS = ['Wedding', 'Engagement', 'Birthday', 'House Warming', 'Corporate Event', 'Festival / Religious', 'Snacks & Savouries', 'Other'];
  var GUESTS = ['Under 100', '100 - 300', '300 - 500', '500 - 1000', 'Above 1000'];
  var MEALS = ['Breakfast', 'Lunch', 'Dinner', 'Breakfast + Lunch', 'Lunch + Dinner', 'Full day'];
  function opts(a) { return a.map(function (x) { return '<option>' + esc(x) + '</option>'; }).join(''); }

  function formHTML(btn) {
    return '<form class="enq-form js-enquiry" novalidate>' +
      '<div class="field"><label>Your Name</label><input name="Name" required autocomplete="name" placeholder="Your full name"><span class="msg">Please enter your name.</span></div>' +
      '<div class="field"><label>Phone Number</label><input name="Phone" type="tel" required autocomplete="tel" inputmode="numeric" placeholder="10-digit mobile number"><span class="msg">Enter a valid 10-digit mobile number.</span></div>' +
      '<div class="field"><label>Event Type</label><select name="Event">' + opts(EVENTS) + '</select></div>' +
      '<div class="field"><label>Event Date</label><input name="Date" type="date" class="js-date"></div>' +
      '<div class="field"><label>Meal Needed</label><select name="Meal">' + opts(MEALS) + '</select></div>' +
      '<div class="field"><label>Number of Guests</label><select name="Guests">' + opts(GUESTS) + '</select></div>' +
      '<div class="field full"><label>Venue / Special Requests</label><textarea name="Details" placeholder="Tell us about your event and food preferences"></textarea></div>' +
      '<div class="full"><button class="btn btn-gold" type="submit" style="width:100%;justify-content:center"><i class="fab fa-whatsapp"></i> ' + (btn || 'Send on WhatsApp') + '</button></div>' +
      '<p class="form-ok">Thank you! WhatsApp has opened with your enquiry. Just press send there.</p>' +
      '<p class="form-note full">Your enquiry opens in WhatsApp so we can reply quickly.</p></form>';
  }

  var modal = '<div class="modal" id="quoteModal"><div class="modal-box"><button class="modal-x" aria-label="Close">&times;</button>' +
    '<span class="eyebrow left">Get Your Quote</span><h3>Plan Your Event With Us</h3>' +
    '<p>Share a few details and we will get back with a custom menu and quote.</p><div class="q-dishes" id="qDishes"></div>' + formHTML('Send on WhatsApp') + '</div></div>';

  var pre = '<div id="preloader"><div class="pre-in"><img src="img/logo-mark.png" alt="' + SITE.name + '"></div></div><div id="progress"></div>';

  document.body.insertAdjacentHTML('afterbegin', pre);
  var hdr = $('#site-header'), ftr = $('#site-footer');
  if (hdr) hdr.innerHTML = topbar + nav;
  if (ftr) ftr.innerHTML = footer + modal;

  // Fill any in-page enquiry form placeholders
  $$('[data-enquiry-form]').forEach(function (el) { el.outerHTML = formHTML(); });

  /* ---------- Header, progress, back-to-top ---------- */
  var navEl = $('#nav'), topBtn = $('#toTop'), bar = $('#progress');
  function onScroll() {
    var y = window.scrollY, h = document.documentElement.scrollHeight - window.innerHeight;
    if (navEl) navEl.classList.toggle('scrolled', y > 80);
    if (topBtn) topBtn.classList.toggle('show', y > 600);
    var fabEl = $('.fab'); if (fabEl) fabEl.classList.toggle('up', y > 600);
    if (bar) bar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
  }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  if (topBtn) topBtn.onclick = function () { window.scrollTo({ top: 0, behavior: 'smooth' }); };

  var menu = $('#menu'), burger = $('#burger');
  if (burger) burger.onclick = function () {
    var o = menu.classList.toggle('open');
    burger.innerHTML = '<i class="fa ' + (o ? 'fa-times' : 'fa-bars') + '"></i>';
  };
  if (menu) menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') menu.classList.remove('open'); });

  /* ---------- Preloader ---------- */
  var hidePre = function () { var p = $('#preloader'); if (p) p.classList.add('hide'); };
  window.addEventListener('load', function () { setTimeout(hidePre, 350); });
  setTimeout(hidePre, 3000);

  /* ---------- Reveal on scroll ---------- */
  var io = null;
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: .12 });
    $$('.reveal').forEach(function (el) { io.observe(el); });

    var cio = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target, end = +el.dataset.count, suf = el.dataset.suffix || '', t0 = null, dur = 1800;
        (function tick(t) {
          if (!t0) t0 = t;
          var p = Math.min((t - t0) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(end * eased) + suf;
          if (p < 1) requestAnimationFrame(tick);
        })(performance.now());
        cio.unobserve(el);
      });
    }, { threshold: .5 });
    $$('[data-count]').forEach(function (el) { cio.observe(el); });
  } else {
    $$('.reveal').forEach(function (el) { el.classList.add('in'); });
    $$('[data-count]').forEach(function (el) { el.textContent = el.dataset.count + (el.dataset.suffix || ''); });
  }

  /* ---------- Auto-scroll gallery (row 1 = first half, row 2 = second half, all different) ---------- */
  function imgTag(f, i) { return '<a href="gallery.html" aria-label="Open gallery"><img src="img/' + f + '" alt="Catering dish by Masha Catering" loading="lazy"></a>'; }
  var half = Math.ceil(GALLERY.length / 2);
  $$('[data-marquee]').forEach(function (m) {
    var rev = m.dataset.marquee === 'rev';
    var list = rev ? GALLERY.slice(half) : GALLERY.slice(0, half);
    var html = list.map(imgTag).join('');
    m.classList.add('marquee'); if (rev) m.classList.add('rev');
    m.innerHTML = '<div class="track">' + html + html + '</div>';
  });

  /* ---------- Popup viewer (gallery + certificates) ----------
     Always a fixed full-screen popup above everything, never below the footer. */
  var VCSS = '.mcv{position:fixed;left:0;top:0;right:0;bottom:0;z-index:2147483000;display:none;flex-direction:column;background:rgba(6,5,4,.95);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}' +
    '.mcv.open{display:flex;animation:mcvIn .35s ease}@keyframes mcvIn{from{opacity:0}}' +
    '.mcv-bar{flex:0 0 auto;display:flex;justify-content:space-between;align-items:center;gap:12px;padding:12px 18px;border-bottom:1px solid rgba(201,162,75,.3)}' +
    '.mcv-cap{font:500 .85rem Poppins,sans-serif;color:#d8d0c0;min-width:0}' +
    '.mcv-act{display:flex;gap:10px;align-items:center;flex-shrink:0}' +
    '.mcv-act button,.mcv-act a{border:1px solid #c9a24b;background:rgba(201,162,75,.12);color:#ecd08a;border-radius:30px;padding:9px 18px;font:600 .78rem Poppins,sans-serif;cursor:pointer;text-decoration:none;line-height:1.2;transition:.3s}' +
    '.mcv-act button:hover,.mcv-act a:hover{background:#c9a24b;color:#100d0b}' +
    '.mcv-act .mcv-x{width:42px;height:42px;padding:0;font-size:1.6rem;border-radius:50%}' +
    '.mcv:not(.cert) .mcv-zoom,.mcv:not(.cert) .mcv-dl{display:none}' +
    '.mcv-stage{flex:1 1 auto;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:18px;-webkit-overflow-scrolling:touch}' +
    '.mcv-stage img{display:block;max-width:100%;max-height:calc(100vh - 110px);width:auto;height:auto;object-fit:contain;background:#fff;border-radius:10px;box-shadow:0 30px 80px rgba(0,0,0,.6);cursor:zoom-in}' +
    '.mcv.gal .mcv-stage img{background:transparent;cursor:default}' +
    '.mcv.zoom .mcv-stage{display:block}' +
    '.mcv.zoom .mcv-stage img{width:230%;max-width:none;max-height:none;margin:0 auto;cursor:zoom-out}' +
    '.mcv-nav{position:absolute;top:50%;transform:translateY(-50%);width:50px;height:50px;border-radius:50%;border:1px solid #c9a24b;background:rgba(16,13,11,.75);color:#ecd08a;font-size:1.1rem;cursor:pointer;z-index:2;transition:.3s}' +
    '.mcv-nav:hover{background:#c9a24b;color:#100d0b}.mcv-prev{left:14px}.mcv-next{right:14px}' +
    '.mcv.zoom .mcv-nav{display:none}' +
    '@media(max-width:640px){.mcv-bar{padding:10px 12px}.mcv-cap{display:none}.mcv-act{width:100%;justify-content:flex-end}.mcv-stage{padding:10px}.mcv-nav{width:42px;height:42px}.mcv-prev{left:6px}.mcv-next{right:6px}}';
  var vst = document.createElement('style'); vst.id = 'mcv-style'; vst.textContent = VCSS; document.head.appendChild(vst);

  var lb = null, lbList = [], lbIndex = 0, PHOTO = {};
  function resolveSrc(src) { var m = src.match(/^(img\/menu\/[^.]+)\.svg$/); return (m && PHOTO[m[1]]) ? m[1] + '.jpg' : src; }
  function closeLB() {
    if (!lb) return;
    lb.classList.remove('open', 'zoom');
    document.documentElement.style.overflow = ''; document.body.style.overflow = '';
  }
  function toggleZoom() {
    if (!lb || !lb.classList.contains('cert')) return;
    var z = lb.classList.toggle('zoom');
    $('.mcv-zoom', lb).textContent = z ? 'Zoom \u2212' : 'Zoom +';
    $('.mcv-stage', lb).scrollTop = 0; $('.mcv-stage', lb).scrollLeft = 0;
  }
  function ensureLB() {
    if (lb) return;
    document.body.insertAdjacentHTML('beforeend', '<div class="mcv" id="mcv" role="dialog" aria-modal="true" aria-label="Image viewer">' +
      '<div class="mcv-bar"><span class="mcv-cap"></span><div class="mcv-act">' +
      '<button type="button" class="mcv-zoom">Zoom +</button>' +
      '<a class="mcv-dl" href="docs/Udyam-Registration-Certificate.pdf" target="_blank" rel="noopener" download>Download PDF</a>' +
      '<button type="button" class="mcv-x" aria-label="Close">&times;</button></div></div>' +
      '<div class="mcv-stage"><img alt=""></div>' +
      '<button type="button" class="mcv-nav mcv-prev" aria-label="Previous">&#10094;</button>' +
      '<button type="button" class="mcv-nav mcv-next" aria-label="Next">&#10095;</button></div>');
    lb = $('#mcv');
    $('.mcv-x', lb).onclick = closeLB;
    $('.mcv-zoom', lb).onclick = toggleZoom;
    $('.mcv-prev', lb).onclick = function (e) { e.stopPropagation(); lbShow(lbIndex - 1); };
    $('.mcv-next', lb).onclick = function (e) { e.stopPropagation(); lbShow(lbIndex + 1); };
    $('.mcv-stage img', lb).onclick = function () { if (lb.classList.contains('cert')) toggleZoom(); };
    $('.mcv-stage', lb).onclick = function (e) { if (e.target === this && !lb.classList.contains('zoom')) closeLB(); };
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') closeLB();
      if (e.key === 'ArrowLeft') lbShow(lbIndex - 1);
      if (e.key === 'ArrowRight') lbShow(lbIndex + 1);
    });
  }
  function lbShow(i) {
    lbIndex = (i + lbList.length) % lbList.length;
    var im = $('.mcv-stage img', lb);
    im.src = resolveSrc(lbList[lbIndex].src); im.alt = lbList[lbIndex].cap;
    $('.mcv-cap', lb).textContent = lbList[lbIndex].cap;
    var many = lbList.length > 1;
    $('.mcv-prev', lb).style.display = $('.mcv-next', lb).style.display = many ? '' : 'none';
    lb.classList.remove('zoom'); $('.mcv-zoom', lb).textContent = 'Zoom +';
    $('.mcv-stage', lb).scrollTop = 0;
  }
  function lbOpen(list, i, cls) {
    ensureLB(); lbList = list; lb.className = 'mcv open ' + (cls || '');
    document.documentElement.style.overflow = 'hidden'; document.body.style.overflow = 'hidden';
    lbShow(i);
  }

  var grid = $('[data-grid]');
  if (grid) {
    grid.classList.add('grid-gallery');
    grid.innerHTML = GALLERY.map(function (f, i) {
      return '<div class="g" data-i="' + i + '"><img src="img/' + f + '" alt="Catering dish by Masha Catering" loading="lazy"></div>';
    }).join('');
    var gl = GALLERY.map(function (f, i) { return { src: 'img/' + f, cap: 'Masha Catering - food gallery ' + (i + 1) + ' of ' + GALLERY.length }; });
    $$('.g', grid).forEach(function (g) { g.onclick = function () { lbOpen(gl, +g.dataset.i, 'gal'); }; });
  }

  // Certificates: <a data-cert="0" href="img/udyam-1.jpg">
  var certs = [{ src: 'img/udyam-1.jpg', cap: 'Udyam Registration Certificate - page 1' }, { src: 'img/udyam-2.jpg', cap: 'Udyam Registration Certificate - page 2' }];
  document.addEventListener('click', function (e) {
    var c = e.target.closest ? e.target.closest('[data-cert]') : null;
    if (c) { e.preventDefault(); lbOpen(certs, +c.dataset.cert || 0, 'cert'); }
  });

  /* ---------- Testimonials ---------- */
  var tBox = $('[data-testimonials]');
  if (tBox) {
    var fb = 'https://wa.me/' + SITE.wa + '?text=' + encodeURIComponent('Hello ' + SITE.name + ', I would like to share my feedback about your catering service:\n\nName:\nEvent:\nFeedback:');
    if (TESTIMONIALS.length) {
      var html = (SHOW_SAMPLE_NOTE ? '<p class="t-sample"><i class="fa fa-info-circle"></i> These are sample reviews to show the layout. Replace them with real customer feedback in js/site.js, then switch this note off.</p>' : '') +
        '<div class="t-grid">' + TESTIMONIALS.map(function (t, i) {
          var s = ''; for (var k = 0; k < (t.stars || 5); k++) s += '\u2605';
          return '<div class="t-card reveal d' + (i % 3 + 1) + '"><span class="q">&ldquo;</span><div class="stars" aria-label="' + (t.stars || 5) + ' out of 5 stars">' + s + '</div>' +
            (t.event ? '<span class="ev">' + esc(t.event) + '</span>' : '') +
            '<p>' + esc(t.text) + '</p><div class="t-user"><div class="av">' + esc(t.name.charAt(0)) + '</div><div><h5>' + esc(t.name) + '</h5><small>Verified customer</small></div></div></div>';
        }).join('') + '</div>' +
        '<div class="t-cta reveal"><a href="' + fb + '" class="btn btn-dark" target="_blank" rel="noopener"><i class="fab fa-whatsapp"></i> Share Your Feedback</a></div>';
      tBox.className = 't-wrap'; tBox.innerHTML = html;
      $$('.reveal', tBox).forEach(function (el) { io ? io.observe(el) : el.classList.add('in'); });
    } else {
      tBox.innerHTML = '<div class="t-empty reveal"><i class="fa fa-quote-left"></i><h3>Your Celebration Could Be Our Next Story</h3>' +
        '<p>We are a new catering service and every event matters to us. Book your celebration with Masha Catering, and your honest feedback will be featured right here.</p>' +
        '<a href="#" class="btn btn-gold" data-quote>Book Your Event</a></div>';
      if (io) io.observe($('.t-empty', tBox));
    }
  }

  /* ---------- Selected dishes (menu page -> enquiry) ---------- */
  var picked = [];
  var selBar = $('#selBar'), selCount = $('#selCount');
  function renderSel() {
    if (selCount) selCount.textContent = picked.length;
    if (selBar) selBar.classList.toggle('show', picked.length > 0);
    var q = $('#qDishes');
    if (q) {
      q.classList.toggle('show', picked.length > 0);
      q.innerHTML = picked.length ? '<b>Dishes you selected</b>' + picked.map(function (d) { return '<span>' + esc(d) + '</span>'; }).join('') : '';
    }
  }
  window.MashaMenu = {
    toggle: function (name) {
      var i = picked.indexOf(name);
      if (i > -1) picked.splice(i, 1); else picked.push(name);
      renderSel(); return i === -1;
    },
    has: function (name) { return picked.indexOf(name) > -1; }
  };
  var selClear = $('#selClear');
  if (selClear) selClear.onclick = function () {
    picked = []; renderSel();
    $$('.dish .add.on').forEach(function (b) { b.classList.remove('on'); b.innerHTML = '<i class="fa fa-plus"></i> Add to enquiry'; });
  };

  /* ---------- Quote modal ---------- */
  var qm = $('#quoteModal');
  function closeQ() { qm.classList.remove('open'); document.body.style.overflow = ''; }
  document.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target.closest('[data-quote]') : null;
    if (t) { e.preventDefault(); renderSel(); qm.classList.add('open'); document.body.style.overflow = 'hidden'; if (menu) menu.classList.remove('open'); }
  });
  if (qm) {
    $('.modal-x', qm).onclick = closeQ;
    qm.addEventListener('click', function (e) { if (e.target === qm) closeQ(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && qm.classList.contains('open')) closeQ(); });
  }

  /* ---------- Enquiry forms -> WhatsApp ---------- */
  var today = new Date().toISOString().split('T')[0];
  $$('.js-date').forEach(function (d) { d.min = today; });

  function cleanPhone(v) {
    var d = v.replace(/[^\d]/g, '');
    if (d.length === 12 && d.indexOf('91') === 0) d = d.slice(2);
    if (d.length === 11 && d.charAt(0) === '0') d = d.slice(1);
    return d;
  }
  document.addEventListener('input', function (e) {
    var f = e.target.closest ? e.target.closest('.field') : null;
    if (f) f.classList.remove('bad');
  });
  document.addEventListener('submit', function (e) {
    var f = e.target;
    if (!f.classList || !f.classList.contains('js-enquiry')) return;
    e.preventDefault();
    var name = f.elements.Name.value.trim(), phone = cleanPhone(f.elements.Phone.value);
    var okName = name.length > 1, okPhone = /^[6-9]\d{9}$/.test(phone);
    f.elements.Name.closest('.field').classList.toggle('bad', !okName);
    f.elements.Phone.closest('.field').classList.toggle('bad', !okPhone);
    if (!okName) { f.elements.Name.focus(); return; }
    if (!okPhone) { f.elements.Phone.focus(); return; }

    var lines = ['Hello ' + SITE.name + ', I would like to enquire about catering.', ''];
    lines.push('*Name:* ' + name, '*Phone:* ' + phone);
    [['Event', 'Event'], ['Date', 'Event Date'], ['Meal', 'Meal'], ['Guests', 'Guests']].forEach(function (k) {
      var v = f.elements[k[0]] && f.elements[k[0]].value.trim();
      if (v) lines.push('*' + k[1] + ':* ' + v);
    });
    if (picked.length) lines.push('*Selected dishes:* ' + picked.join(', '));
    var det = f.elements.Details && f.elements.Details.value.trim();
    if (det) lines.push('*Venue / Requests:* ' + det);

    var url = 'https://wa.me/' + SITE.wa + '?text=' + encodeURIComponent(lines.join('\n'));
    var w = window.open(url, '_blank');
    if (!w) window.location.href = url;   // popup blocked (some mobile browsers)
    var ok = $('.form-ok', f); if (ok) ok.classList.add('show');
    setTimeout(function () { if (qm && qm.classList.contains('open')) closeQ(); if (ok) ok.classList.remove('show'); f.reset(); }, 2200);
  });

  /* ---------- Banner backgrounds (home banner + breadcrumb banners) ----------
     Each page picks its image from  img/banner/<data-banner>.jpg  (home, about, services, menu, gallery, contact). */
  $$('[data-banner]').forEach(function (sec) {
    var box = document.createElement('div'); box.className = 'bn-bg single'; box.setAttribute('aria-hidden', 'true');
    box.innerHTML = '<img src="img/banner/' + sec.getAttribute('data-banner') + '.jpg" alt="">';
    sec.insertBefore(box, sec.firstChild);
  });

  /* ---------- Real photos replace drawings automatically ----------
     Save a photo as img/menu/<same file name>.jpg (e.g. img/menu/idli.jpg) and it is used everywhere. */
  $$('img').forEach(function (im) {
    var m = (im.getAttribute('src') || '').match(/^(img\/menu\/[^.]+)\.svg$/);
    if (!m) return;
    var t = new Image();
    t.onload = function () { PHOTO[m[1]] = true; im.src = m[1] + '.jpg'; };
    t.src = m[1] + '.jpg';
  });

  /* ---------- Swap any leftover Font-Awesome brand icons for inline SVG (always visible) ---------- */
  $$('i.fa-whatsapp, i.fa-facebook-f, i.fa-instagram').forEach(function (i) {
    var k = i.classList.contains('fa-whatsapp') ? 'wa' : i.classList.contains('fa-facebook-f') ? 'fb' : 'ig';
    var sp = document.createElement('span'); sp.className = 'svgi'; sp.innerHTML = IC[k];
    i.parentNode.replaceChild(sp, i);
  });
})();
