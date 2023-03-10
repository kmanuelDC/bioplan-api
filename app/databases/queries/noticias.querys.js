const NoticiasQuerys = {
  getNoticias: () => `select * from noticias;`,
  getNoticiasById: (id) => `select * from noticias where noticias.id = ${id}`,
  postNoticias: (
    item
  ) => `insert into noticias(id, titulo, autor,noticias_detalle) values 
        (${item.id},
        '${item.titulo}',
        '${item.autor}',
        '${item.noticias_detalle}'
      );`,

  putNoticiasById: (id, item) => `UPDATE noticias SET 
          id=${item.id},
          titulo='${item.titulo}',
          autor='${item.autor}',
          noticias_detalle='${item.noticias_detalle}'
          
          
          WHERE noticias.id = ${id}`,

  deleteNoticiasById: (id) => `DELETE FROM noticias WHERE noticias.id = ${id}`,
};

export default NoticiasQuerys;
