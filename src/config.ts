// =============================================================================
// Site Configuration
// Edit ONLY this file to customize all content across the site.
// All animations, layouts, and styles are controlled by the components.
// =============================================================================

// -- Site-wide settings -------------------------------------------------------
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "NEON PULSE | Электронная музыка будущего",
  description: "NEON PULSE — электронный музыкальный проект, создающий звуки будущего. Синтвейв, техно и киберпанк в каждом треке.",
  language: "ru",
};

// -- Hero Section -------------------------------------------------------------
export interface HeroNavItem {
  label: string;
  sectionId: string;
  icon: "disc" | "play" | "calendar" | "music";
}

export interface HeroConfig {
  backgroundImage: string;
  brandName: string;
  decodeText: string;
  decodeChars: string;
  subtitle: string;
  ctaPrimary: string;
  ctaPrimaryTarget: string;
  ctaSecondary: string;
  ctaSecondaryTarget: string;
  cornerLabel: string;
  cornerDetail: string;
  navItems: HeroNavItem[];
}

export const heroConfig: HeroConfig = {
  backgroundImage: "/hero-bg.jpg",
  brandName: "NEON PULSE",
  decodeText: "ЗВУКИ БУДУЩЕГО",
  decodeChars: "アイウエオカキクケコサシスセソタチツテト0123456789",
  subtitle: "Погрузись в мир неоновых ритмов и цифровых вибраций",
  ctaPrimary: "Слушать альбомы",
  ctaPrimaryTarget: "albums",
  ctaSecondary: "Расписание туров",
  ctaSecondaryTarget: "tour",
  cornerLabel: "НОВЫЙ РЕЛИЗ",
  cornerDetail: "Nebula Drift — уже доступен",
  navItems: [
    { label: "Альбомы", sectionId: "albums", icon: "disc" },
    { label: "Галерея", sectionId: "gallery", icon: "play" },
    { label: "Туры", sectionId: "tour", icon: "calendar" },
    { label: "Контакты", sectionId: "contact", icon: "music" },
  ],
};

