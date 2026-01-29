import { Component, Input } from '@angular/core';
import { Product } from '../../../shared/models/product';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { CdkTrapFocus } from '../../../../../node_modules/@angular/cdk/types/_a11y-module-chunk';
import { CurrencyPipe } from '@angular/common';
import { MatAnchor } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-product-item',
  imports: [MatCard, MatCardContent, CurrencyPipe, MatCardActions, MatAnchor, MatIcon],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input() product?: Product;
}
