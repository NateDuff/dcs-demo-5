import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero -->
    <section class="py-20 bg-gradient-to-b from-zinc-800/50 to-zinc-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Our Classes</h1>
        <p class="text-xl text-zinc-300 max-w-3xl mx-auto">
          From high-intensity workouts to mindful movement, find the perfect class for your goals.
        </p>
      </div>
    </section>

    <!-- Class Categories -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (category of classCategories; track category.name) {
            <div class="bg-zinc-800/50 border border-zinc-700 rounded-xl overflow-hidden hover:border-orange-500/50 transition-colors">
              <div class="h-40 bg-gradient-to-br" [class]="category.gradient + ' flex items-center justify-center'">
                <span class="text-6xl">{{ category.icon }}</span>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-white mb-2">{{ category.name }}</h3>
                <p class="text-zinc-400 mb-4">{{ category.description }}</p>
                <div class="flex flex-wrap gap-2">
                  @for (tag of category.tags; track tag) {
                    <span class="bg-zinc-700 text-zinc-300 text-xs px-2 py-1 rounded">{{ tag }}</span>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Schedule Preview -->
    <section class="py-20 bg-zinc-800/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-white text-center mb-12">Today's Schedule</h2>
        <div class="space-y-4">
          @for (session of todaySchedule; track session.time) {
            <div class="bg-zinc-900 border border-zinc-700 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div class="flex items-center gap-4">
                <span class="text-3xl">{{ session.icon }}</span>
                <div>
                  <h3 class="font-semibold text-white">{{ session.name }}</h3>
                  <p class="text-zinc-400 text-sm">{{ session.instructor }} • {{ session.duration }}</p>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <span class="text-orange-400 font-semibold">{{ session.time }}</span>
                <span class="bg-zinc-700 text-zinc-300 text-sm px-3 py-1 rounded-full">{{ session.spots }} spots left</span>
                <button class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors">
                  Book
                </button>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class ClassesComponent {
  classCategories = [
    { name: 'Cardio', icon: '🏃', description: 'Get your heart pumping with high-energy cardio workouts', gradient: 'from-orange-500/20 to-red-500/20', tags: ['HIIT', 'Spin', 'Dance', 'Running'] },
    { name: 'Strength', icon: '💪', description: 'Build muscle and increase power with resistance training', gradient: 'from-blue-500/20 to-purple-500/20', tags: ['Weights', 'CrossFit', 'Powerlifting'] },
    { name: 'Mind & Body', icon: '🧘', description: 'Find balance through yoga, pilates, and meditation', gradient: 'from-green-500/20 to-teal-500/20', tags: ['Yoga', 'Pilates', 'Tai Chi', 'Meditation'] },
    { name: 'Combat', icon: '🥊', description: 'Learn self-defense while getting an intense workout', gradient: 'from-red-500/20 to-pink-500/20', tags: ['Boxing', 'Kickboxing', 'MMA'] },
    { name: 'Aqua', icon: '🏊', description: 'Low-impact water workouts for all fitness levels', gradient: 'from-cyan-500/20 to-blue-500/20', tags: ['Aqua Aerobics', 'Lap Swimming', 'Water Yoga'] },
    { name: 'Senior Fitness', icon: '🌟', description: 'Gentle exercises designed for active aging', gradient: 'from-amber-500/20 to-yellow-500/20', tags: ['Chair Yoga', 'Balance', 'Stretching'] }
  ];

  todaySchedule = [
    { name: 'Morning HIIT', time: '6:00 AM', duration: '45 min', instructor: 'Coach Mike', spots: 8, icon: '🔥' },
    { name: 'Power Yoga', time: '8:00 AM', duration: '60 min', instructor: 'Sarah L.', spots: 12, icon: '🧘' },
    { name: 'Spin Surge', time: '12:00 PM', duration: '45 min', instructor: 'Coach Dan', spots: 5, icon: '🚴' },
    { name: 'Boxing Basics', time: '5:30 PM', duration: '50 min', instructor: 'Tony R.', spots: 10, icon: '🥊' },
    { name: 'Evening Flow', time: '7:00 PM', duration: '60 min', instructor: 'Maya K.', spots: 15, icon: '✨' }
  ];
}
