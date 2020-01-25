const axios = require('axios');

module.exports = {
    
    async index(request, response) {
        const { curso } = request.query;
        console.log(curso);
        
        let lista = new Array();
        // 5, 2217, 41, 3, 1689
         await axios.get(`https://sisualuno-api.apps.mec.gov.br/api/v1/oferta/curso/${curso}`).then( resp => {

         
        
        const array = resp.data;
        array.map( async curso_faculdade  => {
            
            
            
            
            
            let curso_faculdade_json = 
            {
                'faculdade':curso_faculdade.sg_ies,
                'campus': curso_faculdade.no_campus,
                'municipio':curso_faculdade.no_municipio_campus,
                'curso':curso_faculdade.no_curso,
                'turno': curso_faculdade.no_turno,
                'vagas': [{'quantidade':7,'tipoVaga':'ampla concorrencia'}],
                'rp':curso_faculdade.nu_peso_r,
                'rn':curso_faculdade.nu_nmin_r,
                'lp':curso_faculdade.nu_peso_l,
                'ln':curso_faculdade.nu_nmin_l,
                'mp':curso_faculdade.nu_peso_m,
                'mn':curso_faculdade.nu_nmin_m,
                'hp':curso_faculdade.nu_peso_ch,
                'hn':curso_faculdade.nu_nmin_ch,
                'np':curso_faculdade.nu_peso_cn,
                'nn':curso_faculdade.curso_faculdade.nu_nmin_cn,
                'mediaMinima':curso_faculdade.nu_media_minima,
                'quantidadevagas':parseInt(curso_faculdade.qt_vagas_sem1) +  parseInt(curso_faculdade.qt_vagas_sem2)
            };
            console.log(array.length);
           lista.push(curso_faculdade_json);
            
       });
        
    });
        
      
        
        return response.json("oi");
    } 
}