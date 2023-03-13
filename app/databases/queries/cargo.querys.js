const CargoQuerys = {
  getCargo: () => `select * from cargo`,
  getCargoById: (id) => `select * from cargo where cargo.id = ${id}`,
  postCargo: (item) =>
    `insert into cargo (id, id_area, nombre) values(
          ${item.id},
          ${item.id_area},
          '${item.nombre}'
          )`,
  putCargo: (id, item) =>
    `update cargo set  
          id = ${item.id},
          id_area=${item.id_area},
          nombre= '${item.nombre}'

      where cargo.id='${id}'
      `,
  deleteCargo: (id) => `delete from cargo where cargo.id=${id}`,
};
export default CargoQuerys;
