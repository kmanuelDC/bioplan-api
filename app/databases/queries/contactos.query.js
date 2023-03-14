const ContactosQuerys = {
    getContactos: () => `select * from contactos`,
    getContactosById: (id) =>
      `select * from contactos where contactos.id = ${id} `,
    postContactos: (item) =>
      `insert into contactos(id,contacto_nombre,email,mensaje) values 
      (
          ${item.id},
          '${item.contacto_nombre}',
          '${item.email}',
          '${item.mensaje}'
      )`,
  
    putContactos: (id, item) =>
      `update contactos set 
      id = '${item.id}',
      contacto_nombre = '${item.contacto_nombre}',
      email = '${item.email}',
      mensaje = '${item.mensaje}'
  
      where contactos.id=${id}
      `,
  
    deleteContactos: (id) =>
      `delete from contactos where contactos.id=${id}`,
  };
  
  export default ContactosQuerys;