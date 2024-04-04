// Wegleitung Bei der dieser Challenge fand ich es einfacher nach der Vorgehensweise zu suchen. Bin somit auf folgenden Code gestossen:

let data = [
    {"customer_number": "1002442", "invoice": {"number": 850004111}},
    {"customer_number": "1352432", "invoice": {"number": 850002489}},
    {"customer_number": "1002442", "invoice": {"number": 850004391}},
    {"customer_number": "3944835", "invoice": {"number": 86028494}}
];

data.sort((a, b) => {
    if (a.customer_number < b.customer_number) return -1;
    if (a.customer_number > b.customer_number) return 1;
    
    return a.invoice.number < b.invoice.number ? 1 : -1;
});

console.log(data);

// Dieser Code funktionierte deshalb ist hier auch keine korrektur von meinem Kollege. :)