<template>
  <v-container fluid ma-0 pa-0>
    <v-row>
      <v-col cols="12" class="width_20per">
        <v-toolbar flat outlined>
          <v-toolbar-title>단위작업</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn icon @click="add('unit')" v-if="!isReadOnly">
              <v-icon>fas fa-add</v-icon>
            </v-btn>
            <v-btn
              icon
              @click="remove('unit')"
              :disabled="activeUnit"
              v-if="!isReadOnly"
            >
              <v-icon>fas fa-minus</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </v-col>
      <v-col cols="12" class="width_80per">
        <v-row>
          <v-col cols="12" md="3">
            <v-app-bar dark color="success"
              ><v-toolbar-title>작업행동</v-toolbar-title><v-spacer></v-spacer>
              <v-btn
                icon
                @click="add('act')"
                :disabled="activeUnit"
                v-if="!isReadOnly"
              >
                <v-icon>fas fa-add</v-icon>
              </v-btn>
              <v-btn
                icon
                @click="remove('act')"
                :disabled="activeAct"
                v-if="!isReadOnly"
              >
                <v-icon>fas fa-minus</v-icon>
              </v-btn></v-app-bar
            ></v-col
          >
          <v-col cols="12" md="3">
            <v-app-bar dark color="success"
              ><v-toolbar-title>체크정보</v-toolbar-title><v-spacer></v-spacer>
              <v-btn
                icon
                @click="add('chk')"
                :disabled="activeAct"
                v-if="!isReadOnly"
              >
                <v-icon>fas fa-add</v-icon>
              </v-btn>
              <v-btn
                icon
                @click="remove('chk')"
                :disabled="actvieChk"
                v-if="!isReadOnly"
              >
                <v-icon>fas fa-minus</v-icon>
              </v-btn></v-app-bar
            ></v-col
          >
          <v-col cols="12" md="3">
            <v-app-bar dark color="success"
              ><v-toolbar-title>위험요인</v-toolbar-title><v-spacer></v-spacer>
              <v-btn
                icon
                @click="add('hz')"
                :disabled="activeAct"
                v-if="!isReadOnly"
              >
                <v-icon>fas fa-add</v-icon>
              </v-btn>
              <v-btn
                icon
                @click="remove('hz')"
                :disabled="activeHz"
                v-if="!isReadOnly"
              >
                <v-icon>fas fa-minus</v-icon>
              </v-btn></v-app-bar
            ></v-col
          >
          <v-col cols="12" md="3">
            <v-app-bar dark color="success"
              ><v-toolbar-title>감소대책</v-toolbar-title><v-spacer></v-spacer>
              <v-btn
                icon
                @click="add('rm')"
                :disabled="activeAct"
                v-if="!isReadOnly"
              >
                <v-icon>fas fa-add</v-icon>
              </v-btn>
              <v-btn
                icon
                @click="remove('rm')"
                :disabled="activeRm"
                v-if="!isReadOnly"
              >
                <v-icon>fas fa-minus</v-icon>
              </v-btn></v-app-bar
            ></v-col
          >
        </v-row>
      </v-col>
    </v-row>
    <draggable :list="unitList">
      <v-row
        v-for="(unit, index) in $props.unitList"
        :key="index"
        class="pb-n4"
      >
        <v-col cols="12" class="width_20per">
          <v-card outlined flat @click="onSelect('unit', unit)" class="mb-n4">
            <v-textarea
              class="px-4 py-4 mb-n4"
              :value="unit.remark"
              @change="v => change(unit, 'remark', v)"
              auto-grow
              auto-height
              rows="1"
            ></v-textarea>
          </v-card>
        </v-col>
        <v-col cols="12" class="width_80per">
          <draggable :list="actList">
            <v-row
              v-for="(act, index) in $props.actList.filter(
                x => x.unitId === unit.id,
              )"
              :key="index"
              class="pb-n4"
            >
              <v-col cols="12" md="3">
                <v-card
                  outlined
                  flat
                  @click="onSelect('act', act)"
                  class="mb-n4"
                >
                  <v-textarea
                    class="px-4 py-4 mb-n10"
                    :value="act.remark"
                    @change="v => change(act, 'remark', v)"
                    auto-grow
                    auto-height
                    rows="1"
                  ></v-textarea>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon><v-icon>fa-solid fa-newspaper</v-icon></v-btn>
                    <v-btn
                      icon
                      @mouseover="mouseOver('act')"
                      @mouseleave="mouseOut('act')"
                      ><v-icon>fa-solid fa-image</v-icon></v-btn
                    >
                    <v-btn icon><v-icon>fa-solid fa-paperclip</v-icon></v-btn>
                    <v-btn icon><v-icon>fa-solid fa-circle-info</v-icon></v-btn>
                  </v-card-actions>
                </v-card>
                <div v-show="actActive">
                  <div style="display: flex">
                    <img
                      src="@/assets/img/img01.jpg"
                      width="150"
                      height="150"
                      style="z-index: 1"
                    />
                    <img
                      src="@/assets/img/img02.jpg"
                      width="150"
                      height="150"
                      style="z-index: 1"
                    />
                    <img
                      src="@/assets/img/img03.jpg"
                      width="150"
                      height="150"
                      style="z-index: 1"
                    />
                    <img
                      src="@/assets/img/img04.jpg"
                      width="150"
                      height="150"
                      style="z-index: 1"
                    />
                  </div>
                </div>
              </v-col>
              <v-col cols="12" md="3">
                <draggable :list="chkList">
                  <v-row
                    v-for="(chk, index) in $props.chkList.filter(
                      x => x.actId === act.id && x.unitId === act.unitId,
                    )"
                    :key="index"
                    class="pb-n4"
                  >
                    <v-col>
                      <v-card
                        outlined
                        flat
                        @click="onSelect('chk', chk)"
                        class="mb-n4"
                      >
                        <v-textarea
                          class="px-4 py-4 mb-n10"
                          :value="chk.remark"
                          @change="v => change(chk, 'remark', v)"
                          auto-grow
                          auto-height
                          rows="1"
                        ></v-textarea>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn icon
                            ><v-icon>fa-solid fa-newspaper</v-icon></v-btn
                          >
                          <v-btn
                            icon
                            @mouseover="mouseOver('chk')"
                            @mouseleave="mouseOut('chk')"
                            ><v-icon>fa-solid fa-image</v-icon></v-btn
                          >
                          <v-btn icon
                            ><v-icon>fa-solid fa-paperclip</v-icon></v-btn
                          >
                          <v-btn icon
                            ><v-icon>fa-solid fa-circle-info</v-icon></v-btn
                          >
                        </v-card-actions>
                      </v-card>
                      <div v-show="chkActive">
                        <div style="display: flex">
                          <img
                            src="@/assets/img/img01.jpg"
                            width="150"
                            height="150"
                            style="z-index: 1"
                          />
                          <img
                            src="@/assets/img/img02.jpg"
                            width="150"
                            height="150"
                            style="z-index: 1"
                          />
                          <img
                            src="@/assets/img/img03.jpg"
                            width="150"
                            height="150"
                            style="z-index: 1"
                          />
                          <img
                            src="@/assets/img/img04.jpg"
                            width="150"
                            height="150"
                            style="z-index: 1"
                          />
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </draggable>
              </v-col>
              <v-col cols="12" md="3">
                <draggable :list="hzList">
                  <v-row
                    v-for="(hz, index) in $props.hzList.filter(
                      x => x.actId === act.id && x.unitId === act.unitId,
                    )"
                    :key="index"
                  >
                    <v-col>
                      <v-card outlined flat @click="onSelect('hz', hz)">
                        <div>
                          <v-checkbox
                            class="pl-2 mb-n6 mt-1"
                            color="success"
                            :label="'연결된 감소대책 ID ->' + hz.rmId"
                            v-model="hz.isChecked"
                            @click.native.stop.prevent="checked(hz, $event)"
                          ></v-checkbox>
                        </div>
                        <div>
                          <v-textarea
                            class="px-2 pt-2 mb-n8"
                            :value="hz.remark"
                            @change="v => change(hz, 'remark', v)"
                            auto-grow
                            auto-height
                            rows="1"
                          ></v-textarea>
                        </div>
                        <div style="display: flex" class="pt-4">
                          <v-text-field
                            reverse
                            label="빈도"
                            value="1"
                            class="px-4"
                            type="number"
                          />
                          <v-text-field
                            reverse
                            label="강도"
                            value="2"
                            class="pr-4"
                            type="number"
                          />
                          <v-text-field
                            reverse
                            label="종합"
                            value="3"
                            class="pr-4"
                            readonly
                          />
                        </div>
                        <div class="mt-n4 mb-4">
                          <v-row>
                            <v-col cols="9">
                              <v-checkbox
                                class="pl-2 mb-n6 mt-1"
                                color="error"
                                v-model="hz.isRisk"
                                label="중요 위험 여부"
                              ></v-checkbox>
                            </v-col>
                            <v-col cols="3">
                              <v-btn icon
                                ><v-icon>fa-solid fa-paperclip</v-icon></v-btn
                              >
                            </v-col>
                          </v-row>
                        </div>
                      </v-card>
                    </v-col>
                  </v-row>
                </draggable>
              </v-col>
              <v-col cols="12" md="3">
                <draggable :list="rmList">
                  <v-row
                    v-for="(rm, index) in $props.rmList.filter(
                      x => x.actId === act.id && x.unitId === act.unitId,
                    )"
                    :key="index"
                  >
                    <v-col>
                      <v-card outlined flat @click="onSelect('rm', rm)">
                        <div>
                          <v-textarea
                            class="px-4 py-4"
                            :value="rm.remark"
                            @change="v => change(rm, 'remark', v)"
                            auto-grow
                            auto-height
                            rows="1"
                          ></v-textarea>
                        </div>
                        <div align="right" class="mt-n8 mr-2">
                          <v-btn icon
                            ><v-icon>fa-solid fa-paperclip</v-icon></v-btn
                          >
                        </div>
                      </v-card>
                    </v-col>
                  </v-row>
                </draggable>
              </v-col>
            </v-row>
          </draggable>
        </v-col>
      </v-row>
    </draggable>
  </v-container>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  props: {
    unitList: Array,
    actList: Array,
    chkList: Array,
    hzList: Array,
    rmList: Array,
    isReadOnly: Boolean,
  },
  components: {
    draggable,
  },

  data: () => ({
    actActive: false,
    chkActive: false,
    enabled: true,
    dragging: false,
    rmId: '',
    unitId: '',
    actId: '',
    chkId: '',
    hzId: '',
    activeUnit: true,
    activeAct: true,
    actvieChk: true,
    activeHz: true,
    activeRm: true,
  }),
  methods: {
    mouseOver(tp) {
      if (tp === 'act') {
        this.actActive = true
      } else if (tp === 'chk') {
        this.chkActive = true
      }
    },
    mouseOut(tp) {
      if (tp === 'act') {
        this.actActive = false
      } else if (tp === 'chk') {
        this.chkActive = false
      }
    },
    change(source, target, value) {
      source[target] = value
    },
    onSelect(tp, obj) {
      if (tp === 'unit') {
        this.unitId = obj.id
        this.activeUnit = false
        this.activeAct = this.actvieChk = this.activeHz = this.activeRm = true
      } else if (tp === 'act') {
        if (this.unitId === obj.unitId) {
          this.actId = obj.id
          this.activeAct = false
          this.actvieChk = this.activeHz = this.activeRm = true
        }
      } else if (tp === 'chk') {
        this.chkId = obj.id
        this.actvieChk = false
        this.activeHz = this.activeRm = true
      } else if (tp === 'hz') {
        this.hzId = obj.id
        this.activeHz = false
        this.activeRm = true
      } else if (tp === 'rm') {
        this.rmId = obj.id
        this.activeRm = false
      }
    },
    checked(value, e) {
      if (value.rmId === '') {
        value.rmId = this.rmId
        value.isChecked = true
      } else {
        if (value.rmId === this.rmId) {
          value.rmId = ''
          value.isChecked = false
        } else {
          e.stopPropagation()
          e.preventDefault()

          value.isChecked = true
          return true
        }
      }
    },
    add(tp) {
      if (tp === 'unit') {
        this.unitId = this.actId = this.chkId = this.hzId = this.rmId = ''

        this.activeAct = this.actvieChk = this.activeHz = this.activeRm = true

        this.$props.unitList.push({
          id: this.$props.unitList.length + 1,
          remark: '단위작업' + (this.$props.unitList.length + 1),
        })
      } else if (tp === 'act') {
        this.actId = this.chkId = this.hzId = this.rmId = ''

        this.$props.actList.push({
          id: this.$props.actList.length + 1,
          unitId: this.unitId,
          remark: '작업행동' + (this.$props.actList.length + 1),
        })
      } else if (tp === 'chk') {
        this.$props.chkList.push({
          id: this.$props.chkList.length + 1,
          unitId: this.unitId,
          actId: this.actId,
          remark: '체크정보' + (this.$props.chkList.length + 1),
        })
      } else if (tp === 'hz') {
        this.$props.hzList.push({
          id: this.$props.hzList.length + 1,
          unitId: this.unitId,
          actId: this.actId,
          rmId: '',
          isChecked: false,
          isRisk: false,
          remark: '위험요인' + (this.hzList.length + 1),
        })
      } else if (tp === 'rm') {
        this.$props.rmList.push({
          id: this.$props.rmList.length + 1,
          unitId: this.unitId,
          actId: this.actId,
          remark: '감소대책' + (this.rmList.length + 1),
        })
      }
    },
    remove(tp) {},
  },
}
</script>
<style scoped>
.width_20per {
  width: 20%;
  max-width: 20%;
  flex-basis: 20%;
}

.width_80per {
  width: 80%;
  max-width: 80%;
  flex-basis: 80%;
}
</style>
