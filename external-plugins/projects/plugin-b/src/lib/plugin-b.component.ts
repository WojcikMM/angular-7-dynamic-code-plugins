import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-plugin-b',
  template: `
    <p>
      plugin-b works!
    </p>
  `,
  styles: []
})
export class PluginBComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
