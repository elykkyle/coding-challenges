/*
https://www.codewars.com/kata/5534c7858f06db29b8000075

Write a method that returns a quote for a give quantity of items.

Stock items are represented as a list of objects. Each item has the following properties:

quantity (integer)
unit price (decimal)
unit margin (decimal)
As you can see your stock is composed from a single type of items. Batches are bought from different suppliers, so they come with their own unit price and unit margin (i.e. your profit). Available items will be passed to the constructor of the Quoter class as an array or list.

Your task is to write getQuote method. It should return the best price for a given quantity of items. However, your boss is rather greedy, so the best quote is one that maximizes your margin. Note that calls to getQuote method should not modify stock passed into the Quoter constructor, i.e. multiple call to getQuote should operate on the same stock.

Your method should return one of the following strings:

"Your order cannot be fulfilled, try lower quantity" if you don't have enough stock, or
"Your best quote for $N items is $PRICE" if you have enough items in stock. The price should include cents.
Some examples to get you started:

const quoter = new Quoter([]);
quoter.getQuote(1); // should return "Your order cannot be fulfilled, try lower quantity"

const items = [{ quantity: 10, unitPrice: 100, unitMargin: 1 }, { quantity: 10, unitPrice: 110, unitMargin: 1.1 }];
const quoter = new Quoter(items);
quoter.getQuote(10); //should return "Your best quote for 10 items is 1100.00"

*/

class Quoter {
  constructor(items) {
    this.items = items;
  }

  getQuote(quantity) {
    const orderedByPrice = this.items.sort(
      (a, b) => b.unitMargin - a.unitMargin
    );

    const { remainingQuantity, quote } = orderedByPrice.reduce(
      (
        { remainingQuantity, quote },
        { quantity: itemQuantity, unitPrice, unitMargin }
      ) => {
        const fulfillableAmount =
          itemQuantity - remainingQuantity >= 0
            ? remainingQuantity
            : itemQuantity;
        return {
          remainingQuantity: remainingQuantity - fulfillableAmount,
          quote: quote + fulfillableAmount * unitPrice,
        };
      },
      { remainingQuantity: quantity, quote: 0 }
    );

    return remainingQuantity > 0
      ? 'Your order cannot be fulfilled, try lower quantity'
      : `Your best quote for ${quantity} items is ${quote.toFixed(2)}`;
  }
}

const quoter = new Quoter([]);
console.log(quoter.getQuote(1));
