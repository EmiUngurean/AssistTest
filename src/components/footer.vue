<template>
<div class="footer inline">
  <p>Internship 2022 Created by: {{yourName}}</p>
  
</div>
 
</template>

<script>
export default {
    name:'Footer',
    data(){
        return{
            yourName:'Ungurean Emanuel-Bogdan',
        }
    }

}
</script>

<style>
.footer{
    background-color: #ededed;
    height: 40px;
    width: 100%;
    color: #515356;
    position: fixed;
    left: 0;
    bottom: 0;
    display: inline;
}
</style>