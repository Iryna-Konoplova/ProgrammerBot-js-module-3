const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
    }

    this.potions.push(potionName);
  },
    removePotion(potionName) {
      
//     const potionIndex = this.potions.indexOf(potionName);
//     if (potionIndex === -1) {
//       return `Зелья ${potionName} нет в инвентаре!`;
//     }
//     this.potions.splice(potionIndex, 1);

    for (const potion of this.potions) {
        //   console.log(potion);
          if (potion.name === potionName) {
              this.potions.splice(this.potions.indexOf(potion), 1);
              return this.potions;
          }
    }
  },
    updatePotionName(oldName, newName) {
      
// const potionIndex = this.potions.indexOf(oldName);
//     if (potionIndex === -1) {
//       return `Зелья ${oldName} нет в инвентаре!`;
//     }
//     this.potions.splice(potionIndex, 1, newName);

    for (const potion of this.potions) {
        
          if (potion.name === oldName) {
             potion.name = newName;
              return this.potions;
          }
    }
  },
  // Пиши код выше этой строки
};





// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }));
// console.log(atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 }));
// console.log(atTheOldToad.removePotion('Дыхание дракона'));
// console.log(atTheOldToad.removePotion('Зелье скорости'));
// console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));
// console.log(atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'));