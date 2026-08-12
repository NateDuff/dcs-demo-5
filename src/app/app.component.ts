import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  template: `
    <div class="min-h-screen bg-zinc-900">
      <!-- Navigation -->
      <nav class="bg-zinc-800/80 backdrop-blur-lg border-b border-zinc-700 sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex items-center">
              <a routerLink="/" class="flex items-center gap-2">
                <div class="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold text-sm">FP</span>
                </div>
                <span class="text-xl font-bold text-white">FitnessPro</span>
              </a>
            </div>
            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center gap-8">
              <a routerLink="/" class="text-zinc-300 hover:text-white transition-colors">Home</a>
              <a routerLink="/classes" class="text-zinc-300 hover:text-white transition-colors">Classes</a>
              <a routerLink="/trainers" class="text-zinc-300 hover:text-white transition-colors">Trainers</a>
              <a routerLink="/membership" class="text-zinc-300 hover:text-white transition-colors">Membership</a>
              <a routerLink="/contact" class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors">
                Join Now
              </a>
            </div>
            <!-- Mobile Menu Button -->
            <button 
              class="md:hidden text-white p-2"
              (click)="toggleMobileMenu()"
              aria-label="Toggle mobile menu"
            >
              <svg *ngIf="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg *ngIf="isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <!-- Mobile Menu -->
          <div 
            *ngIf="isMobileMenuOpen" 
            class="md:hidden pt-4 pb-4 border-t border-zinc-700 mt-2 animate-fade-in"
          >
            <div class="flex flex-col gap-4">
              <a routerLink="/" class="text-zinc-300 hover:text-white transition-colors py-2" (click)="closeMobileMenu()">Home</a>
              <a routerLink="/classes" class="text-zinc-300 hover:text-white transition-colors py-2" (click)="closeMobileMenu()">Classes</a>
              <a routerLink="/trainers" class="text-zinc-300 hover:text-white transition-colors py-2" (click)="closeMobileMenu()">Trainers</a>
              <a routerLink="/membership" class="text-zinc-300 hover:text-white transition-colors py-2" (click)="closeMobileMenu()">Membership</a>
              <a routerLink="/contact" class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg transition-colors text-center" (click)="closeMobileMenu()">
                Join Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      <!-- Main Content -->
      <main>
        <router-outlet></router-outlet>
      </main>

      <!-- Footer -->
      <footer class="bg-zinc-800 border-t border-zinc-700 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div class="flex items-center gap-2 mb-4">
                <div class="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold text-sm">FP</span>
                </div>
                <span class="text-lg font-bold text-white">FitnessPro</span>
              </div>
              <p class="text-zinc-400 text-sm">
                Your journey to a healthier, stronger you starts here.
              </p>
            </div>
            <div>
              <h4 class="font-semibold text-white mb-4">Programs</h4>
              <ul class="space-y-2 text-zinc-400 text-sm">
                <li><a routerLink="/classes" class="hover:text-white">Group Classes</a></li>
                <li><a routerLink="/trainers" class="hover:text-white">Personal Training</a></li>
                <li><a routerLink="/classes" class="hover:text-white">Virtual Workouts</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-white mb-4">Gym</h4>
              <ul class="space-y-2 text-zinc-400 text-sm">
                <li><a routerLink="/membership" class="hover:text-white">Membership</a></li>
                <li><a routerLink="/contact" class="hover:text-white">Locations</a></li>
                <li><a routerLink="/contact" class="hover:text-white">Hours</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-white mb-4">Hours</h4>
              <ul class="space-y-2 text-zinc-400 text-sm">
                <li>Mon-Fri: 5am - 11pm</li>
                <li>Sat-Sun: 6am - 9pm</li>
                <li>Holidays: 7am - 5pm</li>
              </ul>
            </div>
          </div>
          <div class="border-t border-zinc-700 mt-8 pt-8 text-center text-zinc-400 text-sm">
            <p>© 2026 FitnessPro Gym. All rights reserved.</p>
            <p class="mt-2 text-xs">Demo Site 5 — Powered by DCS</p>
          </div>
        </div>
      </footer>
    </div>
  `
})
export class AppComponent {
  title = 'FitnessPro Gym';
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
