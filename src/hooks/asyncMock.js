const products = [
    {
        "id": 1,
        "idCategoria": "tarjetas-video",
        "nombre": "NVIDIA-3060",
        "marca": "EVGA",
        "modelo": "3060",
        "precio": 3500000,
        "stock": 30,
        "img": "../img/nvidia-3060.jpg"
    },
    {
        "id": 2,
        "idCategoria": "procesadores",
        "nombre": "Ryzen 5 5600",
        "marca": "AMD",
        "modelo": "5600",
        "precio": 700000,
        "stock": 30,
        "img": "../img/ryzen5-5600.jpg"
    },
    {
        "id": 3,
        "idCategoria": "memorias-ram",
        "nombre": "RAM 16GB / 2x8 ",
        "marca": "TForce",
        "modelo": "DRR4",
        "precio": 400000,
        "stock": 30,
        "img": "../img/ram-tforce.jpg"
    },
    {
        "id": 4,
        "idCategoria": "memorias-ram",
        "nombre": "RAM 16GB / 2x8 ",
        "marca": "Corsair",
        "modelo": "VENGEANCE",
        "precio": 380000,
        "stock": 20,
        "img": "../img/ram-corsair-vengeance.jpg"
    },
    {
        "id": 5,
        "idCategoria": "procesadores",
        "nombre": "Intel Core i5",
        "marca": "Intel",
        "modelo": "i5-10400",
        "precio": 900000,
        "stock": 15,
        "img": "../img/i5-10400.jpg"
    },
    {
        "id": 6,
        "idCategoria": "tarjetas-video",
        "nombre": "RTX 2080",
        "marca": "MSI",
        "modelo": "RTX 2080",
        "precio": 3000000,
        "stock": 15,
        "img": "../img/nvidia-2080.jpg"
    },
    {
        "id": 7,
        "idCategoria": "memorias-ram",
        "nombre": "RAM 16GB / 2x8",
        "marca": "Corsair",
        "modelo": "VENGEANCE - RGB",
        "precio": 500000,
        "stock": 15,
        "img": "../img/ram-corsair-vengeance-rgb.jpg"
    },
    {
        "id": 8,
        "idCategoria": "procesadores",
        "nombre": "Ryzen 7 5700x",
        "marca": "AMD",
        "modelo": "Ryzen 7 5700x",
        "precio": 800000,
        "stock": 20,
        "img": "../img/ryzen7-5700x.jpg"
    },
    {
        "id": 9,
        "idCategoria": "tajetas-video",
        "nombre": "RTX 2060",
        "marca": "EVGA",
        "modelo": "RTX 2060",
        "precio": 2000000,
        "stock": 10,
        "img": "../img/nvidia-2060.jpg"
    },
    {
        "id": 10,
        "idCategoria": "procesadores",
        "nombre": "Intel Core i9",
        "marca": "Intel",
        "modelo": "i9-10980",
        "precio": 1500000,
        "stock": 15,
        "img": "../img/i9-10980.jpg"
    },
    {
        "id": 11,
        "idCategoria": "tarjetas-video",
        "nombre": "RTX 3080",
        "marca": "ROG STRIX",
        "modelo": "RTX 3080",
        "precio": 3000000,
        "stock": 15,
        "img": "../img/nvidia-3080ti.jpg"
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