let restaurant = {
    name: 'ASB',
    guestCapacity: 100,
    guestCount: 0,
    checkAvailability: function(partySize) {
        if(this.guestCapacity - this.guestCount >= partySize) {
           return 'We can seat you!'
        }
        else {
           return 'Nah fam'
        }
    },
    seatParty: function(partySize) {
        this.guestCount = this.guestCount + partySize;
        return;
    },
    removeParty: function(partySize) {
        this.guestCount = this.guestCount - partySize;
        return;
    }
};

restaurant.seatParty(70);
console.log(restaurant.checkAvailability(20));
restaurant.seatParty(35);
console.log(restaurant.checkAvailability(20));
restaurant.removeParty(50);
console.log(restaurant.checkAvailability(20));