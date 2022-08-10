<template>
  <v-app>
    <router-view v-slot="{ Component }">
      <suspense timeout="0">
        <template #default>
          <component :is="Component" />
        </template>
        <template #fallback> Loading... </template>
      </suspense>
    </router-view>
  </v-app>
</template>
