<template>
	<div class="panel panel-default">
		<div class="panel-heading">
			<nav>
				<ul class="list-inline">
					<li>
						<router-link :to="{name: 'home'}">Home</router-link>
					</li>

					<li>
						<router-link :to="{name: 'users'}">Users List</router-link>
					</li>

					<li class="pull-right" v-if="!$auth.check()">
						<router-link :to="{name: 'login'}">Login</router-link>
					</li>

					<li class="pull-right" v-if="!$auth.check()">
						<router-link :to="{name: 'register'}">Register</router-link>
					</li>

					<li class="pull-right" v-if="$auth.check()">
						<a href="#" @click.prevent="$auth.logout()">Logout</a>
					</li>
				</ul>
			</nav>
		</div>

		<div class="panel-body" v-if="$auth.ready()">
			<router-view></router-view>
		</div>
	</div>
</template>

