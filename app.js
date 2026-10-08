const productSeed = [
  { id: 1, sprite: 0, name: "Laptop Dell Inspiron 14 Plus", category: "Công nghệ", brand: "Dell", price: 12990000, oldPrice: 15990000, rating: 4.8, reviews: 88, stock: 24, badge: "-19%", sku: "DELL-INS14-SIL", colors: ["Bạc", "Xám"], variants: ["16GB / 512GB", "32GB / 1TB"], featured: true },
  { id: 2, sprite: 1, name: "Điện thoại iPhone 15 128GB", category: "Công nghệ", brand: "Apple", price: 22990000, oldPrice: 25990000, rating: 4.9, reviews: 125, stock: 38, badge: "-12%", sku: "AP-IP15-128-PK", colors: ["Hồng", "Đen", "Xanh"], variants: ["128GB", "256GB", "512GB"], featured: true },
  { id: 3, sprite: 2, name: "Tai nghe Sony WH-1000XM4", category: "Công nghệ", brand: "Sony", price: 7990000, oldPrice: 9990000, rating: 4.8, reviews: 76, stock: 18, badge: "-20%", sku: "SN-WH1000-BK", colors: ["Đen", "Bạc"], variants: ["Tiêu chuẩn"], featured: true },
  { id: 4, sprite: 3, name: "Đồng hồ thông minh Watch S9", category: "Công nghệ", brand: "Apple", price: 10990000, oldPrice: 12990000, rating: 4.7, reviews: 64, stock: 31, badge: "-15%", sku: "AP-WS9-41-BK", colors: ["Đen", "Bạc", "Hồng"], variants: ["41mm", "45mm"], featured: true },
  { id: 5, sprite: 4, name: "Máy tính bảng iPad Air M2", category: "Công nghệ", brand: "Apple", price: 14990000, oldPrice: 17990000, rating: 4.9, reviews: 93, stock: 16, badge: "-17%", sku: "AP-AIR-M2-BL", colors: ["Xanh", "Xám"], variants: ["128GB", "256GB"], featured: true },
  { id: 6, sprite: 5, name: "Loa Bluetooth JBL Compact", category: "Gia dụng", brand: "JBL", price: 3490000, oldPrice: 4490000, rating: 4.6, reviews: 47, stock: 45, badge: "-22%", sku: "JBL-CPT-BK", colors: ["Đen", "Xanh"], variants: ["Tiêu chuẩn"], featured: false },
  { id: 7, sprite: 6, name: "Giày chạy bộ Cloud Runner", category: "Thời trang", brand: "UrbanFit", price: 599000, oldPrice: 799000, rating: 4.6, reviews: 212, stock: 72, badge: "-25%", sku: "UF-CR-WH", colors: ["Trắng", "Đen"], variants: ["38", "39", "40", "41", "42"], featured: true },
  { id: 8, sprite: 7, name: "Túi xách nữ thanh lịch Olivia", category: "Phụ kiện", brand: "Olivia", price: 450000, oldPrice: 600000, rating: 4.7, reviews: 168, stock: 54, badge: "-25%", sku: "OL-BAG-TAN", colors: ["Nâu", "Đen", "Kem"], variants: ["Tiêu chuẩn"], featured: true },
  { id: 9, sprite: 8, name: "Áo sơ mi Oxford phom rộng", category: "Thời trang", brand: "Routine", price: 399000, oldPrice: 499000, rating: 4.5, reviews: 84, stock: 89, badge: "-20%", sku: "RT-OXF-BL", colors: ["Xanh", "Trắng"], variants: ["S", "M", "L", "XL"], featured: false },
  { id: 10, sprite: 9, name: "Nồi chiên không dầu AirPro 6L", category: "Gia dụng", brand: "AirPro", price: 1690000, oldPrice: 2190000, rating: 4.8, reviews: 136, stock: 27, badge: "-23%", sku: "AP-AF6-BK", colors: ["Đen"], variants: ["6 lít"], featured: true },
  { id: 11, sprite: 10, name: "Đèn bàn LED chống cận Flexi", category: "Gia dụng", brand: "Flexi", price: 690000, oldPrice: 890000, rating: 4.6, reviews: 59, stock: 68, badge: "-22%", sku: "FX-LAMP-CR", colors: ["Kem", "Đen"], variants: ["Tiêu chuẩn"], featured: false },
  { id: 12, sprite: 11, name: "Máy ảnh Mirrorless X-Pro", category: "Công nghệ", brand: "Lumix", price: 18490000, oldPrice: 20990000, rating: 4.8, reviews: 44, stock: 9, badge: "-12%", sku: "LX-XPRO-BK", colors: ["Đen"], variants: ["Body", "Kit 18-55mm"], featured: true }
];

const orderSeed = [
  { id: "DH00125", date: "12/04/2026", productIds: [2, 3], quantity: 2, total: 28980000, status: "Đang giao", customer: "Nguyễn Văn A" },
  { id: "DH00124", date: "10/04/2026", productIds: [4], quantity: 1, total: 10990000, status: "Hoàn thành", customer: "Trần Thị B" },
  { id: "DH00123", date: "05/04/2026", productIds: [3, 8, 11], quantity: 3, total: 9129000, status: "Hoàn thành", customer: "Lê Văn C" },
  { id: "DH00122", date: "01/04/2026", productIds: [7], quantity: 1, total: 599000, status: "Đã hủy", customer: "Phạm Thị D" }
];

const defaultState = {
  products: productSeed,
  cart: [{ id: 2, qty: 1, color: "Hồng", variant: "128GB" }, { id: 3, qty: 1, color: "Đen", variant: "Tiêu chuẩn" }],
  wishlist: [1, 5, 8],
  coupon: "SHOPMATE2TR",
  user: { name: "Nguyễn Văn A", phone: "0901234567", email: "nguyenvana@gmail.com", address: "123 Đường ABC, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh" },
  orders: orderSeed,
  filters: { search: "", category: "", brands: [], min: 0, max: 30000000, rating: 0, sort: "newest", view: "grid" },
  accountTab: "orders",
  adminTab: "dashboard",
  detailTab: "description"
};

const deepCopy = value => JSON.parse(JSON.stringify(value));
let state;
try {
  state = { ...deepCopy(defaultState), ...JSON.parse(localStorage.getItem("shopmate-state") || "{}") };
  if (!Array.isArray(state.products) || !state.products.length) state.products = deepCopy(productSeed);
} catch { state = deepCopy(defaultState); }

