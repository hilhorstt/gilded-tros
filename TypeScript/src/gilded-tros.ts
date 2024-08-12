import {Item} from './item';
import { ITEM_NAMES, MAX_QUALITY, MIN_QUALITY } from './constants'

const {
    GOOD_WINE,
    BDAWG_KEYCHAIN,
    BACKSTAGE_PASSES_REFACTOR,
    BACKSTAGE_PASSES_HAXX,
    DUPLICATE_CODE,
    LONG_METHODS,
    UGLY_VARIABLE_NAMES,
} = ITEM_NAMES

export class GildedTros {

    constructor(public items: Array<Item>) {

    }
    
    updateGoodWine(item: Item): void {
        if (item.quality < MAX_QUALITY) {
            item.quality += 1;
        }
        
        item.sellIn -= 1;
        
        if (item.sellIn < 0 && item.quality < MAX_QUALITY) {
            item.quality += 1;
        }
    }

    updateBackstagePasses(item: Item): void {
        const qualityIncrease = item.quality < MAX_QUALITY ? 1 : 0;

        item.quality += qualityIncrease;
        
        if (item.name === BACKSTAGE_PASSES_REFACTOR && item.sellIn < 11) {
            item.quality += qualityIncrease;
        }

        if (item.sellIn < 6) {
            item.quality += qualityIncrease;
        }

        item.sellIn -= 1;

        if (item.sellIn < 0) {
            item.quality = MIN_QUALITY;
        }
    }

    updateSmellyCode(item: Item): void {
        if (item.quality > MIN_QUALITY) {
            item.quality = Math.max(item.quality - 2, MIN_QUALITY)
        } else if (item.sellIn < 0) {
            item.quality = Math.max(item.quality - 4, MIN_QUALITY)
        }
        
        item.sellIn -= 1;
    }
    
    updateRegularItem(item: Item): void {
        if (item.quality > MIN_QUALITY) {
            item.quality -= 1;
        }
        
        item.sellIn -= 1;

        if (item.sellIn < 0 && item.quality > MIN_QUALITY) {
            item.quality -= 1;
        }
    }

    public updateQuality(): void {
        this.items.forEach(item => {
            switch (item.name) {
                case GOOD_WINE:
                    this.updateGoodWine(item)
                    break
                case BDAWG_KEYCHAIN:
                    break
                
                case BACKSTAGE_PASSES_REFACTOR:
                case BACKSTAGE_PASSES_HAXX:
                    this.updateBackstagePasses(item)
                    break
                
                case DUPLICATE_CODE:
                case LONG_METHODS:
                case UGLY_VARIABLE_NAMES:
                    this.updateSmellyCode(item)
                    break
                
                default:
                    this.updateRegularItem(item)
                    break;
            }
        })
    }

}

