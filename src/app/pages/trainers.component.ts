import { Component } from '@angular/core';

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
  selector: 'app-trainers',
  standalone: true,
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

    <!-- Trainers Grid -->
    <section data-section="trainers" data-section-label="Our Trainers" data-dynamic="true" class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (trainer of trainers; track trainer.name) {
            <div class="bg-zinc-800/50 border border-zinc-700 rounded-xl overflow-hidden hover:border-orange-500/50 transition-colors">
              <div class="h-48 bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                <div class="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  {{ trainer.initials }}
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-white">{{ trainer.name }}</h3>
                <p class="text-orange-400 text-sm mb-3">{{ trainer.specialty }}</p>
                <p class="text-zinc-400 text-sm mb-4">{{ trainer.bio }}</p>
                <div class="flex flex-wrap gap-2">
                  @for (cert of trainer.certifications; track cert) {
                    <span class="bg-zinc-700 text-zinc-300 text-xs px-2 py-1 rounded">{{ cert }}</span>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class TrainersComponent {
  heroTitle = t('trainers', 'hero.title', 'Meet Our Trainers');
  heroSubtitle = t('trainers', 'hero.subtitle', 'Certified experts dedicated to helping you achieve your fitness goals.');

  trainers = [
    { name: 'Mike Rodriguez', initials: 'MR', specialty: 'HIIT & Strength', bio: '10+ years of experience. Former college athlete. Specializes in body transformation.', certifications: ['NASM CPT', 'CrossFit L2', 'Sports Nutrition'] },
    { name: 'Sarah Lin', initials: 'SL', specialty: 'Yoga & Pilates', bio: '500-hour certified yoga instructor. Focuses on flexibility and mindfulness.', certifications: ['RYT-500', 'Pilates Mat', 'Meditation'] },
    { name: 'Tony Roberts', initials: 'TR', specialty: 'Boxing & MMA', bio: 'Former professional boxer. Expert in combat fitness and self-defense.', certifications: ['USA Boxing', 'MMA Conditioning', 'First Aid'] },
    { name: 'Maya Kumar', initials: 'MK', specialty: 'Dance & Cardio', bio: 'Professional dancer turned fitness instructor. Makes workouts fun!', certifications: ['Zumba', 'AFAA Group', 'Barre'] },
    { name: 'Dan Chen', initials: 'DC', specialty: 'Cycling & Endurance', bio: 'Ironman finisher. Helps clients build stamina and endurance.', certifications: ['Spinning', 'USAT Coach', 'TRX'] },
    { name: 'Aisha Johnson', initials: 'AJ', specialty: 'Senior Fitness', bio: 'Specialized in active aging. Gentle yet effective workouts.', certifications: ['SFC', 'ACE', 'Balance Training'] }
  ];
}
