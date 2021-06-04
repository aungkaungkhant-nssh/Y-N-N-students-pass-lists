<template>
    <nav class="result-nav">
        <div>
            <img src="../assets/edu.jpg" alt="">
            <h1>Yin Nyein Nge <span>(private School)</span></h1>
        </div>
        <button @click="admin">Admin</button>
    </nav>
</template>

<script>
import {useRouter} from 'vue-router'
export default {
    setup(){
        let router=useRouter();
        let admin=()=>{
            router.push({name:"Login"})
        }
        return{admin}
    }
}
</script>

<style>
.result-nav{
    /* background-color: #fff; */
    width: 95%;
    margin: 0px auto;
    display: flex;
    align-items: center;
}
.result-nav div{
    display: flex;
    margin-top: 10px;
    align-items: center;
}
.result-nav div h1{
    margin-left: -35px;
    font-size: 35px;
    color:#0984e3;
    line-height: 20px;
}
.result-nav div h1 span{
     font-family: 'Dancing Script', cursive;
     color:#74b9ff;
}
.result-nav div img{
    width: 190px;
    border-radius: 100px;
}
.result-nav button{
     margin-top: 0px;
    background-color: #00b894;
    border: none;
    outline: none;
    padding: 12px 23px;
    margin-right: 20px;
    color:#fff;
    letter-spacing: 1px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 18px;
}
</style>