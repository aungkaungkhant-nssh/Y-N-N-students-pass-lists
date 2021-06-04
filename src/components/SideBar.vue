<template>
    <div class="side">
        <h3 class="re">Pilot List</h3>
        <div class="btn-container">
            <button class="bt" @click="show('1')">Pilot (1)</button>
            <button class="bt" @click="show('2')">Pilot (2)</button>
            <button class="bt" @click="show('3')">Pilot (3)</button>
        </div>
        
    </div>
 
</template>

<script>
export default {
    setup(props,context){
        let show=(num)=>{
            console.log("hi");
            context.emit('showNumber',num);
        }
        return{show}
    }
}
</script>

<style>
.side{
    margin: 30px 10px;
}
.side .re{
    color:#0097e6;
}
.btn-container{
    margin-top: 40px;
}
.btn-container .bt{
    display: block;
    margin-top: 20px;
    width: 300px;
    text-align: center;
    padding: 8px 10px;
    border: 1px solid #000;
    cursor: pointer;
    font-size: 18px;
    background-color: #f5f6fa;
    transition: all 0.5s;
    border-radius: 5px;
}
.btn-container .bt:hover{
    transform: translateY(-5px);
}
</style>
