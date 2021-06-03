<template>
    <div class="table-container">
        <div class="layout">
            <div class="sidebar">
               <SideBar></SideBar>
            </div>
           
             <div class="result">
                 <h3>Pilot<span>(1)</span> Student Mark </h3>
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
            <tr>
                <td>1</td>
                <td style="width: 231px;">Aung Kaung Khant</td>
                <td>50</td>
                <td>35</td>
                <td>67</td>
                <td>46</td>
                <td>87</td>
                <td>45</td>
                <td>450</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Aung Kaung Khant</td>
                <td>50</td>
                <td>35</td>
                <td>67</td>
                <td>46</td>
                <td>87</td>
                <td>45</td>
                <td>450</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Aung Kaung Khant</td>
                <td>50</td>
                <td>35</td>
                <td>67</td>
                <td>46</td>
                <td>87</td>
                <td>45</td>
                <td>450</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Aung Kaung Khant</td>
                <td>50</td>
                <td>35</td>
                <td>67</td>
                <td>46</td>
                <td>87</td>
                <td>45</td>
                <td>450</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Aung Kaung Khant</td>
                <td>50</td>
                <td>35</td>
                <td>67</td>
                <td>46</td>
                <td>87</td>
                <td>45</td>
                <td>450</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Aung Kaung Khant</td>
                <td>50</td>
                <td>35</td>
                <td>67</td>
                <td>46</td>
                <td>87</td>
                <td>45</td>
                <td>450</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Aung Kaung Khant</td>
                <td>50</td>
                <td>35</td>
                <td>67</td>
                <td>46</td>
                <td>87</td>
                <td>45</td>
                <td>450</td>
            </tr>
        
         
                 </table>
            </div>
        </div>
            
           
    </div>
</template>

<script>
import SideBar from './SideBar'
export default {
  components: { SideBar },

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