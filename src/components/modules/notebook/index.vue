<script setup lang="ts">

</script>

<template>
  <div class="card">
    <div class="header">
      <div class="top">
        <div class="circle">
          <span class="red circle2"></span>
        </div>
        <div class="circle">
          <span class="yellow circle2"></span>
        </div>
        <div class="circle">
          <span class="green circle2"></span>
        </div>
        <div class="title">
          <p id="title2">待办事务</p>
        </div>
      </div>
    </div>
    <div class="code-container">
    <textarea class="area" id="code" name="code">

    </textarea>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 400px;
  height: 600px;
  background-color: rgb(241,243,242);
  border-radius: 12px;
  z-index: 1;
  box-shadow: 0px 2px 2px rgba(0, 0, 0,.1);
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  &:hover {
    transform: translateY(-7px);
    box-shadow: 0px 2px 2px rgba(0, 0, 0,.4);
  }
  .header {
    margin: 5px;
    border-radius: 5px;
    .top {
      display: flex;
      align-items: center;
      padding-left: 10px;
      .circle {
        padding: 0 4px;
      }
      .circle2 {
        display: inline-block;
        align-items: center;
        width: 10px;
        height: 10px;
        padding: 1px;
        border-radius: 5px;
      }
      .title{
        margin-left: 40px;
      }
    }
  }
  .code-container {
    text-align: center;
    flex:1;
    #code {
      width: 100%;
      height: 100%;
      resize: none;
      box-sizing: border-box;
      background-color: #fff;
      border-radius: 5px;
      border: none;
      color: white;
      padding: 10px;
      &:focus {
        outline: none !important;
      }
    }

  }
}

.red {
  background-color: rgb(253,97,87);
}

.yellow {
  background-color: rgb(254,289,57);
}

.green {
  background-color: rgb(30,201,59);
}

#title2 {
  color: rgb(144,146,145);
  padding-left: 50px;
  font-size: 18px;
}



</style>