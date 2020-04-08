import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle : string = 'Product Detail ';
  product : Product;
  errorMessage = '';

  constructor(private route : ActivatedRoute,
              private router : Router,
              private productService : ProductService
              ) 
  {

   }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += id;
    if (id)
    {
      this.getProduct(id);
    }


    // this.product =
    // {
    //   "productId": 10,
    //   "productName": "Video Game Controller",
    //   "productCode": "GMG-0042",
    //   "releaseDate": "October 15, 2018",
    //   "description": "Standard two-button video game controller",
    //   "price": 35.95,
    //   "starRating": 4.6,
    //   "imageUrl": "assets/images/xbox-controller.png"
    // };
  }

  private getProduct(productId:number){
    this.productService.getProduct(productId).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err 
    });
  }

  onBack() : void{
    this.router.navigate(['/products']);
  }

}
