<template>
  <div class="iview">
    <h3>{{ title }}</h3>
    <p>{{ msg }}</p>
    <Message></Message>
    <Checkbox></Checkbox>
  </div>
</template>

<script>
import Checkbox from 'iview/src/components/checkbox'
import Message from './Message.vue'

export default {
  name: 'iview',
  data () {
    return {
      title: 'iview demo',
      msg: 'some iview demos...'

    }
  },
  components: {
    Message
  }
}
</script>
