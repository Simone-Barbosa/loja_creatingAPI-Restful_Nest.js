/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductRepository } from "./product.repository";
import { CreateProductDTO } from "./dto/createProduct.dto";


@Controller('/products')

export class ProductController {

    constructor(private productRepository: ProductRepository) { }

    @Post()
    async createProduct(@Body() dataOfProducts: CreateProductDTO) {
        this.productRepository.save(dataOfProducts);
        return dataOfProducts;
    }

    @Get()
    async listProducts() {
        return this.productRepository.list();
    }
}
