import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';


@Component(
    {
        selector:'pm-star',
        templateUrl:'./star.component.html',
        styleUrls : ['./star.component.css']
    }
)
export class StarComponent implements OnChanges
{
    ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
        this.starWidth = this.rating * 75/5;
    }
    @Input() rating : number ;
    @Output() outputEvent : EventEmitter<string> = new EventEmitter<string>();
    starWidth : number;

    onClick():void
    {
        this.outputEvent.emit('User clicked '+this.rating);
    }
}