const app = document.getElementById("app");
const modalRoot = document.getElementById("modal-root");
const money = value => new Intl.NumberFormat("vi-VN").format(value) + "đ";
const productById = id => state.products.find(p => p.id === Number(id));
const cartCount = () => state.cart.reduce((sum, item) => sum + item.qty, 0);
const save = () => localStorage.setItem("shopmate-state", JSON.stringify(state));
const route = () => (location.hash.replace(/^#/, "") || "home").split("/");
const icon = (name, size = 18) => `<i data-lucide="${name}" width="${size}" height="${size}"></i>`;

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast success";
  toast.innerHTML = `${icon("check-circle", 18)}<span>${message}</span>`;
  document.getElementById("toast-root").appendChild(toast);
  refreshIcons();
  setTimeout(() => toast.remove(), 2600);
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons({ attrs: { "stroke-width": 1.8 } });
}

function navigate(to) {
  location.hash = to;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function header(active) {
  return `<header class="site-header">
    <div class="container topbar">
      <a href="#home" class="brand" aria-label="ShopMate - Trang chủ"><span class="brand-mark">S</span><span>ShopMate<small>Smart shopping</small></span></a>
      <form class="search" id="global-search">
        <input aria-label="Tìm kiếm sản phẩm" name="q" value="${state.filters.search}" placeholder="Tìm kiếm sản phẩm, thương hiệu...">
        <button title="Tìm kiếm" aria-label="Tìm kiếm">${icon("search")}</button>
      </form>
      <div class="header-actions">
        <button class="icon-btn ${active === "wishlist" ? "active" : ""}" data-nav="account" data-account-tab="wishlist" title="Sản phẩm yêu thích" aria-label="Sản phẩm yêu thích">${icon("heart")}<span class="badge">${state.wishlist.length}</span></button>
        <button class="icon-btn ${active === "cart" ? "active" : ""}" data-nav="cart" title="Giỏ hàng" aria-label="Giỏ hàng">${icon("shopping-cart")}<span class="badge">${cartCount()}</span></button>
        <button class="icon-btn ${active === "account" ? "active" : ""}" data-nav="account" title="Tài khoản" aria-label="Tài khoản">${icon("user")}</button>
        <button class="icon-btn" data-nav="admin" title="Quản trị" aria-label="Quản trị">${icon("layout-dashboard")}</button>
      </div>
    </div>
    <nav class="container main-nav" aria-label="Điều hướng chính">
      ${navLink("home", "Trang chủ", active)}
      ${navLink("products", "Sản phẩm", active)}
      <a href="#products" data-category="Công nghệ">Danh mục</a>
      <a href="#products" data-sort="sale">Khuyến mãi</a>
      <a href="#home" data-scroll="blog">Blog</a>
      <a href="#home" data-scroll="contact">Liên hệ</a>
    </nav>
  </header>`;
}

function navLink(to, label, active) {
  return `<a href="#${to}" class="${active === to ? "active" : ""}">${label}</a>`;
}

function mobileNav(active) {
  return `<nav class="mobile-nav" aria-label="Điều hướng di động">
    <a href="#home" class="${active === "home" ? "active" : ""}">${icon("home", 20)}<span>Trang chủ</span></a>
    <a href="#products" class="${active === "products" ? "active" : ""}">${icon("search", 20)}<span>Tìm kiếm</span></a>
    <a href="#account" data-account-tab="wishlist" class="${active === "wishlist" ? "active" : ""}">${icon("heart", 20)}<span>Yêu thích</span></a>
    <a href="#cart" class="${active === "cart" ? "active" : ""}">${icon("shopping-cart", 20)}<span>Giỏ hàng</span><span class="badge">${cartCount()}</span></a>
    <a href="#account" class="${active === "account" ? "active" : ""}">${icon("user", 20)}<span>Tôi</span></a>
  </nav>`;
}

function footer() {
  return `<footer class="footer" id="contact"><div class="container">
    <div class="footer-grid">
      <div><a href="#home" class="brand"><span class="brand-mark">S</span><span>ShopMate</span></a><p>Nền tảng mua sắm trực tuyến dành cho cuộc sống hiện đại. Sản phẩm chính hãng, giao nhanh và hỗ trợ tận tâm.</p><p>${icon("map-pin",14)} 123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh<br>${icon("phone",14)} 1900 1234<br>${icon("mail",14)} hello@shopmate.vn</p></div>
      <div><h4>Về ShopMate</h4><a href="#home">Giới thiệu</a><a href="#home">Tuyển dụng</a><a href="#home">Tin tức</a><a href="#home">Hệ thống cửa hàng</a></div>
      <div><h4>Hỗ trợ khách hàng</h4><a href="#account">Theo dõi đơn hàng</a><a href="#home">Chính sách đổi trả</a><a href="#home">Hướng dẫn mua hàng</a><a href="#home">Bảo hành</a></div>
      <div><h4>Đăng ký nhận tin</h4><p>Nhận ưu đãi và sản phẩm mới mỗi tuần.</p><form class="coupon" id="newsletter"><input class="field" type="email" required placeholder="Email của bạn"><button class="btn btn-primary" title="Đăng ký">${icon("send")}</button></form></div>
    </div>
    <div class="footer-bottom">© 2026 ShopMate. Bản demo thương mại điện tử.<span>Thanh toán an toàn · Bảo mật thông tin</span></div>
  </div></footer>`;
}

function shell(content, active) {
  return `${header(active)}<main>${content}</main>${footer()}${mobileNav(active)}`;
}

function stars(product) {
  return `<div class="rating" aria-label="${product.rating} trên 5 sao">★★★★★ <span>${product.rating} (${product.reviews})</span></div>`;
}

function productCard(product, compact = false) {
  const liked = state.wishlist.includes(product.id);
  return `<article class="product-card">
    <div class="product-media" data-product="${product.id}">
      <div class="sprite sprite-${product.sprite}" role="img" aria-label="${product.name}"></div>
      <span class="discount">${product.badge}</span>
      <button class="heart ${liked ? "active" : ""}" data-wishlist="${product.id}" title="${liked ? "Bỏ yêu thích" : "Thêm yêu thích"}" aria-label="${liked ? "Bỏ yêu thích" : "Thêm yêu thích"}">${icon("heart", 18)}</button>
    </div>
    <div class="product-body">
      <button class="product-name" data-product="${product.id}">${product.name}</button>
      ${stars(product)}
      <div><span class="price">${money(product.price)}</span><span class="old-price">${money(product.oldPrice)}</span></div>
      ${compact ? "" : `<div class="stock-line">Còn ${product.stock} sản phẩm</div><button class="btn btn-primary btn-sm" data-add-cart="${product.id}">${icon("shopping-cart", 16)} Thêm vào giỏ</button>`}
    </div>
  </article>`;
}

function renderHome() {
  const featured = state.products.filter(p => p.featured).slice(0, 8);
  const categories = [
    ["shirt", "Thời trang", "120+ sản phẩm"], ["laptop", "Công nghệ", "200+ sản phẩm"], ["cooking-pot", "Gia dụng", "150+ sản phẩm"],
    ["watch", "Phụ kiện", "300+ sản phẩm"], ["camera", "Máy ảnh", "70+ sản phẩm"], ["sparkles", "Làm đẹp", "180+ sản phẩm"]
  ];
  app.innerHTML = shell(`
    <section class="hero"><div class="container"><div class="hero-copy"><span class="eyebrow">Bộ sưu tập mới 2026</span><h1>Mua sắm chất<br>Chọn đúng gu</h1><p>Khám phá sản phẩm công nghệ, thời trang và gia dụng được tuyển chọn. Giá tốt mỗi ngày, giao nhanh toàn quốc.</p><div class="hero-cta"><button class="btn btn-primary" data-nav="products">Mua ngay ${icon("arrow-right")}</button><button class="btn btn-outline" data-scroll="featured">Khám phá ưu đãi</button></div></div></div></section>
    <section class="trust-strip"><div class="container trust-grid">
      ${[["truck","Miễn phí vận chuyển","Đơn từ 500.000đ"],["badge-check","Đổi trả dễ dàng","Trong 7 ngày"],["shield-check","Thanh toán an toàn","Nhiều phương thức"],["headphones","Hỗ trợ 24/7","Hotline 1900 1234"]].map(x=>`<div class="trust-item"><span class="trust-icon">${icon(x[0],23)}</span><div><strong>${x[1]}</strong><span>${x[2]}</span></div></div>`).join("")}
    </div></section>
    <section class="section"><div class="container"><div class="section-head"><div><h2>Danh mục nổi bật</h2><p>Tìm đúng món đồ bạn cần</p></div><button class="link-red" data-nav="products">Xem tất cả ${icon("arrow-right",14)}</button></div><div class="category-grid">${categories.map(c=>`<button class="category-card" data-category="${c[1]}"><span class="category-icon">${icon(c[0],27)}</span><strong>${c[1]}</strong><span>${c[2]}</span></button>`).join("")}</div></div></section>
    <section class="section section-soft" id="featured"><div class="container"><div class="section-head"><div><h2>Sản phẩm nổi bật</h2><p>Những lựa chọn được yêu thích nhất tuần này</p></div><button class="link-red" data-nav="products">Xem tất cả ${icon("arrow-right",14)}</button></div><div class="product-grid">${featured.map(p=>productCard(p)).join("")}</div></div></section>
    <section class="section"><div class="container"><div class="flash"><div><span class="eyebrow">Ưu đãi đặc biệt</span><h2>Flash Sale đến 50%</h2><p class="muted">Nhanh tay trước khi ưu đãi kết thúc.</p><div class="timer"><b id="hours">03</b><b id="minutes">12</b><b id="seconds">45</b></div></div><div class="flash-products">${state.products.slice(7,10).map(p=>productCard(p,true)).join("")}</div></div></div></section>
    <section class="section section-soft" id="blog"><div class="container"><div class="section-head"><div><h2>Cẩm nang mua sắm</h2><p>Mẹo nhỏ giúp bạn chọn sản phẩm phù hợp</p></div></div><div class="category-grid">${[["smartphone","5 tiêu chí chọn điện thoại","Công nghệ"],["shirt","Phối đồ tối giản cho tuần mới","Phong cách"],["home","Tối ưu góc sống hiện đại","Gia dụng"]].map(x=>`<article class="category-card"><span class="category-icon">${icon(x[0],28)}</span><span class="eyebrow">${x[2]}</span><strong style="margin-top:6px">${x[1]}</strong><a class="link-red" href="#products" style="margin-top:10px;display:block">Đọc bài viết</a></article>`).join("")}</div></div></section>
  `, "home");
  bindCommon(); startTimer();
}

function filteredProducts() {
  let list = state.products.filter(p => {
    const q = state.filters.search.toLowerCase();
    return (!q || `${p.name} ${p.brand} ${p.category}`.toLowerCase().includes(q)) &&
      (!state.filters.category || p.category === state.filters.category) &&
      (!state.filters.brands.length || state.filters.brands.includes(p.brand)) &&
      p.price >= state.filters.min && p.price <= state.filters.max && p.rating >= state.filters.rating;
  });
  const sorters = {
    priceAsc: (a,b)=>a.price-b.price, priceDesc: (a,b)=>b.price-a.price,
    rating: (a,b)=>b.rating-a.rating, sale: (a,b)=>(b.oldPrice-b.price)-(a.oldPrice-a.price), newest: (a,b)=>b.id-a.id
  };
  return list.sort(sorters[state.filters.sort] || sorters.newest);
}

function renderProducts() {
  const list = filteredProducts();
  const categories = [...new Set(state.products.map(p=>p.category))];
  const brands = [...new Set(state.products.map(p=>p.brand))];
  app.innerHTML = shell(`
    <section class="page-head"><div class="container"><div class="breadcrumb">Trang chủ &nbsp;›&nbsp; <b>Sản phẩm</b></div><h1>Tất cả sản phẩm</h1></div></section>
    <div class="container shop-layout">
      <aside class="filter-panel" id="filter-panel"><div class="row-between"><h2 style="font-size:18px;margin:0 0 18px">Bộ lọc</h2><button class="icon-btn mobile-filter hidden" data-close-filter title="Đóng bộ lọc">${icon("x")}</button></div>
        <div class="filter-group"><h3>Danh mục</h3>${categories.map(c=>`<label class="check"><input type="radio" name="category" value="${c}" ${state.filters.category===c?"checked":""}> ${c} <span class="muted">(${state.products.filter(p=>p.category===c).length})</span></label>`).join("")}<label class="check"><input type="radio" name="category" value="" ${!state.filters.category?"checked":""}> Tất cả</label></div>
        <div class="filter-group"><h3>Khoảng giá</h3><div class="range-row"><input class="field" id="min-price" type="number" min="0" step="100000" value="${state.filters.min}" placeholder="Từ"><input class="field" id="max-price" type="number" min="0" step="100000" value="${state.filters.max}" placeholder="Đến"></div></div>
        <div class="filter-group"><h3>Thương hiệu</h3>${brands.map(b=>`<label class="check"><input type="checkbox" name="brand" value="${b}" ${state.filters.brands.includes(b)?"checked":""}> ${b}</label>`).join("")}</div>
        <div class="filter-group"><h3>Đánh giá</h3>${[4.5,4,3].map(r=>`<label class="check"><input type="radio" name="rating" value="${r}" ${state.filters.rating===r?"checked":""}> <span style="color:var(--amber)">★★★★★</span> từ ${r}</label>`).join("")}<label class="check"><input type="radio" name="rating" value="0" ${!state.filters.rating?"checked":""}> Tất cả đánh giá</label></div>
        <button class="btn btn-primary btn-block" id="apply-filter">Áp dụng</button><button class="btn btn-soft btn-block" id="clear-filter" style="margin-top:8px">Xóa bộ lọc</button>
      </aside>
      <section><div class="toolbar"><div><b>${list.length} sản phẩm</b><div class="muted" style="font-size:12px">${state.filters.search ? `Kết quả cho “${state.filters.search}”` : "Sẵn sàng giao toàn quốc"}</div></div><div class="toolbar-right"><button class="btn btn-soft btn-sm mobile-filter hidden" data-open-filter>${icon("sliders-horizontal",16)} Bộ lọc</button><select class="field" id="sort-products"><option value="newest">Mới nhất</option><option value="sale">Giảm giá nhiều</option><option value="rating">Đánh giá cao</option><option value="priceAsc">Giá tăng dần</option><option value="priceDesc">Giá giảm dần</option></select><div class="view-toggle"><button data-view="grid" title="Dạng lưới" class="${state.filters.view==="grid"?"active":""}">${icon("grid-2x2",16)}</button><button data-view="list" title="Dạng danh sách" class="${state.filters.view==="list"?"active":""}">${icon("list",16)}</button></div></div></div>
        ${list.length ? `<div class="product-grid ${state.filters.view}">${list.map(p=>productCard(p)).join("")}</div><div class="pagination"><button class="active">1</button><button>2</button><button>3</button><button>${icon("chevron-right",15)}</button></div>` : `<div class="empty">${icon("package-search",42)}<h3>Chưa tìm thấy sản phẩm phù hợp</h3><p class="muted">Hãy thử thay đổi từ khóa hoặc bộ lọc.</p><button class="btn btn-primary" id="empty-clear">Xóa bộ lọc</button></div>`}
      </section>
    </div>`, "products");
  document.getElementById("sort-products").value = state.filters.sort;
  bindCommon(); bindProductFilters();
}

function renderDetail(id) {
  const product = productById(id) || state.products[0];
  const selectedVariant = product.variants[0];
  const selectedColor = product.colors[0];
  const related = state.products.filter(p=>p.id!==product.id && (p.category===product.category || p.brand===product.brand)).slice(0,4);
  app.innerHTML = shell(`
    <div class="container"><div class="breadcrumb" style="padding-top:18px">Trang chủ &nbsp;›&nbsp; ${product.category} &nbsp;›&nbsp; <b>${product.name}</b></div>
      <section class="detail-layout">
        <div><div class="gallery-main"><div class="sprite sprite-${product.sprite}"></div><span class="discount">${product.badge}</span></div><div class="thumbs">${[0,1,2,3].map((_,i)=>`<button class="thumb ${i===0?"active":""}" data-thumb="${i}"><div class="sprite sprite-${product.sprite}" style="transform:${i%2?"scale(.88)":"scale(1)"};filter:${i===2?"saturate(.6)":"none"}"></div></button>`).join("")}</div></div>
        <div class="product-summary"><span class="eyebrow">${product.category}</span><h1>${product.name}</h1><div class="sku">SKU: ${product.sku}</div>${stars(product)}<div class="detail-price">${money(product.price)} <s>${money(product.oldPrice)}</s></div><p class="muted">Sản phẩm chính hãng, thiết kế hiện đại và được bảo hành đầy đủ. Giao hàng nhanh, kiểm tra sản phẩm trước khi nhận.</p>
          <div class="option-label">Màu sắc: <span id="selected-color">${selectedColor}</span></div><div class="swatches">${product.colors.map((c,i)=>`<button class="swatch ${i===0?"active":""}" data-color="${c}" title="${c}" style="background:${["#e8c0be","#20242b","#5d9ccd","#d5d8dc"][i%4]}"></button>`).join("")}</div>
          <div class="option-label">Phiên bản: <span id="selected-variant">${selectedVariant}</span></div><div class="choices">${product.variants.map((v,i)=>`<button class="choice ${i===0?"active":""}" data-variant="${v}">${v}</button>`).join("")}</div>
          <div class="option-label">Số lượng <span class="muted">· Còn ${product.stock} sản phẩm</span></div><div class="qty"><button data-detail-qty="-1">−</button><span id="detail-qty">1</span><button data-detail-qty="1">+</button></div>
          <div class="detail-actions"><button class="btn btn-outline" id="detail-add">${icon("shopping-cart")} Thêm vào giỏ</button><button class="btn btn-primary" id="buy-now">Mua ngay</button></div>
          <div class="promise-grid">${[["shield-check","Cam kết chính hãng"],["truck","Miễn phí vận chuyển"],["refresh-cw","Đổi trả 7 ngày"]].map(x=>`<div class="promise">${icon(x[0],21)}<strong>${x[1]}</strong></div>`).join("")}</div>
        </div>
      </section>
      <section><div class="tabs">${[["description","Mô tả sản phẩm"],["specs","Thông số kỹ thuật"],["reviews",`Đánh giá (${product.reviews})`],["qa","Hỏi đáp (12)"]].map(t=>`<button class="tab ${state.detailTab===t[0]?"active":""}" data-detail-tab="${t[0]}">${t[1]}</button>`).join("")}</div><div class="tab-content">${detailTabContent(product)}</div></section>
      <section class="section"><div class="section-head"><div><h2>Có thể bạn cũng thích</h2><p>Sản phẩm tương tự được khách hàng quan tâm</p></div></div><div class="product-grid">${related.map(p=>productCard(p)).join("")}</div></section>
    </div>`, "products");
  bindCommon(); bindDetail(product);
}

function detailTabContent(product) {
  if (state.detailTab === "specs") return `<table class="spec-table"><tr><td>Thương hiệu</td><td>${product.brand}</td></tr><tr><td>Mã sản phẩm</td><td>${product.sku}</td></tr><tr><td>Bảo hành</td><td>12 tháng chính hãng</td></tr><tr><td>Xuất xứ</td><td>Nhập khẩu chính ngạch</td></tr><tr><td>Tình trạng</td><td>Còn hàng (${product.stock})</td></tr></table>`;
  if (state.detailTab === "reviews") return `<div class="panel"><div class="row-between"><div><b style="font-size:28px">${product.rating}/5</b>${stars(product)}<span class="muted">Dựa trên ${product.reviews} đánh giá đã xác thực</span></div><button class="btn btn-primary" id="write-review">Viết đánh giá</button></div><div class="divider"></div><p><b>Minh Anh</b> · ★★★★★</p><p>Sản phẩm đẹp, đóng gói cẩn thận và giao nhanh hơn dự kiến. Rất hài lòng.</p></div>`;
  if (state.detailTab === "qa") return `<div class="panel"><h3>Hỏi đáp về sản phẩm</h3><form class="coupon" id="qa-form"><input class="field" required placeholder="Nhập câu hỏi của bạn"><button class="btn btn-primary">Gửi câu hỏi</button></form><div class="divider"></div><p><b>Sản phẩm có được kiểm tra khi nhận không?</b></p><p class="muted">ShopMate: Bạn được kiểm tra ngoại quan và đúng phiên bản trước khi thanh toán.</p></div>`;
  return `<h3>Trải nghiệm mua sắm đáng tin cậy</h3><p>${product.name} là lựa chọn cân bằng giữa thiết kế, tính năng và độ bền. Sản phẩm phù hợp cho nhu cầu sử dụng hàng ngày, được ShopMate tuyển chọn từ nhà cung cấp uy tín.</p><ul><li>Hàng mới 100%, đầy đủ phụ kiện theo tiêu chuẩn nhà sản xuất.</li><li>Chính sách bảo hành rõ ràng và hỗ trợ đổi trả trong 7 ngày.</li><li>Đóng gói an toàn, giao hàng có theo dõi trên toàn quốc.</li></ul>`;
}

function cartTotals() {
  const subtotal = state.cart.reduce((sum,item)=>sum + (productById(item.id)?.price || 0)*item.qty,0);
  const discount = state.coupon === "SHOPMATE2TR" ? Math.min(2000000, subtotal) : 0;
  const shipping = state.coupon === "FREESHIP" || subtotal >= 500000 ? 0 : 30000;
  return { subtotal, discount, shipping, total: subtotal-discount+shipping };
}

function renderCart() {
  const t = cartTotals();
  app.innerHTML = shell(`<section class="page-head"><div class="container"><div class="breadcrumb">Trang chủ &nbsp;›&nbsp; <b>Giỏ hàng</b></div><h1>Giỏ hàng của bạn <span class="muted" style="font-size:15px">(${cartCount()} sản phẩm)</span></h1></div></section><div class="container cart-layout">
    <section>${state.cart.length ? `<table class="cart-table"><thead><tr><th>Sản phẩm</th><th>Giá</th><th>Số lượng</th><th>Tổng</th><th></th></tr></thead><tbody>${state.cart.map(item=>{const p=productById(item.id);return `<tr><td><div class="cart-product"><div class="mini-product"><div class="sprite sprite-${p.sprite}"></div></div><div><b>${p.name}</b><div class="muted" style="font-size:12px">${item.color} · ${item.variant}</div></div></div></td><td>${money(p.price)}</td><td><div class="qty"><button data-cart-qty="${p.id}" data-delta="-1">−</button><span>${item.qty}</span><button data-cart-qty="${p.id}" data-delta="1">+</button></div></td><td><b>${money(p.price*item.qty)}</b></td><td><button class="icon-btn" data-remove-cart="${p.id}" title="Xóa sản phẩm">${icon("x",16)}</button></td></tr>`}).join("")}</tbody></table><button class="btn btn-soft" data-nav="products" style="margin-top:18px">${icon("arrow-left",16)} Tiếp tục mua sắm</button>` : `<div class="empty">${icon("shopping-bag",44)}<h3>Giỏ hàng đang trống</h3><p class="muted">Khám phá hàng trăm sản phẩm đang có ưu đãi.</p><button class="btn btn-primary" data-nav="products">Mua sắm ngay</button></div>`}</section>
    <aside class="stack"><div class="panel"><h3>Mã giảm giá</h3><form class="coupon" id="coupon-form"><input class="field" name="coupon" value="${state.coupon}" placeholder="Nhập mã giảm giá"><button class="btn btn-primary">Áp dụng</button></form><p class="muted" style="font-size:11px;margin-bottom:0">Gợi ý: SHOPMATE2TR hoặc FREESHIP</p></div><div class="panel"><h3>Tóm tắt đơn hàng</h3><div class="summary-line"><span>Tạm tính</span><b>${money(t.subtotal)}</b></div><div class="summary-line"><span>Giảm giá</span><b class="money-red">-${money(t.discount)}</b></div><div class="summary-line"><span>Phí vận chuyển</span><b>${t.shipping ? money(t.shipping) : "Miễn phí"}</b></div><div class="summary-line total"><span>Tổng cộng</span><span class="money-red">${money(t.total)}</span></div><button class="btn btn-primary btn-block" data-nav="checkout" ${!state.cart.length?"disabled":""}>Tiến hành thanh toán ${icon("arrow-right")}</button></div></aside>
  </div>`, "cart");
  bindCommon(); bindCart();
}

function renderCheckout() {
  if (!state.cart.length) { navigate("cart"); return; }
  const t = cartTotals();
  app.innerHTML = shell(`<section class="page-head"><div class="container"><div class="breadcrumb">Trang chủ &nbsp;›&nbsp; Giỏ hàng &nbsp;›&nbsp; <b>Thanh toán</b></div><h1>Thanh toán</h1></div></section><form class="container checkout" id="checkout-form"><div class="stack">
    <section class="panel"><h2>Thông tin giao hàng</h2><div class="form-grid"><div class="form-group"><label>Họ và tên *</label><input class="field" name="name" required value="${state.user.name}"></div><div class="form-group"><label>Số điện thoại *</label><input class="field" name="phone" required value="${state.user.phone}"></div><div class="form-group"><label>Email *</label><input class="field" name="email" type="email" required value="${state.user.email}"></div><div class="form-group"><label>Tỉnh / Thành phố *</label><select class="field" name="province"><option>TP. Hồ Chí Minh</option><option>Hà Nội</option><option>Đà Nẵng</option></select></div><div class="form-group"><label>Quận / Huyện *</label><select class="field" name="district"><option>Quận 1</option><option>Quận 3</option><option>TP. Thủ Đức</option></select></div><div class="form-group"><label>Phường / Xã *</label><select class="field" name="ward"><option>Phường Bến Nghé</option><option>Phường Đa Kao</option></select></div><div class="form-group full"><label>Địa chỉ nhận hàng *</label><input class="field" name="address" required value="${state.user.address.split(",")[0]}"></div><div class="form-group full"><label>Ghi chú đơn hàng</label><textarea class="field" rows="3" placeholder="Ví dụ: giao trong giờ hành chính"></textarea></div></div></section>
    <section class="panel"><h2>Phương thức vận chuyển</h2><label class="radio-card"><input type="radio" name="shipping" value="standard" checked><span><strong>Giao hàng tiêu chuẩn (2–4 ngày)</strong><span>Miễn phí cho đơn từ 500.000đ</span></span></label><label class="radio-card"><input type="radio" name="shipping" value="fast"><span><strong>Giao hàng nhanh (1–2 ngày)</strong><span>Phụ phí 50.000đ</span></span></label></section>
    <section class="panel"><h2>Phương thức thanh toán</h2>${[["cod","banknote","Thanh toán khi nhận hàng (COD)","Thanh toán bằng tiền mặt khi nhận hàng"],["bank","landmark","Chuyển khoản ngân hàng","Nhận hướng dẫn chuyển khoản sau khi đặt hàng"],["wallet","wallet-cards","Ví điện tử MoMo / ZaloPay","Thanh toán nhanh qua ứng dụng"],["card","credit-card","Thẻ ngân hàng / quốc tế","Visa, Mastercard và thẻ nội địa"]].map((x,i)=>`<label class="radio-card"><input type="radio" name="payment" value="${x[0]}" ${i===0?"checked":""}><span>${icon(x[1],20)}<strong>${x[2]}</strong><span>${x[3]}</span></span></label>`).join("")}</section>
  </div><aside class="panel" style="position:sticky;top:130px"><h2>Tóm tắt đơn hàng</h2><div class="checkout-items">${state.cart.map(item=>{const p=productById(item.id);return `<div class="checkout-item"><div class="mini-product"><div class="sprite sprite-${p.sprite}"></div></div><div><b>${p.name}</b><div class="muted" style="font-size:11px">SL: ${item.qty} · ${item.variant}</div></div><b>${money(p.price*item.qty)}</b></div>`}).join("")}</div><div class="divider"></div><div class="summary-line"><span>Tạm tính</span><b>${money(t.subtotal)}</b></div><div class="summary-line"><span>Giảm giá</span><b class="money-red">-${money(t.discount)}</b></div><div class="summary-line"><span>Phí vận chuyển</span><b id="checkout-shipping">${t.shipping?money(t.shipping):"Miễn phí"}</b></div><div class="summary-line total"><span>Tổng cộng</span><span class="money-red" id="checkout-total">${money(t.total)}</span></div><button class="btn btn-primary btn-block" type="submit">Đặt hàng</button><p class="muted" style="font-size:11px;text-align:center">Bằng cách đặt hàng, bạn đồng ý với điều khoản và chính sách của ShopMate.</p></aside></form>`, "cart");
  bindCommon(); bindCheckout(t);
}

function renderAccount() {
  const tabs = [["overview","layout-dashboard","Tổng quan"],["orders","package","Đơn hàng"],["wishlist","heart","Sản phẩm yêu thích"],["address","map-pin","Sổ địa chỉ"],["profile","user-round","Thông tin cá nhân"],["password","lock-keyhole","Đổi mật khẩu"]];
  app.innerHTML = shell(`<section class="page-head"><div class="container"><div class="breadcrumb">Trang chủ &nbsp;›&nbsp; <b>Tài khoản</b></div><h1>Tài khoản khách hàng</h1></div></section><div class="container account-layout"><aside class="panel" style="padding:0;align-self:start"><div class="profile-card"><div class="avatar">NA</div><h3>${state.user.name}</h3><span class="muted" style="font-size:12px">${state.user.email}</span></div><nav class="account-menu">${tabs.map(t=>`<button class="${state.accountTab===t[0]?"active":""}" data-account-tab="${t[0]}">${icon(t[1],17)} ${t[2]}</button>`).join("")}<button id="logout">${icon("log-out",17)} Đăng xuất</button></nav></aside><section>${accountContent()}</section></div>`, state.accountTab === "wishlist" ? "wishlist" : "account");
  bindCommon(); bindAccount();
}

function accountContent() {
  if (state.accountTab === "wishlist") return `<div class="section-head"><div><h2>Sản phẩm yêu thích</h2><p>${state.wishlist.length} sản phẩm đã lưu</p></div></div><div class="product-grid">${state.products.filter(p=>state.wishlist.includes(p.id)).map(p=>productCard(p)).join("") || `<div class="empty"><h3>Chưa có sản phẩm yêu thích</h3></div>`}</div>`;
  if (state.accountTab === "address") return `<div class="panel"><div class="row-between"><h2>Sổ địa chỉ</h2><button class="btn btn-primary btn-sm" id="add-address">${icon("plus",16)} Thêm địa chỉ</button></div><div class="order-card"><span class="status green">Mặc định</span><h3>${state.user.name}</h3><p>${state.user.phone}<br>${state.user.address}</p><button class="btn btn-soft btn-sm" id="edit-address">Chỉnh sửa</button></div></div>`;
  if (state.accountTab === "profile") return `<form class="panel form-grid" id="profile-form"><h2 class="form-group full">Thông tin cá nhân</h2><div class="form-group"><label>Họ và tên</label><input class="field" name="name" value="${state.user.name}"></div><div class="form-group"><label>Số điện thoại</label><input class="field" name="phone" value="${state.user.phone}"></div><div class="form-group full"><label>Email</label><input class="field" name="email" type="email" value="${state.user.email}"></div><div class="form-group full"><button class="btn btn-primary">Lưu thay đổi</button></div></form>`;
  if (state.accountTab === "password") return `<form class="panel stack" id="password-form"><h2>Đổi mật khẩu</h2><div class="form-group"><label>Mật khẩu hiện tại</label><input class="field" type="password" required></div><div class="form-group"><label>Mật khẩu mới</label><input class="field" type="password" minlength="6" required></div><div class="form-group"><label>Nhập lại mật khẩu mới</label><input class="field" type="password" minlength="6" required></div><button class="btn btn-primary">Cập nhật mật khẩu</button></form>`;
  if (state.accountTab === "overview") return `<div class="stats"><div class="stat"><div class="stat-icon">${icon("package")}</div><div><span>Đơn hàng</span><strong>${state.orders.length}</strong></div></div><div class="stat"><div class="stat-icon">${icon("heart")}</div><div><span>Yêu thích</span><strong>${state.wishlist.length}</strong></div></div><div class="stat"><div class="stat-icon">${icon("ticket-percent")}</div><div><span>Voucher</span><strong>3</strong></div></div><div class="stat"><div class="stat-icon">${icon("coins")}</div><div><span>Điểm thưởng</span><strong>1.250</strong></div></div></div><div class="panel" style="margin-top:16px"><h2>Đơn hàng gần nhất</h2>${orderCard(state.orders[0], true)}</div>`;
  return `<div class="section-head"><div><h2>Đơn hàng của tôi</h2><p>Theo dõi và quản lý lịch sử mua hàng</p></div></div><div class="tabs" style="margin-bottom:16px"><button class="tab active">Tất cả (${state.orders.length})</button><button class="tab">Đang xử lý</button><button class="tab">Đang giao</button><button class="tab">Hoàn thành</button></div>${state.orders.map(o=>orderCard(o)).join("")}`;
}

function statusClass(status) {
  return status === "Hoàn thành" ? "green" : status === "Đang giao" ? "blue" : status === "Đã hủy" ? "red" : "amber";
}

function orderCard(order, compact=false) {
  return `<article class="order-card"><div class="row-between"><div><b>#${order.id}</b><div class="muted" style="font-size:11px">${order.date}</div></div><span class="status ${statusClass(order.status)}">${order.status}</span></div><div class="order-products">${order.productIds.map(id=>{const p=productById(id); return p?`<div class="mini-product"><div class="sprite sprite-${p.sprite}"></div></div>`:""}).join("")}</div><div class="row-between"><span class="muted">${order.quantity} sản phẩm</span><b>${money(order.total)}</b></div>${compact?"":`<div class="timeline">${["Đã đặt","Xác nhận","Chuẩn bị","Đang giao","Hoàn thành"].map((s,i)=>`<div class="timeline-step ${order.status==="Hoàn thành"||i<3||order.status==="Đang giao"&&i<4?"done":""}">${s}</div>`).join("")}</div><div class="row" style="justify-content:flex-end"><button class="btn btn-soft btn-sm" data-order-detail="${order.id}">Xem chi tiết</button>${!["Hoàn thành","Đã hủy","Đang giao"].includes(order.status)?`<button class="btn btn-danger btn-sm" data-cancel-order="${order.id}">Hủy đơn</button>`:""}</div>`}</article>`;
}

function renderAdmin() {
  const tabs = [["dashboard","layout-dashboard","Dashboard"],["products","package","Sản phẩm"],["categories","layers-3","Danh mục"],["orders","receipt-text","Đơn hàng"],["customers","users","Khách hàng"],["vouchers","ticket-percent","Khuyến mãi"],["reports","bar-chart-3","Báo cáo"],["settings","settings","Cài đặt"]];
  app.innerHTML = `<div class="admin-shell"><aside class="admin-sidebar"><a href="#home" class="brand"><span class="brand-mark">S</span><span>ShopMate<small>Admin</small></span></a><nav class="admin-nav">${tabs.map(t=>`<button class="${state.adminTab===t[0]?"active":""}" data-admin-tab="${t[0]}">${icon(t[1],17)} ${t[2]}</button>`).join("")}</nav></aside><main class="admin-main"><div class="admin-top"><div><span class="eyebrow">Trang quản trị</span><h1>${tabs.find(t=>t[0]===state.adminTab)?.[2] || "Dashboard"}</h1></div><div class="row"><button class="icon-btn" title="Thông báo">${icon("bell")}</button><button class="btn btn-soft btn-sm" data-nav="home">${icon("store",16)} Xem cửa hàng</button></div></div>${adminContent()}</main></div>`;
  bindCommon(); bindAdmin();
}

function adminContent() {
  if (state.adminTab === "products") return `<div class="panel"><div class="admin-toolbar"><div class="search"><input id="admin-product-search" placeholder="Tìm sản phẩm..."><button title="Tìm">${icon("search")}</button></div><button class="btn btn-primary" id="add-product">${icon("plus",16)} Thêm sản phẩm</button></div><div class="data-scroll"><table class="data-table" id="admin-products"><thead><tr><th>Sản phẩm</th><th>Danh mục</th><th>Giá bán</th><th>Tồn kho</th><th>Trạng thái</th><th>Thao tác</th></tr></thead><tbody>${adminProductRows(state.products)}</tbody></table></div></div>`;
  if (state.adminTab === "orders") return `<div class="panel"><div class="admin-toolbar"><div><h2 style="margin:0">Quản lý đơn hàng</h2><span class="muted">${state.orders.length} đơn hàng mẫu</span></div><select class="field" id="order-filter" style="width:180px"><option>Tất cả trạng thái</option><option>Đang xử lý</option><option>Đang giao</option><option>Hoàn thành</option><option>Đã hủy</option></select></div><div class="data-scroll"><table class="data-table"><thead><tr><th>Mã đơn</th><th>Khách hàng</th><th>Ngày đặt</th><th>Tổng tiền</th><th>Trạng thái</th><th>Cập nhật</th></tr></thead><tbody>${state.orders.map(o=>`<tr><td><b>#${o.id}</b></td><td>${o.customer}</td><td>${o.date}</td><td><b>${money(o.total)}</b></td><td><span class="status ${statusClass(o.status)}">${o.status}</span></td><td><select class="field" data-order-status="${o.id}" style="min-width:145px">${["Đã đặt","Đang xử lý","Đang giao","Hoàn thành","Đã hủy"].map(s=>`<option ${o.status===s?"selected":""}>${s}</option>`).join("")}</select></td></tr>`).join("")}</tbody></table></div></div>`;
  if (state.adminTab === "customers") return `<div class="panel"><h2>Khách hàng</h2><div class="data-scroll"><table class="data-table"><thead><tr><th>Khách hàng</th><th>Liên hệ</th><th>Số đơn</th><th>Chi tiêu</th><th>Trạng thái</th></tr></thead><tbody>${[["Nguyễn Văn A","nguyenvana@gmail.com",5,"42.580.000đ"],["Trần Thị B","tranthib@gmail.com",3,"12.190.000đ"],["Lê Văn C","levanc@gmail.com",8,"35.490.000đ"],["Phạm Thị D","phamthid@gmail.com",2,"1.180.000đ"]].map(c=>`<tr><td><b>${c[0]}</b></td><td>${c[1]}</td><td>${c[2]}</td><td>${c[3]}</td><td><span class="status green">Hoạt động</span></td></tr>`).join("")}</tbody></table></div></div>`;
  if (state.adminTab === "vouchers") return `<div class="panel"><div class="row-between"><h2>Voucher & khuyến mãi</h2><button class="btn btn-primary" id="add-voucher">${icon("plus",16)} Tạo voucher</button></div><div class="data-scroll"><table class="data-table"><thead><tr><th>Mã</th><th>Ưu đãi</th><th>Đơn tối thiểu</th><th>Đã dùng</th><th>Trạng thái</th></tr></thead><tbody><tr><td><b>SHOPMATE2TR</b></td><td>Giảm 2.000.000đ</td><td>10.000.000đ</td><td>248</td><td><span class="status green">Đang chạy</span></td></tr><tr><td><b>FREESHIP</b></td><td>Miễn phí vận chuyển</td><td>0đ</td><td>612</td><td><span class="status green">Đang chạy</span></td></tr><tr><td><b>WELCOME10</b></td><td>Giảm 10%</td><td>500.000đ</td><td>1.024</td><td><span class="status amber">Sắp hết hạn</span></td></tr></tbody></table></div></div>`;
  if (state.adminTab === "categories") return `<div class="panel"><div class="row-between"><h2>Danh mục sản phẩm</h2><button class="btn btn-primary" id="add-category">${icon("plus",16)} Thêm danh mục</button></div><div class="category-grid">${[...new Set(state.products.map(p=>p.category))].map(c=>`<div class="category-card"><span class="category-icon">${icon("folder-open",26)}</span><strong>${c}</strong><span>${state.products.filter(p=>p.category===c).length} sản phẩm</span><button class="btn btn-soft btn-sm" style="margin-top:10px">Chỉnh sửa</button></div>`).join("")}</div></div>`;
  if (state.adminTab === "settings") return `<form class="panel form-grid" id="settings-form"><h2 class="form-group full">Cấu hình cửa hàng</h2><div class="form-group"><label>Tên cửa hàng</label><input class="field" value="ShopMate"></div><div class="form-group"><label>Hotline</label><input class="field" value="1900 1234"></div><div class="form-group full"><label>Email hỗ trợ</label><input class="field" value="hello@shopmate.vn"></div><div class="form-group full"><label>Địa chỉ</label><input class="field" value="123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh"></div><div class="form-group full"><button class="btn btn-primary">Lưu cấu hình</button></div></form>`;
  if (state.adminTab === "reports") return `<div class="stats"><div class="stat"><div class="stat-icon">${icon("trending-up")}</div><div><span>Tăng trưởng tháng</span><strong>+18,6%</strong></div></div><div class="stat"><div class="stat-icon">${icon("shopping-bag")}</div><div><span>Giá trị đơn TB</span><strong>1,84 triệu</strong></div></div><div class="stat"><div class="stat-icon">${icon("rotate-cw")}</div><div><span>Tỷ lệ quay lại</span><strong>38%</strong></div></div><div class="stat"><div class="stat-icon">${icon("undo-2")}</div><div><span>Tỷ lệ hoàn</span><strong>2,1%</strong></div></div></div><div class="panel" style="margin-top:14px"><h2>Doanh thu theo tháng</h2>${revenueChart()}</div>`;
  return `<div class="stats"><div class="stat"><div class="stat-icon">${icon("banknote")}</div><div><span>Doanh thu</span><strong>125.000.000đ</strong></div></div><div class="stat"><div class="stat-icon">${icon("receipt-text")}</div><div><span>Đơn hàng</span><strong>1.250</strong></div></div><div class="stat"><div class="stat-icon">${icon("users")}</div><div><span>Khách hàng</span><strong>850</strong></div></div><div class="stat"><div class="stat-icon">${icon("package")}</div><div><span>Sản phẩm</span><strong>${state.products.length}</strong></div></div></div><div class="dashboard-grid"><section class="panel"><div class="row-between"><h2>Biểu đồ doanh thu</h2><select class="field" style="width:130px"><option>Năm 2026</option></select></div>${revenueChart()}</section><section class="panel"><h2>Tỷ lệ đơn hàng</h2><div class="donut-wrap"><div class="donut"></div></div><div class="row-between"><span><b style="color:var(--blue)">●</b> Đang xử lý</span><b>38%</b></div><div class="row-between"><span><b style="color:var(--green)">●</b> Hoàn thành</span><b>30%</b></div><div class="row-between"><span><b style="color:var(--amber)">●</b> Đang giao</span><b>20%</b></div><div class="row-between"><span><b style="color:var(--red)">●</b> Đã hủy</span><b>12%</b></div></section></div><section class="panel" style="margin-top:14px"><div class="row-between"><h2>Đơn hàng gần đây</h2><button class="link-red" data-admin-tab="orders">Xem tất cả</button></div><div class="data-scroll"><table class="data-table"><thead><tr><th>Mã đơn</th><th>Khách hàng</th><th>Tổng tiền</th><th>Trạng thái</th><th>Ngày đặt</th></tr></thead><tbody>${state.orders.map(o=>`<tr><td>#${o.id}</td><td>${o.customer}</td><td>${money(o.total)}</td><td><span class="status ${statusClass(o.status)}">${o.status}</span></td><td>${o.date}</td></tr>`).join("")}</tbody></table></div></section>`;
}

function revenueChart() {
  return `<div class="chart">${[48,42,39,43,44,45,72,88,64,82,98,79].map((h,i)=>`<div class="bar-wrap"><div class="bar" style="height:${h}%"></div><span>T${i+1}</span></div>`).join("")}</div>`;
}

function adminProductRows(products) {
  return products.map(p=>`<tr><td><div class="row"><div class="table-thumb"><div class="sprite sprite-${p.sprite}"></div></div><div><b>${p.name}</b><div class="muted">${p.sku}</div></div></div></td><td>${p.category}</td><td><b>${money(p.price)}</b></td><td><span class="status ${p.stock<10?"red":p.stock<25?"amber":"green"}">${p.stock}</span></td><td><span class="status green">Hiển thị</span></td><td><button class="icon-btn" data-edit-product="${p.id}" title="Sửa sản phẩm">${icon("pencil",16)}</button><button class="icon-btn" data-delete-product="${p.id}" title="Xóa sản phẩm">${icon("trash-2",16)}</button></td></tr>`).join("");
}

function bindCommon() {
  refreshIcons();
  setTimeout(refreshIcons, 1200);
  document.querySelectorAll("[data-nav]").forEach(el=>el.addEventListener("click", e=>{e.preventDefault(); if(el.dataset.accountTab) state.accountTab=el.dataset.accountTab; navigate(el.dataset.nav)}));
  document.querySelectorAll("[data-product]").forEach(el=>el.addEventListener("click", e=>{if(e.target.closest("[data-wishlist]")) return; navigate(`product/${el.dataset.product}`)}));
  document.querySelectorAll("[data-add-cart]").forEach(el=>el.addEventListener("click", e=>{e.stopPropagation(); addToCart(Number(el.dataset.addCart));}));
  document.querySelectorAll("[data-wishlist]").forEach(el=>el.addEventListener("click", e=>{e.stopPropagation(); toggleWishlist(Number(el.dataset.wishlist));}));
  document.querySelectorAll("[data-category]").forEach(el=>el.addEventListener("click", e=>{e.preventDefault(); state.filters.category=el.dataset.category; state.filters.search=""; save(); navigate("products")}));
  document.querySelectorAll("[data-sort]").forEach(el=>el.addEventListener("click", e=>{e.preventDefault(); state.filters.sort=el.dataset.sort; save(); navigate("products")}));
  document.querySelectorAll("[data-scroll]").forEach(el=>el.addEventListener("click", e=>{const target=document.getElementById(el.dataset.scroll); if(target){e.preventDefault(); target.scrollIntoView({behavior:"smooth"})}}));
  document.getElementById("global-search")?.addEventListener("submit", e=>{e.preventDefault(); state.filters.search=new FormData(e.currentTarget).get("q").trim(); save(); navigate("products")});
  document.getElementById("newsletter")?.addEventListener("submit", e=>{e.preventDefault(); e.currentTarget.reset(); showToast("Đăng ký nhận tin thành công")});
}

function addToCart(id, qty=1, color, variant) {
  const p = productById(id); if (!p) return;
  const existing = state.cart.find(item=>item.id===id && item.color===(color||p.colors[0]) && item.variant===(variant||p.variants[0]));
  if (existing) existing.qty += qty; else state.cart.push({ id, qty, color: color||p.colors[0], variant: variant||p.variants[0] });
  save(); showToast(`${p.name} đã được thêm vào giỏ`); setTimeout(renderCurrent, 200);
}

function toggleWishlist(id) {
  const index = state.wishlist.indexOf(id);
  if (index >= 0) state.wishlist.splice(index,1); else state.wishlist.push(id);
  save(); showToast(index>=0?"Đã bỏ khỏi danh sách yêu thích":"Đã thêm vào danh sách yêu thích"); renderCurrent();
}

function bindProductFilters() {
  document.getElementById("sort-products")?.addEventListener("change", e=>{state.filters.sort=e.target.value; save(); renderProducts()});
  document.querySelectorAll("[data-view]").forEach(b=>b.addEventListener("click",()=>{state.filters.view=b.dataset.view;save();renderProducts()}));
  document.querySelector("[data-open-filter]")?.addEventListener("click",()=>document.getElementById("filter-panel").classList.add("open"));
  document.querySelector("[data-close-filter]")?.addEventListener("click",()=>document.getElementById("filter-panel").classList.remove("open"));
  document.getElementById("apply-filter")?.addEventListener("click",()=>{
    state.filters.category=document.querySelector('input[name="category"]:checked')?.value||"";
    state.filters.brands=[...document.querySelectorAll('input[name="brand"]:checked')].map(x=>x.value);
    state.filters.rating=Number(document.querySelector('input[name="rating"]:checked')?.value||0);
    state.filters.min=Number(document.getElementById("min-price").value||0); state.filters.max=Number(document.getElementById("max-price").value||30000000); save(); renderProducts();
  });
  ["clear-filter","empty-clear"].forEach(id=>document.getElementById(id)?.addEventListener("click",()=>{state.filters={...defaultState.filters};save();renderProducts()}));
}

function bindDetail(product) {
  let qty=1, color=product.colors[0], variant=product.variants[0];
  document.querySelectorAll("[data-color]").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll("[data-color]").forEach(x=>x.classList.remove("active"));b.classList.add("active");color=b.dataset.color;document.getElementById("selected-color").textContent=color}));
  document.querySelectorAll("[data-variant]").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll("[data-variant]").forEach(x=>x.classList.remove("active"));b.classList.add("active");variant=b.dataset.variant;document.getElementById("selected-variant").textContent=variant}));
  document.querySelectorAll("[data-detail-qty]").forEach(b=>b.addEventListener("click",()=>{qty=Math.max(1,Math.min(product.stock,qty+Number(b.dataset.detailQty)));document.getElementById("detail-qty").textContent=qty}));
  document.getElementById("detail-add")?.addEventListener("click",()=>addToCart(product.id,qty,color,variant));
  document.getElementById("buy-now")?.addEventListener("click",()=>{addToCart(product.id,qty,color,variant);setTimeout(()=>navigate("checkout"),250)});
  document.querySelectorAll("[data-detail-tab]").forEach(b=>b.addEventListener("click",()=>{state.detailTab=b.dataset.detailTab;save();renderDetail(product.id)}));
  document.querySelectorAll("[data-thumb]").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll("[data-thumb]").forEach(x=>x.classList.remove("active"));b.classList.add("active")}));
  document.getElementById("write-review")?.addEventListener("click",()=>openSimpleModal("Viết đánh giá", `<label class="form-group"><span>Điểm đánh giá</span><select class="field"><option>5 sao - Rất hài lòng</option><option>4 sao - Hài lòng</option><option>3 sao - Bình thường</option></select></label><label class="form-group"><span>Nhận xét</span><textarea class="field" rows="4" placeholder="Chia sẻ trải nghiệm của bạn"></textarea></label><button class="btn btn-primary btn-block" data-close-modal>Gửi đánh giá</button>`));
  document.getElementById("qa-form")?.addEventListener("submit",e=>{e.preventDefault();showToast("Câu hỏi đã được gửi tới ShopMate");e.currentTarget.reset()});
}

