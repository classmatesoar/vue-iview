<template>
    <Layout class="layout full-box">
        <Content class="content">
            <Form class="tac">
                <FormItem></FormItem>
                <FormItem></FormItem>
                <FormItem>
                    <Button type="success" @click="loginIn">登陆</Button>
                    <Button type="info">注册</Button>
                    <Button type="text" class="text-color-p">忘记密码</Button>
                </FormItem>
            </Form>
        </Content>
        <Footer>
            <app-footer></app-footer>
        </Footer>
    </Layout>
</template>
<script>
import appFooter from "../main/footer";
export default {
  components: {
    appFooter
  },
  methods: {
    loginIn() {
      this.$Message.success("欢迎登陆");
      this.$router.push("index");
    }
  }
};
</script>
<style lang="less" scoped>
.layout {
}
</style>
