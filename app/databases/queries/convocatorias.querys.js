const ConvocatoriasQuerys = {
  getConvocatorias: () => `select * from convocatorias`,
  getConvocatoriasById: (id) =>
    `select * from convocatorias where convocatorias.id = ${id} `,
  postConvocatorias: (item) =>
    `insert into convocatorias(id,convocatoria_nombre,convocatoria_detalle,ciudad) values 
    (
        ${item.id},
        '${item.convocatoria_nombre}',
        '${item.convocatoria_detalle}',
        '${item.ciudad}'
    )`,

  putConvocatorias: (id, item) =>
    `update convocatorias set 
    id = '${item.id}',
    convocatoria_nombre = '${item.convocatoria_nombre}',
    convocatoria_detalle = '${item.convocatoria_detalle}',
    ciudad = '${item.ciudad}'

    where convocatorias.id=${id}
    `,

  deleteConvocatorias: (id) =>
    `delete from convocatorias where convocatorias.id=${id}`,
};

export default ConvocatoriasQuerys;
