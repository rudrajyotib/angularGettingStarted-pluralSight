import { Component, OnInit } from '@angular/core'
import { Product } from './product';
import { ProductService } from './product.service';


@Component(
    {
        selector:'pm-products',
        templateUrl:'./product-list.component.html',
        styleUrls:['./product-list.component.css']
    }
)
export class ProductListComponent implements OnInit{
    
    
    pageTitle : String = 'Products LIst';
    imageWidth:number = 50;
    imageMargin : number = 2;
    showImage : boolean = true;
    _listFilter : string;
    errorMessage : string;
    private _productService : ProductService;

    get listFilter():string
    {
      return this._listFilter;
    }

    set listFilter(value: string) 
    {
      this._listFilter = value;
      this.filterProductList();
    }


    filteredProducts : Product[];
    products :Product[] ;

      filterProductList():void
      {
        if (this.listFilter)
        {
          this.filteredProducts=this.products.filter(product => product.productName.toLowerCase().includes(this._listFilter.toLowerCase()));
        }else
        {
          this.filteredProducts=this.products;
        }
      }

      toggleImage():void{
          this.showImage = !this.showImage;
      }

      constructor(productService : ProductService)
      {
        this._productService = productService;
      }

      onRatingClicked(message:string):void
      {
        this.pageTitle = 'Product clicked '+ message;
      }

      ngOnInit(): void 
      {
        this._productService.getProducts().subscribe(
          {
            next : products =>
            {this.products = products;
            this.filteredProducts = products} ,
            error : err => this.errorMessage = err
          }
        );
        this.filterProductList();
      }
  
}