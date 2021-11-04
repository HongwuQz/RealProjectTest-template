<template>
  <div class="list-layout-wrapper">
    <header>
      <slot name="header" />
    </header>
    <main>
      <slot name="content" />
    </main>
  </div>
</template>

<style lang="scss" scoped>
    .list-layout-wrapper{
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        header{
            width: 100%;
            margin-bottom: 20px;
        }
        main{
            width: 100%;
        }
    }
</style>
