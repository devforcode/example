<template>
  <v-app>
    <v-main>
      <div>
        <headers />
      </div>
      <div>
        <router-view> </router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import headers from '@/layout/appHeader'

export default {
  name: 'App',

  components: {
    headers,
  },

  data: () => ({}),
}
</script>
