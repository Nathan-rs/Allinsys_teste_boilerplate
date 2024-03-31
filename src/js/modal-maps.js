class ModalMaps {
    constructor(config) {
        this.config = $.extend(true, {
            title: '[Sem título]',
            content: null
        }, config)

        //Elementos HTML
        this.container = new Div('container')
        this.contentHeader = new Div('ch')
        this.header = new Header('fg-hd')
        this.title = new H4('fg-hd-if-ic')
        this.content = new Div('content')
        this.areaMaps = new Div('map')
        this.areaClick = new Div('div-button')
        this.button = new Button('btn-ok')


        //Propriedades dos elementos
        this.title.text(this.getTitle())
        this.button.text(this.getTextButton())
        
        this.header.append(this.title)
        
        this.contentHeader.append(this.header)
        
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



    getTitle() {
        return this.config.title
    }

    getTextButton() {
        return "Confirmar"
    }

    getView() {
        return this.container
    }
}