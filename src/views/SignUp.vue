<template>
    <div class="signUpContainer">
        <h1>Signup</h1>
        <form action="">
            <input type="text" placeholder="displayName">
            <input type="email" placeholder="email">
            <input type="phone" placeholder="phone">
            <input type="password" placeholder="password">
            <button class="btn">Sign Up</button>
        </form>
    </div>
 
</template>

<script>
export default {

}
</script>

<style>
.signUpContainer{
        width: 500px;
        margin: 80px auto;
        background-color: #f9f9f9;
        text-align: center;
        padding: 20px 0px;
        border-radius: 5px;
}
form{
    padding: 5px 48px;
}
input{
    display: block;
    margin: 25px 0px;
    border-radius: 10px;
    width: 100%;
    padding: 10px 8px;
    border: 1px solid #ccc;
   
}
input:focus{
    outline: none;
}
.btn{
    background-color: darkturquoise;
    border: none;
    outline: none;
    padding: 10px 24px;
    margin-top: 5px;
    border-radius: 5px;
    cursor: pointer;
    color: #f0f0f0;
    font-size: 16px;
}
</style>