import { Component } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Categorie } from '../model/categorie.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html'
})
export class AddProduitComponent {

  newProduit = new Produit();
  categories!: Categorie[];
  newIdCat!: number;
  newCategorie!: Categorie;

  constructor(private produitService: ProduitService,
              private router : Router) {}

  ngOnInit(): void {
    /* this.categories = this.produitService.listeCategories(); */
  }

  addProduit() {
    //console.log(this.newProduit);
    /* this.newCategorie = this.produitService.consulterCategorie(this.newIdCat); */
    this.produitService.ajouterProduit(this.newProduit)
      .subscribe(prod => {
        console.log(prod);
        this.router.navigate(['produits']);
      });
  }

}
