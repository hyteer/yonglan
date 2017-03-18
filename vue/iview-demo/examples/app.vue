<style lang="less">
    @import "../src/styles/index.less";
</style>
<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item {
        padding:0
    }
    .ivu-menu-item a{
        display:block;
        padding: 14px 28px 14px 43px;
        color:#fff;
    }
</style>
<template>
    <div class="layout">
        <Row type="flex">
            <i-col span="5" class="layout-menu-left">
                <Menu active-key="sb" theme="dark" width="auto">
                    <div class="layout-logo-left"></div>
                    <Submenu key="sb" name="sb">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            导航一
                        </template>
                        <Menu-item name="ceshi"><router-link to="/ceshi">测试页面</router-link></Menu-item>
                        <Menu-item name="37"><router-link to="/table">Table</router-link></Menu-item>
                        <Menu-item name="38"><router-link to="/loading-bar">LoadingBar</router-link></Menu-item>
                        <Menu-item name="39"><router-link to="/modal">Modal</router-link></Menu-item>
                        <Menu-item name="35"><router-link to="/date">Date</router-link></Menu-item>
                        <Menu-item name="36"><router-link to="/form">Form</router-link></Menu-item>
                        <Menu-item name="40"><router-link to="/message">Message</router-link></Menu-item>
                        <Menu-item name="41"><router-link to="/notice">Notice</router-link></Menu-item>
                        <Menu-item name="31"><router-link to="/select">Select</router-link></Menu-item>
                        <Menu-item name="1"><router-link to="/affix">Affix</router-link></Menu-item>
                        <Menu-item name="2"><router-link to="/grid">Grid</router-link></Menu-item>
                        <Menu-item name="3"><router-link to="/button">Button</router-link></Menu-item>
                        <Menu-item name="4"><router-link to="/input">Input</router-link></Menu-item>
                        <Menu-item name="5"><router-link to="/radio">Radio</router-link></Menu-item>
                        <Menu-item name="6"><router-link to="/checkbox">Checkbox</router-link></Menu-item>
                        <Menu-item name="7"><router-link to="/steps">Steps</router-link></Menu-item>
                        <Menu-item name="8"><router-link to="/timeline">Timeline</router-link></Menu-item>
                        <Menu-item name="9"><router-link to="/switch">Switch</router-link></Menu-item>
                        <Menu-item name="10"><router-link to="/alert">Alert</router-link></Menu-item>
                        <Menu-item name="11"><router-link to="/badge">Badge</router-link></Menu-item>
                        <Menu-item name="12"><router-link to="/tag">Tag</router-link></Menu-item>
                        <Menu-item name="13"><router-link to="/input-number">InputNumber</router-link></Menu-item>
                        <Menu-item name="14"><router-link to="/progress">Progress</router-link></Menu-item>
                        <Menu-item name="15"><router-link to="/upload">Upload</router-link></Menu-item>
                        <Menu-item name="16"><router-link to="/collapse">Collapse</router-link></Menu-item>
                        <Menu-item name="17"><router-link to="/carousel">Carousel</router-link></Menu-item>
                        <Menu-item name="18"><router-link to="/card">Card</router-link></Menu-item>
                        <Menu-item name="19"><router-link to="/tree">Tree</router-link></Menu-item>
                        <Menu-item name="20"><router-link to="/rate">Rate</router-link></Menu-item>
                        <Menu-item name="21"><router-link to="/circle">Circle</router-link></Menu-item>
                        <Menu-item name="22"><router-link to="/tabs">Tabs</router-link></Menu-item>
                        <Menu-item name="23"><router-link to="/tooltip">Tooltip</router-link></Menu-item>
                        <Menu-item name="24"><router-link to="/poptip">Poptip</router-link></Menu-item>
                        <Menu-item name="25"><router-link to="/slider">Slider</router-link></Menu-item>
                        <Menu-item name="26"><router-link to="/dropdown">Dropdown</router-link></Menu-item>
                        <Menu-item name="27"><router-link to="/breadcrumb">Breadcrumb</router-link></Menu-item>
                        <Menu-item name="28"><router-link to="/menu">Menu</router-link></Menu-item>
                        <Menu-item name="29"><router-link to="/spin">Spin</router-link></Menu-item>
                        <Menu-item name="30"><router-link to="/cascader">Cascader</router-link></Menu-item>
                        <Menu-item name="32"><router-link to="/backtop">Backtop</router-link></Menu-item>
                        <Menu-item name="33"><router-link to="/page">Page</router-link></Menu-item>
                        <Menu-item name="34"><router-link to="/transfer">Transfer</router-link></Menu-item>
                    </Submenu>
                </Menu>
            </i-col>
            <i-col span="19">
                <div class="layout-header"></div>
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb-item href="#">首页</Breadcrumb-item>
                        <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                        <Breadcrumb-item>某应用</Breadcrumb-item>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">
                        <router-view></router-view>
                    </div>
                </div>
                <div class="layout-copy">
                    2011-2016 &copy; TalkingData
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
    export default {
        data: function() {
            return {

            }
        },
        mounted: function() {

        },
        beforeDestroy: function() {

        },
        methods: {

        }
    }
</script>

