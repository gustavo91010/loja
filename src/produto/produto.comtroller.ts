import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProdutoService } from "./produto.service";
import { ProdutoDto } from "./dto/produtoDto";

@Controller('/produto')
export class ProdtuoController{
constructor(private produtoService: ProdutoService){}

@Post()
async cadastrarProduto(@Body() produtoDto: ProdutoDto){
   return await this.produtoService.cadastrar(produtoDto);

}
@Get()
async buscarTodos(){

    return await this.produtoService.buscarTodos()
}
@Get('/id/:id')
async buscarPorId(@Param('id') id: string){

    return this.produtoService.buscarPorId(id)
}

@Get('/marca/:marca')
async buscarPorMacrca(@Param('marca') marca: string){

    return this.produtoService.buscarPorMarca(marca)
}

@Delete('/:id')
async remover(@Param('id') id: string){
    return await this.produtoService.remover(id);
}
@Get('/ola')
async teste_coneccao() {
    return 'ola produtos'
}

@Put('/:id')
async atualizar(@Param('id') id: string, @Body() produtoDto: ProdutoDto){
    console.log("entrou no controler com "+ id+" "+produtoDto)
return await this.produtoService.atualizar(produtoDto, id)
}

}