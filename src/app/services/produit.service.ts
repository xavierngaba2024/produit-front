import { ApplicationConfig, Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = { 
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  //produits: Produit[]; //un tableau de Produit
  produit! : Produit;
  /* categories: Categorie[]; */
  apiURL: string = 'http://localhost:8080/produits/api';
  constructor(private http: HttpClient) {
    /* this.categories = [{ idCat: 1, nomCat: "PC" },
                       { idCat: 2, nomCat: "Imprimante" }]; */

    /* this.produits = [
      {
        idProduit: 1, nomProduit: "PC Asus", prixProduit: 3000.600, dateCreation: new Date("01/14/2011"), categorie: { idCat: 1, nomCat: "PC" }
      },
      {
        idProduit: 2, nomProduit: "Imprimante Epson", prixProduit: 450, dateCreation: new Date("12/17/2010"), categorie: { idCat: 2, nomCat: "Imprimante" }
      },
      {
        idProduit: 3, nomProduit: "Tablette Samsung", prixProduit: 900.123, dateCreation: new Date("02/20/2020"), categorie: { idCat: 1, nomCat: "PC" }
      }
    ] */

  }

  listeProduit(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiURL);
  }

  ajouterProduit(prod: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.apiURL, prod, httpOptions);
  }

  /* supprimerProduit(prod: Produit) {
    //supprimer le produit prod du tableau produits
    const index = this.produits.indexOf(prod, 0);
    if (index > -1) {
      this.produits.splice(index, 1);
    }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }); 
  } */

  /* consulterProduit(id: number): Produit {
    this.produit = this.produits.find(p => p.idProduit == id)!;
    return this.produit;
  }

  trierProduits() {
    this.produits = this.produits.sort((n1, n2) => {
      if (n1.idProduit! > n2.idProduit!) {
        return 1;
      }
      if (n1.idProduit! < n2.idProduit!) {
        return -1;
      }
      return 0;
    });
  }

  updateProduit(p: Produit) {
    // console.log(p);
    this.supprimerProduit(p);
    this.ajouterProduit(p);
    this.trierProduits();
  } */

  /* listeCategories(): Categorie[] {
    return this.categories;
  }

  consulterCategorie(id: number): Categorie {
    return this.categories.find(cat => cat.idCat == id)!;
  } */

}
