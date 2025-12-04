<script setup>
import { Mail, Github, Linkedin, Send } from 'lucide-vue-next'
</script>

<template>
  <section id="contact" class="py-20 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- En-tête -->
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Contactez-moi
        </h2>
        <p class="text-xl text-gray-300 mb-4">
          Vous avez un projet en tête ? Discutons-en ensemble !
        </p>
        <p class="text-gray-400">
          Je suis disponible pour des opportunités freelance, stages ou emploi
        </p>
      </div>

      <!-- Cartes de contact -->
      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <!-- Email -->
        <a
          href="mailto:heritiana.andrianantenaina24@gmail.com"
          class="group flex flex-col items-center gap-4 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl hover:bg-purple-900/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/30 border border-slate-700/50 hover:border-purple-500/50"
        >
          <div class="p-4 bg-purple-600/20 rounded-full group-hover:bg-purple-600/30 transition-colors">
            <Mail :size="32" class="text-purple-400" />
          </div>
          <div class="text-center">
            <h3 class="font-semibold mb-1 text-lg">Email</h3>
            <p class="text-sm text-gray-400 break-all">heritiana.andrianantenaina24@gmail.com</p>
          </div>
        </a>

        <!-- GitHub -->
        <a
          href="https://github.com/herodev2415"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex flex-col items-center gap-4 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl hover:bg-purple-900/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/30 border border-slate-700/50 hover:border-purple-500/50"
        >
          <div class="p-4 bg-purple-600/20 rounded-full group-hover:bg-purple-600/30 transition-colors">
            <Github :size="32" class="text-purple-400" />
          </div>
          <div class="text-center">
            <h3 class="font-semibold mb-1 text-lg">GitHub</h3>
            <p class="text-sm text-gray-400">@herodev2415</p>
          </div>
        </a>

        <!-- LinkedIn -->
        <a
          href="https://www.linkedin.com/in/heritiana-andrianantenaina-127512300"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex flex-col items-center gap-4 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl hover:bg-purple-900/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/30 border border-slate-700/50 hover:border-purple-500/50"
        >
          <div class="p-4 bg-purple-600/20 rounded-full group-hover:bg-purple-600/30 transition-colors">
            <Linkedin :size="32" class="text-purple-400" />
          </div>
          <div class="text-center">
            <h3 class="font-semibold mb-1 text-lg">LinkedIn</h3>
            <p class="text-sm text-gray-400">Heritiana Andrianantenaina</p>
          </div>
        </a>
      </div>

      <!-- Call to action -->
      <div class="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-700/30 text-center">
        <h3 class="text-2xl font-bold mb-4">Prêt à démarrer votre projet ?</h3>
        <p class="text-gray-300 mb-6 max-w-2xl mx-auto">
          Que ce soit pour développer une application web, créer une API REST, 
          ou concevoir une interface moderne, je suis là pour vous aider.
        </p>
        <a
          href="mailto:heritiana.andrianantenaina24@gmail.com"
          class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
        >
          <Send :size="20" />
          Envoyez-moi un message
        </a>
      </div>

      <!-- Disponibilité -->
      <div class="mt-8 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-green-900/30 rounded-full border border-green-700/50">
          <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span class="text-sm text-green-400 font-medium">Disponible pour de nouveaux projets</span>
        </div>
      </div>
    </div>
  </section>
</template>