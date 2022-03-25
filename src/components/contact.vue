<template>
  <div class="contactInputs">
      <b-form >
          <b-form-input
          id="input-1"
          v-model="form.first_name"
          type="text"
          placeholder="Enter your name..."
          required
        ></b-form-input> 

        <b-form-input
          id="input-2"
          v-model="form.surname"
          type="text"
          placeholder="Enter your surname"
          required
        ></b-form-input>
        <b-form-input
          id="input-3"
          v-model="form.phone"
          type="number"
          placeholder="Enter your phone number"
          required
        ></b-form-input>
          <b-form-input
          id="input-4"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
        <b-button type="submit">Submit</b-button>
      </b-form>
  </div>
</template>

<script>
export default {
    name: "Contact",
    data(){
        return{
            form:{
                first_name:'',
                surname:'',
                phone:'',
                email:'',
            }
        }
    }
}
</script>

<style>
.contactInputs{
    padding: 1rem;
    width: 700px;
    margin-left: 65%;
}
</style>