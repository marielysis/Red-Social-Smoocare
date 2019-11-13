import {login} from './../assets/js/auth.js'
import {validatePost} from './../assets/js/post.js'
describe("Es una funcion", () =>{
	it ("login debe ser una funcion",() =>{
	expext(login().toBe(true));	
		});
	});
describe ("validatePost", () =>{
it ('deberia retornar false si el parametro es un string vacio',()=>{
	expect(validatePost("")).toBe(false);
})
it ('deberia retornar false si si su largo es menor a 2 elementos',()=>{
	expect(validatePost("a")).toBe(false);
})
it ('deberia retornar true si no esta vacio y es mayor de 2',()=>{
	expect(validatePost("Este es un post")).toBe(true);
})
})