function bindCart() {
  document.querySelectorAll("[data-cart-qty]").forEach(b=>b.addEventListener("click",()=>{const item=state.cart.find(i=>i.id===Number(b.dataset.cartQty));if(item){item.qty=Math.max(1,item.qty+Number(b.dataset.delta));save();renderCart()}}));
  document.querySelectorAll("[data-remove-cart]").forEach(b=>b.addEventListener("click",()=>{state.cart=state.cart.filter(i=>i.id!==Number(b.dataset.removeCart));save();showToast("Đã xóa sản phẩm khỏi giỏ");renderCart()}));
  document.getElementById("coupon-form")?.addEventListener("submit",e=>{e.preventDefault();const code=new FormData(e.currentTarget).get("coupon").trim().toUpperCase();if(["SHOPMATE2TR","FREESHIP"].includes(code)){state.coupon=code;save();showToast("Áp dụng mã giảm giá thành công");renderCart()}else{state.coupon="";save();showToast("Mã giảm giá không hợp lệ")}});
}

function bindCheckout(base) {
  document.querySelectorAll('input[name="shipping"]').forEach(r=>r.addEventListener("change",()=>{const extra=r.value==="fast"?50000:base.shipping;document.getElementById("checkout-shipping").textContent=extra?money(extra):"Miễn phí";document.getElementById("checkout-total").textContent=money(base.total-base.shipping+extra)}));
  document.getElementById("checkout-form")?.addEventListener("submit",e=>{e.preventDefault();const data=new FormData(e.currentTarget);state.user={...state.user,name:data.get("name"),phone:data.get("phone"),email:data.get("email")};const fast=data.get("shipping")==="fast"?50000:base.shipping;const id="DH"+String(Date.now()).slice(-5);state.orders.unshift({id,date:new Date().toLocaleDateString("vi-VN"),productIds:state.cart.map(i=>i.id),quantity:cartCount(),total:base.total-base.shipping+fast,status:"Đã đặt",customer:state.user.name});state.cart=[];state.coupon="";save();modalRoot.innerHTML=`<div class="modal-backdrop"><div class="modal"><div class="success-state"><div class="success-icon">${icon("check",36)}</div><h2>Đặt hàng thành công</h2><p>Đơn hàng <b>#${id}</b> đã được tiếp nhận. ShopMate sẽ sớm liên hệ xác nhận với bạn.</p><button class="btn btn-primary" id="view-new-order">Theo dõi đơn hàng</button></div></div></div>`;refreshIcons();document.getElementById("view-new-order").onclick=()=>{modalRoot.innerHTML="";state.accountTab="orders";save();navigate("account")}});
}

