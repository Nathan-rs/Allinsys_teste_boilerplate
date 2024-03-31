const body = $('body');

const fieldGroup = new FieldGroup({
   icon: 'menu',
   title: "Exemplo de jkzslfhdz",
   description: "Descrição passada pelo desenvolvedor",
})

const otherFieldGroup = new FieldGroup({
   title: "Filho interno",
   description: "Ocupando espaço",
   open: false,
   collapse: false
})

const fildModalMaps = new FieldGroup({
   title: "Modal Google Maps",
   description: "Modal para obter latitude e longitude",
   open: true,
   collapse: false
})

const modalMaps = new ModalMaps({
   title: "Modal de pesquisa"
})

fildModalMaps.appendToContent(modalMaps.getView())

// console.log(modalMaps.getView())

const contentList = [otherFieldGroup.getView(), fildModalMaps.getView()]


fieldGroup.appendToContent(...contentList)
body.append(fieldGroup.getView()) 