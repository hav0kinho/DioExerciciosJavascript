/*Crie uma função getAdmins que recebe um Map;
Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usu;arios que são administradores.
*/
let usuarios = new Map();
usuarios.set("Luiz", "Admin");
usuarios.set("Ruallyson", "Programador");
usuarios.set("Ruann", "Programador");
usuarios.set("Nergal", "Admin");



function getAdmins(map){
    let administradores = [];
    for(pessoa of map){
        if(pessoa[1] === "Admin"){
            console.log("Admin dedectado");
            administradores.push(pessoa[0]);
        }
    }
    return administradores;
}

console.log(getAdmins(usuarios));