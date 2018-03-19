const Login 	 = { template: "<div>login</div>" }
const Register = { template: "<div>register</div>" }
const Main     = { template: "<div>main</div>" }

const router = [
	{ path: 'login'		, component: Login		},
	{ path: 'register', component: Register	},
	{ path: 'main'		, component: Main			}
]

window.onload = function(){
	const app = new Vue({router}).$mount('#app');
}
