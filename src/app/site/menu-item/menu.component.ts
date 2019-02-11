import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    menuItems;
    constructor() {
        this.menuItems = [
            {
                target: 'home',
                anchor: 'Home'
            },
            {
                target: 'about',
                anchor: 'About'
            },
            {
                target: 'contact',
                anchor: 'Contact'
            }
        ]
    }

    ngOnInit() {
    }

}