const axios = require('axios');

module.exports = {
    
    async store(request, response) {
        const { codigocurso } = request.body;

        const codigoCursoArray = codigocurso.split(',').map(texto => texto.trim());
        let lista = new Array();

        const result = codigoCursoArray.map( async codigo  => {

        const requisicao = await axios.get(`https://sisu-api.apps.mec.gov.br/api/v1/oferta/${codigo}/modalidades`);
    

        const { oferta, modalidades } = requisicao.data;

        let notadecorte = 
            {
            'campus': oferta.no_campus,
            'siglaFaculdade': oferta.sg_ies,
            'curso': oferta.no_curso,
            'turno': oferta.no_turno,
            'notaDeCorte': modalidades.find(no_concorrencia => no_concorrencia = "Ampla concorrência").nu_nota_corte,
            'siglaTipoVaga': 'A0',
            'dia': 3
            };
        console.log(notadecorte);
        lista.push(notadecorte);
       
    }); 

    await Promise.all(result)
    
        return response.json(lista);
    } 
}