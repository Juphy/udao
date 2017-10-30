import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-web-trans',
  templateUrl: './detail-web-trans.component.html',
  styleUrls: ['./detail-web-trans.component.css']
})

export class DetailWebTransComponent {
  @Input() webTrans
  @Input() special
  @Input() ee
}
