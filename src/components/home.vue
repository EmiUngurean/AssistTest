<template>
<div>
    <div class="table">
    <table class="table table-hover table-bordered">
      <thead class="thead-dark sticky">
        <tr>
          <th scope="col">Drink Name</th>
          <th scope="col">Category</th>
          <th scope="col">Tags</th>
          <th scope="col">Instructions</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
          <tr class="tableItem" v-for="(item) in form" :key="item">
          <td>{{item.drink_name}}</td>
          <td>{{item.category}}</td>
          <td>{{item.tags}}</td>
          <td>{{item.instructions}}</td>
          <td>
              <b-button @click="addModal">Add</b-button>
              <b-button @click="editModal">Edit</b-button>
              <b-button @click="deleteModal">Delete</b-button>
          </td>
          </tr>
      </tbody>
    </table>
    <b-modal id="addModal" centered title="Add" @ok="submit"> 
        <div class="addModalInfo">
           <b-form-input
          id="input-1"
          v-model="form.drink_name"
          placeholder="drink name autocompleted"
          required
        ></b-form-input> 
        <b-form-input
          id="input-1"
          v-model="form.category"
          placeholder="category autocompleted"
        ></b-form-input> 
        <b-form-input
          id="input-1"
          v-model="form.tags"
          placeholder="tags autocompleted"
          required
        ></b-form-input> 
        <b-form-input
          id="input-1"
          v-model="form.instructions"
          placeholder="instructions autocompleted"
          required
        ></b-form-input> 
        </div>
    </b-modal>

    <b-modal id="editModal" centered title="Edit" @ok="submit"> 
        <div class="editModalInfo">
        
        </div>
    </b-modal>

      <b-modal id="deleteModal" centered title="Delete" @ok="submit"> 
        <div class="deleteModalInfo">
            <p>Are you sure ou want to delete this row?</p>
            <b-button class="mt-3" variant="outline-danger">Yes</b-button>
            <b-button class="mt-2" variant="outline-success">No</b-button>
        </div>
    </b-modal>
  </div>
</div>  
</template>

<script>
export default {
    name: 'Home',
    data(){
        return{
            form:[
                {
                drink_name: 'dasd',
                category: 'asda',
                tags: 'asd',
                instructions: 'das',
                actions: ''
                }
            ]
        }
    },
    methods:{
        addModal(){
            this.$bvModal.show("addModal");
        },
        editModal(){
            this.$bvModal.show("editModal");
        },
        deleteModal(){
            this.$bvModal.show("deleteModal");
        }
    }

}
</script>

<style>
.table{
    width: 1000px;
    margin: 0px auto;
    margin-top: 50px;
}

.tableItem{
    cursor: pointer;
}
</style>