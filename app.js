class Product {
    constructor(name, price, year) {
        this.name = name
        this.price = price
        this.year = year
    }
}

class UI {
    addProduct(product){
        const $productList = document.getElementById('product-list')
        const element = document.createElement('div')
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Product Name: </strong> ${product.name}
                <strong>Product Price: </strong> ${product.price}
                <strong>Product Year: </strong> ${product.year}
                <a href="#" class="btn btn-danger" name="delete">Delete</a>
            </div>
        </div>
        `
        $productList.appendChild(element)
        
    }

    resertForm(){
        document.getElementById('product-form').reset()
    }

    deleteProduct(element){
        if (element.name === 'delete') {
            //console.log(element.parentElement)
            //console.log(element.parentElement.parentElement.parentElement)
            element.parentElement.parentElement.parentElement.remove()  
        }
        this.showMessage('Product Deleted Successfull','info')
    }

    showMessage(message, CSSclass){
        const div = document.createElement('div')
        //agregar clases
        div.className = `alert alert-${CSSclass} mt-4`
        div.appendChild(document.createTextNode(message))
        //Mostrando en el DOM
        const $container = document.querySelector('.container')
        const $app = document.querySelector('#app')
        $container.insertBefore(div, $app)
        setTimeout(function(){
            document.querySelector('.alert').remove()
            },3000)
    }
}

// DOM event

document.getElementById('product-form')
    .addEventListener('submit', 
    (e) => {
        const $name = document.getElementById('name').value
        const $price = document.getElementById('price').value
        const $year = document.getElementById('year').value
        
       console.log ($name, $price, $year)
       
       const product = new Product($name, $price, $year)

       const ui = new UI()
       if ( $name === '' || $price === '' || $year === ''){
            return ui.showMessage('Completed Fields Please','danger')
       } 

       ui.addProduct(product)
       ui.resertForm()
       ui.showMessage('Product Added Successfull','success')
       e.preventDefault()
    })

document.getElementById('product-list')
    .addEventListener('click',(e) => {
        //console.log(e.target)
        const ui = new UI()
        ui.deleteProduct(e.target)
    })