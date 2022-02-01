// (esto tiene relación con la linea 41):
/*class Libro {
    constructor(titulo, autor){
        this.titulo= titulo
        this.autor=autor
    }
}*/
class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascotas = ["firulais", "hercules", "tulio"];
        this.libros = [{
                titulo: "1984",
                autor: "george orwell"},
                {titulo: "Odisea",
                autor: "homero"}
        ];
    };

    getFullName() {
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`);
    }
    addMascota(nuevo) {
        this.mascotas.push(nuevo)
    }

    getBookNames() {
        console.log(this.libros.length);
    }

    addBook(titulo, autor) {
        this.libros.push({titulo,autor})
    }

    /// Intenté también hacerlo pasandole por parametro un objeto(linea 57):   ///
    /*addBook(titulo){
    this.libros.push(titulo)
    }*/

    ///  Acá intenté hacerlo creando dentro de la función un objeto: ///
    /*addBook(titulo,autor){
        const libroNuevo= new Libro(titulo,autor);
        this.libros.push(libroNuevo)
    }*/




};

const Usuario1 = new Usuario("Jaime", "perez");
Usuario1.getFullName();
Usuario1.addMascota("kika");
Usuario1.addBook("Ilíada", "homero");
Usuario1.getBookNames();
//Usuario1.addBook({titulo:"Ilíada", autor:"homero"});

console.log(Usuario1);