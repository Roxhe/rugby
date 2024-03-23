<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Tutoriel</template>
    Le but de ce tutoriel est d'apprendre les principes de base de Vue 3 en suivant les recommendations
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Outils</template>
    Dans ce tutoriel vous utiliserait la Composition API de Vue 3 uniquement, ainsi que le <code>&lt;script setup&gt;</code>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Environnement</template>

    Ce projet utilise
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a> pour les stores et
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a> pour le routage
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Question</template>

    En cas de bloquage n'hesitez pas à poser des questions ou à vous renseigner sur la documentation officielle de
    <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Feedback</template>
   En esperant que cette première approche de Vue vous plairera et vous aidera a comprendre les premiers concepts
  </WelcomeItem>
</template>
