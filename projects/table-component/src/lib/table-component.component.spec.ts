import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table-component.component';

describe('TableComponentComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a data property', () => {
    component.data = ['pizza'];
    expect(component.data).toBeTruthy();
  })
  it('should have a headers array', () =>{
    component.headers = ['pizza']
    expect(component.headers).toBeTruthy();
  })
  it("should parse headers", () =>{

    component.ngOnChanges(
      {
        data:{currentValue: [     
          {
            "name": "GAULEY RIVER AT CAMDEN ON GAULEY, WV",
            "riverId": "03187000",
            "latitude": "38.36594285",
            "longitude": "-80.6009232",
            "srs": "EPSG:4326",
            "levels": null,
            "flow": null,
            "riverData": null,
            "state": "West Virginia",
            "stateCode": "WV"
          }]
        }
      })
    fixture.detectChanges();
    expect(component.headers.length).toEqual(10);
  })
});
