<template>
  <div>
    <v-card>
      <v-card-title class="indigo white--text text-h5">
        작업표준 현황
      </v-card-title>
      <v-row class="pa-4" justify="space-between">
        <v-col cols="12" md="2">
          <div>
            <v-list flat>
              <v-subheader>작업표준현황</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item v-for="(item, i) in itemsStatus" :key="i">
                  <v-list-item-content>
                    <v-list-item-title v-text="item.name"></v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-content align="right">
                    <v-list-item-title
                      style="color: red; font-weight: bold"
                      v-text="item.cnt"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </div>
          <div>
            <v-treeview
              return-object
              :items="itemsTree"
              activatable
              color="warning"
              open-on-click
              transition
              @update:active="clickOnNode"
            >
            </v-treeview>
          </div>
        </v-col>

        <v-divider vertical></v-divider>

        <v-col cols="12" md="10" class="text-center">
          <v-scroll-y-transition mode="out-in">
            <div>
              <grid
                ref="tuigrid"
                :header="gridInit.header"
                :columns="gridInit.columns"
                :data="gridInit.data"
                :rowHeaders="gridInit.rowHeaders"
                :bodyHeight="300"
              ></grid>
            </div>
          </v-scroll-y-transition>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import 'tui-grid/dist/tui-grid.css'
import 'tui-date-picker/dist/tui-date-picker.css'
import 'tui-time-picker/dist/tui-time-picker.css'
import 'tui-pagination/dist/tui-pagination.css'
import { Grid } from '@toast-ui/vue-grid'

export default {
  components: {
    Grid,
  },
  data: () => ({
    gridInit: {
      rowHeaders: ['rowNum'],
      data: [
        { gbnName: '대구분>중구분>소구분', WorkName: '작업표준명' },
        { gbnName: '대구분>중구분>소구분', WorkName: '작업표준명' },
        { gbnName: '대구분>중구분>소구분', WorkName: '작업표준명' },
        { gbnName: '대구분>중구분>소구분', WorkName: '작업표준명' },
        { gbnName: '대구분>중구분>소구분', WorkName: '작업표준명' },
        { gbnName: '대구분>중구분>소구분', WorkName: '작업표준명' },
        { gbnName: '대구분>중구분>소구분', WorkName: '작업표준명' },
        { gbnName: '대구분>중구분>소구분', WorkName: '작업표준명' },
        { gbnName: '대구분>중구분>소구분', WorkName: '작업표준명' },
        { gbnName: '대구분>중구분>소구분', WorkName: '작업표준명' },
        { gbnName: '대구분>중구분>소구분', WorkName: '작업표준명' },
        { gbnName: '대구분>중구분>소구분', WorkName: '작업표준명' },
      ],
      columns: [
        {
          header: '구분',
          name: 'gbnName',
          align: 'center',
        },
        {
          header: '작업표준명',
          name: 'WorkName',
          align: 'center',
        },
      ],
      header: {
        height: 100,
      },
    },
    itemsStatus: [
      {
        id: 1,
        name: '작업표준 개정',
        cnt: 10,
      },
      {
        id: 2,
        name: '작업표준 제정',
        cnt: 20,
      },
      {
        id: 3,
        name: '작업표준 폐지',
        cnt: 30,
      },
      {
        id: 4,
        name: '위험성 평가',
        cnt: 40,
      },
    ],
    selected: '',
    itemsTree: [
      {
        id: 1,
        name: '현대중공업',
        children: [
          { id: 2, name: 'DT 정보부' },
          { id: 3, name: '의장생산부' },
          { id: 4, name: '건조1부' },
        ],
      },
    ],
  }),
}
</script>

<style></style>
