<template>
  <div>
    <v-app-bar>
      <v-row>
        <v-col>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer">
          </v-app-bar-nav-icon>
        </v-col>
        <v-col> </v-col>
      </v-row>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      width="170"
      height="auto"
    >
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-content>
            <v-list-item-title align="center" justify="center">
              <router-link :to="item.to" class="router-link">{{
                item.item
              }}</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { item: 'Home', to: '/' },
      { item: '테스트', to: 'hello' },
      { item: '작업표준 제/개정', to: 'workPost' },
      { item: '작업표준상세', to: 'workDetail' },
      { item: '작업표준리스트', to: 'workList' },
    ],
  }),
}
</script>
<style scoped>
.router-link {
  display: block;
  color: black;
  text-decoration: none;
}
</style>
