// packages/goods-list/dist/goods-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    scrollTop:0,
    list: [],
    deleteIndex:-1
  },


  /**
   * 组件的方法列表
   */
  methods: {
    getSumPrice() {
      var sumPrice=0;
      for (var i = 0; i < this.data.list.length;i++){
        sumPrice += (this.data.list[i].num * this.data.list[i].price);
      }
     
      return Math.floor(sumPrice * 100) / 100 ;
    },
    getGoodsCount() {
      var goodsCount = 0;
      for (var i = 0; i < this.data.list.length; i++) {
        goodsCount += this.data.list[i].num ;
      }
      return goodsCount;
    },
    getListLength() {
      return this.data.list.length;
    },
    addItem(item){
      this.data.list.push(item);
      this.setData({ "list": this.data.list });
      this.setData({ scrollTop: 100000 });
      this.triggerEvent('goodsListChange');
    },
    counterChange(res) {
      var key = "list[" + res.detail.index + "].num";
      this.setData({ [key]: res.detail.number });
      this.triggerEvent('goodsListChange');
    },
    showDialog() {
      let dialogComponent = this.selectComponent('.wxc-dialog');
      dialogComponent && dialogComponent.show();
    },
    hideDialog() {
      let dialogComponent = this.selectComponent('.wxc-dialog');
      dialogComponent && dialogComponent.hide();
    },
    onConfirm() {
      this.data.list.splice(this.data.deleteIndex, 1);
      this.setData({ "list": this.data.list });
      this.triggerEvent('goodsListChange');
      this.hideDialog();
    },
    onCancel() {
      this.hideDialog();
    },
    deleteTap(res){
      this.setData({ deleteIndex: res.detail.index});
      this.showDialog();
      
    }

  }
})
