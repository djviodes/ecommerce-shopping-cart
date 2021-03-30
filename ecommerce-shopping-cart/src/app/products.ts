export const products = [
    {
        id: 1,
        name: 'Free Ticket',
        price: 0.00,
        description: 'Free ticket for anyone to make a valuable contribution towards our future online events programme. Thank you.',
        numberOfTickets: 100
    },
    {
        id: 2,
        name: 'Alumni VIP Ticket',
        price: 3500.00,
        description: 'This livestream will broadcast via a private YouTube link that will be sent to ticket purchasers an hour prior to showtime.',
        numberOfTickets: 50,
        saleStart: new Date('April 01, 2021 08:00:00').getTime(),
        saleExpire: new Date('April 05, 2021 20:00:00').getTime()
    },
    {
        id: 3,
        name: 'Donate',
        description: 'Access to arts is vital. Pay what you can.',
        donateOptions: [
            50,
            100,
            200,
            500
        ],
    },
    {
        id: 4,
        name: 'Book: Good Strategy - Bad Strategy',
        price: 17.99,
        description: 'Learn from the experts of business process management',
        image: '../assets/gs-bs.jpeg'
    }
]