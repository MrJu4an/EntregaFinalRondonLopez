const products = [
    {
        "id": 1,
        "idCategoria": "tarjetas-video",
        "nombre": "NVIDIA-3060",
        "marca": "EVGA",
        "modelo": "3060",
        "precio": 3500000,
        "stock": 30,
        "img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-react-39655.appspot.com/o/nvidia-3060.jpg?alt=media&token=5ecfa9b1-4200-4cbb-a18a-08daf043b5cf"
    },
    {
        "id": 2,
        "idCategoria": "procesadores",
        "nombre": "Ryzen 5 5600",
        "marca": "AMD",
        "modelo": "5600",
        "precio": 700000,
        "stock": 30,
        "img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-react-39655.appspot.com/o/ryzen5-5600.jpg?alt=media&token=58812577-0c22-4914-89c6-69dadd18e0db"
    },
    {
        "id": 3,
        "idCategoria": "memorias-ram",
        "nombre": "RAM 16GB / 2x8 ",
        "marca": "TForce",
        "modelo": "DRR4",
        "precio": 400000,
        "stock": 30,
        "img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-react-39655.appspot.com/o/ram-tforce.jpg?alt=media&token=c2eb126a-5d73-4931-b964-d46fff4457e4"
    },
    {
        "id": 4,
        "idCategoria": "memorias-ram",
        "nombre": "RAM 16GB / 2x8 ",
        "marca": "Corsair",
        "modelo": "VENGEANCE",
        "precio": 380000,
        "stock": 20,
        "img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-react-39655.appspot.com/o/ram-corsair-vengeance.jpg?alt=media&token=8fcdd96f-888d-4148-9daf-69a228b9389e"
    },
    {
        "id": 5,
        "idCategoria": "procesadores",
        "nombre": "Intel Core i5",
        "marca": "Intel",
        "modelo": "i5-10400",
        "precio": 900000,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-react-39655.appspot.com/o/i5-10400.jpg?alt=media&token=44459054-fe0e-4576-818c-ca9deb97bb5c"
    },
    {
        "id": 6,
        "idCategoria": "tarjetas-video",
        "nombre": "RTX 2080",
        "marca": "MSI",
        "modelo": "RTX 2080",
        "precio": 3000000,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-react-39655.appspot.com/o/nvidia-2080.jpg?alt=media&token=868f7ac0-4092-4176-86d7-c10d852113d7"
    },
    {
        "id": 7,
        "idCategoria": "memorias-ram",
        "nombre": "RAM 16GB / 2x8",
        "marca": "Corsair",
        "modelo": "VENGEANCE - RGB",
        "precio": 500000,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-react-39655.appspot.com/o/ram-corsair-vengeance-rgb.jpg?alt=media&token=b49457aa-9fd2-42f5-a803-90f6443c122b"
    },
    {
        "id": 8,
        "idCategoria": "procesadores",
        "nombre": "Ryzen 7 5700x",
        "marca": "AMD",
        "modelo": "Ryzen 7 5700x",
        "precio": 800000,
        "stock": 20,
        "img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-react-39655.appspot.com/o/ryzen7-5700x.jpg?alt=media&token=8ce734b0-dba0-4028-8347-8cdf158458a0"
    },
    {
        "id": 9,
        "idCategoria": "tajetas-video",
        "nombre": "RTX 2060",
        "marca": "EVGA",
        "modelo": "RTX 2060",
        "precio": 2000000,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-react-39655.appspot.com/o/nvidia-2060.jpg?alt=media&token=ba3d40b9-899b-4522-be21-7e5e93190aa9"
    },
    {
        "id": 10,
        "idCategoria": "procesadores",
        "nombre": "Intel Core i9",
        "marca": "Intel",
        "modelo": "i9-10980",
        "precio": 1500000,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-react-39655.appspot.com/o/i9-10980.jpg?alt=media&token=2d7a57aa-4f1d-438e-88c8-f2c37cecc896"
    },
    {
        "id": 11,
        "idCategoria": "tarjetas-video",
        "nombre": "RTX 3080",
        "marca": "ROG STRIX",
        "modelo": "RTX 3080",
        "precio": 3000000,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-react-39655.appspot.com/o/nvidia-3080ti.jpg?alt=media&token=dff8a844-baf0-4e70-adfd-48c607b5e216"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.stock > 0))
        }, 500)
    }) 
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.idCategoria === category))
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === parseInt(productId)))
        }, 200)
    })
}