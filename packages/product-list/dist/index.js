// packages/product-list/dist/index.js
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
    list: [{ price: 12.01, name: "晨光鲜牛奶", num: 1, code: "6924686501115" },
    { price: 12.01, name: "晨光鲜牛奶", num: 1, code: "6924686501115" },
    { price: 12.01, name: "晨光鲜牛奶", num: 1, code: "6924686501115" },
     { price: 12.01, name: "晨光鲜牛奶", num: 1, code: "6924686501115" },
     { price: 12.01, name: "晨光鲜牛奶", num: 1, code: "6924686501115" },
     { price: 12.01, name: "晨光鲜牛奶", num: 1, code: "6924686501115" }
     ],
  },




  /**
   * 组件的方法列表
   */
  methods: {
    deleteTap(res) {
      this.setData({ deleteIndex: res.detail.index });
      this.showDialog();

    },
    editTap(res) {
      console.log("dd");
      this.showPopup();

    },
    showPopup() {
      let popupComponent = this.selectComponent('.J_Popup');
      popupComponent && popupComponent.show();
    },
    hidePopup() {
      let popupComponent = this.selectComponent('.J_Popup');
      popupComponent && popupComponent.hide();
    }
  }
})
