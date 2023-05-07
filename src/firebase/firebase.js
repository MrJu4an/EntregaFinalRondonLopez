import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDoc, getDocs, updateDoc, deleteDoc, collection, doc } from 'firebase/firestore';

//Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "ecommerce-react-39655.firebaseapp.com",
  projectId: "ecommerce-react-39655",
  storageBucket: "ecommerce-react-39655.appspot.com",
  messagingSenderId: "633559911411",
  appId: "1:633559911411:web:20032f5dd6048d84d32086"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Consultar BDD
const bdd = getFirestore()

//Funciones para trabajar con Firebase

//CRUD PRODUCTOS

export const createProducts = async () => {
   //Traer los productos del archivo .json
   const promise = await fetch('./json/products.json')
   const productos = await promise.json()

   //Se comenta por conflicto con funcion llamada igual
   //Traer los productos por el hook asyncMock
   //const productos = await getProducts()

   productos.forEach( async(prod) => {
      await addDoc(collection(bdd, "productos"), {
        nombre: prod.nombre,
        marca: prod.marca,
        modelo: prod.modelo,
        idCategoria: prod.idCategoria,
        stock: prod.stock,
        precio: prod.precio,
        img: prod.img
      }) //Si existe la colección agrega los productos
   })
}

export const getProducts = async() => {
  const prods = await getDocs(collection(bdd, "productos"))
  const items = prods.docs.map(prod => {
      return{ ...prod.data(), id: prod.id }
  })
  return items
}

export const getProduct = async(id) => {
  const prod = await getDoc(doc(bdd, "productos", id))
  const item = {...prod.data(), id: prod.id}
  return item
}

export const updateProduct = async(id, info) => {
  await updateDoc(doc(bdd, "productos", id), info)
}

export const deleteProduct = async(id) => {
  await deleteDoc(doc(bdd, "productos", id))
}

// CREATE y READ OrdenCompra
export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
  const ordenCompra = await addDoc(collection(bdd, "ordenCompra"), {
      cliente: cliente,
      items: carrito,
      precioTotal,
      fecha
  })
  return ordenCompra
}

export const getOrdenCompra = async(id) => {
  const ordenCompra = await getDoc(doc, (bdd, "ordenCompra", id))
  const item = { ...ordenCompra, id: ordenCompra.id }
  return item
}
