import { Component, OnInit } from '@angular/core';
import { TypeProduct } from 'src/app/model/TypeProduct';
import { TypeProductService } from 'src/app/service/typeProduct/type-product.service';

@Component({
  selector: 'app-type-produt',
  templateUrl: './type-produt.component.html',
  styleUrls: ['./type-produt.component.css']
})
export class TypeProdutComponent implements OnInit {
listeTypeProduct: TypeProduct[] = [];

constructor(private typeProductService: TypeProductService) { }

ngOnInit(): void {
  this.getTypeProductAll();
}
getTypeProductAll(){
  return this.typeProductService.getTypeProductAll().subscribe(data=>{
    this.listeTypeProduct = data;
    console.log('====================================');
    console.log(this.listeTypeProduct);
    console.log('====================================');
  })
}

}