function bindAccount() {
  document.querySelectorAll("[data-account-tab]").forEach(b=>b.addEventListener("click",e=>{e.preventDefault();state.accountTab=b.dataset.accountTab;save();renderAccount()}));
  document.querySelectorAll("[data-cancel-order]").forEach(b=>b.addEventListener("click",()=>{const o=state.orders.find(x=>x.id===b.dataset.cancelOrder);if(o){o.status="Đã hủy";save();showToast("Đã hủy đơn hàng");renderAccount()}}));
  document.querySelectorAll("[data-order-detail]").forEach(b=>b.addEventListener("click",()=>{const o=state.orders.find(x=>x.id===b.dataset.orderDetail);openSimpleModal(`Chi tiết #${o.id}`, `<p><b>Khách hàng:</b> ${o.customer}</p><p><b>Ngày đặt:</b> ${o.date}</p><p><b>Trạng thái:</b> ${o.status}</p><p><b>Tổng thanh toán:</b> ${money(o.total)}</p><button class="btn btn-primary btn-block" data-close-modal>Đóng</button>`)}));
  document.getElementById("profile-form")?.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(e.currentTarget);state.user={...state.user,name:d.get("name"),phone:d.get("phone"),email:d.get("email")};save();showToast("Đã cập nhật thông tin cá nhân");renderAccount()});
  document.getElementById("password-form")?.addEventListener("submit",e=>{e.preventDefault();showToast("Mật khẩu đã được cập nhật");e.currentTarget.reset()});
  ["add-address","edit-address"].forEach(id=>document.getElementById(id)?.addEventListener("click",()=>openSimpleModal(id==="add-address"?"Thêm địa chỉ":"Chỉnh sửa địa chỉ", `<div class="stack"><input class="field" value="${state.user.name}" placeholder="Họ tên"><input class="field" value="${state.user.phone}" placeholder="Số điện thoại"><textarea class="field" rows="3" placeholder="Địa chỉ">${state.user.address}</textarea><button class="btn btn-primary" data-close-modal>Lưu địa chỉ</button></div>`)));
  document.getElementById("logout")?.addEventListener("click",()=>openSimpleModal("Đăng xuất", `<p>Bạn đang dùng tài khoản demo. Thao tác đăng xuất sẽ giữ lại dữ liệu mua sắm trên thiết bị.</p><button class="btn btn-primary btn-block" data-close-modal>Đã hiểu</button>`));
}

