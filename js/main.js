const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".mobile-nav");

function onScroll() {
  header.classList.toggle("scrolled", window.scrollY > 40);
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

navToggle.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("is-open");
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

function attachDragScroll(strip) {
  let isDown = false;
  let startX = 0;
  let scrollStart = 0;
  let moved = false;

  strip.addEventListener("mousedown", (e) => {
    isDown = true;
    moved = false;
    strip.classList.add("is-dragging");
    startX = e.pageX;
    scrollStart = strip.scrollLeft;
  });

  window.addEventListener("mouseup", () => {
    isDown = false;
    strip.classList.remove("is-dragging");
  });

  strip.addEventListener("mouseleave", () => {
    isDown = false;
    strip.classList.remove("is-dragging");
  });

  strip.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const delta = e.pageX - startX;
    if (Math.abs(delta) > 5) moved = true;
    strip.scrollLeft = scrollStart - delta;
  });

  strip.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
      if (moved) e.preventDefault();
    });
  });
}

document.querySelectorAll(".drag-scroll, .gallery-strip").forEach(attachDragScroll);

const statNumbers = document.querySelectorAll(".stat-number");

if (statNumbers.length) {
  const animateCount = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || "";
    const duration = 1200;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  statNumbers.forEach((el) => observer.observe(el));
}

const subnavPills = document.querySelectorAll(".subnav-pill");

if (subnavPills.length) {
  const sections = Array.from(subnavPills)
    .map((pill) => document.querySelector(pill.getAttribute("href")))
    .filter(Boolean);

  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = "#" + entry.target.id;
          subnavPills.forEach((pill) => {
            pill.classList.toggle("is-active", pill.getAttribute("href") === id);
          });
        }
      });
    },
    { rootMargin: "-45% 0px -45% 0px" }
  );

  sections.forEach((section) => spyObserver.observe(section));
}

const filterPills = document.querySelectorAll(".filter-pill");
const galleryItems = document.querySelectorAll(".gallery-item");
const galleryEmpty = document.querySelector(".gallery-empty");

if (filterPills.length && galleryItems.length) {
  filterPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      filterPills.forEach((p) => p.classList.remove("is-active"));
      pill.classList.add("is-active");
      const filter = pill.dataset.filter;
      let visibleCount = 0;

      galleryItems.forEach((item) => {
        const matches = filter === "all" || item.dataset.category.split(" ").includes(filter);
        item.classList.toggle("is-hidden", !matches);
        if (matches) visibleCount += 1;
      });

      if (galleryEmpty) galleryEmpty.classList.toggle("is-visible", visibleCount === 0);
    });
  });
}

const lightbox = document.getElementById("lightbox");

if (lightbox) {
  const lightboxImg = lightbox.querySelector(".lightbox-img");
  const closeBtn = lightbox.querySelector(".lightbox-close");
  const prevBtn = lightbox.querySelector(".lightbox-prev");
  const nextBtn = lightbox.querySelector(".lightbox-next");
  let currentIndex = 0;

  function visibleItems() {
    return Array.from(galleryItems).filter((item) => !item.classList.contains("is-hidden"));
  }

  function openLightbox(item) {
    const items = visibleItems();
    currentIndex = items.indexOf(item);
    showCurrent();
    lightbox.classList.add("is-open");
    document.body.classList.add("nav-open");
  }

  function showCurrent() {
    const items = visibleItems();
    const item = items[currentIndex];
    if (!item) return;
    const img = item.querySelector("img");
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  }

  function step(delta) {
    const items = visibleItems();
    currentIndex = (currentIndex + delta + items.length) % items.length;
    showCurrent();
  }

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => openLightbox(item));
  });

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", () => step(-1));
  nextBtn.addEventListener("click", () => step(1));

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });
}
