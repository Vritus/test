<template>
  <div class="main" style="margin-top:66px">

    <h1 style="text-align:center">TODOList</h1>
    <mu-container v-show="willadd">
      <mu-text-field
        v-model="newToDo.content"
        placeholder="请输入待办事项："
        style="width:75%"
        icon="comment"
      ></mu-text-field>
      <mu-button
        color="primary"
        @click="add"
      >确定</mu-button><br />
    </mu-container>

    <mu-container class="container-thing">
      <h2>进行中：{{todolist.length-1}}</h2>

      <p v-show="todolist.length<=1">现在就开始！</p>

      <mu-row
        v-for="(item,index) in todolist"
        :key="index"
      >
        <mu-col span="2">
          <div class="grid-cell">
            <mu-button
              v-show="index>=1"
              color="primary"
              @click="del(index)"
              icon
            >
              <mu-icon value="clear"></mu-icon>
            </mu-button>
          </div>
        </mu-col>
        <mu-col span="8">
          <div class="grid-cell"> <span>{{item.content}}</span> </div>
        </mu-col>
        <mu-col span="2">
          <div class="grid-cell">
            <mu-button
              v-show="index>=1"
              icon
              @click="addToDoneThings(index)"
            >
              <mu-icon
                value="check_circle"
                right
                color="primary"
              ></mu-icon>
            </mu-button>
          </div>
        </mu-col>
      </mu-row>

    </mu-container>
    <hr width="90%">
    <!-- 已完成事项-->
    <mu-container class="container-done">
      <h2>已完成: {{doneThings.length-1}}</h2>

      <mu-row
        v-for="(item,index) in doneThings"
        :key="index"
        v-show="index>=1"
      >
        <mu-col span="10">
          <div class="grid-cell">{{item.content}}</div>
        </mu-col>
        <mu-col span="1">
          <div class="grid-cell">
            <mu-button
              icon
              color="primary"
              @click="delDoneThings(index)"
            ><mu-icon value="clear" right></mu-icon></mu-button>
          </div>
        </mu-col>
      </mu-row>
    </mu-container>

    <!-- 底部添加按钮-->
    
        <mu-button
          full-width
          color="primary"
          @click="willadd='!willadd'"
          style="position:fixed;bottom:0"
        >添加待办事项</mu-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      doNum: "",
      newToDo: {
        content: "",
        done: false
      },
      doneThings: [
        {
          content: "",
          done: "true"
        }
      ],

      todolist: [
        {
          content: "",
          done: false
        }
      ],
      willadd: false
    };
  },
  methods: {
    //判断用户输入是否为空，若不为空，将其加入todolist
    add() {
      if (this.newToDo.content) {
        this.todolist.push(this.newToDo),
          (this.newToDo = { content: "", done: false });
      }
    },
    del(index) {
      this.todolist.splice(index, 1);
    },
    delDoneThings(index) {
      this.doneThings.splice(index, 1);
    },
    addToDoneThings(index) {
      this.doneThings.push(this.todolist[index]);
      this.del(index);
    }
  },
  components: {}
};
</script>

<style>
.container-thing .container-done {
  margin: 10px;
}
.grid-cell{
  line-height:48px;
  font-size:18px
}
.container-thing {
  padding:0 25px !important;
}
.container-done{
  padding:0 25px !important;
}
.main{
  margin-bottom:50px
}
</style>
