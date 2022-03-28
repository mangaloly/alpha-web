import { Component, OnInit } from '@angular/core';
import { CommonProvider } from 'src/app/providers/common';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(public common: CommonProvider) { }

  ngOnInit(): void {
  }

}
