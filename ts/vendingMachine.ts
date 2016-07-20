/// <reference path="./coin.ts" />
/// <reference path="./product.ts" />
/// <reference path="./prodcutFactory.ts" />


enum VendingMachineSize {
    small = 6,
    medium = 9,
    large = 12
}

class Cell {
    constructor (public product: CocaCola){

    }

    stock = ko.observable(3);
    sold = ko.observable(false);
}

class VendingMachine {
    private paid = ko.observable(0);
    private cells = ko.observableArray([]);

    acceptedCoins: Quarter[] = [new Quarter()];

    set size(givenSize: VendingMachineSize){
        this.cells([]);

        for (var index = 0; index < givenSize; index++) {
            let product = productFactory.GetProduct();
            this.cells.push(new Cell(product));
        }
    }

    acceptCoin = (coin: Quarter): void => {
        let oldTotal = this.paid();
        this.paid(oldTotal + coin.Value);
    }
}