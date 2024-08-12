import {Item} from '../src/item';
import {GildedTros} from '../src/gilded-tros';



describe('GildedTrosTest', () => {
    describe('Ring of Cleansening Code', () => {
        const items: Item[] = [new Item('Ring of Cleansening Code', 1, 20)];
        const app: GildedTros = new GildedTros(items);
        
        test('Ring of Cleansening Code -- day 0', () => {
            expect(app.items[0].quality).toBe(20);
        });

        test('Ring of Cleansening Code -- day 1', () => {
            app.updateQuality()
            expect(app.items[0].quality).toBe(19);
        });

        test('Ring of Cleansening Code -- day 3', () => {
            app.updateQuality()
            expect(app.items[0].quality).toBe(17);
        });

        test('Ring of Cleansening Code -- day 11', () => {
            for (let i = 0; i < 15; i++) {
                app.updateQuality()
            }

            expect(app.items[0].quality).toBe(0);
        })
    })
    
    describe('Good Wine', () => {
        const items: Item[] = [new Item('Good Wine', 2, 0)];
        const app: GildedTros = new GildedTros(items);

        test('Good Wine -- day 0', () => {
            expect(app.items[0].quality).toBe(0);
        });
        test('Good Wine -- day 1', () => {
            app.updateQuality()
            expect(app.items[0].quality).toBe(1);
        });
        test('Ring of Cleansening Code -- day 11', () => {
            for (let i = 0; i < 55; i++) {
                app.updateQuality()
            }

            expect(app.items[0].quality).toBe(50);
        })
    })

    describe('B-DAWG Keychain', () => {
        const items: Item[] = [new Item('B-DAWG Keychain', -1, 80)];
        const app: GildedTros = new GildedTros(items);

        test('Good Wine -- day 0', () => {
            expect(app.items[0].quality).toBe(80);
        });
        test('Good Wine -- day 1', () => {
            app.updateQuality()
            expect(app.items[0].quality).toBe(80);
        });
        test('Ring of Cleansening Code -- day 11', () => {
            for (let i = 0; i < 20; i++) {
                app.updateQuality()
            }

            expect(app.items[0].quality).toBe(80);
        })
    })
    
    describe('Backstage passes for Re:Factor', () => {
        const items: Item[] = [new Item('Backstage passes for Re:Factor', 11, 20)]
        const app: GildedTros = new GildedTros(items);
        
        test('Backstage passes for Re:Factor -- day 0', () => {
            expect(app.items[0].quality).toBe(20);
        });

        test('Backstage passes for Re:Factor -- day 1', () => {
            app.updateQuality()
            expect(app.items[0].quality).toBe(21);
        });

        test('Backstage passes for Re:Factor -- day 2', () => {
            app.updateQuality()
            expect(app.items[0].quality).toBe(23);
        });

        test('Backstage passes for Re:Factor -- day 3', () => {
            app.updateQuality()
            expect(app.items[0].quality).toBe(25);
        });

        test('Backstage passes for Re:Factor -- day 4', () => {
            app.updateQuality()
            expect(app.items[0].quality).toBe(27);
        });

        test('Backstage passes for Re:Factor -- day 5', () => {
            app.updateQuality()
            expect(app.items[0].quality).toBe(29);
        });

        test('Backstage passes for Re:Factor -- day 6', () => {
            app.updateQuality()
            expect(app.items[0].quality).toBe(31);
        });

        test('Backstage passes for Re:Factor -- day 7', () => {
            app.updateQuality()
            expect(app.items[0].quality).toBe(34);
        });

        test('Backstage passes for Re:Factor -- day 12', () => {
            for (let i = 0; i < 16; i++) {
                app.updateQuality()
                console.log(app.items[0].quality)
            }
            expect(app.items[0].quality).toBe(0); // TODO: expect this be 0
        });
    })
});
