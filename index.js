class Persona {
    constructor(nombre,edad,genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    };

    personaComiendo() {
        return `${this.nombre} ya esta comiendo`
    };

    personaDurmiendo() {
        return `${this.nombre} duerme 8 hrs al dia`
    };

    ocuparDia() {
        return `${this.nombre} ya esta chambeanding`
    };
};

class Estudiante extends Persona {
    constructor(nombre,edad,genero,nivelEducativo,colegio) {
        super(nombre,edad,genero);
        this.nivelEducativo = nivelEducativo
        this.colegio = colegio
    };
    
    personaComiendo() {
        return `${super.personaComiendo()}, y tiene poco tiempo ya que esta en el ${this.nivelEducativo}`
    };

    personaDurmiendo() {
        return `${super.personaDurmiendo()} y se levanta temprano para llegar al colegio de ${this.colegio} ya que estudia el ${this.nivelEducativo}`
    };

    ocuparDia() {
        return `${super.ocuparDia()} y su jornada es de 8hrs`
    };
};

class Trabajador extends Persona {
    constructor(nombre,edad,genero,ocupacion,LugarDeTrabajo) {
        super(nombre,edad,genero);
        this.ocupacion = ocupacion;
        this.LugarDeTrabajo = LugarDeTrabajo;
    };

    personaComiendo() {
        return `${super.personaComiendo()} y solo tiene 1 hora ya que esta trabajando `
    };

    personaDurmiendo() {
        return `${super.personaDurmiendo()}, la ventaja es que el trabaja en ${this.LugarDeTrabajo}`
    };

    ocuparDia() {
        return `${super.ocuparDia()} desde ${this.LugarDeTrabajo} ya que el es ${this.ocupacion}`
    };

};




const persona = new Persona("Noel","29 años","Masculino")
const alumno = new Estudiante("Noel","29 años","Masculino","Bachillerato","Hogwarts")
const empleado = new Trabajador("Noel","29 años","Masculino","Programador","Casa")


console.log(persona)
console.log(alumno)
console.log(empleado)

console.log(persona.personaComiendo())
console.log(persona.personaDurmiendo())
console.log(persona.ocuparDia())

console.log(alumno.personaComiendo())
console.log(alumno.personaDurmiendo())
console.log(alumno.ocuparDia())

console.log(empleado.personaComiendo())
console.log(empleado.personaDurmiendo())
console.log(empleado.ocuparDia())





/*ANIMALES*/

class Animal {
    constructor(tamaño,color,especie) {
    this.tamaño = tamaño
    this.color = color
    this.especie = especie
    }

   dameDatos(){
    return `El animal mide: ${this.tamaño},es de color: ${this.color},y su especie es: ${this.especie}`
   }


    comer(){
        console.log("comiendo...")
    };

    dormir(){
        console.log("Durmiendo...")
    }
};

class Domestico extends Animal {
    constructor(tamaño,color,especie,dueño,dieta) {
    super(tamaño,color,especie)
    this.dueño = dueño
    this.dieta = dieta
    }
    dameDatos(){
        return `${super.dameDatos()},su dueño se llama: ${this.dueño}, y el come: ${this.dieta}`
       }
};

class Silvestre extends Animal {
    constructor(tamaño,color,especie,habitad,dieta) {
    super(tamaño,color,especie)
    this.habitad = habitad
    this.dieta = dieta
    }
    dameDatos(){
        return `${super.dameDatos()}, el vive en : ${this.habitad}, y su dieta se basa en : ${this.dieta}`
       }
};
const animal = new Animal("2 metros", "blanco","Bipedo")
const perro = new Domestico("60 cm","negro","pitbull","Noel","croquetas")
const leon = new Silvestre("1 metro","cafe claro","Panthera leo"," lssabana","carne")

console.log(perro)
console.log(perro.tamaño)

console.log(animal)
console.log(animal.dameDatos())
console.log(perro.dameDatos())
console.log(leon.dameDatos())