import { v4 as uuidv4} from 'npm:uuid'


class Tarea {

    id = ''
    desc = ''
    completadoEn = null

    constructor( desc ) {

        this.id = uuidv4();
        this.desc = desc;
        this.completadoEn = null

    }

    cargarTareaArr( arr ) {

    }


}




export {
    Tarea
}