function bindAdmin() {
  document.querySelectorAll("[data-admin-tab]").forEach(b=>b.addEventListener("click",()=>{state.adminTab=b.dataset.adminTab;save();renderAdmin()}));
  document.getElementById("admin-product-search")?.addEventListener("input",e=>{const q=e.target.value.toLowerCase();document.querySelector("#admin-products tbody").innerHTML=adminProductRows(state.products.filter(p=>p.name.toLowerCase().includes(q)));refreshIcons();bindAdminProductActions()});
  bindAdminProductActions();
  document.getElementById("add-product")?.addEventListener("click",()=>openProductModal());
  document.querySelectorAll("[data-order-status]").forEach(s=>s.addEventListener("change",()=>{const o=state.orders.find(x=>x.id===s.dataset.orderStatus);if(o){o.status=s.value;save();showToast("Đã cập nhật trạng thái đơn hàng");renderAdmin()}}));
  ["add-voucher","add-category"].forEach(id=>document.getElementById(id)?.addEventListener("click",()=>openSimpleModal(id==="add-voucher"?"Tạo voucher":"Thêm danh mục", `<div class="stack"><input class="field" placeholder="Tên hoặc mã"><input class="field" placeholder="Giá trị ưu đãi"><button class="btn btn-primary" data-close-modal>Lưu thông tin</button></div>`)));
  ["settings-form"].forEach(id=>document.getElementById(id)?.addEventListener("submit",e=>{e.preventDefault();showToast("Đã lưu cấu hình cửa hàng")}));
}

