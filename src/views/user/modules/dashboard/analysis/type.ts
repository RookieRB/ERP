import {Component} from "vue";

export interface InfoCardData{
    title: string,
    number: string,
    isAdd: boolean,
    percentNumber: string,
    icon: Component,
    time: string,
    bottomColor: string
}
export interface ChartData{
    icon: Component,
    areaName: String,
    incomeNumber: int,
    percent: String
}

export interface TransactionData{
    img: string,
    name: string,
    date: string,
    status: number,
    type: string,
    amount: number
}