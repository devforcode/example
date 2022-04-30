<template>
  <div>
    <div class="text-right">
      <v-btn icon @click="search"><v-icon>fas fa-add</v-icon></v-btn>
      <v-btn icon @click="resultSearch"><v-icon>fas fa-search</v-icon></v-btn>
      <v-btn icon @click="add"><v-icon>fas fa-add</v-icon></v-btn>
      <v-btn icon @click="add2"><v-icon>fas fa-add</v-icon></v-btn>
      <v-btn icon @click="add3"><v-icon>fas fa-add</v-icon></v-btn>
    </div>
    <div>
      <data-table-ex
        :headers="headers"
        :items="items"
        :disablePaging="disablePaging"
        :fixedHeader="fixedHeader"
        :height="height"
      />
    </div>
    <div>
      <div v-for="item in resultUnit" :key="item">
        <div>{{ item }}</div>
      </div>
      <div v-for="item in resultAct" :key="item">
        <div>{{ item }}</div>
      </div>
      <div v-for="item in resultChk" :key="item">
        <div>{{ item }}</div>
      </div>
      <div v-for="item in resultHz" :key="item">
        <div>{{ item }}</div>
      </div>
      <div v-for="item in resultRm" :key="item">
        <div>{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import dataTableEx from '@/components/common/vTable'
import 'tui-grid/dist/tui-grid.css'
import 'tui-date-picker/dist/tui-date-picker.css'
import 'tui-time-picker/dist/tui-time-picker.css'
import 'tui-pagination/dist/tui-pagination.css'
import { Grid } from '@toast-ui/vue-grid'

export default {
  components: {
    dataTableEx,
  },
  props: {
    title: { trpe: Array },
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
    headers: [
      { text: 'No', value: 'No', width: 10, align: 'center', sortable: false },
      {
        text: 'Title',
        value: 'Title',
        align: 'center',
        sortable: false,
        editor: true,
        type: 'text',
      },
      {
        text: 'remark',
        value: 'remark',
        align: 'center',
        sortable: false,
        editor: true,
        type: 'textarea',
      },
      {
        text: 'Creator',
        value: 'Creator',
        align: 'center',
        sortable: false,
      },
      {
        text: 'Created Date',
        value: 'Created Date',
        align: 'center',
        sortable: false,
      },
    ],
    items: [],
    disablePaging: true,
    fixedHeader: true,
    height: 50,
    resultUnit: [],
    resultAct: [],
    resultChk: [],
    resultHz: [],
    resultRm: [],
    unitList: [],
    actList: [],
    chkList: [],
    hzList: [],
    rmList: [],
    unitId: '',
    actId: '',
  }),
  methods: {
    clickOnNode(node) {
      this.selected = node[0].name
    },
    search() {
      for (let index = 0; index < 10; index++) {
        this.items.push({
          No: index + 1,
          Title: '제목' + (index + 1),
          remark: '내용\n내용' + (index + 1),
          Creator: '작성자' + (index + 1),
          'Created Date': '작성일자' + (index + 1),
        })
      }
    },
    resultSearch() {
      this.resultUnit = this.unitList
      this.resultAct = this.actList
      this.resultChk = this.chkList
      this.resultHz = this.hzList
      this.resultRm = this.rmList
    },
    add() {
      this.unitList.push({
        id: this.unitList.length + 1,
        remark: '단위작업' + (this.unitList.length + 1),
      })
    },
    add2() {
      this.actList.push({
        id: this.actList.length + 1,
        unitId: this.unitId,
        remark: '작업행동' + (this.actList.length + 1),
      })
    },
    add3() {
      this.chkList.push({
        id: this.chkList.length + 1,
        unitId: this.unitId,
        actId: this.actId,
        remark: '체크정보' + (this.chkList.length + 1),
      })

      this.hzList.push({
        id: this.hzList.length + 1,
        unitId: this.unitId,
        actId: this.actId,
        remark: '위험요인' + (this.hzList.length + 1),
      })

      this.rmList.push({
        id: this.rmList.length + 1,
        unitId: this.unitId,
        actId: this.actId,
        remark: '감소대책' + (this.rmList.length + 1),
      })
    },
    unitSelect(value) {
      this.unitId = value.id
    },
    actSelect(value) {
      this.actId = value.id
    },
  },
}
</script>
