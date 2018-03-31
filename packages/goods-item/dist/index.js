export default Component({
  behaviors: [],
  properties: {
    price: {
      type: Number,
      value: ''
    },
    num: {
      type: Number,
      value: '1'

    },
    name: {
      type: String,
      value: ''

    },
    code: {
      type: String,
      value: ''
    },
    icon: {
      type: String,
      value: 'weixin'
    },
    index:{
      type: Number,
      value: -1
    },
    hidCounter:{
      type:Boolean,
      value:false
    },
    hidEdit: {
      type: Boolean,
      value: true
    }

  },
  data: {
  },
  methods: {
    onChangeNumber(res) {
      res.index=this.data.index;
      res.number=res.detail.number;
      this.triggerEvent('counterChange', res);
    },
    deleteTap:function(){
      var res={};
      res.index=this.data.index;
      this.triggerEvent('deleteTap', res);
    }
  }



});