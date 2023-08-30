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
delateMessage: String = "";
newType =  { id: 0, descripitonType:""};
searcheType:any;
fileterType=this.listeTypeProduct;

constructor(private typeProductService: TypeProductService) { }

ngOnInit(): void {
  this.getTypeProductAll();
}
public getTypeProductAll(){
  this.typeProductService.getTypeProductAll().subscribe(data=>{
    this.listeTypeProduct = data;
    this.fileterType = data;
  })
}

public delateType(id:number){
  this.typeProductService.delateType(id).subscribe(()=>{
      this.getTypeProductAll();
  });
}

public getEndId(){
  this.newType  = {id:1, descripitonType:""}
  return this.typeProductService.findEndId().subscribe(data =>{
    this.newType.id = data.id + 1;
  })
}
public saveType( ):void {
  this.typeProductService.saveTypeProduct(this.newType).subscribe((data) => {
    this.getTypeProductAll();
  })
}

public setTypeProduct():void{
  if (this.searcheType.trim() !=='') {
      this.fileterType = this.listeTypeProduct.filter(item => item.descripitonType.toLocaleLowerCase().includes(this.searcheType.toLocaleLowerCase()))
  }
  else{
    this.fileterType = this.listeTypeProduct;
  }
}

public findById(id:number){
  return this.typeProductService.findById(id).subscribe(data =>{
    this.newType = data;
  });
}
public updateTypeProduct(){
  return this.typeProductService.updateTypeProduct(this.newType).subscribe(()=>{
    this.getTypeProductAll();
  })
}
}
