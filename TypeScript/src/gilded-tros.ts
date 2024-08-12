import {Item} from './item';

export class GildedTros {

    constructor(public items: Array<Item>) {

    }
    
    updateGoodWine(item: Item): void {
        if (item.quality < 50) {
            item.quality = item.quality + 1;
        }
        
        item.sellIn = item.sellIn - 1;
        

        if (item.sellIn < 0 && item.quality < 50) {
            item.quality = item.quality + 1;
        }
    }

    updateBDAWGKeychain(): void {}

    updateBackstagePasses(item: Item): void {
        if (item.quality < 50) {
            item.quality = item.quality + 1;

            if (item.name == 'Backstage passes for Re:Factor' && item.sellIn < 11 && item.quality < 50) {
                item.quality = item.quality + 1;
            }
            
            if (item.sellIn < 6 && item.quality < 50) {
                item.quality = item.quality + 1;
            }
        }

        item.sellIn = item.sellIn - 1;

        if (item.sellIn < 0) {
            item.quality = item.quality - item.quality;
        }
    }

    updateRegularItem(item: Item): void {
        if (item.quality > 0) {
            item.quality = item.quality - 1;
        }
        
        item.sellIn = item.sellIn - 1;

        if (item.sellIn < 0 && item.quality > 0) {
            item.quality = item.quality - 1;
        }
    }

    public updateQuality(): void {
        this.items.forEach(item => {
            switch (item.name) {
                case 'Good Wine':
                    this.updateGoodWine(item)
                    break
                case 'B-DAWG Keychain':
                    this.updateBDAWGKeychain()
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

