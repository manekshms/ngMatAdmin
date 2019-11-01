import { Component, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatTableDataSource, MatPaginator } from '@angular/material';

const ELEMENT_DATA = [
  { id: 1, firstName: "Ebeneser", lastName: "Roll", email: "eroll0@dailymail.co.uk", gender: "Male", age: "23" },
  { id: 2, firstName: "Leanor", lastName: "Osbidston", email: "losbidston1@sitemeter.com", gender: "Female", age: "21" },
  { id: 3, firstName: "Falkner", lastName: "Rowan", email: "frowan2@acquirethisname.com", gender: "Male", age: "35" },
  { id: 4, firstName: "Suzy", lastName: "Suzy", email: "sfiltness3@slate.com", gender: "Female", age: "18" },
  { id: 5, firstName: "Maxi", lastName: "Devoy", email: "mdevoy4@mail.ru", gender: "Female", age: "25" },
  { id: 6, firstName: "Benetta", lastName: "Tuma", email: "btuma5@wikia.com", gender: "Female", age: "47" },
  { id: 7, firstName: "Emanuele", lastName: "Yurkov", email: "eyurkov6@tinypic.com", gender: "Male", age: "39" },
  { id: 8, firstName: "Vannie", lastName: "Pena", email: "vpena7@skype.com", gender: "Female", age: "19" },
  { id: 9, firstName: "Cristina", lastName: "O' Mulderrig", email: "comulderrig8@yahoo.co.jp", gender: "Female", age: "22" },
  { id: 10, firstName: "Bartholemy", lastName: "Kubis", email: "bkubis9@nps.gov", gender: "Male", age: "26" }
];


const ELEMENT_DATA_ADVANCED_TABLE = [
  {id: 1, productName: "Sour Puss Raspberry", fullName: "Tammara Steet", address: "5960 Waubesa Avenue", status: "Delivered"},
  {id: 2, productName: "Compound - Mocha", fullName: "Cash Nielson", address: "209 Hollow Ridge Alley", status: "Delivered"},
  {id: 3, productName: "Steampan Lid", fullName: "Cyb Rosendorf", address: "2 Packers Crossing", status: "Cancelled"},
  {id: 4, productName: "Wine - Zinfandel California 2002", fullName: "Hally McPeake", address: "652 Erie Trail", status: "Ordered"},
  {id: 5, productName: "Juice - Grape, White", fullName: "Raddie Fozard", address: "747 Sommers Circle", status: "Shipped"},
  {id: 6, productName: "Lamb - Ground", fullName: "Zak Ainsbury", address: "1 Briar Crest Center", status: "Ordered"},
  {id: 7, productName: "Fuji Apples", fullName: "Jaime O'Nolan", address: "9427 Manitowish Alley", status: "Shipped"},
  {id: 8, productName: "Wine - White, Riesling, Henry Of", fullName: "Roselia Teers", address: "88715 Comanche Point", status: "Shipped"},
  {id: 9, productName: "Chilli Paste, Ginger Garlic", fullName: "Faustina Tebbutt", address: "7395 Jana Park", status: "Cancelled"},
  {id: 10, productName: "Lamb Leg - Bone - In Nz", fullName: "Tremain Mowlam", address: "44 Towne Alley", status: "Delivered"},
  {id: 11, productName: "Steamers White	", fullName: "Seymour Ivett", address: "67 Crownhardt Pass", status: "Delivered"},
  {id: 12, productName: "Bread - Bistro White", fullName: "Wallie Kleszinski", address: "5757 Everett Avenue", status: "Delivered"},
  {id: 13, productName: "Coffee Guatemala Dark", fullName: "Brett Oliver-Paull", address: "45471 Express Plaza", status: "Delivered"},
  {id: 14, productName: "Yeast Dry - Fleischman", fullName: "Penni Havik", address: "2 Summer Ridge Hill", status: "Shipped"},
  {id: 15, productName: "Beef - Inside Round", fullName: "Berthe McKeran", address: "52 Meadow Ridge Point", status: "Shipped"},
  {id: 16, productName: "Crab - Claws, 26 - 30", fullName: "Nessie Labrom", address: "00009 Schmedeman Terrace", status: "Ordered"},
  {id: 17, productName: "Ice Cream Bar - Drumstick", fullName: "Vonnie Tulloch", address: "5 Hanson Court", status: "Ordered"},
  {id: 18, productName: "Goat - Whole Cut", fullName: "Clarinda Towersey", address: "5 Arapahoe Drive", status: "Ordered"},
  {id: 19, productName: "Milkettes - 2%", fullName: "Leonerd Dreakin", address: "46097 Sugar Parkway", status: "Delivered"},
  {id: 20, productName: "Longos - Penne With Pesto", fullName: "Galven Tuohy", address: "878 Butterfield Drive", status: "Ordered"}
]

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
})
export class TablesComponent {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'gender', 'age'];
  displayedColumnsAdvanced: string[] = ['id', 'productName', 'fullName', 'address', 'status'];
  dataSource = ELEMENT_DATA;
  dataSourceAdvancedTable = new MatTableDataSource( ELEMENT_DATA_ADVANCED_TABLE);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit() {
  this.dataSourceAdvancedTable.paginator = this.paginator;
  }

  public constructor(private titleService:Title) {
    this.titleService.setTitle("Tables");
  }

  applyFilter(filterValue: string) {
    this.dataSourceAdvancedTable.filter = filterValue.trim().toLowerCase();
  }

}