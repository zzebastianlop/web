function loadImage(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onload = function () {
            if (xhr.status === 200) {
                const reader = new FileReader();
                reader.onload = function (event) {
                    resolve(event.target.result);
                };
                reader.readAsDataURL(xhr.response);
            } else {
                reject(new Error('Failed to load image'));
            }
        };
        xhr.onerror = function () {
            reject(new Error('Network error'));
        };
        xhr.send();
    });
}

function loadFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function (event) {
            resolve(event.target.result);
        };
        reader.onerror = function (error) {
            reject(error);
        };
        reader.readAsDataURL(file);
    });
}

let signaturePad = null;
let userImageDataURL = null;
let userImageDataURL1 = null;

function initializeSignaturePad() {
    const canvas = document.querySelector("canvas");
    canvas.height = canvas.offsetHeight;
    canvas.width = canvas.offsetWidth;
    signaturePad = new SignaturePad(canvas, {});
}

async function handleImageUpload(event, setImageDataURL) {
    const file = event.target.files[0];
    if (file) {
        try {
            const dataURL = await loadFileAsDataURL(file);
            setImageDataURL(dataURL);
        } catch (error) {
            console.error("Error loading file:", error);
        }
    }
}

function setupEventListeners() {
    const imageUploadInput = document.getElementById('imageUpload');
    imageUploadInput.addEventListener('change', (event) => handleImageUpload(event, (dataURL) => userImageDataURL = dataURL));

    const imageUploadInput1 = document.getElementById('imageUpload1');
    imageUploadInput1.addEventListener('change', (event) => handleImageUpload(event, (dataURL) => userImageDataURL1 = dataURL));

    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleFormSubmit();
    });
}

async function handleFormSubmit() {
    const nombredelequipo = document.getElementById('nombredelequipo').value;
    const descripcion = document.getElementById('descripcion').value;
    const modelo = document.getElementById('modelo').value;
    const marca = document.getElementById('marca').value;
    const placa = document.getElementById('placa').value;
    const riesgo = document.getElementById('riesgo').value;
    const sede = document.getElementById('sede').value;
    const temperatura = document.getElementById('temperatura').value;
    const dimensiones = document.getElementById('dimensiones').value;
    const requerimientos = document.getElementById('requerimientos').value;

    const uno = document.getElementById('uno').value;
    const dos = document.getElementById('dos').value;
    const tres = document.getElementById('tres').value;
    const cuatro = document.getElementById('cuatro').value;
    const cinco = document.getElementById('cinco').value;
    const seis = document.getElementById('seis').value;
    const siete = document.getElementById('siete').value;
    const ocho = document.getElementById('ocho').value;
    const nueve = document.getElementById('nueve').value;
    const diez = document.getElementById('diez').value;
    const once = document.getElementById('once').value;
    const doce = document.getElementById('doce').value;
    const trece = document.getElementById('trece').value;

    const unoq = document.getElementById('unoq').value;
    const dosq = document.getElementById('dosq').value;
    const tresq = document.getElementById('tresq').value;
    const cuatroq = document.getElementById('cuatroq').value;
    const cincoq = document.getElementById('cincoq').value;
    const seisq = document.getElementById('seisq').value;
    const sieteq = document.getElementById('sieteq').value;
    const ochoq = document.getElementById('ochoq').value;
    const nueveq = document.getElementById('nueveq').value;
    const diezq = document.getElementById('diezq').value;
    const onceq = document.getElementById('onceq').value;
    const doceq = document.getElementById('doceq').value;

    const unow = document.getElementById('unow').value;
    const dosw = document.getElementById('dosw').value;
    const tresw = document.getElementById('tresw').value;
    const cuatrow = document.getElementById('cuatrow').value;
    const cincow = document.getElementById('cincow').value;
    const seisw = document.getElementById('seisw').value;
    const sietew = document.getElementById('sietew').value;
    const ochow = document.getElementById('ochow').value;

    const unoe = document.getElementById('unoe').value;
    const dose = document.getElementById('dose').value;
    const trese = document.getElementById('trese').value;
    const cuatroe = document.getElementById('cuatroe').value;
    const cincoe = document.getElementById('cincoe').value;
    const seise = document.getElementById('seise').value;
    const sietee = document.getElementById('sietee').value;
    const ochoe = document.getElementById('ochoe').value;

    try {
        await generatePDF(
            nombredelequipo, addLineBreaks(descripcion), modelo, marca, placa, riesgo, sede, temperatura, dimensiones, requerimientos, addLineBreaksuno(uno), addLineBreaksuno(dos), addLineBreaksuno(tres), addLineBreaksuno(cuatro), addLineBreaksuno(cinco), addLineBreaksuno(seis), addLineBreaksuno(siete), addLineBreaksuno(ocho), addLineBreaksuno(nueve), addLineBreaksuno(diez), addLineBreaksuno(once), addLineBreaksuno(doce), addLineBreaksuno(trece), addLineBreaksdos(unoq), addLineBreaksdos(dosq), addLineBreaksdos(tresq), addLineBreaksdos(cuatroq), addLineBreaksdos(cincoq), addLineBreaksdos(seisq), addLineBreaksdos(sieteq), addLineBreaksdos(ochoq), addLineBreaksdos(nueveq), addLineBreaksdos(diezq), addLineBreaksdos(onceq), addLineBreaksdos(doceq), addLineBreaksuno(unow), addLineBreaksuno(dosw), addLineBreaksuno(tresw), addLineBreaksuno(cuatrow), addLineBreaksuno(cincow), addLineBreaksuno(seisw), addLineBreaksuno(sietew), addLineBreaksuno(ochow), addLineBreaksuno(unoe), addLineBreaksuno(dose), addLineBreaksuno(trese), addLineBreaksuno(cuatroe), addLineBreaksuno(cincoe), addLineBreaksuno(seise), addLineBreaksuno(sietee), addLineBreaksuno(ochoe));
    } catch (error) {
        console.error("Error generating PDF:", error);
    }
}

