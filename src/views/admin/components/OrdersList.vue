<script>
import axios from "axios";
export default {
  name: "GetInvetory",
  data() {
    return {
      orders: [],
      p_order: [],
      details: false
    };
  },
  mounted() {
    axios
      .get(import.meta.env.VITE_API_URL + "/orders/getall")
      .then((response) => (this.orders = response.data.r_orders));
  },
  methods: {
    openitemdetails(orderid){
      axios
        .get(import.meta.env.VITE_API_URL + "/orders/getbyid" + orderid)
        .then((response) => (this.p_order = response.data));
      this.details = true
    }
  }
};
</script>

<template>
  <section class="listprod">
    <table cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th>Dátum/rendeles szam</th>
          <th>Állapot</th>
          <th>Megrendelő</th>
          <th>Termék(ek)</th>
          <th>Összeg</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item._id">
          <td>{{ item.createdtime.split("T")[0] }} <br> {{ item.orderid }}</td>
          <td></td>
          <td>{{ item.u_firstname  + " " + item.u_name}} <br> {{ item.u_email }}  </td>
          <td><h6 class="itemname" v-for="(cartitem,index) in item.cart">{{ cartitem.name }}</h6></td>
          <td>{{ item.cart.reduce(
        (sum, cartitem) => sum + cartitem.price * cartitem.quantity,
        0
      ) }} Ft</td>
          <td></td>
          <td @click="openitemdetails(item._id)"><ion-icon name="eye-outline"></ion-icon></td>
        </tr>
      </tbody>
    </table>
  </section>
  <section class="details_box">
    <div class="d_container">

    </div>
  </section>
</template>

<style scoped>
.details_box{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}
.details_box .d_container{
  width: 70%;
  background-color: #ffffff;
  border-radius: 10px;
}
.itemname{
  line-height: 0px;
}
.listprod {
  position: relative;
  top: 0;
  width: 100%;
  top: -5rem;
}
table {
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 5px 5px 13px #bdbdbd, -5px -5px 13px #ffffff;
  width: 100%;
  padding: 0.5rem;
  border: none;
}
thead {
  background-color: lightsalmon;
  position: sticky;
  top: 0;
}
tbody {
}
tr {
  height: 30px;
}
th,
td {
  text-align: center;
  border-bottom: 1px solid gray;
}
</style>
