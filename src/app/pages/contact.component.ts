import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <!-- Hero -->
    <section class="py-20 bg-gradient-to-b from-zinc-800/50 to-zinc-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Start Your Free Trial</h1>
        <p class="text-xl text-zinc-300 max-w-3xl mx-auto">
          Fill out the form below and one of our team members will get back to you within 24 hours.
        </p>
      </div>
    </section>

    <!-- Form -->
    <section class="py-20">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        @if (submitted) {
          <div class="text-center py-16">
            <div class="text-6xl mb-6">🎉</div>
            <h2 class="text-2xl font-bold text-white mb-4">Welcome to FitnessPro!</h2>
            <p class="text-zinc-300">
              We've received your information. Check your email for your free trial pass and next steps!
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

            <button type="submit"
              class="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-4 rounded-lg font-semibold transition-all">
              Claim Your Free Trial
            </button>
          </form>
        }
      </div>
    </section>

    <!-- Location -->
    <section class="py-20 bg-zinc-800/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-white text-center mb-12">Visit Us</h2>
        <div class="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div class="text-3xl mb-4">📍</div>
            <h3 class="font-semibold text-white mb-2">Location</h3>
            <p class="text-zinc-400">456 Fitness Avenue<br />Denver, CO 80202</p>
          </div>
          <div>
            <div class="text-3xl mb-4">⏰</div>
            <h3 class="font-semibold text-white mb-2">Hours</h3>
            <p class="text-zinc-400">Mon-Fri: 5am - 11pm<br />Sat-Sun: 6am - 9pm</p>
          </div>
          <div>
            <div class="text-3xl mb-4">📞</div>
            <h3 class="font-semibold text-white mb-2">Contact</h3>
            <p class="text-zinc-400">(303) 555-0199<br />info&#64;fitnessprogym.com</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
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
