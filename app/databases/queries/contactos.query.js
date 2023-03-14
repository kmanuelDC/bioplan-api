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
      contacto_nombre = '${item.contacto_nombre}',
      email = '${item.email}',
      mensaje = '${item.mensaje}'
  
      where contactos.id=${id}
      `,
  
    deleteContactos: (id) =>
      `update  contactos set tiempo_eliminacion = now() where contactos.id=${id}`,
  };
  
  export default ContactosQuerys;