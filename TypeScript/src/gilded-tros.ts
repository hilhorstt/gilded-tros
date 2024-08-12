import {Item} from './item';

export class GildedTros {

    constructor(public items: Array<Item>) {

    }
    
    tempProcessFunction(item: Item): void {
        if (item.name != 'Good Wine' && item.name != 'Backstage passes for Re:Factor'
            && item.name != 'Backstage passes for HAXX') {
            if (item.quality > 0) {
                if (item.name != 'B-DAWG Keychain') {
                    item.quality = item.quality - 1;
                }
            }
        } else {
            if (item.quality < 50) {
                item.quality = item.quality + 1;

                if (item.name == 'Backstage passes for Re:Factor') {
                    if (item.sellIn < 11) {
                        if (item.quality < 50) {
                            item.quality = item.quality + 1;
                        }
                    }

                    if (item.sellIn < 6) {
                        if (item.quality < 50) {
                            item.quality = item.quality + 1;
                        }
                    }
                }
            }
        }

        if (item.name != 'B-DAWG Keychain') {
            item.sellIn = item.sellIn - 1;
        }

        if (item.sellIn < 0) {
            if (item.name != 'Good Wine') {
                if (item.name === 'Backstage passes for Re:Factor' || item.name === 'Backstage passes for HAXX') {
                    item.quality = item.quality - item.quality;
                } else {
                    if (item.quality > 0) {
                        if (item.name != 'B-DAWG Keychain') {
                            item.quality = item.quality - 1;
                        }
                    }
                }
            } else {
                if (item.quality < 50) {
                    item.quality = item.quality + 1;
                }
            }
        }
    }
    updateGoodWine(item: Item): void {
        this.tempProcessFunction(item);
    }

    updateBDAWGKeychain(item: Item): void {
        this.tempProcessFunction(item);
    }

    updateBackstagePasses(item: Item): void {
        this.tempProcessFunction(item);
    }

    updateRegularItem(item: Item): void {
        this.tempProcessFunction(item);
    }

    public updateQuality(): void {
        this.items.forEach(item => {
            switch (item.name) {
                case 'Good Wine':
                    this.updateGoodWine(item)
                    break
                case 'B-DAWG Keychain':
                    this.updateBDAWGKeychain(item)
                    break
                
                case 'Backstage passes for Re:Factor':
                case 'Backstage passes for HAXX':
                    this.updateBackstagePasses(item)
                    break
                
                default:
                    this.updateRegularItem(item)
                    break;
            }
        })
    }

}

