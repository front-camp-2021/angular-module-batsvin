import { Component, OnInit, } from '@angular/core';
import { AsideService } from 'src/app/service/aside.service';
import { ProductsComponent } from '../products/products.component';



@Component({
  providers: [ProductsComponent],
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']

})
export class AsideComponent implements OnInit {


  public categoriesList: any;
  public brandsList: any;

  constructor(private api: AsideService, private comp: ProductsComponent) { }

  ngOnInit(): void {
    this.api.getCategories()
      .subscribe(response => {
        this.categoriesList = response;
      })
    this.api.getBrands()
      .subscribe(response => {
        this.brandsList = response;
      })
  }
  public filter(comp: any): void {
    this.comp.filter(comp);
    console.log('fil1')
  }

}
