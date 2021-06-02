<template>
    <footer class="footer">
            <div>
                <p>{{year}}@ All reserved devloped by Aung Kaung Khant</p>
            </div>
            
    </footer>

</template>

<script>
export default {
    props:["year"]
}
</script>

<style>
.footer div{
    width: 38%;
    margin: 35px auto;
}
.footer p{
    color:#2c3e50;
    font-size: 20px;
}
</style>