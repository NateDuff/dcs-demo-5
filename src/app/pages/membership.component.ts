import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// Simple content helper
declare const __DCS_CONTENT__: { global?: Record<string, string>; pages?: Record<string, Record<string, string>> } | undefined;

function t(page: string, key: string, fallback: string): string {
  try {
    if (typeof __DCS_CONTENT__ !== 'undefined' && __DCS_CONTENT__?.pages?.[page]?.[key]) {
      return __DCS_CONTENT__.pages[page][key];
    }
  } catch {}
  return fallback;
}

@Component({
  selector: 'app-membership',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero -->
    <section data-section="hero" data-section-label="Hero Banner" class="py-20 bg-gradient-to-b from-zinc-800/50 to-zinc-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 data-text-key="hero.title" class="text-4xl md:text-5xl font-bold text-white mb-6">{{ heroTitle }}</h1>
        <p data-text-key="hero.subtitle" class="text-xl text-zinc-300 max-w-3xl mx-auto">
          {{ heroSubtitle }}
        </p>
      </div>
    </section>

    <!-- Plans -->
    <section data-section="plans" data-section-label="Membership Plans" data-dynamic="true" class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-8">
          @for (plan of plans; track plan.name) {
            <div class="bg-zinc-800/50 border rounded-xl p-8 relative" [class]="plan.popular ? 'border-orange-500' : 'border-zinc-700'">
              @if (plan.popular) {
                <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span class="bg-orange-500 text-white text-sm font-semibold px-4 py-1 rounded-full">Most Popular</span>
                </div>
              }
              <h3 class="text-2xl font-bold text-white mb-2">{{ plan.name }}</h3>
              <div class="mb-6">
                <span class="text-4xl font-bold text-white">{{ plan.price }}</span>
                <span class="text-zinc-400">/month</span>
              </div>
              <ul class="space-y-3 mb-8">
                @for (feature of plan.features; track feature) {
                  <li class="flex items-center gap-2 text-zinc-300">
                    <span class="text-orange-400">✓</span>
                    {{ feature }}
                  </li>
                }
              </ul>
              <a routerLink="/contact" [class]="plan.popular ? 'bg-orange-500 hover:bg-orange-600' : 'bg-zinc-700 hover:bg-zinc-600'" class="block text-center text-white py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </a>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section data-section="faq" data-section-label="Frequently Asked Questions" class="py-20 bg-zinc-800/50">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 data-text-key="faq.title" class="text-3xl font-bold text-white text-center mb-12">{{ faqTitle }}</h2>
        <div class="space-y-4">
          @for (faq of faqs; track faq.q) {
            <div class="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
              <h3 class="font-semibold text-white mb-2">{{ faq.q }}</h3>
              <p class="text-zinc-400">{{ faq.a }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class MembershipComponent {
  heroTitle = t('membership', 'hero.title', 'Membership Plans');
  heroSubtitle = t('membership', 'hero.subtitle', 'Choose the plan that fits your lifestyle. All memberships include a free week trial.');
  faqTitle = t('membership', 'faq.title', 'Frequently Asked Questions');

  plans = [
    {
      name: 'Basic',
      price: '$29',
      popular: false,
      features: [
        'Access to gym floor',
        'Basic equipment usage',
        'Locker room access',
        '2 group classes/month',
        'Member app access'
      ]
    },
    {
      name: 'Pro',
      price: '$59',
      popular: true,
      features: [
        'Everything in Basic',
        'Unlimited group classes',
        '2 personal training sessions',
        'Sauna & steam room',
        'Guest passes (2/month)',
        'Nutrition consultation'
      ]
    },
    {
      name: 'Elite',
      price: '$99',
      popular: false,
      features: [
        'Everything in Pro',
        'Unlimited PT sessions',
        'Priority class booking',
        'Spa services discount',
        'Unlimited guest passes',
        'Recovery zone access',
        'Exclusive events'
      ]
    }
  ];

  faqs = [
    { q: 'Can I freeze my membership?', a: 'Yes, you can freeze your membership for up to 3 months per year at no additional cost.' },
    { q: 'Is there a contract?', a: 'No long-term contracts. All memberships are month-to-month with 30-day cancellation notice.' },
    { q: 'Do you offer corporate rates?', a: 'Yes! Companies with 10+ employees can get discounted group rates. Contact us for details.' },
    { q: 'Can I try before I buy?', a: 'Absolutely! We offer a free 7-day trial for all new members. No credit card required.' }
  ];
}
