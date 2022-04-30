<template>
  <div>
    <v-data-table
      :headers="$props.headers"
      :items="items"
      :disable-pagination="disablePaging"
      :hide-default-footer="disablePaging"
      :fixed-header="fixedHeader"
      :height="height"
    >
      <template v-slot:item="items">
        <tr>
          <td v-for="(data, index) in items.item" :key="data">
            <v-text-field
              :value="data"
              @change="(v) => change(items.item, index, v)"
              v-if="
                items.headers.find((x) => x.value == index).editor &&
                items.headers.find((x) => x.value == index).type === 'text'
                  ? true
                  : false
              "
            ></v-text-field>
            <v-textarea
              :value="data"
              @change="(v) => change(items.item, index, v)"
              auto-grow
              auto-height
              rows="1"
              v-else-if="
                items.headers.find((x) => x.value == index).editor &&
                items.headers.find((x) => x.value == index).type === 'textarea'
                  ? true
                  : false
              "
            ></v-textarea>
            <div v-else>{{ data }}</div>
          </td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  props: {
    headers: Array,
    items: Array,
    disablePaging: Boolean,
    fixedHeader: Boolean,
    height: Number,
  },
  data: () => ({}),
  created() {},
  methods: {
    change(source, target, value) {
      source[target] = value;
    },
  },
};
</script>

<style>
.tdBorder {
  border: solid 1px;
}
</style>
