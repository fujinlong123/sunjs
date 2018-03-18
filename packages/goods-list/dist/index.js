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
    goodsList: []
  },


  /**
   * 组件的方法列表
   */
  methods: {
    getSumPrice() {
      var sumPrice=0;
      for (var i = 0; i < this.data.goodsList.length;i++){
        sumPrice += (this.data.goodsList[i].num * this.data.goodsList[i].price);
      }
     
      return Math.floor(sumPrice * 100) / 100 ;
    },
    getGoodsCount() {
      var goodsCount = 0;
      for (var i = 0; i < this.data.goodsList.length; i++) {
        goodsCount += this.data.goodsList[i].num ;
      }
      return goodsCount;
    },
    getListLength() {
      return this.data.goodsList.length;
    },
    addItem(item){
      this.data.goodsList.push(item);
      this.setData({ "goodsList": this.data.goodsList });
      this.setData({ scrollTop: 100000 });
      this.triggerEvent('goodsListChange');
    },
    deleteItem(index) {
      this.data.goodsList.push(item);
      this.setData({ "goodsList": this.data.goodsList });
      this.setData({ scrollTop: 100000 });
      this.triggerEvent('goodsListChange');
    },
    counterChange(res) {
      var key = "goodsList[" + res.detail.index + "].num";
      this.setData({ [key]: res.detail.number });
      this.triggerEvent('goodsListChange');
    }

  }
})
