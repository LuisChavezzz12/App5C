import { StyleSheet, View, SafeAreaView, ScrollView, FlatList } from 'react-native';
import React from 'react';
import Navbar from '../../Components/NavBar';
import VistaProductos from '../../Components/VistaProductos';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

const logo = require('../../../assets/babystore.png');

const products = [
    { id: '1', title: 'Cuna portátil para bebé', price: 100, description: 'Cuna portátil plegable para bebés.', category: 'Cunas', image: require('../../../assets/cunaportatil.png') },
    { id: '2', title: 'Biberón anti-cólico', price: 20, description: 'Biberón diseñado para evitar cólicos.', category: 'Alimentación', image: require('../../../assets/biberon-anticolico.jpg') },
    { id: '3', title: 'Silla de auto para bebé', price: 150, description: 'Silla de seguridad para bebé en el automóvil.', category: 'Sillas de auto', image: 'https://picsum.photos/200/302' },
    { id: '4', title: 'Juguete de peluche', price: 15, description: 'Peluche suave y seguro para el bebé.', category: 'Juguetes', image: 'https://picsum.photos/200/303' },
    { id: '5', title: 'Monitor de bebé con cámara', price: 120, description: 'Monitor con cámara para vigilar al bebé.', category: 'Monitores', image: 'https://picsum.photos/200/304' },
    { id: '6', title: 'Ropa de bebé (body)', price: 10, description: 'Body de algodón suave para el bebé.', category: 'Ropa', image: 'https://picsum.photos/200/305' },
    { id: '7', title: 'Manta para bebé', price: 25, description: 'Manta suave y cálida para envolver al bebé.', category: 'Ropa', image: 'https://picsum.photos/200/306' },
    { id: '8', title: 'Cambiador de bebé', price: 30, description: 'Superficie acolchonada para cambiar pañales.', category: 'Accesorios', image: 'https://picsum.photos/200/307' },
    { id: '9', title: 'Cuna de madera', price: 200, description: 'Cuna tradicional de madera, elegante y resistente.', category: 'Cunas', image: 'https://picsum.photos/200/308' },
    { id: '10', title: 'Bañera para bebé', price: 50, description: 'Bañera ergonómica para el baño del bebé.', category: 'Baño', image: 'https://picsum.photos/200/309' },
    { id: '11', title: 'Silla alta para comer', price: 75, description: 'Silla alta para alimentar al bebé cómodamente.', category: 'Comida', image: 'https://picsum.photos/200/310' },
    { id: '12', title: 'Juguete de actividades para bebé', price: 20, description: 'Juguete con múltiples texturas y sonidos para el bebé.', category: 'Juguetes', image: 'https://picsum.photos/200/311' },
    { id: '13', title: 'Sacaleches eléctrico', price: 80, description: 'Sacaleches eficiente para la extracción de leche materna.', category: 'Alimentación', image: 'https://picsum.photos/200/312' },
    { id: '14', title: 'Pañales para bebé', price: 30, description: 'Pañales desechables ultra absorbentes para el bebé.', category: 'Higiene', image: 'https://picsum.photos/200/313' },
    { id: '15', title: 'Colchoneta de juegos para bebé', price: 40, description: 'Colchoneta con juegos interactivos para el bebé.', category: 'Juguetes', image: 'https://picsum.photos/200/314' },
    { id: '16', title: 'Biberón de vidrio', price: 25, description: 'Biberón de vidrio resistente, libre de BPA.', category: 'Alimentación', image: 'https://picsum.photos/200/315' },
    { id: '17', title: 'Cinturón de seguridad para silla de auto', price: 35, description: 'Cinturón ajustable y cómodo para silla de auto.', category: 'Sillas de auto', image: 'https://picsum.photos/200/316' },
    { id: '18', title: 'Zapatitos para bebé', price: 15, description: 'Zapatitos suaves de tela para proteger los pies.', category: 'Ropa', image: 'https://picsum.photos/200/317' },
    { id: '19', title: 'Portabebés ergonómico', price: 50, description: 'Portabebés ergonómico para cargar al bebé cómodamente.', category: 'Accesorios', image: 'https://picsum.photos/200/318' },
    { id: '20', title: 'Alfombra de actividades', price: 60, description: 'Alfombra colorida con diferentes texturas para el bebé.', category: 'Juguetes', image: 'https://picsum.photos/200/319' }
];