function bindAdminProductActions() {
  document.querySelectorAll("[data-edit-product]").forEach(b=>b.addEventListener("click",()=>openProductModal(productById(b.dataset.editProduct))));
  document.querySelectorAll("[data-delete-product]").forEach(b=>b.addEventListener("click",()=>{const p=productById(b.dataset.deleteProduct);openSimpleModal("Xóa sản phẩm", `<p>Bạn có chắc muốn xóa <b>${p.name}</b>? Dữ liệu demo có thể được khôi phục khi đặt lại.</p><button class="btn btn-danger btn-block" id="confirm-delete">Xóa sản phẩm</button>`);setTimeout(()=>document.getElementById("confirm-delete")?.addEventListener("click",()=>{state.products=state.products.filter(x=>x.id!==p.id);save();modalRoot.innerHTML="";showToast("Đã xóa sản phẩm");renderAdmin()}),0)}));
}

function openProductModal(product) {
  const p=product||{name:"",category:"Công nghệ",brand:"",price:0,oldPrice:0,stock:0,sku:"",sprite:0,colors:["Đen"],variants:["Tiêu chuẩn"]};
  modalRoot.innerHTML=`<div class="modal-backdrop"><div class="modal"><div class="modal-head"><h2>${product?"Sửa":"Thêm"} sản phẩm</h2><button class="close" data-close-modal>${icon("x")}</button></div><form class="modal-body form-grid" id="product-form"><div class="form-group full"><label>Tên sản phẩm</label><input class="field" name="name" required value="${p.name}"></div><div class="form-group"><label>Danh mục</label><select class="field" name="category">${["Công nghệ","Thời trang","Gia dụng","Phụ kiện"].map(c=>`<option ${p.category===c?"selected":""}>${c}</option>`).join("")}</select></div><div class="form-group"><label>Thương hiệu</label><input class="field" name="brand" required value="${p.brand}"></div><div class="form-group"><label>Giá bán</label><input class="field" name="price" type="number" required value="${p.price}"></div><div class="form-group"><label>Giá gốc</label><input class="field" name="oldPrice" type="number" value="${p.oldPrice}"></div><div class="form-group"><label>Tồn kho</label><input class="field" name="stock" type="number" value="${p.stock}"></div><div class="form-group"><label>SKU</label><input class="field" name="sku" value="${p.sku}"></div><div class="form-group full"><button class="btn btn-primary btn-block">Lưu sản phẩm</button></div></form></div></div>`;refreshIcons();bindModal();document.getElementById("product-form").onsubmit=e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.currentTarget));if(product){Object.assign(product,{name:d.name,category:d.category,brand:d.brand,price:Number(d.price),oldPrice:Number(d.oldPrice),stock:Number(d.stock),sku:d.sku})}else{state.products.push({...p,id:Math.max(...state.products.map(x=>x.id))+1,name:d.name,category:d.category,brand:d.brand,price:Number(d.price),oldPrice:Number(d.oldPrice),stock:Number(d.stock),sku:d.sku,rating:5,reviews:0,badge:"Mới",featured:false})}save();modalRoot.innerHTML="";showToast("Đã lưu sản phẩm");renderAdmin()};
}

