<template>
    <h3>正在跳转到授权界面....</h3>
</template>
<script>
export default {
    created(){
        window.location.href=this.$store.state.web_share+'/auth/wechat'
    },
   components:{
       
   }
}
</script>

