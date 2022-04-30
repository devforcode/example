<template>
  <v-container>
    <v-row>
      <v-col
        ><v-text-field
          v-model="inputData.userName"
          label="사용자명"
        ></v-text-field
      ></v-col>
      <v-col
        ><v-text-field v-model="inputData.age" label="나이"></v-text-field
      ></v-col>
      <v-col><v-btn @click="add">추가</v-btn></v-col>
      <v-col><v-btn @click="search">검색</v-btn></v-col>
      <v-col><v-btn @click="popup">팝업</v-btn></v-col>
    </v-row>
    <v-row>
      <v-col>
        <grid
          ref="tuigrid"
          :header="gridInit.header"
          :columns="gridInit.columns"
          :data="gridInit.data"
          :rowHeaders="gridInit.rowHeaders"
        ></grid>
      </v-col>
    </v-row>
    <v-row>
      <v-data-table
        :headers="dataTableInit.headers"
        :items="dataTableInit.items"
        :items-per-page="5"
      >
      </v-data-table>
    </v-row>
    <v-row>
      <v-col>
        <v-list>
          <v-list-item v-for="(item, index) in list" :key="index">
            <v-list-item-content @click="viewItem(item)">
              {{ item.userName }} / {{ item.age }}
            </v-list-item-content>
            <v-list-item-action>
              <v-btn @click="deleteItem(item)">삭제</v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
    <div>
      <button @click="addUnit">단위작업 추가</button>
      <button @click="addAct">작업행동 추가</button>
      <button @click="addchk">체크정보 추가</button>
    </div>
    <div>
      <v-data-table
        :headers="workRiskList.headers"
        :items="workRiskList.items"
        disable-pagination
        hide-default-footer
        fixed-header
        height="400"
      >
        <!--<template v-slot:item="{ item }">
          <tr style="vertical-align: top">
            <td>
              <v-textarea
                outlined
                auto-grow
                rows="1"
                v-model="item.unit"
                v-show="item.addType === 'unit'"
              ></v-textarea>
            </td>
            <td>
              <v-textarea
                outlined
                auto-grow
                rows="1"
                v-model="item.act"
                v-show="item.addType === 'act' || item.addType === 'unit'"
              ></v-textarea>
            </td>
            <td>
              <v-textarea
                outlined
                auto-grow
                rows="1"
                v-model="item.chk"
                v-show="
                  item.addType === 'chk' ||
                  item.addType === 'unit' ||
                  item.addType === 'act'
                "
              ></v-textarea>
            </td>
          </tr>
        </template>-->
        <template v-slot:body="props">
          <tr v-for="(item, index) in props.items" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item }}</td>
          </tr>
        </template>
      </v-data-table>
    </div>
    <v-dialog v-model="popupParams.visible" persistent max-width="600">
      <popchild @delete="del" @save="save"></popchild>
    </v-dialog>
  </v-container>
</template>

<script>
import 'tui-grid/dist/tui-grid.css';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';
import 'tui-pagination/dist/tui-pagination.css';
import { Grid } from '@toast-ui/vue-grid';
import inputPop from '@/components/inputPop';

export default {
  name: 'HelloWorld',
  components: { Grid, popchild: inputPop },
  data() {
    return {
      list: [],
      popupParams: {
        visible: false,
      },
      inputData: {
        userName: '',
        age: '',
      },
      dataTableInit: {
        headers: [
          { text: '사용자명', value: 'userName' },
          { text: '나이', value: 'age' },
        ],
        items: [],
      },
      workRiskList: {
        headers: [
          { text: '단위작업', value: 'unit' },
          { text: '작업행동', value: 'act' },
          { text: '체크정보', value: 'chk' },
        ],
        items: [],
      },
      gridInit: {
        rowHeaders: ['rowNum'],
        data: [],
        columns: [
          {
            header: '사용자명',
            name: 'userName',
            align: 'center',
          },
          {
            header: '나이',
            name: 'age',
            align: 'center',
          },
        ],
        header: {
          height: 100,
        },
      },
    };
  },
  methods: {
    addUnit() {
      this.workRiskList.items.push({
        unit: 'unit_' + this.workRiskList.items.length + 1,
        act: '',
        chk: '',
        addType: 'unit',
        sort: this.workRiskList.items.length + 1,
        rowIndex: this.workRiskList.items.length,
      });
    },
    addAct() {
      /*this.workRiskList.items.push({
        unit: '',
        act: '',
        chk: '',
        addType: 'act',
      });*/

      console.log(this.workRiskList.items);
    },
    addchk() {
      this.workRiskList.items.push({
        unit: '',
        act: '',
        chk: '',
        addType: 'chk',
      });
    },
    add() {
      this.list.push({
        userName: this.inputData.userName,
        age: this.inputData.age,
      });

      this.inputData.userName = '';
      this.inputData.age = '';
    },
    search() {
      this.gridInit.data = this.list;
      this.$refs.tuigrid.invoke('resetData', this.gridInit.data);

      this.dataTableInit.items = this.list;
    },
    popup() {
      this.popupParams.visible = true;
    },
    del(data) {
      // this.list.splice(data, 1);

      this.popupParams.visible = false;
    },
    save(data) {
      this.popupParams.visible = false;

      this.list.splice(data, 1);

      this.list.push({
        //userName: data.userName,
        //age: data.age,
      });
    },
    deleteItem(item) {
      this.list.splice(item, 1);
      this.inputData.userName = '';
      this.inputData.age = '';
    },
    viewItem(item) {
      this.inputData.userName = item.userName;
      this.inputData.age = item.age;
    },
  },
};
</script>
