/* ============ EDIT YOUR MENU HERE ============
   Each dish: [file name (no extension), (unused), English name, short description, 'veg' or 'nv', popular (true/false)]
   Pictures live in img/menu/. The IMG list below maps each dish file name to the real photo file name (.jpg).
   If a photo is missing, the .svg placeholder img/menu/<file name>.svg is shown instead. */

var MENU = [
  { id: 'breakfast', tab: 'Breakfast', sub: 'Morning tiffin', icon: 'fa-sun',
    intro: 'Soft, hot and freshly made tiffin to start the celebration.',
    items: [
      ['idli', '', 'Idli with Sambar & Chutney', 'Soft steamed rice cakes with hot sambar and two chutneys.', 'veg', true],
      ['masala-dosa', '', 'Masala Dosa', 'Crisp golden dosa filled with spiced potato masala.', 'veg', true],
      ['ven-pongal', '', 'Ven Pongal', 'Ghee-rich rice and moong dal with pepper, cumin and cashew.', 'veg', false],
      ['medu-vada', '', 'Medu Vada', 'Crisp outside, fluffy inside urad dal vada.', 'veg', false],
      ['poori-masala', '', 'Poori Masala', 'Puffed golden poori with soft potato masala.', 'veg', false],
      ['idiyappam', '', 'Idiyappam with Kurma', 'Soft string hoppers with mild vegetable kurma.', 'veg', false],
      ['upma', '', 'Rava Upma', 'Semolina tempered with mustard, curry leaf and cashew.', 'veg', false],
      ['kesari', '', 'Kesari', 'Sweet semolina with ghee, cashew and cardamom.', 'veg', false]
    ]},
  { id: 'lunch', tab: 'Lunch', sub: 'Meals & biryani', icon: 'fa-utensils',
    intro: 'Full banana-leaf meals, biryani and festive favourites.',
    items: [
      ['banana-leaf-meals', '', 'Banana Leaf Meals', 'Rice with sambar, kuzhambu, poriyal, kootu, rasam, curd, appalam and sweet.', 'veg', true],
      ['chicken-biryani', '', 'Chicken Biryani', 'Fragrant biryani rice layered with tender spiced chicken, served with raita.', 'nv', true],
      ['mutton-biryani', '', 'Mutton Biryani', 'Slow-cooked mutton and aromatic rice, rich and well spiced.', 'nv', true],
      ['mutton-kuruma', '', 'Mutton Kuruma', 'Mutton in a creamy, mildly spiced coconut gravy.', 'nv', false],
      ['fish-fry', '', 'Fish Fry', 'Fish marinated in red masala and fried golden.', 'nv', false],
      ['chicken-65', ' 65', 'Chicken 65', 'Crisp, spicy chicken tempered with curry leaf and green chilli.', 'nv', false],
      ['rasam', '', 'Pepper Rasam', 'Peppery tamarind and tomato rasam with garlic.', 'veg', false],
      ['curd-rice', '', 'Curd Rice', 'Cool curd rice tempered with mustard and curry leaf, with pickle.', 'veg', false]
    ]},
  { id: 'dinner', tab: 'Dinner', sub: 'Parotta, dosa & sweets', icon: 'fa-moon',
    intro: 'Hot parotta, dosa and a sweet finish for the evening feast.',
    items: [
      ['kothu-parotta', '', 'Chicken Kothu Parotta', 'Shredded parotta tossed on the tawa with egg, chicken and salna.', 'nv', true],
      ['veechu-parotta', '', 'Veechu Parotta & Salna', 'Flaky layered parotta with spicy salna.', 'nv', true],
      ['chapati-kurma', '', 'Chapati with Veg Kurma', 'Soft chapati with coconut vegetable kurma.', 'veg', false],
      ['podi-dosa', '', 'Podi Dosa', 'Dosa with spicy gun-powder (idli podi) and ghee.', 'veg', false],
      ['appam', '', 'Appam with Coconut Milk', 'Lacy, soft-centred appam with sweet coconut milk.', 'veg', false],
      ['mutton-chukka', '', 'Mutton Chukka', 'Dry-roasted pepper mutton with onion and curry leaf.', 'nv', false],
      ['payasam', '', 'Payasam', 'Creamy traditional dessert with cashew and raisins.', 'veg', false],
      ['filter-coffee', '', 'Filter Coffee', 'Strong, frothy filter coffee served in a traditional davara set.', 'veg', false]
    ]}
];

