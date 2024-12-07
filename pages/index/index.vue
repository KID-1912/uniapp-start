<template>
	<view class="container">
		<view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
		<text class="intro">详见：</text>
		<image src="@/assets/images/c9.png"></image>
		<uni-link :href="href" :text="href"></uni-link>
		<swiper class="swiper" circular>
			<swiper-item>
				<view class="swiper-item uni-bg-red">A</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-green">B</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-blue">C</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";
	const href = ref('https://uniapp.dcloud.io/component/README?id=uniui')

	onMounted(() => {
		console.log(11, a);
	})
</script>

<style lang="scss">
	// @import '@/pages/index/index.scss';
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
	}
	.swiper {
		height: 300rpx;
	}
	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	}
	.swiper-list {
		margin-top: 40rpx;
		margin-bottom: 0;
	}
	.uni-common-mt {
		margin-top: 60rpx;
		position: relative;
	}
	.info {
		position: absolute;
		right: 20rpx;
	}
	.uni-padding-wrap {
		width: 550rpx;
		padding: 0 100rpx;
	}
</style>