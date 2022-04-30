<template max-width="100%">
  <v-card outlined flat class="px-2 py-2">
    <v-card-title class="text-h5 grey lighten-2">게시판</v-card-title>
    <v-row>
      <v-col cols="3">
        <v-text-field
          label="게시판번호"
          readonly
          v-model="inputData.boardNo"
        ></v-text-field
      ></v-col>
      <v-col cols="4">
        <v-text-field
          label="작성자"
          readonly
          v-model="inputData.insertUser"
        ></v-text-field
      ></v-col>
      <v-col cols="4">
        <v-text-field
          label="작성일자"
          readonly
          v-model="inputData.insertDate"
        ></v-text-field
      ></v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field label="제목" v-model="inputData.boardTitle"></v-text-field
      ></v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-textarea
          label="내용"
          row="3"
          v-model="inputData.boardContents"
        ></v-textarea
      ></v-col>
    </v-row>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" text @click="$emit('save', inputData)">저장</v-btn>
      <v-btn color="primary" text @click="$emit('delete', inputData)"
        >삭제</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      inputData: {
        boardNo: '',
        boardTitle: '',
        boardContents: '',
        insertUser: 'Tester',
        insertDate: new Date().toDateString(),
      },
    };
  },
};
</script>

<style></style>
