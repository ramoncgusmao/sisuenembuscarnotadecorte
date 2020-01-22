const axios = require('axios');

module.exports = {
    
    async store(request, response) {
        const { codigocurso } = request.body;

        const codigoCursoArray = codigocurso.split(',').map(texto => texto.trim());
        let lista = new Array();

        const promises = codigoCursoArray.forEach( async codigo => {

        const requisicao = await axios.get(`https://sisu-api.apps.mec.gov.br/api/v1/oferta/${codigo}/modalidades`);
    
        const { oferta, modalidades } = requisicao.data;

        let notadecorte = 
            {
            'campos': oferta.no_campus,
            'siglafaculdade': oferta.sg_ies,
            'curso': oferta.no_curso,
            'turno': oferta.no_turno,
            'nota': modalidades.find(no_concorrencia => no_concorrencia = "Ampla concorrência").nu_nota_corte,
            "siglaTipoVaga": "A0"
            };
        console.log(notadecorte);
        lista.push(notadecorte);
       
    }); 
    
    await Promise.all(promises);
    
        return response.json(lista);
    } 
}