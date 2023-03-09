const ColaboradoresQuerys ={
    getColaboradores : () => `select * from tp_equipos where tiem_elimin is null;`,
    postColaborador : (item) => `INSERT INTO public.tp_equipos (id_equipo, nombre_eq, tiem_creac, tiem_update, tiem_elimin, id_modelo_cpu, id_flota_sec, ip_equipo_dir, conexion, numero_serie, id_cs, empty_tonnes) 
                                 VALUES (${item.id},'${item.nombre}','${item.creacion}',${item.update},${item.eliminacion},'${item.modelo_cpu}','${item.flota_sec}','${item.ip}',${item.conexion},${item.serie},'${item.id_cs}',${item.empty})`,
}

export default ColaboradoresQuerys;