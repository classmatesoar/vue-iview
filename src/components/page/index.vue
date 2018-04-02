<template>
   <Layout>
        <Header>Header</Header>
        <Layout>
            <Sider hide-trigger>Sider</Sider>
            <Content>
                <router-view></router-view>
            </Content>
        </Layout>
        <Footer>
            <app-footer></app-footer>
        </Footer>
    </Layout>
</template>
<script>
import appFooter from '../main/footer'
export default {
  components:{
      appFooter
  }
}
</script>
<style lang="less" scoped>

</style>
