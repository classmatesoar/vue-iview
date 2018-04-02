<template>
    <Layout class="layout full-box">
        <Content class="content">
            <Row class="full-height" type="flex" justify="center" align="middle">
                <Col :lg="4" :md="6" :sm="16" :xs="16">
                    <Form class="tac full-height" ref="formInline" :model="formInline" :rules="ruleInline">
                        <FormItem prop="user">
                            <Input type="text" v-model="formInline.user" placeholder="请输入用户名">
                                <Icon type="ios-person-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="formInline.password" placeholder="请输入密码">
                                <Icon type="ios-locked-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" @click="loginIn('formInline')">登陆</Button>
                            <Button type="info">注册</Button>
                            <Button type="text" class="text-color-p">忘记密码</Button>
                        </FormItem>
                    </Form>
                </Col>
            </Row>
        </Content>
        <Footer>
            <app-footer></app-footer>
        </Footer>
    </Layout>
</template>
<script>
import appFooter from "../main/footer";
import {iInput,iCol} from 'iview';
export default {
  components: {
    appFooter,
    iInput,
    iCol
  },
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "密码长度不小于6",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    loginIn(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("登陆成功，欢迎");
          this.$router.push('index')
        } else {
          this.$Message.error("Fail!");
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.layout {
}
</style>
