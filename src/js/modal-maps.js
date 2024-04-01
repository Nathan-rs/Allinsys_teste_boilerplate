class ModalMaps {
    constructor(config) {
        this.config = $.extend(true, {
            title: '[Sem título]',
        }, config)

        
        //Elementos HTML
        this.container = new Div('container')
        this.contentHeader = new Div('header-title')
        this.title = new H4('title')
        this.content = new Div('content')
        this.areaMaps = new Div('map')
        this.areaClick = new Div('div-button')
        this.button = new Button('btn-ok')

        //Propriedades dos elementos
        this.title.text(this.getTitle())
        this.button.text(this.getTextButton())
        
        this.contentHeader.append(this.title)
        
        this.content.append(this.areaMaps)

        this.areaClick.append(this.button)

        this.container.append(
            this.contentHeader, 
            this.content, 
            this.areaClick)
    }



    /**
     * div.container
     *  div.header
     *      header
     *          h4 h4
     *      header
     *  div.content
     *      div.map
     *  div
     * 
     *  div.button
     *      button button
     *  div
     * div
     */


    getInitMap() {
        // if(!this.getContent()) {
        //     // error = this.areaMaps.addClass('erro-content-map')
        //     const titleErro = new H1('erro-show-map')
        //     titleErro.text(this.getMsgError())
        //     this.areaMaps.append(titleErro)
        //     this.areaClick.css('display', 'none')
        //     return this.areaMaps
        // }

        this.getCreateMap().then((map) => {
            console.log(map)
            if(!map) {
                this.getErrorMensage()
            }
        })
    }

    async getCreateMap() {
        try {
            const { Map } = await google.maps.importLibrary("maps")
            map = new Map(this.areaMaps[0], {
                center: {
                    lat: -23.55052,
                    lng: -46.633308
                },
                zoom: 12
            })
            return map
        } catch (error) {
            console.error('Erro ao criar o mapa', error)
            this.config.map = null
            return null
        }
    }

    getApiKey() {
        return "AIzaSyDxMX7gWV7_iEffKz9TwPnKWGuVeNMyYJM"
    }

    getErrorMensage() {
        const titleErro = new H1('erro-show-map')
        titleErro.text("Não foi possivel exibir o mapa")
        this.areaMaps.append(titleErro)
        this.areaClick.css('display', 'none')
    }

    getContent() {
        return this.areaMaps.children().length > 0
    }

    getTitle() {
        return this.config.title
    }

    getTextButton() {
        return "Confirmar"
    }

    getView() {
        this.getInitMap()
        return this.container
    }
}