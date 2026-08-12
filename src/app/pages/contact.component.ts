import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
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

    <!-- Form -->
    <section data-section="form" data-section-label="Contact Form" class="py-20">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        @if (submitted) {
          <div class="text-center py-16">
            <div class="text-6xl mb-6">🎉</div>
            <h2 data-text-key="success.title" class="text-2xl font-bold text-white mb-4">{{ successTitle }}</h2>
            <p data-text-key="success.message" class="text-zinc-300">
              {{ successMessage }}
            </p>
          </div>
        } @else {
          <form (ngSubmit)="onSubmit()" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-zinc-300 mb-2">First Name *</label>
                <input type="text" [(ngModel)]="form.firstName" name="firstName" required
                  class="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  placeholder="John" />
              </div>
              <div>
                <label class="block text-sm font-medium text-zinc-300 mb-2">Last Name *</label>
                <input type="text" [(ngModel)]="form.lastName" name="lastName" required
                  class="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  placeholder="Doe" />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-zinc-300 mb-2">Email *</label>
              <input type="email" [(ngModel)]="form.email" name="email" required
                class="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                placeholder="john@example.com" />
            </div>

            <div>
              <label class="block text-sm font-medium text-zinc-300 mb-2">Phone</label>
              <input type="tel" [(ngModel)]="form.phone" name="phone"
                class="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                placeholder="(555) 123-4567" />
            </div>

            <div>
              <label class="block text-sm font-medium text-zinc-300 mb-2">Interested In</label>
              <select [(ngModel)]="form.interest" name="interest"
                class="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500">
                <option value="">Select an option</option>
                <option value="trial">Free Trial</option>
                <option value="basic">Basic Membership</option>
                <option value="pro">Pro Membership</option>
                <option value="elite">Elite Membership</option>
                <option value="pt">Personal Training</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-zinc-300 mb-2">Questions or Comments</label>
              <textarea [(ngModel)]="form.message" name="message" rows="4"
                class="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                placeholder="Tell us about your fitness goals..."></textarea>
            </div>

            <button type="submit" data-text-key="form.submit"
              class="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-4 rounded-lg font-semibold transition-all">
              {{ submitLabel }}
            </button>
          </form>
        }
      </div>
    </section>

    <!-- Location -->
    <section data-section="location" data-section-label="Contact Information" class="py-20 bg-zinc-800/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 data-text-key="location.title" class="text-3xl font-bold text-white text-center mb-12">{{ locationTitle }}</h2>
        <div class="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div class="text-3xl mb-4">📍</div>
            <h3 data-text-key="location.address.title" class="font-semibold text-white mb-2">{{ addressTitle }}</h3>
            <p data-text-key="location.address.value" class="text-zinc-400">{{ addressValue }}</p>
          </div>
          <div>
            <div class="text-3xl mb-4">⏰</div>
            <h3 data-text-key="location.hours.title" class="font-semibold text-white mb-2">{{ hoursTitle }}</h3>
            <p data-text-key="location.hours.value" class="text-zinc-400">{{ hoursValue }}</p>
          </div>
          <div>
            <div class="text-3xl mb-4">📞</div>
            <h3 data-text-key="location.contact.title" class="font-semibold text-white mb-2">{{ contactTitle }}</h3>
            <p data-text-key="location.contact.value" class="text-zinc-400">{{ contactValue }}</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  heroTitle = t('contact', 'hero.title', 'Start Your Free Trial');
  heroSubtitle = t('contact', 'hero.subtitle', 'Fill out the form below and one of our team members will get back to you within 24 hours.');
  successTitle = t('contact', 'success.title', 'Welcome to FitnessPro!');
  successMessage = t('contact', 'success.message', "We've received your information. Check your email for your free trial pass and next steps!");
  submitLabel = t('contact', 'form.submit', 'Claim Your Free Trial');
  locationTitle = t('contact', 'location.title', 'Visit Us');
  addressTitle = t('contact', 'location.address.title', 'Location');
  addressValue = t('contact', 'location.address.value', '456 Fitness Avenue, Denver, CO 80202');
  hoursTitle = t('contact', 'location.hours.title', 'Hours');
  hoursValue = t('contact', 'location.hours.value', 'Mon-Fri: 5am - 11pm, Sat-Sun: 6am - 9pm');
  contactTitle = t('contact', 'location.contact.title', 'Contact');
  contactValue = t('contact', 'location.contact.value', '(303) 555-0199 | info@fitnessprogym.com');

  submitted = false;
  form = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  };

  onSubmit() {
    this.submitted = true;
  }
}
