<template>
  <div style="margin-top:66px">
      <div>
      <tr v-for="user in users" :key="user.id">
          <td >{{user.id}} {{user.name}}:{{user.age}}</td>
          <br>

      </tr>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users:[
        ],
    };
  },
  methods: {
    // 发送ajax请求，获取用户列表
                loadData: function() {
                    var that = this;
                    this.$axios.get("/user/findAll")
                        .then(function (response) {
                            var data = response.data;
                            that.users = data;
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                }
  },
  components: {},
  mounted: function() {
                // 页面加载执行方法
                this.loadData();
            }
};
</script>

<style>
</style>
