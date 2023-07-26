class ProductManager{
    constructor(){
        this.products = []
    }

    getProducts = ()=> {
        return this.products
    }

    generadorIds = () => {
        const contador = this.products.length
        if (contador==0) {
            return 1
        }else{
            return (this.products[contador-1].id)+1
        }
    }

    addProduct = (titulo, descripcion, precio, imagen, code, stock) => {
        if (!titulo || !descripcion || !precio || !imagen || !code || !stock) {
            console.error("Ingrese todos los datos del producto")
            return
        } else{
            const filtrarproducto = this.products.find(item => item.code==code)
            const id = this.generadorIds();
            if (!filtrarproducto) {
                const newproduct = {
                    id, titulo, descripcion, precio, imagen, code, stock
                }
                return this.products.push(newproduct)
            }else{
                console.error("El codigo ingresado ya existe")
            }
        }
    }

    getProductsById = (id) => {
        const productoencontrado = this.products.find (item => item.id==id)
        if (!productoencontrado) {
            console.log("no se encuentra")
            return
        }else{
            return productoencontrado
        }
    }
}

const productmanager = new ProductManager ();
productmanager.addProduct("leche", "descripcion1", 60, "imagen", "codigo1", 40)
productmanager.addProduct("tomate", "descripcion2", 30, "imagen", "codigo2", 30)
productmanager.addProduct("arroz", "descripcion3", 64, "imagen", "codigo3", 20)
productmanager.addProduct("lechuga", "descripcion4", 90, "imagen", "codigo4", 40)
productmanager.addProduct("pepinos", "descripcion5", 50, "imagen", "codigo5", 10)
productmanager.addProduct("galletitas", "descripcion6", 150, "imagen", "codigo1", 50)
productmanager.addProduct("cebolla", "descripcion7", 50, "imagen", "codigo7", 5)

console.log (productmanager.getProducts())
console.log(productmanager.getProductsById(4))