<template>

<div>
  <b-navbar class="header">
       <img class="vueLogo" alt="Vue logo" src="../assets/logo.png">

      <b-navbar-nav class="headerButtons sticky ml-auto">
        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item href="/contact">Contact</b-nav-item>
        <b-nav-item href="/about">About</b-nav-item>
      </b-navbar-nav>   
      <b-navbar-nav class="logo mr-auto"> 
        <b-icon icon="facebook"></b-icon>
        <b-icon icon="twitter"></b-icon>
        <b-icon icon="mailbox"></b-icon>
      </b-navbar-nav> 
  </b-navbar>
</div> 
</template>

<script>
export default {
    name: "Header",
    data(){
        return{

        }
    }

}
</script>

<style>
.header{
    height: 75px;
    background: white;
    border-bottom: 4px solid #39B2CC;
    color: #444;
    font-size: 16px;  
    text-align: center;
}

.vueLogo{
    width: 70px;
    margin-right:75% ;
}
</style>