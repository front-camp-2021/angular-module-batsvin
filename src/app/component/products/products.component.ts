import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList: any;
  searchKey: string = "";
  public searchTerm: string = '';
  constructor(private api: ProductsService) { }


  ngOnInit(): void {
    this.api.getProduct()
      .subscribe(response => {
        this.productList = response;
      })


    this.api.search.subscribe((val: any) => {
      this.searchKey = val;
    })
  }
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.api.search.next(this.searchTerm);
  }
}
