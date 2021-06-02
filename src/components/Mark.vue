<template>
      <div class="founder">
        <form @submit.prevent="upload">
            <div>
                  <label for="">Roll No:</label>
                  <input type="number" v-model="rollNo">
            </div>
            <div>
                <label for="">Name</label>
                <input type="text" v-model="name">
            </div>
            <div>
                <label for="">Myan Mark:</label>
                <input type="number" v-model="myan">
            </div>
            <div>
                <label for="">English Mark:</label>
                <input type="number" v-model="eng">
            </div>
            <div>
                <label for="">Math Mark:</label>
                <input type="number" v-model="math">
            </div>
            <div>
                <label for="">Chem Mark:</label>
                <input type="number" v-model="chem">
            </div>
            <div>
                 <label for="">Phys Mark:</label>
                 <input type="number" v-model="phys">
            </div>
            <div>
                 <label for="">Bio or Eco Mark:</label>
                 <input type="number" v-model="bioOreco">
            </div> 
             
            <button class="btn add">Add Mark</button>
        </form>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { db } from '../firebase/config';
import totalMark from '../composables/totalMark'
export default {
    setup(){
        let {caculation}=totalMark();
        let rollNo=ref("");
        let name=ref("");
        let myan=ref("");
        let eng=ref("");
        let math=ref("");
        let chem=ref("");
        let phys=ref("");
        let bioOreco=ref("");
        let upload=()=>{
            let arrys=[
                myan.value,
                eng.value,
                math.value,
                chem.value,
                phys.value,
                bioOreco.value
                ];
            let total=caculation(arrys);
            let detail={
                rollNo:rollNo.value,
                name:name.value,
                myan:myan.value,
                eng:eng.value,
                math:math.value,
                chem:chem.value,
                phys:phys.value,
                bioOreco:bioOreco.value,
                total:total
            }
            // let res=await db.collection("details").add(deltail);
            // console.log(res);
        }
        return{rollNo,name,myan,eng,math,chem,phys,bioOreco,upload}
    }
}
</script>

<style>
.founder{
    width: 600px;
    margin: 20px auto;
    
    background-color: #2980b9;
      border-radius: 5px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
}

.add{
    margin: 5px 180px;
    background-color: #e3e1ff;
    color: indigo;
}
.founder form{
    padding: 20px 35px;
    max-height:500px;
    overflow: scroll;
    overflow-x: hidden;
  
}
.founder label{
    display: inline-block;
    width: 150px;
    color:#ecf0f1;
    font-size: 17px;
}
.founder input{
  border: none;
  border-bottom: 2px dotted indigo;
  background-color: #2980b9;
  width:50%;
  padding: 5px 8px;
  color:#000;
  font-size: 16px;

}
.founder input:focus{
    outline: none;
}
.founder div{
    margin: 23px 0px;
    display: flex;
    align-items: center;
}
</style>