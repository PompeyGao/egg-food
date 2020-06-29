"use strict";
const Service = require("egg").Service;

class RestaurantService extends Service {
  async find(rname) {
    const sqlByName = "select * from tb_restaurants where restaurant_name like ?";
    const restaurant = await this.app.mysql.query(sqlByName, [
      "%" + rname + "%"
    ]);
    // const restaurant = await this.app.mysql.select("tb_restaurants", {
    //   where: {restaurant_name: rname}
    // });
    // const results = await this.app.mysql.select("tb_restaurants");
    // this.ctx.logger.info(2222, JSON.stringify(restaurant));
    return JSON.stringify(restaurant);
    // return {
    //   id: restaurant.pk_id,
    //   restaurant_name: restaurant.restaurant_name,
    //   location: restaurant.location,
    //   type: restaurant.dish_type,
    //   price: restaurant.price,
    // };
  }
}

module.exports = RestaurantService;