async function generatePDF(
    nombredelequipo, descripcion, modelo, marca, placa, riesgo, sede, temperatura, dimensiones, requerimientos,
    uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, trece,
    unoq, dosq, tresq, cuatroq, cincoq, seisq, sieteq, ochoq, nueveq, diezq, onceq, doceq,
    unow, dosw, tresw, cuatrow, cincow, seisw, sietew, ochow,
    unoe, dose, trese, cuatroe, cincoe, seise, sietee, ochoe
) {
    try {
        const image = await loadImage("juia.jpg");
        const signatureImage = signaturePad.toDataURL();

        const pdf = new jsPDF('p', 'pt', 'letter');
        pdf.addImage(image, 'PNG', 0, 0, 565, 792);
        pdf.addImage(signatureImage, 'PNG', 273, 665, 250, 50);

        if (userImageDataURL) {
            pdf.addImage(userImageDataURL, 'PNG', 95, 200, 106, 105); // Primera imagen
        }

        if (userImageDataURL1) {  // Segunda imagen
            pdf.addImage(userImageDataURL1, 'PNG', 330, 326, 115, 105);
        }

        pdf.setFontSize(7);
        pdf.text(nombredelequipo, 130, 71);
        pdf.setFontSize(6);
        pdf.text(descripcion, 273, 200);

        pdf.setFontSize(7);
        pdf.text(modelo, 351, 71);
        pdf.text(marca, 130, 80);
        pdf.text(placa, 465, 80);
        pdf.text(riesgo, 465, 71);
        pdf.text(sede, 351, 80);
        pdf.text(temperatura, 177, 98);
        pdf.text(dimensiones, 420, 98);
        pdf.text(requerimientos, 176, 108);

        // PARTES DEL EQUIPO  (TENER EN CUENTA QUE ESTAN TROCADOS EN LA PROGRAMACIÓN (EL #1 equivale al #13). el #2 al #1, el #3 al #2, etc solo en partes del equipo)
        
        pdf.text(uno, 44, 343);
        pdf.text(dos, 44, 353);
        pdf.text(tres, 44, 362);
        pdf.text(cuatro, 44, 371);
        pdf.text(cinco, 44, 381);
        pdf.text(seis, 44, 390);
        pdf.text(siete, 44, 400);
        pdf.text(ocho, 44, 409);
        pdf.text(nueve, 48, 418);
        pdf.text(diez, 48, 427);
        pdf.text(once, 48, 437);
        pdf.text(doce, 48, 447);
        pdf.text(trece, 44, 333);
        // OPERACIÓN DEL EQUIPO
        pdf.text(unoq, 44, 466);
        pdf.text(dosq, 44, 475);
        pdf.text(tresq, 44, 484);
        pdf.text(cuatroq, 44, 494);
        pdf.text(cincoq, 44, 503);
        pdf.text(seisq, 44, 512);
        pdf.text(sieteq, 44, 522);
        pdf.text(ochoq, 44, 531);
        pdf.text(nueveq, 44, 540);
        pdf.text(diezq, 48, 550);
        pdf.text(onceq, 48, 559);
        pdf.text(doceq, 48, 569);

        // ACCESORIOS
        pdf.text(unow, 44, 587);
        pdf.text(dosw, 44, 597);
        pdf.text(tresw, 44, 606);
        pdf.text(cuatrow, 44, 616);
        pdf.text(cincow, 44, 625);
        pdf.text(seisw, 44, 634);
        pdf.text(sietew, 44, 644);
        pdf.text(ochow, 44, 653);

        // LIMPIEZA Y DESINFECCIÓN
        pdf.text(unoe, 264, 587);
        pdf.text(dose, 264, 597);
        pdf.text(trese, 264, 606);
        pdf.text(cuatroe, 264, 616);
        pdf.text(cincoe, 264, 625);
        pdf.text(seise, 264, 634);
        pdf.text(sietee, 264, 644);
        pdf.text(ochoe, 264, 653);

        pdf.setFillColor(0, 0, 0);


        pdf.save(`${nombredelequipo}.pdf`);
    } catch (error) {
        console.error("Error generating PDF:", error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    initializeSignaturePad();
    setupEventListeners();
});


/*


                    
                    <div class="mb-3">
                        <label for="curso" class="form-label">Curso al que aspiro</label>
                        <select class="form-select" id="curso">
                            <option value="">Seleccione un curso</option>
                            <option value="Desarrollo de aplicaciones web">Desarrollo de aplicaciones web</option>
                            <option value="Desarrollo de aplicaciones moviles">Desarrollo de aplicaciones moviles
                            </option>
                        </select>
                    </div>


<div class="row mb-3">
                        <div class="col-md-6">
                            <label for="nombre" class="form-label">Nombres</label>
                            <input type="text" class="form-control" id="nombre">
                        </div>
                        <div class="col-md-6">
                            <label for="apellido" class="form-label">Apellidos</label>
                            <input type="text" class="form-control" id="apellido">
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="email" class="form-label">Correo electronico</label>
                        <input type="email" class="form-control" id="email">
                    </div>

                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="direccion" class="form-label">Direccion</label>
                            <input type="text" class="form-control" id="direccion">
                        </div>
                        <div class="col-md-6">
                            <label for="telefono" class="form-label">Telefono</label>
                            <input type="text" class="form-control" id="telefono">
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-md-2">
                            <div>
                                <label for="" class="form-label">Tiene hijos</label>
                                <div class="form-check form-check-inline">
                                    <input type="radio" name="hijos" class="form-check-input" id="hijos-si" value="1">
                                    <label for="hijos-si" class="form-check-label">Si</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input type="radio" name="hijos" class="form-check-input" id="hijos-no" value="0"
                                        checked>
                                    <label for="hijos-no" class="form-check-label">No</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-10">
                            <div>
                                <label for="numeroHijos" class="form-label">Cuantos hijos tiene?</label>
                                <select class="form-select" id="numeroHijos">
                                    <option value="0">Seleccione una opcion</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="Mas de 4">Mas de 4</option>
                                </select>
                            </div>
                        </div>
                    </div>


                    <div class="row mb-3">
                        <div class="col-md-3">
                            <div>
                                <label for="" class="form-label">Tiene alguna discapacidad?</label>
                                <div class="form-check form-check-inline">
                                    <input type="radio" name="discapacidad" class="form-check-input"
                                        id="discapacidad-si" value="1">
                                    <label for="discapacidad-si" class="form-check-label">Si</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input type="radio" name="discapacidad" class="form-check-input"
                                        id="discapacidad-no" value="0" checked>
                                    <label for="discapacidad-no" class="form-check-label">No</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-9">
                            <div>
                                <label for="discapacidad-desc" class="form-label">Cual es la discapacidad?</label>
                                <input type="text" class="form-control" id="discapacidad-desc">
                            </div>
                        </div>
                    </div>
*/


