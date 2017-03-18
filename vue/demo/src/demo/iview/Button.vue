<template>
  <div class="ivdemo-button">
    <h4>基本</h4>
    <br><br>
    <Button-group>
        <i-button>取消</i-button>
        <i-button type="primary">确定</i-button>
    </Button-group>
    <Button-group>
        <i-button disabled>昨日</i-button>
        <i-button disabled>今日</i-button>
        <i-button disabled>明日</i-button>
    </Button-group>
    <Button-group>
        <i-button type="primary">L</i-button>
        <i-button>M</i-button>
        <i-button type="ghost">M</i-button>
        <i-button type="dashed">R</i-button>
    </Button-group>
    <br><br>
    <h4>配合图标</h4>
    <br><br>
    <Button-group>
        <i-button type="primary">
            <Icon type="chevron-left"></Icon>
            前进
        </i-button>
        <i-button type="primary">
            后退
            <Icon type="chevron-right"></Icon>
        </i-button>
    </Button-group>
    <Button-group>
        <i-button type="primary" icon="ios-skipbackward"></i-button>
        <i-button type="primary" icon="ios-skipforward"></i-button>
    </Button-group>
    <Button-group>
        <i-button type="ghost" icon="ios-color-wand-outline"></i-button>
        <i-button type="ghost" icon="ios-sunny-outline"></i-button>
        <i-button type="ghost" icon="ios-crop"></i-button>
        <i-button type="ghost" icon="ios-color-filter-outline"></i-button>
    </Button-group>
    <br><br>
    <h4>圆角</h4>
    <br><br>
    <Button-group shape="circle">
        <i-button type="primary">
            <Icon type="chevron-left"></Icon>
            前进
        </i-button>
        <i-button type="primary">
            后退
            <Icon type="chevron-right"></Icon>
        </i-button>
    </Button-group>
    <Button-group shape="circle">
        <i-button type="primary" icon="ios-skipbackward"></i-button>
        <i-button type="primary" icon="ios-skipforward"></i-button>
    </Button-group>
    <Button-group shape="circle">
        <i-button type="ghost" icon="ios-color-wand-outline"></i-button>
        <i-button type="ghost" icon="ios-sunny-outline"></i-button>
        <i-button type="ghost" icon="ios-crop"></i-button>
        <i-button type="ghost" icon="ios-color-filter-outline"></i-button>
    </Button-group>
    <br><br>
    <h4>尺寸</h4>
    <br><br>
    <Button-group size="large">
        <i-button type="ghost">Large</i-button>
        <i-button type="ghost">Large</i-button>
    </Button-group>
    <Button-group>
        <i-button type="ghost">Default</i-button>
        <i-button type="ghost">Default</i-button>
    </Button-group>
    <Button-group size="small">
        <i-button type="ghost">Small</i-button>
        <i-button type="ghost">Small</i-button>
    </Button-group>
    <br><br>
    <Button-group size="large" shape="circle">
        <i-button type="ghost">Large</i-button>
        <i-button type="ghost">Large</i-button>
    </Button-group>
    <Button-group shape="circle">
        <i-button type="ghost">Default</i-button>
        <i-button type="ghost">Default</i-button>
    </Button-group>
    <Button-group size="small" shape="circle">
        <i-button type="ghost">Small</i-button>
        <i-button type="ghost">Small</i-button>
    </Button-group>
  </div>
</template>
<script>
    export default {

    }
</script>
