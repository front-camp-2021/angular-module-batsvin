import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList: any;
  public filterCategory: any;
  public categoriesList: any;
  public brandsList: any;
  searchKey: string = "";
  public searchTerm: string = '';
  constructor(private api: ProductsService) { }


  ngOnInit(): void {
    this.api.getProduct()
      .subscribe(response => {
        this.productList = response;
        this.filterCategory = response;


      })
    this.api.getCategories()
      .subscribe(response => {
        this.categoriesList = response;
      })
    this.api.getBrands()
      .subscribe(response => {
        this.brandsList = response;
      })


    this.api.search.subscribe((val: any) => {
      this.searchKey = val;
    })
  }
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.api.search.next(this.searchTerm);
  }
  filter(category: string) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.category.toLowerCase() == category.toLowerCase()) {
        return true;
      }
      return false;
    })
  }
  filterBrands(brand: string) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.brand.toLowerCase() == brand.toLowerCase()) {
        return true;
      }
      return false;
    })
  }

}
