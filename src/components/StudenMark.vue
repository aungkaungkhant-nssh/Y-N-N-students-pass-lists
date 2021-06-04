<template>
    <div class="table-container">
        <div class="layout">
            <div class="sidebar">
               <SideBar @showNumber="numberShow"></SideBar>
            </div>
           
             <div class="result">
                 <h3>Pilot<span>({{check}})</span> Students Mark </h3>
                 <table border="3">
            <tr>
                <th>Roll No</th>
                <th>Name</th>
                <th>Myanmar</th>
                <th>English</th>
                <th>Math</th>
                <th>Chemistry</th>
                <th>Physic</th>
                <th>Bio/Eco</th>
                <th>Total</th>
            </tr>
           <tbody v-for="st in fetchDetails" :key="st.id">
                <tr>
                    <th>{{st.rollNo}}</th>
                    <th>{{st.name}}</th>
                    <th>{{st.myan}}</th>
                    <th>{{st.eng}}</th>
                    <th>{{st.math}}</th>
                    <th>{{st.chem}}</th>
                    <th>{{st.phys}}</th>
                    <th>{{st.bioOreco}}</th>
                    <th>{{st.total}}</th>
                </tr>
           </tbody>
                 </table>
            </div>
        </div>
      
           
    </div>
</template>

<script>
import { computed, onMounted, ref } from '@vue/runtime-core';
import { db } from '../firebase/config'
import SideBar from './SideBar'
export default {
  components: { SideBar },
  setup(){
      let check=ref("1");
      let numberShow=(num)=>{
        check.value=num;
      }
      let details=ref([]);
        let fetchDetails=computed(()=>{
          return details.value.filter((dt)=>{
              return dt.pilotNo===check.value
          })
        })
      onMounted(async()=>{
            let res=await db.collection("details").orderBy("rollNo").get();
            details.value=res.docs.map((doc)=>{
                return  {id:doc.id,...doc.data()}
            })
         
      })
      return{details,numberShow,fetchDetails,check};
  }

}
</script>

<style>
.layout{
    display: flex;
    justify-content: space-between;
}
.table-container{
    width: 96%;
    text-align: center;
}
.sidebar{
    background-color: #f5f6fa;
     width: 25%;
     margin: 10px 0px 0px 5px;
     border-radius: 5px;
     transition: all 0.5s;

}
.sidebar:hover{
    box-shadow: 0px 0px 15px rgba(0,0,0,0.5);
}
.result{
    width: 73%;
}
.table-container h3{
    margin-bottom: 15px;
    font-size: 29px;
    word-spacing: 2px;
    color:#2f3640;
}
table{
    width: 100%;
}
.table-container table tr th{
    padding: 8px 5px;
}
.table-container table tr td{
    text-align: center;
    padding: 10px;
}
</style>