import {Component} from "vue";

export interface StretchNavBarDataInfo{
    icon: Component,
    name: string,
    children: array<StretchNavBarArrayData>
}

export interface StretchNavBarArrayData{
    icon: Component,
    name: string,
    path: string
}