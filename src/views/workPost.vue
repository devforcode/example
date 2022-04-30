<template>
  <div class="px-4 py-4">
    <v-card flat outlined>
      <v-card-title class="indigo white--text text-h5">
        <v-row>
          <v-col cols="3"> 작업표준 및 위험성 평가 제/개정 </v-col>
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
          </v-card>
        </v-col>

        <v-divider vertical></v-divider>

        <v-col cols="12" md="10" class="text-center">
          <v-scroll-y-transition mode="out-in">
            <div>
              <work-item
                :isReadOnly="false"
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
    userNm: '',
    regDt: '',
    asgnNm: '',
    workName: '',
    workRev: '',
    workNo: '',
    apprDt: '',
    apprUser: '',
    unitList: [],
    actList: [],
    chkList: [],
    hzList: [],
    rmList: [],
  }),
}
</script>

<style></style>
