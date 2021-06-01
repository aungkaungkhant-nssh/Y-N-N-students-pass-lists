<template>
      <div class="founder">
        <form action="">
            <div>
                  <label for="">Roll No:</label>
                  <input type="number">
            </div>
            <div>
                <label for="">Name</label>
                <input type="text">
            </div>
            <div>
                <label for="">Myan Mark:</label>
                <input type="number">
            </div>
            <div>
                <label for="">English Mark:</label>
                <input type="number">
            </div>
            <div>
                <label for="">Math Mark:</label>
                <input type="number">
            </div>
            <div>
                <label for="">Chem Mark:</label>
                <input type="number">
            </div>
            <div>
                 <label for="">Phys Mark:</label>
                 <input type="number">
            </div>
            <div>
                 <label for="">Bio or Eco Mark:</label>
                 <input type="number">
            </div> 
             
            <button class="btn add">Add Mark</button>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.founder{
    width: 600px;
    margin: 100px auto;
    background-color: skyblue;
      border-radius: 5px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
}
.add{
    margin: 5px 180px;
    background-color: #e3e1ff;
    color: indigo;
}
form{
    padding: 20px 35px;
  
}
.founder label{
    display: inline-block;
    width: 150px;
    color:indigo;
    font-size: 17px;
}
.founder input{
  border: none;
  border-bottom: 2px dotted indigo;
  background-color:skyblue;
  width:50%;
  padding: 5px 8px;
  color:indigo;
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