/* Dish file name  ->  your actual photo file name in img/menu/ (without .jpg) */
var IMG = {
  'idli': 'idly',
  'masala-dosa': 'masala dosa',
  'ven-pongal': 'pongal',
  'medu-vada': 'vadai',
  'poori-masala': 'poori',
  'idiyappam': 'Idiyappam with Kurma',
  'upma': 'Rava Upma',
  'kesari': 'kesari',
  'banana-leaf-meals': 'meals',
  'chicken-biryani': 'Chicken briyani',
  'mutton-biryani': 'Mutton Briyani',
  'mutton-kuruma': 'Mutton Kuruma',
  'fish-fry': 'fish',
  'chicken-65': 'Chicken 65',
  'rasam': 'rasam',
  'curd-rice': 'curd rice',
  'kothu-parotta': 'Chicken Kothu Parotta',
  'veechu-parotta': 'Veechu Parotta',
  'chapati-kurma': 'Chapati',
  'podi-dosa': 'podi dosa',
  'appam': 'appam',
  'mutton-chukka': 'mutton chukka',
  'payasam': 'payasam',
  'filter-coffee': 'filter coffee'
};

function esc(t){return String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
var tabs = document.getElementById('menuTabs'), lists = document.getElementById('menuLists');
MENU.forEach(function (c, i) {
  tabs.insertAdjacentHTML('beforeend', '<button role="tab" class="' + (i === 0 ? 'active' : '') + '" data-tab="' + c.id + '"><i class="fa ' + c.icon + '"></i><span class="tt">' + esc(c.tab) + '<small>' + esc(c.sub) + '</small></span></button>');
  lists.insertAdjacentHTML('beforeend', '<div class="menu-list-wrap" id="w-' + c.id + '" style="display:' + (i === 0 ? 'block' : 'none') + '">' +
    '<div class="meal-intro"><h3>' + esc(c.tab) + '</h3><p>' + esc(c.intro) + '</p></div>' +
    '<div class="dish-grid show" id="' + c.id + '">' + c.items.map(function (d) {
      // real photo (.jpg) first; if it is missing, the .svg placeholder is shown
      var src = 'img/menu/' + encodeURIComponent(IMG[d[0]] || d[0]) + '.jpg';
      return '<article class="dish" data-diet="' + d[4] + '"><div class="pic"><img src="' + src + '" alt="' + esc(d[2]) + '" loading="lazy"' +
        ' onerror="this.onerror=null;this.src=\'img/menu/' + d[0] + '.svg\'">' +
        '<span class="dot ' + d[4] + '" title="' + (d[4] === 'veg' ? 'Vegetarian' : 'Non-vegetarian') + '"></span>' + (d[5] ? '<span class="hot">Popular</span>' : '') + '</div>' +
        '<div class="info"><h5>' + esc(d[2]) + '</h5><p>' + esc(d[3]) + '</p>' +
        '<button type="button" class="add" data-name="' + esc(d[2]) + '"><i class="fa fa-plus"></i> Add to enquiry</button></div></article>';
    }).join('') + '</div></div>');
});

function showTab(id) {
  var found = false;
  MENU.forEach(function (c) { if (c.id === id) found = true; });
  if (!found) id = MENU[0].id;
  Array.prototype.forEach.call(tabs.children, function (b) { b.classList.toggle('active', b.dataset.tab === id); });
  MENU.forEach(function (c) { document.getElementById('w-' + c.id).style.display = c.id === id ? 'block' : 'none'; });
}
tabs.addEventListener('click', function (e) {
  var b = e.target.closest('button'); if (!b) return;
  showTab(b.dataset.tab); history.replaceState(null, '', '#' + b.dataset.tab);
});
window.addEventListener('hashchange', function () { showTab(location.hash.slice(1)); });
if (location.hash) showTab(location.hash.slice(1));

document.getElementById('dietBar').addEventListener('click', function (e) {
  var b = e.target.closest('button'); if (!b) return;
  Array.prototype.forEach.call(this.children, function (x) { x.classList.toggle('active', x === b); });
  var d = b.dataset.diet;
  Array.prototype.forEach.call(document.querySelectorAll('.dish'), function (el) { el.style.display = (d === 'all' || el.dataset.diet === d) ? '' : 'none'; });
});

lists.addEventListener('click', function (e) {
  var b = e.target.closest('.add'); if (!b || !window.MashaMenu) return;
  var on = window.MashaMenu.toggle(b.dataset.name);
  b.classList.toggle('on', on);
  b.innerHTML = on ? '<i class="fa fa-check"></i> Added' : '<i class="fa fa-plus"></i> Add to enquiry';
});