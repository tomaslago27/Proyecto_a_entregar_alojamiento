const formulario= document.getElementById('form');
const inputs= document.querySelectorAll('#form input');
// uso expresiones regulares
const expresiones={
usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, //Letras, numeros, guion y guion bajo
nombre:  /^[a-zA-ZÀ-ÿ\s]{1,40}$/, //Letras y espacios, pueden llevar acentos
password: /^.{4,12}$/, // 4 a 12 digitos
correo:  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
telefono: /^\d{7,14}$/ //7 a 14 numeros.
}
const campos = {
    usuario: false,
    nombre: false,
    Pass: false,
    Correo: false,
    Tel: false,
    Nacion: false,
    Dni: false
}
const ValidarFormulario = (e) => {
    switch(e.target.name){     // esto me sirve para identificar cual de los campos queremos validar
      case "usuario":
          if(expresiones.usuario.test(e.target.value)){
            document.getElementById('grupoUsuario').classList.remove('grupo-incorrecto');//el getElementBy nos permite obtener la id del grupoUsuario en este caso, classlist.remove nos permite quitar una clase a esa id. classlist nos permite acceder a la lista de clases
            document.getElementById('grupoUsuario').classList.add('grupo-correcto'); // el classList.add nos permite agregar una clase a esa id
            document.querySelector('#grupoUsuario i').classList.remove('fa-solid');//el querySelectorAll me permite acceder a algun elemento que esta dentro de otro elemento que yo quiera de la id que le indico, para poder modificarla    
            document.querySelector('#grupoUsuario i').classList.remove('fa-circle-xmark'); // el icono al estar formado por dos clases, tengo que remover a cada una por individual, no me deja removerlas ambas a la vez
            document.querySelector('#grupoUsuario i').classList.add('fa-solid'); // lo mismo pasa cuando las agrego
            document.querySelector('#grupoUsuario i').classList.add('fa-circle-check');
            document.querySelector('#grupoUsuario .FormInputError').classList.remove('FormInputError-activo');
            campos['usuario'] = true;
        } else{
            document.getElementById('grupoUsuario').classList.add('grupo-incorrecto');
            document.getElementById('grupoUsuario').classList.remove('grupo-correcto');
            document.querySelector('#grupoUsuario i').classList.remove('fa-solid');
            document.querySelector('#grupoUsuario i').classList.remove('fa-circle-check');
            document.querySelector('#grupoUsuario i').classList.add('fa-solid');    
            document.querySelector('#grupoUsuario i').classList.add('fa-circle-xmark');
            document.querySelector('#grupoUsuario .FormInputError').classList.add('FormInputError-activo');
            campos['usuario'] = false;
          }
          
         // validarCampo(expresiones.usuario, e.target,'usuario');
      break;
      case "nombre":
        if(expresiones.nombre.test(e.target.value)){
            document.getElementById('grupoNombre').classList.remove('grupo-incorrecto');//el getElementBy nos permite obtener la id del grupoNombre en este caso, classlist.remove nos permite quitar una clase a esa id. classlist nos permite acceder a la lista de clases
            document.getElementById('grupoNombre').classList.add('grupo-correcto'); // el classList.add nos permite agregar una clase a esa id
            document.querySelector('#grupoNombre i').classList.remove('fa-solid');//el querySelectorAll me permite acceder a algun elemento que esta dentro de otro elemento que yo quiera de la id que le indico, para poder modificarla    
            document.querySelector('#grupoNombre i').classList.remove('fa-circle-xmark'); // el icono al estar formado por dos clases, tengo que remover a cada una por individual, no me deja removerlas ambas a la vez
            document.querySelector('#grupoNombre i').classList.add('fa-solid'); // lo mismo pasa cuando las agrego
            document.querySelector('#grupoNombre i').classList.add('fa-circle-check');
            document.querySelector('#grupoNombre .FormInputError').classList.remove('FormInputError-activo');
            campos['nombre'] = true;
        } else{
            document.getElementById('grupoNombre').classList.add('grupo-incorrecto');
            document.getElementById('grupoNombre').classList.remove('grupo-correcto');
            document.querySelector('#grupoNombre i').classList.remove('fa-solid');
            document.querySelector('#grupoNombre i').classList.remove('fa-circle-check');
            document.querySelector('#grupoNombre i').classList.add('fa-solid');    
            document.querySelector('#grupoNombre i').classList.add('fa-circle-xmark');
            document.querySelector('#grupoNombre .FormInputError').classList.add('FormInputError-activo');
            campos['nombre'] = false;
          }
      
      break;
      case "Tel":
        if(expresiones.telefono.test(e.target.value)){
            document.getElementById('grupoTel').classList.remove('grupo-incorrecto');//el getElementBy nos permite obtener la id del grupoTel en este caso, classlist.remove nos permite quitar una clase a esa id. classlist nos permite acceder a la lista de clases
            document.getElementById('grupoTel').classList.add('grupo-correcto'); // el classList.add nos permite agregar una clase a esa id
            document.querySelector('#grupoTel i').classList.remove('fa-solid');//el querySelectorAll me permite acceder a algun elemento que esta dentro de otro elemento que yo quiera de la id que le indico, para poder modificarla    
            document.querySelector('#grupoTel i').classList.remove('fa-circle-xmark'); // el icono al estar formado por dos clases, tengo que remover a cada una por individual, no me deja removerlas ambas a la vez
            document.querySelector('#grupoTel i').classList.add('fa-solid'); // lo mismo pasa cuando las agrego
            document.querySelector('#grupoTel i').classList.add('fa-circle-check');
            document.querySelector('#grupoTel .FormInputError').classList.remove('FormInputError-activo');
            campos['Tel'] = true;
        } else{
            document.getElementById('grupoTel').classList.add('grupo-incorrecto');
            document.getElementById('grupoTel').classList.remove('grupo-correcto');
            document.querySelector('#grupoTel i').classList.remove('fa-solid');
            document.querySelector('#grupoTel i').classList.remove('fa-circle-check');
            document.querySelector('#grupoTel i').classList.add('fa-solid');    
            document.querySelector('#grupoTel i').classList.add('fa-circle-xmark');
            document.querySelector('#grupoTel .FormInputError').classList.add('FormInputError-activo');
            campos['Tel'] = false;
          }
        
      break;
      case "Pass":
        if(expresiones.password.test(e.target.value)){
            document.getElementById('grupoPass').classList.remove('grupo-incorrecto');//el getElementBy nos permite obtener la id del grupoPass en este caso, classlist.remove nos permite quitar una clase a esa id. classlist nos permite acceder a la lista de clases
            document.getElementById('grupoPass').classList.add('grupo-correcto'); // el classList.add nos permite agregar una clase a esa id
            document.querySelector('#grupoPass i').classList.remove('fa-solid');//el querySelectorAll me permite acceder a algun elemento que esta dentro de otro elemento que yo quiera de la id que le indico, para poder modificarla    
            document.querySelector('#grupoPass i').classList.remove('fa-circle-xmark'); // el icono al estar formado por dos clases, tengo que remover a cada una por individual, no me deja removerlas ambas a la vez
            document.querySelector('#grupoPass i').classList.add('fa-solid'); // lo mismo pasa cuando las agrego
            document.querySelector('#grupoPass i').classList.add('fa-circle-check');
            document.querySelector('#grupoPass .FormInputError').classList.remove('FormInputError-activo');
            campos['Pass'] = true;
        } else{
            document.getElementById('grupoPass').classList.add('grupo-incorrecto');
            document.getElementById('grupoPass').classList.remove('grupo-correcto');
            document.querySelector('#grupoPass i').classList.remove('fa-solid');
            document.querySelector('#grupoPass i').classList.remove('fa-circle-check');
            document.querySelector('#grupoPass i').classList.add('fa-solid');    
            document.querySelector('#grupoPass i').classList.add('fa-circle-xmark');
            document.querySelector('#grupoPass .FormInputError').classList.add('FormInputError-activo');
            campos['Pass'] = false;
          }
          const inputPass3 = document.getElementById('Pass');
          const inputPass4 = document.getElementById('Pass2');
   if(inputPass3.value != inputPass4.value)
   { 
      document.getElementById('grupoPass2').classList.add('grupo-incorrecto');
              document.getElementById('grupoPass2').classList.remove('grupo-correcto');
              document.querySelector('#grupoPass2 i').classList.remove('fa-solid');
              document.querySelector('#grupoPass2 i').classList.remove('fa-circle-check');
              document.querySelector('#grupoPass2 i').classList.add('fa-solid');    
              document.querySelector('#grupoPass2 i').classList.add('fa-circle-xmark');
              document.querySelector('#grupoPass2 .FormInputError').classList.add('FormInputError-activo');
   console.log('ff');
      }
   else{
      document.getElementById('grupoPass2').classList.remove('grupo-incorrecto');//el getElementBy nos permite obtener la id del grupoPass en este caso, classlist.remove nos permite quitar una clase a esa id. classlist nos permite acceder a la lista de clases
      document.getElementById('grupoPass2').classList.add('grupo-correcto'); // el classList.add nos permite agregar una clase a esa id
      document.querySelector('#grupoPass2 i').classList.remove('fa-solid');//el querySelectorAll me permite acceder a algun elemento que esta dentro de otro elemento que yo quiera de la id que le indico, para poder modificarla    
      document.querySelector('#grupoPass2 i').classList.remove('fa-circle-xmark'); // el icono al estar formado por dos clases, tengo que remover a cada una por individual, no me deja removerlas ambas a la vez
      document.querySelector('#grupoPass2 i').classList.add('fa-solid'); // lo mismo pasa cuando las agrego
      document.querySelector('#grupoPass2 i').classList.add('fa-circle-check');
      document.querySelector('#grupoPass2 .FormInputError').classList.remove('FormInputError-activo');
      console.log('tt');  
      
   }
      break;
      case "Pass2":
         //validarPass2();
         const inputPass1 = document.getElementById('Pass');
        const inputPass2 = document.getElementById('Pass2');
 if(inputPass1.value != inputPass2.value)
 { 
    document.getElementById('grupoPass2').classList.add('grupo-incorrecto');
            document.getElementById('grupoPass2').classList.remove('grupo-correcto');
            document.querySelector('#grupoPass2 i').classList.remove('fa-solid');
            document.querySelector('#grupoPass2 i').classList.remove('fa-circle-check');
            document.querySelector('#grupoPass2 i').classList.add('fa-solid');    
            document.querySelector('#grupoPass2 i').classList.add('fa-circle-xmark');
            document.querySelector('#grupoPass2 .FormInputError').classList.add('FormInputError-activo');
 console.log('ff');
            campos['Pass2'] = false;
    }
 else{
    document.getElementById('grupoPass2').classList.remove('grupo-incorrecto');//el getElementBy nos permite obtener la id del grupoPass en este caso, classlist.remove nos permite quitar una clase a esa id. classlist nos permite acceder a la lista de clases
    document.getElementById('grupoPass2').classList.add('grupo-correcto'); // el classList.add nos permite agregar una clase a esa id
    document.querySelector('#grupoPass2 i').classList.remove('fa-solid');//el querySelectorAll me permite acceder a algun elemento que esta dentro de otro elemento que yo quiera de la id que le indico, para poder modificarla    
    document.querySelector('#grupoPass2 i').classList.remove('fa-circle-xmark'); // el icono al estar formado por dos clases, tengo que remover a cada una por individual, no me deja removerlas ambas a la vez
    document.querySelector('#grupoPass2 i').classList.add('fa-solid'); // lo mismo pasa cuando las agrego
    document.querySelector('#grupoPass2 i').classList.add('fa-circle-check');
    document.querySelector('#grupoPass2 .FormInputError').classList.remove('FormInputError-activo');
    console.log('tt');  
    campos['Pass2'] = true;
 }
      break;
      case "Correo":
        if(expresiones.correo.test(e.target.value)){
            document.getElementById('grupoCorreo').classList.remove('grupo-incorrecto');//el getElementBy nos permite obtener la id del grupoCorreo en este caso, classlist.remove nos permite quitar una clase a esa id. classlist nos permite acceder a la lista de clases
            document.getElementById('grupoCorreo').classList.add('grupo-correcto'); // el classList.add nos permite agregar una clase a esa id
            document.querySelector('#grupoCorreo i').classList.remove('fa-solid');//el querySelectorAll me permite acceder a algun elemento que esta dentro de otro elemento que yo quiera de la id que le indico, para poder modificarla    
            document.querySelector('#grupoCorreo i').classList.remove('fa-circle-xmark'); // el icono al estar formado por dos clases, tengo que remover a cada una por individual, no me deja removerlas ambas a la vez
            document.querySelector('#grupoCorreo i').classList.add('fa-solid'); // lo mismo pasa cuando las agrego
            document.querySelector('#grupoCorreo i').classList.add('fa-circle-check');
            document.querySelector('#grupoCorreo .FormInputError').classList.remove('FormInputError-activo');
            campos['Correo'] = true;
        } else{
            document.getElementById('grupoCorreo').classList.add('grupo-incorrecto');
            document.getElementById('grupoCorreo').classList.remove('grupo-correcto');
            document.querySelector('#grupoCorreo i').classList.remove('fa-solid');
            document.querySelector('#grupoCorreo i').classList.remove('fa-circle-check');
            document.querySelector('#grupoCorreo i').classList.add('fa-solid');    
            document.querySelector('#grupoCorreo i').classList.add('fa-circle-xmark');
            document.querySelector('#grupoCorreo .FormInputError').classList.add('FormInputError-activo');
            campos['Correo'] = false;
        }
        
      break;
      case "Nacion":
        if(expresiones.nombre.test(e.target.value)){
            document.getElementById('grupoNacion').classList.remove('grupo-incorrecto');//el getElementBy nos permite obtener la id del grupoUsuario en este caso, classlist.remove nos permite quitar una clase a esa id. classlist nos permite acceder a la lista de clases
            document.getElementById('grupoNacion').classList.add('grupo-correcto'); // el classList.add nos permite agregar una clase a esa id
            document.querySelector('#grupoNacion i').classList.remove('fa-solid');//el querySelectorAll me permite acceder a algun elemento que esta dentro de otro elemento que yo quiera de la id que le indico, para poder modificarla    
            document.querySelector('#grupoNacion i').classList.remove('fa-circle-xmark'); // el icono al estar formado por dos clases, tengo que remover a cada una por individual, no me deja removerlas ambas a la vez
            document.querySelector('#grupoNacion i').classList.add('fa-solid'); // lo mismo pasa cuando las agrego
            document.querySelector('#grupoNacion i').classList.add('fa-circle-check');
            document.querySelector('#grupoNacion .FormInputError').classList.remove('FormInputError-activo');
            campos['Nacion'] = true;
        } else{
            document.getElementById('grupoNacion').classList.add('grupo-incorrecto');
            document.getElementById('grupoNacion').classList.remove('grupo-correcto');
            document.querySelector('#grupoNacion i').classList.remove('fa-solid');
            document.querySelector('#grupoNacion i').classList.remove('fa-circle-check');
            document.querySelector('#grupoNacion i').classList.add('fa-solid');    
            document.querySelector('#grupoNacion i').classList.add('fa-circle-xmark');
            document.querySelector('#grupoNacion .FormInputError').classList.add('FormInputError-activo');
            campos['Nacion'] = false;
        }
        
      break;
      case "Dni":
        if(expresiones.telefono.test(e.target.value)){
            document.getElementById('grupoDni').classList.remove('grupo-incorrecto');//el getElementBy nos permite obtener la id del grupoDni en este caso, classlist.remove nos permite quitar una clase a esa id. classlist nos permite acceder a la lista de clases
            document.getElementById('grupoDni').classList.add('grupo-correcto'); // el classList.add nos permite agregar una clase a esa id
            document.querySelector('#grupoDni i').classList.remove('fa-solid');//el querySelectorAll me permite acceder a algun elemento que esta dentro de otro elemento que yo quiera de la id que le indico, para poder modificarla    
            document.querySelector('#grupoDni i').classList.remove('fa-circle-xmark'); // el icono al estar formado por dos clases, tengo que remover a cada una por individual, no me deja removerlas ambas a la vez
            document.querySelector('#grupoDni i').classList.add('fa-solid'); // lo mismo pasa cuando las agrego
            document.querySelector('#grupoDni i').classList.add('fa-circle-check');
            document.querySelector('#grupoDni .FormInputError').classList.remove('FormInputError-activo');
            campos['Dni'] = true;
        } else{
            document.getElementById('grupoDni').classList.add('grupo-incorrecto');
            document.getElementById('grupoDni').classList.remove('grupo-correcto');
            document.querySelector('#grupoDni i').classList.remove('fa-solid');
            document.querySelector('#grupoDni i').classList.remove('fa-circle-check');
            document.querySelector('#grupoDni i').classList.add('fa-solid');    
            document.querySelector('#grupoDni i').classList.add('fa-circle-xmark');
            document.querySelector('#grupoDni .FormInputError').classList.add('FormInputError-activo');
            campos['Dni'] = false;
          }
        
      break;
    } 
}
/*
const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo${campo}`).classList.remove('grupo-incorrecto');
document.getElementById(` grupo${campo} `).classList.add('grupo-correcto');
document.querySelector(` #grupo${campo} i `).classList.remove('fa-solid');
document.querySelector(` #grupo${campo} i `).classList.remove('fa-circle-xmark');// el icono al estar formado por dos clases, tengo que remover a cada una por individual, no me deja removerlas ambas a la vez
        document.querySelector(` #grupo${campo} i `).classList.add('fa-solid'); // lo mismo pasa cuando las agrego
        document.querySelector(` #grupo${campo} i `).classList.add('fa-circle-check');
        document.querySelector(` #grupo${campo} .FormInputError `).classList.remove('FormInputError-activo');
    } else{
        document.getElementById(` grupo${campo} `).classList.add('grupo-incorrecto');
        document.getElementById(` grupo${campo} `).classList.remove('grupo-correcto');
        document.querySelector(` #grupo${campo} i `).classList.remove('fa-solid');
        document.querySelector(` #grupo${campo} i `).classList.remove('fa-circle-check');
        document.querySelector(` #grupo${campo} i `).classList.add('fa-solid');    
        document.querySelector(` #grupo${campo} i `).classList.add('fa-circle-xmark');
        document.querySelector(` #grupo${campo} .FormInputError `).classList.add('FormInputError-activo');
      
      }
}
*/
/*
const validarPass2 = () => {
 const inputPass1 = document.getElementById('Pass');
 const inputPass2 = document.getElementById('Pass2');
 if(inputPass1 !== inputPass2)
 {
    document.getElementById(` grupoPass2 `).classList.add('grupo-incorrecto');
    document.getElementById(` grupoPass2 `).classList.remove('grupo-correcto');
    document.querySelector(` #grupoPass2 i `).classList.remove('fa-solid');
    document.querySelector(` #grupoPass2 i `).classList.remove('fa-circle-check');
    document.querySelector(` #grupoPass2 i `).classList.add('fa-solid');    
    document.querySelector(` #grupoPass2 i `).classList.add('fa-circle-xmark');
    document.querySelector(` #grupoPass2 .FormInputError `).classList.add('FormInputError-activo');
 }
};
*/
inputs.forEach((input)=> {
input.addEventListener('keyup',ValidarFormulario);  // me sirve para que cada ves que presione una tecla y posterior a eso la suelte, la funcion recien escuche los datos ingresados
input.addEventListener('blur',ValidarFormulario);

 });
formulario.addEventListener('submit',(e)=>{
e.preventDefault()   //sirve para que los datos cuando le doy al boton enviar no los envie a otra pagina, solo los quiero validar a los datos
const terminos = document.getElementById('Terminos'); 
if(campos.Correo && campos.Dni && campos.Nacion && campos.Pass && campos.Tel && campos.nombre && campos.usuario && terminos.checked){
    formulario.reset();
    document.getElementById('FormExito').classList.add('FormExito-activo');
    setTimeout(() => {  // este nos va a servir para que luego de un tiempo el mensaje de exito desaparezca
        
    document.getElementById('FormExito').classList.remove('FormExito-activo');
    }, 5000);
  document.querySelectorAll('.grupo-correcto').forEach( (icono) => {
    icono.classList.remove('grupo-correcto');
  })
   }
   else{
    
    document.getElementById('mensaje').classList.add('mensaje-activo');
       setTimeout(() =>{
        document.getElementById('mensaje').classList.remove('mensaje-activo');
       },5000)
   }
  } );
  