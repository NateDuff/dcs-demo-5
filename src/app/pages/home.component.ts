import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// Simple content helper that reads from build-time injected global
// The __DCS_CONTENT__ and __DCS_SEO__ globals are injected by dcs-inject post-build
declare const __DCS_CONTENT__: { global?: Record<string, string>; pages?: Record<string, Record<string, string>> } | undefined;

function t(page: string, key: string, fallback: string): string {
  try {
    if (typeof __DCS_CONTENT__ !== 'undefined' && __DCS_CONTENT__?.pages?.[page]?.[key]) {
      return __DCS_CONTENT__.pages[page][key];
    }
  } catch {
    // Content not injected yet (dev mode)
  }
  return fallback;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-zinc-900 to-red-900/40"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-down">
          {{ heroTitle }} <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">{{ heroHighlight }}</span>
        </h1>
        <p class="text-xl text-zinc-300 mb-10 max-w-3xl mx-auto animate-fade-in-up delay-200">
          {{ heroSubtitle }}
        </p>
        <div class="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-400">
          <a routerLink="/membership" class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105">
            {{ heroCta }}
          </a>
          <a routerLink="/classes" class="border border-zinc-600 hover:border-zinc-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105">
            {{ heroCtaSecondary }}
          </a>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="py-16 border-y border-zinc-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          @for (stat of stats; track stat.label; let i = $index) {
            <div class="text-center animate-fade-in-up" [class]="'delay-' + ((i + 1) * 100)">
              <div class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                {{ stat.value }}
              </div>
              <div class="text-zinc-400 mt-2">{{ stat.label }}</div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-4 animate-fade-in">{{ featuresTitle }}</h2>
        <p class="text-zinc-400 text-center mb-12 max-w-2xl mx-auto animate-fade-in delay-100">
          {{ featuresSubtitle }}
        </p>
        <div class="grid md:grid-cols-3 gap-8">
          @for (feature of features; track feature.title; let i = $index) {
            <div class="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-orange-500/50 transition-all hover-lift animate-fade-in-up" [class]="'delay-' + ((i + 1) * 100)">
              <div class="text-4xl mb-4">{{ feature.icon }}</div>
              <h3 class="text-xl font-semibold text-white mb-2">{{ feature.title }}</h3>
              <p class="text-zinc-400">{{ feature.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Classes Preview -->
    <section class="py-20 bg-zinc-800/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-12 animate-fade-in">{{ classesTitle }}</h2>
        <div class="grid md:grid-cols-4 gap-6">
          @for (cls of popularClasses; track cls.name; let i = $index) {
            <div class="bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden hover:border-orange-500/50 transition-all hover-lift animate-fade-in-up" [class]="'delay-' + ((i + 1) * 100)">
              <div class="h-32 bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                <span class="text-5xl">{{ cls.icon }}</span>
              </div>
              <div class="p-4">
                <h3 class="font-semibold text-white">{{ cls.name }}</h3>
                <p class="text-zinc-400 text-sm">{{ cls.duration }} • {{ cls.level }}</p>
              </div>
            </div>
          }
        </div>
        <div class="text-center mt-10 animate-fade-in-up delay-500">
          <a routerLink="/classes" class="inline-block border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg transition-all hover:scale-105">
            View All Classes →
          </a>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in">
          {{ ctaTitle }}
        </h2>
        <p class="text-zinc-400 text-lg mb-8 animate-fade-in-up delay-100">
          {{ ctaSubtitle }}
        </p>
        <a routerLink="/contact" class="inline-block bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 animate-fade-in-up delay-200">
          {{ ctaButton }}
        </a>
      </div>
    </section>
  `
})
export class HomeComponent {
  // Hero section
  heroTitle = t('home', 'hero.title', 'Transform Your');
  heroHighlight = t('home', 'hero.highlight', 'Body & Mind');
  heroSubtitle = t('home', 'hero.subtitle', 'State-of-the-art facilities, expert trainers, and a supportive community to help you reach your fitness goals.');
  heroCta = t('home', 'hero.cta.primary', 'Start Free Trial');
  heroCtaSecondary = t('home', 'hero.cta.secondary', 'View Classes');

  // Features section
  featuresTitle = t('home', 'features.title', 'Why Choose FitnessPro?');
  featuresSubtitle = t('home', 'features.subtitle', 'Everything you need for a complete fitness experience under one roof');

  // Classes section
  classesTitle = t('home', 'classes.title', 'Popular Classes');

  // CTA section
  ctaTitle = t('home', 'cta.title', 'Ready to Start Your Fitness Journey?');
  ctaSubtitle = t('home', 'cta.subtitle', 'Join today and get your first week free. No commitment required.');
  ctaButton = t('home', 'cta.button', 'Get Started Today →');

  stats = [
    { value: t('home', 'stats.members', '5,000+'), label: t('home', 'stats.members.label', 'Active Members') },
    { value: t('home', 'stats.classes', '50+'), label: t('home', 'stats.classes.label', 'Weekly Classes') },
    { value: t('home', 'stats.trainers', '25'), label: t('home', 'stats.trainers.label', 'Expert Trainers') },
    { value: t('home', 'stats.hours', '24/7'), label: t('home', 'stats.hours.label', 'Open Hours') }
  ];

  features = [
    { icon: '🏋️', title: t('home', 'features.equipment.title', 'Premium Equipment'), description: t('home', 'features.equipment.description', 'Top-of-the-line machines and free weights for every fitness level') },
    { icon: '👥', title: t('home', 'features.trainers.title', 'Expert Trainers'), description: t('home', 'features.trainers.description', 'Certified professionals ready to guide your fitness journey') },
    { icon: '📱', title: t('home', 'features.app.title', 'Member App'), description: t('home', 'features.app.description', 'Book classes, track progress, and connect with the community') },
    { icon: '🧘', title: t('home', 'features.classes.title', 'Group Classes'), description: t('home', 'features.classes.description', 'From yoga to HIIT, find the perfect workout for you') },
    { icon: '🚿', title: t('home', 'features.amenities.title', 'Luxury Amenities'), description: t('home', 'features.amenities.description', 'Sauna, steam room, and spa-quality locker rooms') },
    { icon: '🥗', title: t('home', 'features.nutrition.title', 'Nutrition Bar'), description: t('home', 'features.nutrition.description', 'Post-workout smoothies and healthy snacks on-site') }
  ];

  popularClasses = [
    { name: t('home', 'classes.hiit.name', 'HIIT Blast'), duration: '45 min', level: 'All Levels', icon: '🔥' },
    { name: t('home', 'classes.yoga.name', 'Power Yoga'), duration: '60 min', level: 'Beginner', icon: '🧘' },
    { name: t('home', 'classes.spin.name', 'Spin Class'), duration: '45 min', level: 'Intermediate', icon: '🚴' },
    { name: t('home', 'classes.boxing.name', 'Boxing Fit'), duration: '50 min', level: 'All Levels', icon: '🥊' }
  ];
}
