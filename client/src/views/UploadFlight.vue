<template>
  <div class="">
    <div class="hidden">
      <label>File
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
      </label>
    </div>
    <div class="">
      <div v-if="file" class="w-full flex justify-between bg-gray-100 rounded-lg shadow-md overflow-hidden my-4 text-lg font-semibold mt-1 text-center">
        <div class="p-4">
          {{ file.name }} 
        </div>
        <div class="bg-light p-4" v-on:click="removeFile()">
          Remove
        </div>
      </div>
    </div>
    <br>
    <div class="bg-light rounded-lg shadow-md overflow-hidden my-4 text-lg font-semibold mt-1 p-2 text-center">
      <button v-on:click="addFile()">Select IGC File</button>
    </div>
    <br>
    <div class="bg-primary rounded-lg shadow-md overflow-hidden my-4 text-lg font-semibold mt-1 p-2 text-center text-white">
      <button v-on:click="submitFile()">Upload</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  /*
    Defines the data used by the component
  */
  data(){
    return {
      file: null
    }
  },
  /*
    Defines the method used by the component
  */
  methods: {
    /*
      Adds a file
    */
    addFile(){
      const fileInput =  this.$refs.file;
      /*fileInput.accept = 'image/*'; // set accepted file types to images only
      */
      fileInput.multiple = false; // allow only one file to be selected
      fileInput.click();
    },
    /*
      Submits file to the server
    */
    submitFile(){
      if (!this.file) {
        return;
      }
      /*
        Initialize the form data
      */
      let formData = new FormData();
      formData.append('file', this.file);
      /*
        Make the request to the POST /upload_igc URL
      */
      axios.post( 'http://localhost:8000/upload_photo',
        formData,
        {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
        }
      ).then(function(){
        console.log('SUCCESS!!');
      })
      .catch(function(){
        console.log('FAILURE!!');
      });
    },
    /*
      Handles the uploading of a file
    */
    handleFileUpload(){
      this.file = this.$refs.file.files[0];
      console.log(this.file)
    },
    /*
      Removes the uploaded file
    */
    removeFile(){
      this.file = null;
    }
  }
}
</script>
