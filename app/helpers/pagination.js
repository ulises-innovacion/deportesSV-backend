module.exports.pagination =  data => {
    const total_page = Math.ceil(data.count / data.per_page);
    const total_perpage = data.per_page;
    const current_page = data.page;
    const previous_page = current_page == 1 ? null : current_page -1;
    const next_page = current_page == total_page ? null: current_page +1;
    
    const result = {
        data: data.data,
        pagination: {
            cantidad_registros: data.count,
            total_porpagina: total_perpage,
            total_depagina: total_page,
            pagina_actual: current_page,
            pagina_siguiente: next_page,
            pagina_anterior: previous_page
        }
    };

    return result;
}