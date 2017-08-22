<template>
	<div class="login-container">
		<div class="operation-container">
			<div class="header operation-header">
				登录
			</div>
			<div class="operation-body">
				<div class="form-group username">
					<input type="text" class="form-control" v-model="userName" v-bind:class='{"has-content": userName}'>
					<label> 用户名/电子邮箱/手机号</label>
                	<i class="form-group__bar"></i>
				</div>
				<div class="form-group password">
					<a>
						<input type="password" class="form-control" v-model="userPsw" v-bind:class='{"has-content": userPsw}'>
						<label>请输入您的密码</label>
                    	<i class="form-group__bar"></i>
					</a>
				</div>
			</div>
			<div class="footer operation-footer">
				<router-link to="/register">还没有账号？立即注册</router-link>
				<router-link to="/forget">忘记密码</router-link>
			</div>
			<div class="btn-wrapper">
				<button class="btn btn-circle btn-dark">
					登录
				</button>
			</div>
			<div class="remember">
				<el-checkbox v-model="checked">下次自动登录</el-checkbox>
			</div>
			<div class="third-party">
				<router-link to="/three-party">第三方登录</router-link>
				<router-link to="/remeber">记住密码</router-link>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  data () {
    return {
      userName: null,
      userPsw: null,
      checked: false
    }
  }
}
</script>
<style lang="scss" scoped>
	.login-container {
		height: 100%;
		width: 100%;
		overflow: auto;
		background: #22313a;
		position: fixed;
		text-align: center;
		input {
			width: 85%;
			border-bottom: 1px solid rgba(255,255,255,.25);
		}
		label {
			font-size: 12px;
			position: absolute;
			left: 0;
			width: 100%;
			z-index: -1;
			top: 5px;
			color: rgba(255,255,255,.25);
		}
		.form-group {
			position: relative;
			.form-group__bar {
				position: absolute;
				bottom: 0;
				left: 50%;
				width: 0;
				height: 2px;
				background-color: #8a9ba1;
				transition: 0.4s;
			}
		}
		&:before {
			content: '';
			height: 25%;
			width: 100%;
			background: #1e2a31;
			min-height: 100px;
			position: fixed;
			left: 0;
			z-index: -3;
		}
		.operation-container {
			max-width: 320px;
			height: 350px;
			position: relative;
			top: 15%;
			width: 100%;
			margin: 0 auto;
			border-radius: 2px;
			background: #2b3942;
			z-index: -2;
			.operation-header {
				height: 16.8%;
				line-height: 60px;
				background: #22313a;
			}
			.operation-body {
				input:focus{
					&~label {
						top: -20px;
					}
					&~.form-group__bar {
						width: 85%;
						left: 7.5%;
					}					
				}
				input {
					&.has-content {
						&~label {
							top: -20px;
						}
					}
				}
			}
			.operation-footer {
				display: flex;
				justify-content: space-around;
			}
			.btn-wrapper {
				margin: 15px 0;
			} 
		}
	}
</style>