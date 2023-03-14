<<<<<<< HEAD
const ColaboradoresQuerys ={
    getColaboradores : () => `select * from tp_equipos where tiem_elimin is null;`,
    postColaborador : (item) => `INSERT INTO public.tp_equipos (id_equipo, nombre_eq, tiem_creac, tiem_update, tiem_elimin, id_modelo_cpu, id_flota_sec, ip_equipo_dir, conexion, numero_serie, id_cs, empty_tonnes) 
                                 VALUES (${item.id},'${item.nombre}','${item.creacion}',${item.update},${item.eliminacion},'${item.modelo_cpu}','${item.flota_sec}','${item.ip}',${item.conexion},${item.serie},'${item.id_cs}',${item.empty})`,
}
=======
const ColaboradoresQuerys = {
  getColaboradores: () => `select * from colaboradores;`,
  getColaboradoById: (id) =>
    `select * from colaboradores where colaboradores.id = ${id}`,
  postColaborador: (colaborador) => `INSERT INTO colaboradores (
      id, id_cargo, nombres, ap_paterno, ap_materno, dni, carnet_ext, direccion, fecha)
      VALUES (${colaborador.id},
      ${colaborador.id_cargo},
      '${colaborador.nombres}',
      '${colaborador.ap_paterno}',
      '${colaborador.ap_materno}',
      '${colaborador.dni}',
      '${colaborador.carnet_ext}',
      '${colaborador.direccion}',
      '${colaborador.fecha}'
    );`,
>>>>>>> 96223513ecfdc9233cb659ccf14464db6129ef90

  putColaboradorById: (id, colaborador) => `UPDATE colaboradores SET 
        id=${colaborador.id},
        id_cargo=${colaborador.id_cargo},
        nombres='${colaborador.nombres}',
        ap_paterno='${colaborador.ap_paterno}',
        ap_materno='${colaborador.ap_materno}',
        dni='${colaborador.dni}',
        carnet_ext='${colaborador.carnet_ext}',
        direccion='${colaborador.direccion}',
        fecha='${colaborador.fecha}'
        
        WHERE colaboradores.id = ${id}`,

  deleteColaboradorById: (id) =>
    `DELETE FROM colaboradores WHERE colaboradores.id = ${id}`,
};

export default ColaboradoresQuerys;