const productsSection2 = [
    { id: '21', title: 'Cochecito de bebé', price: 250, description: 'Cochecito de bebé con múltiples posiciones reclinables.', category: 'Cochecitos', image: 'https://picsum.photos/200/320' },
    { id: '22', title: 'Cuna de viaje', price: 180, description: 'Cuna portátil para viajar cómodamente con el bebé.', category: 'Cunas', image: 'https://picsum.photos/200/321' },
    { id: '23', title: 'Pañalera', price: 40, description: 'Pañalera grande para llevar todo lo necesario del bebé.', category: 'Accesorios', image: 'https://picsum.photos/200/322' },
    { id: '24', title: 'Silla de paseo ligera', price: 120, description: 'Silla de paseo compacta, ideal para viajar.', category: 'Cochecitos', image: 'https://picsum.photos/200/323' },
    { id: '25', title: 'Cuna 3 en 1', price: 220, description: 'Cuna que se convierte en cama y escritorio conforme el bebé crece.', category: 'Cunas', image: 'https://picsum.photos/200/324' },
    { id: '26', title: 'Biberón anticolico', price: 18, description: 'Biberón diseñado para reducir los cólicos en los bebés.', category: 'Alimentación', image: 'https://picsum.photos/200/325' },
    { id: '27', title: 'Gimnasio para bebé', price: 65, description: 'Gimnasio interactivo con luces y sonidos para estimular al bebé.', category: 'Juguetes', image: 'https://picsum.photos/200/326' },
    { id: '28', title: 'Camiseta para mamá', price: 25, description: 'Camiseta cómoda para mamás con mensajes divertidos.', category: 'Ropa', image: 'https://picsum.photos/200/327' },
    { id: '29', title: 'Papel higiénico para bebé', price: 10, description: 'Papel higiénico suave, especialmente diseñado para bebés.', category: 'Higiene', image: 'https://picsum.photos/200/328' },
    { id: '30', title: 'Cinturón para el bebé en el coche', price: 45, description: 'Cinturón de seguridad ajustable para bebés en el automóvil.', category: 'Sillas de auto', image: 'https://picsum.photos/200/329' },
    { id: '31', title: 'Bolsita de primeros auxilios', price: 30, description: 'Kit de primeros auxilios básico para bebés.', category: 'Accesorios', image: 'https://picsum.photos/200/330' },
    { id: '32', title: 'Andador para bebé', price: 90, description: 'Andador para ayudar al bebé a dar sus primeros pasos.', category: 'Juguetes', image: 'https://picsum.photos/200/331' },
    { id: '33', title: 'Alfombra de juegos con números', price: 55, description: 'Alfombra de actividades con números para estimular el aprendizaje.', category: 'Juguetes', image: 'https://picsum.photos/200/332' },
    { id: '34', title: 'Cojín de lactancia', price: 40, description: 'Cojín cómodo para la lactancia materna.', category: 'Accesorios', image: 'https://picsum.photos/200/333' },
    { id: '35', title: 'Silla alta para la mesa', price: 70, description: 'Silla alta con ajuste para bebé para comer en la mesa.', category: 'Comida', image: 'https://picsum.photos/200/334' },
    { id: '36', title: 'Chupete ortodóntico', price: 8, description: 'Chupete ortodóntico para el desarrollo saludable de los dientes del bebé.', category: 'Higiene', image: 'https://picsum.photos/200/335' },
    { id: '37', title: 'Termómetro digital para bebé', price: 15, description: 'Termómetro digital preciso para medir la fiebre del bebé.', category: 'Higiene', image: 'https://picsum.photos/200/336' },
    { id: '38', title: 'Móvil para cuna', price: 35, description: 'Móvil musical para cuna que ayuda a relajar al bebé.', category: 'Accesorios', image: 'https://picsum.photos/200/337' },
    { id: '39', title: 'Pañales reutilizables', price: 50, description: 'Pañales ecológicos reutilizables para el bebé.', category: 'Higiene', image: 'https://picsum.photos/200/338' },
    { id: '40', title: 'Báscula digital para bebé', price: 40, description: 'Báscula digital precisa para pesar al bebé de manera segura.', category: 'Accesorios', image: 'https://picsum.photos/200/339' },
];


const Inicio = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>

                <Header
                    titulo="BabyStore"
                    imagen={logo}
                    subtitulo="¡Todo para tu bebé en un solo lugar!"
                />

                <View style={styles.navbar}>
                    <Navbar />
                </View>


                <FlatList
                    data={products}
                    horizontal={true}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <VistaProductos
                            title={item.title}
                            price={item.price}
                            description={item.description}
                            category={item.category}
                            image={item.image}
                        />
                    )}
                    contentContainerStyle={styles.productList}
                />


                <FlatList
                    data={productsSection2}
                    horizontal={true}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <VistaProductos
                            title={item.title}
                            price={item.price}
                            description={item.description}
                            category={item.category}
                            image={item.image}
                        />
                    )}
                    contentContainerStyle={styles.productList}
                />


                <Footer
                    telefono="225B62304"
                    direccion="Huejutla de Reyes, Hidalgo. Colonia Centro c.p 43000"
                    correo="chavezvargasluisjesus@gmail.com"
                    horario="Lunes - Viernes 8:00 AM - 4:00 PM"
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Inicio;

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
        backgroundColor: 'white',
    },
    navbar: {
        backgroundColor: '#D2B48C',
        borderRadius: 12,
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 8,
        paddingVertical: 5, 
        paddingHorizontal: 5, 
        marginBottom: 10,
        alignItems: 'center',
    },
    scrollContainer: {
        paddingBottom: 30,  
        paddingTop: 5,      
        paddingHorizontal: 10, 
    },
    productList: {
        paddingVertical: 5, 
        paddingHorizontal: 10,
    },
});