function openSimpleModal(title, body) {
  modalRoot.innerHTML=`<div class="modal-backdrop"><div class="modal"><div class="modal-head"><h2>${title}</h2><button class="close" data-close-modal>${icon("x")}</button></div><div class="modal-body stack">${body}</div></div></div>`;refreshIcons();bindModal();
}

function bindModal() {
  modalRoot.querySelectorAll("[data-close-modal]").forEach(b=>b.addEventListener("click",()=>{modalRoot.innerHTML="";if(b.closest("form"))showToast("Đã lưu thông tin")}));
  modalRoot.querySelector(".modal-backdrop")?.addEventListener("click",e=>{if(e.target.classList.contains("modal-backdrop")) modalRoot.innerHTML=""});
}

function startTimer() {
  let total=3*3600+12*60+45; const tick=()=>{total=Math.max(0,total-1);const h=document.getElementById("hours"),m=document.getElementById("minutes"),s=document.getElementById("seconds");if(!h)return;h.textContent=String(Math.floor(total/3600)).padStart(2,"0");m.textContent=String(Math.floor(total%3600/60)).padStart(2,"0");s.textContent=String(total%60).padStart(2,"0")}; setInterval(tick,1000);
}

function renderCurrent() {
  const [view, id] = route();
  if (view === "products") renderProducts();
  else if (view === "product") renderDetail(id);
  else if (view === "cart") renderCart();
  else if (view === "checkout") renderCheckout();
  else if (view === "account") renderAccount();
  else if (view === "admin") renderAdmin();
  else renderHome();
}

window.addEventListener("hashchange", renderCurrent);
window.addEventListener("DOMContentLoaded", renderCurrent);
window.addEventListener("load", refreshIcons);