// -- Album Cube Section -------------------------------------------------------
export interface Album {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export interface AlbumCubeConfig {
  albums: Album[];
  cubeTextures: string[];
  scrollHint: string;
}

export const albumCubeConfig: AlbumCubeConfig = {
  albums: [
    { id: 1, title: "CYBER ECHO", subtitle: "NEO-FREQUENCIES", image: "/album-1.jpg" },
    { id: 2, title: "NEON PULSE", subtitle: "CYBER LUMINARY", image: "/album-2.jpg" },
    { id: 3, title: "NEURAL SYNAPSE", subtitle: "DIGITAL CONSCIOUSNESS", image: "/album-3.jpg" },
    { id: 4, title: "NEBULA DRIFT", subtitle: "STELLAR PULSE", image: "/album-4.jpg" },
  ],
  cubeTextures: [
    "/album-1.jpg",
    "/album-2.jpg",
    "/album-3.jpg",
    "/album-4.jpg",
    "/album-5.jpg",
    "/album-1.jpg",
  ],
  scrollHint: "Прокрути вниз, чтобы исследовать",
};

// -- Parallax Gallery Section -------------------------------------------------
export interface ParallaxImage {
  id: number;
  src: string;
  alt: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  date: string;
}

export interface ParallaxGalleryConfig {
  sectionLabel: string;
  sectionTitle: string;
  galleryLabel: string;
  galleryTitle: string;
  marqueeTexts: string[];
  endCtaText: string;
  parallaxImagesTop: ParallaxImage[];
  parallaxImagesBottom: ParallaxImage[];
  galleryImages: GalleryImage[];
}

export const parallaxGalleryConfig: ParallaxGalleryConfig = {
  sectionLabel: "ВИЗУАЛЬНАЯ ИСТОРИЯ",
  sectionTitle: "Моменты из мира NEON PULSE",
  galleryLabel: "ГАЛЕРЕЯ",
  galleryTitle: "Кадры с выступлений",
  marqueeTexts: [
    "NEON PULSE LIVE",
    "КИБЕРПАНК РИТМЫ",
    "ЭЛЕКТРОННАЯ РЕВОЛЮЦИЯ",
    "ЗВУКИ БУДУЩЕГО",
    "SYNTHWAVE VIBES",
  ],
  endCtaText: "Смотреть все фото",
  parallaxImagesTop: [
    { id: 1, src: "/concert-1.jpg", alt: "Концерт 1" },
    { id: 2, src: "/concert-2.jpg", alt: "Концерт 2" },
    { id: 3, src: "/concert-3.jpg", alt: "Концерт 3" },
    { id: 4, src: "/concert-4.jpg", alt: "Концерт 4" },
    { id: 5, src: "/concert-5.jpg", alt: "Концерт 5" },
    { id: 6, src: "/concert-6.jpg", alt: "Концерт 6" },
  ],
  parallaxImagesBottom: [
    { id: 1, src: "/concert-4.jpg", alt: "Концерт 4" },
    { id: 2, src: "/concert-5.jpg", alt: "Концерт 5" },
    { id: 3, src: "/concert-6.jpg", alt: "Концерт 6" },
    { id: 4, src: "/concert-1.jpg", alt: "Концерт 1" },
    { id: 5, src: "/concert-2.jpg", alt: "Концерт 2" },
    { id: 6, src: "/concert-3.jpg", alt: "Концерт 3" },
  ],
  galleryImages: [
    { id: 1, src: "/concert-1.jpg", title: "Cyber Festival 2024", date: "15.06.2024" },
    { id: 2, src: "/concert-2.jpg", title: "Neon Nights", date: "22.07.2024" },
    { id: 3, src: "/concert-3.jpg", title: "Underground Session", date: "08.08.2024" },
    { id: 4, src: "/concert-4.jpg", title: "Digital Dreams", date: "14.09.2024" },
    { id: 5, src: "/concert-5.jpg", title: "Synthwave Arena", date: "30.09.2024" },
    { id: 6, src: "/concert-6.jpg", title: "Warehouse Rave", date: "12.10.2024" },
  ],
};

// -- Tour Schedule Section ----------------------------------------------------
export interface TourDate {
  id: number;
  date: string;
  time: string;
  city: string;
  venue: string;
  status: "on-sale" | "sold-out" | "coming-soon";
  image: string;
}

export interface TourStatusLabels {
  onSale: string;
  soldOut: string;
  comingSoon: string;
  default: string;
}

export interface TourScheduleConfig {
  sectionLabel: string;
  sectionTitle: string;
  vinylImage: string;
  buyButtonText: string;
  detailsButtonText: string;
  bottomNote: string;
  bottomCtaText: string;
  statusLabels: TourStatusLabels;
  tourDates: TourDate[];
}

export const tourScheduleConfig: TourScheduleConfig = {
  sectionLabel: "МИРОВОЙ ТУР 2025",
  sectionTitle: "Расписание концертов",
  vinylImage: "/vinyl.png",
  buyButtonText: "Купить билет",
  detailsButtonText: "Подробнее",
  bottomNote: "Новые даты добавляются регулярно",
  bottomCtaText: "Подписаться на уведомления",
  statusLabels: {
    onSale: "В продаже",
    soldOut: "Распродано",
    comingSoon: "Скоро",
    default: "Уточняется",
  },
  tourDates: [
    { id: 1, date: "2025.03.15", time: "20:00", city: "Москва", venue: "Stadium Live", status: "on-sale", image: "/venue-1.jpg" },
    { id: 2, date: "2025.03.22", time: "19:30", city: "Санкт-Петербург", venue: "A2 Green Concert", status: "on-sale", image: "/venue-2.jpg" },
    { id: 3, date: "2025.04.05", time: "21:00", city: "Казань", venue: "TatNeft Arena", status: "sold-out", image: "/venue-3.jpg" },
    { id: 4, date: "2025.04.12", time: "20:00", city: "Екатеринбург", venue: "Tele-Club", status: "coming-soon", image: "/venue-4.jpg" },
  ],
};

// -- Footer Section -----------------------------------------------------------
export interface FooterImage {
  id: number;
  src: string;
}

export interface SocialLink {
  icon: "instagram" | "twitter" | "youtube" | "music";
  label: string;
  href: string;
}

export interface FooterConfig {
  portraitImage: string;
  portraitAlt: string;
  heroTitle: string;
  heroSubtitle: string;
  artistLabel: string;
  artistName: string;
  artistSubtitle: string;
  brandName: string;
  brandDescription: string;
  quickLinksTitle: string;
  quickLinks: string[];
  contactTitle: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  addressLabel: string;
  address: string;
  newsletterTitle: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  subscribeAlertMessage: string;
  copyrightText: string;
  bottomLinks: string[];
  socialLinks: SocialLink[];
  galleryImages: FooterImage[];
}

export const footerConfig: FooterConfig = {
  portraitImage: "/artist-portrait.jpg",
  portraitAlt: "NEON PULSE Artist",
  heroTitle: "СОЗДАВАЙ БУДУЩЕЕ",
  heroSubtitle: "Вместе с нами",
  artistLabel: "АРТИСТ",
  artistName: "NEON PULSE",
  artistSubtitle: "Electronic Music Project",
  brandName: "NEON PULSE",
  brandDescription: "Электронный музыкальный проект, исследующий границы звука и технологий. Мы создаем музыку, которая переносит слушателя в мир неоновых огней и цифровых снов.",
  quickLinksTitle: "Быстрые ссылки",
  quickLinks: ["Альбомы", "Галерея", "Туры", "Мерч", "О нас"],
  contactTitle: "Контакты",
  emailLabel: "Email",
  email: "booking@neonpulse.music",
  phoneLabel: "Телефон",
  phone: "+7 (999) 888-77-66",
  addressLabel: "Адрес",
  address: "Москва, ул. Музыкальная, 42",
  newsletterTitle: "Подписка на новости",
  newsletterDescription: "Получай первым информацию о новых релизах и концертах",
  newsletterButtonText: "Подписаться",
  subscribeAlertMessage: "Спасибо за подписку! Теперь ты будешь в курсе всех новостей NEON PULSE.",
  copyrightText: "© 2025 NEON PULSE. Все права защищены.",
  bottomLinks: ["Политика конфиденциальности", "Условия использования"],
  socialLinks: [
    { icon: "instagram", label: "Instagram", href: "https://instagram.com" },
    { icon: "twitter", label: "Twitter", href: "https://twitter.com" },
    { icon: "youtube", label: "YouTube", href: "https://youtube.com" },
    { icon: "music", label: "Spotify", href: "https://spotify.com" },
  ],
  galleryImages: [
    { id: 1, src: "/album-1.jpg" },
    { id: 2, src: "/album-2.jpg" },
    { id: 3, src: "/album-3.jpg" },
    { id: 4, src: "/album-4.jpg" },
  ],
};
