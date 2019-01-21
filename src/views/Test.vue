<template>
  <div style="margin-top:66px">
    <div class="weather-box">

    </div>
    <div>
      <mu-button
        color="primary"
        @click="deleteData()"
      >删除</mu-button>
      <mu-button
        color="primary"
        @click="httpGet()"
      >获取数据</mu-button>
      <mu-button
        color="primary"
        @click="getWeatherCity()"
      >获取天气</mu-button>
    </div>
    <!-- <div v-show="httpError.hasError">{{httpError.status}}:{{statusText}}</div> -->
    <div>{{this.responseData[0]}}</div>
  </div>

</template>


<script>
import {getTest} from '@/api/testApi';
import {getWeather} from '@/api/weatherApi';

export default {
  data () {
    return {
      responseData:'',
      weather:'',
      selects: [],
      
      
    list:[],
    };
  },
  methods: {
    loadData(){
      getTest("/getTest2")
      .then(response=>{
        this.list=response.data;
      })
      .catch(err=>{
        console.log(err)
      })
    },          
                
    deleteData(){
        this.$axios.getAddressJson().then(function (res) {
	//成功之后处理逻辑
        console.log(res)
      },function (res) {
      	//失败之后处理逻辑
        console.log("error:"+res)
      })

    },
    httpGet(){
      getTest("getTest2").then(response=>{
        this.responseData=response.data;
        console.log(response.data)
      })
      // .chach(error=>{
      //   this.responseData=response.data
      // })
    },
    getWeatherCity(){
      getWeather("https://www.apiopen.top/weatherApi?city=成都").then(response=>{
        this.weather=JSON.stringify(response.data.data.yesterday);
        console.log(this.weather);
      }

    )
    },
    handleSortChange ({name, order}) {
      this.list = this.list.sort((a, b) => order === 'asc' ? a[name] - b[name] : b[name] - a[name]);
    },
    removeSelect (selectIndex) {
      const index = this.selects.indexOf(selectIndex);
      this.selects.splice(index, 1);
    }
  },
  // created:function(){
  //     this.loadData();
  // }
  computed: {
    httpError() {
      return this.$store.state.httpError;
    }
  }, 
};
</script>