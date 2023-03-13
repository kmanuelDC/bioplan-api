const AreaQuerys = {
  getCargo: () => `select * from area`,
  getAreaById: (id) => `select * from area where area.id = ${id}`,
  postArea: (item) =>
    `insert into area (id, nombre) values(
            ${item.id},
            '${item.nombre}'
            )`,
  putArea: (id, item) =>
    `update area set  
            id = ${item.id},
            nombre= '${item.nombre}'
  
        where area.id='${id}'
        `,
  deleteArea: (id) => `delete from area where area.id=${id}`,
};
export default AreaQuerys;
