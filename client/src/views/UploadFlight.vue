<template>
    <div class="">
      <div class="hidden">
        <label>Files
          <input type="file" id="files" ref="files" multiple v-on:change="handleFilesUpload()"/>
        </label>
      </div>
      <div class="">
        <div v-for="(file, key) in files" class="w-full flex justify-between bg-gray-100 rounded-lg shadow-md overflow-hidden my-4 text-lg font-semibold mt-1 text-center">
          <div class="p-4">
            {{ file.name }} 
          </div>
          <div class="bg-light p-4" v-on:click="removeFile( key )">
            Entfernen
          </div>
        </div>
      </div>
      <br>
      <div class="bg-light rounded-lg shadow-md overflow-hidden my-4 text-lg font-semibold mt-1 p-2 text-center">
        <button v-on:click="addFiles()"> + IGC Datei auswählen</button>
      </div>
      <br>
      <div class="bg-primary rounded-lg shadow-md overflow-hidden my-4 text-lg font-semibold mt-1 p-2 text-center text-white">
        <button v-on:click="submitFiles()">Hochladen</button>
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
          files: []
        }
      },
      /*
        Defines the method used by the component
      */
      methods: {
        /*
          Adds a file
        */
        addFiles(){
          this.$refs.files.click();
        },
        /*
          Submits files to the server
        */
        submitFiles(){
          /*
            Initialize the form data
          */
          let formData = new FormData();
          /*
            Iteate over any file sent over appending the files
            to the form data.
          */
          for( var i = 0; i < this.files.length; i++ ){
            let file = this.files[i];
            formData.append('files[' + i + ']', file);
          }
          /*
            Make the request to the POST /select-files URL
          */
          axios.post( '/select-files',
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
          Handles the uploading of files
        */
        handleFilesUpload(){
          let uploadedFiles = this.$refs.files.files;
          /*
            Adds the uploaded file to the files array
          */
          for( var i = 0; i < uploadedFiles.length; i++ ){
            this.files.push( uploadedFiles[i] );
          }
        },
        /*
          Removes a select file the user has uploaded
        */
        removeFile( key ){
          this.files.splice( key, 1 );
        }
      }
    }
  </script>