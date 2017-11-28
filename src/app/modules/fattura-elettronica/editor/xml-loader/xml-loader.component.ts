import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mx-editor-xml-loader',
  templateUrl: './xml-loader.component.html',
  styleUrls: ['./xml-loader.component.scss']
})
export class XmlLoaderComponent implements OnInit {

  @Output()
  public loaded: EventEmitter<XmlLoaderLoadedEventArgs> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public onFileChange(e: any) {
    const file = e.target.files[0] as any;
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (args: any) => {
      const content = args.target.result;
      this.loaded.emit({ content });
      e.target.value = '';
    };
    reader.readAsText(file);
  }
}


export interface XmlLoaderLoadedEventArgs {
  content: string;
}
