
function customRender(reactElement, container){
    // const domElement = document.createElement
    // (reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.
    //     href)

    //     domElement.setAttribute('target',reactElement.props.
    //         target)

    //    container.appendChild(domElement) 
}




const reactElement = {

    type:'a',
    props:{
        href: 'https://google.com',
        target:'_blank'
    },
    children: 'click le to visit google'

}



const maincontainer = document.querySelector('#root')

customRender(reactElement,maincontainer)

