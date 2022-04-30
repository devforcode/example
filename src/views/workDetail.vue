<template>
  <div class="px-4 py-4">
    <v-card flat outlined>
      <v-card-title class="indigo white--text text-h5">
        <v-row>
          <v-col cols="3"> 작업표준 및 위험성 평가 상세 </v-col>
          <v-col cols="9" align="right"
            ><v-btn class="mr-2">트리</v-btn><v-btn color="mr-2">리스트</v-btn
            ><v-btn>출력</v-btn></v-col
          >
        </v-row>
      </v-card-title>
      <v-row class="pa-4" justify="space-between">
        <v-col cols="12" md="2">
          <v-card flat outlined>
            <div class="px-2">
              <v-text-field label="소속" :value="asgnNm" readonly />
            </div>
            <div class="px-2">
              <v-text-field label="작성자" :value="userNm" readonly />
            </div>
            <div class="px-2">
              <v-text-field label="작성일자" :value="regDt" readonly />
            </div>
            <div class="px-2">
              <v-text-field label="작업표준명" :value="workName" readonly />
            </div>
            <div class="px-2">
              <v-text-field label="작업표준서 버전" :value="workRev" readonly />
            </div>
            <div class="px-2">
              <v-text-field label="작업표준서 번호" :value="workNo" readonly />
            </div>
            <div class="px-2">
              <v-text-field label="최종결재일자" :value="apprDt" readonly />
            </div>
            <div class="px-2">
              <v-text-field label="최종결재자" :value="apprUser" readonly />
            </div>
          </v-card>
        </v-col>

        <v-divider vertical></v-divider>

        <v-col cols="12" md="10" class="text-center">
          <v-scroll-y-transition mode="out-in">
            <div>
              <work-item
                :isReadOnly="true"
                :unitList="unitList"
                :actList="actList"
                :chkList="chkList"
                :hzList="hzList"
                :rmList="rmList"
              />
            </div>
          </v-scroll-y-transition>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import workItem from '@/components/common/workItem'

export default {
  components: {
    workItem,
  },
  data: () => ({
    userNm: '홍길동/차장',
    regDt: '2022.03.01',
    asgnNm: '선행의장부 가공소조립',
    workName: '작업표준명',
    workRev: 'ver.02',
    workNo: 'HHI-WS-111-1111',
    apprDt: '2022.03.01',
    apprUser: '김길동/팀장',
    unitList: [],
    actList: [],
    chkList: [],
    hzList: [],
    rmList: [],
  }),
  async mounted() {
    await this.init()
  },
  methods: {
    init() {
      this.unitList.push({
        id: this.unitList.length + 1,
        remark:
          '단위작업\n단위작업\n단위작업\n단위작업' + (this.unitList.length + 1),
      })

      this.actList.push({
        id: this.actList.length + 1,
        unitId: 1,
        remark: '작업행동\n작업행동\n작업해동' + (this.actList.length + 1),
      })

      this.chkList.push({
        id: this.chkList.length + 1,
        unitId: 1,
        actId: 1,
        remark: '체크정보' + (this.chkList.length + 1),
      })

      this.hzList.push({
        id: this.hzList.length + 1,
        unitId: 1,
        actId: 1,
        rmId: 1,
        isChecked: true,
        isRisk: true,
        remark: '위험요인' + (this.hzList.length + 1),
      })

      this.rmList.push({
        id: this.rmList.length + 1,
        unitId: 1,
        actId: 1,
        remark: '감소대책' + (this.rmList.length + 1),
      })
    },
  },
}
</script>

<style scoped></style>
