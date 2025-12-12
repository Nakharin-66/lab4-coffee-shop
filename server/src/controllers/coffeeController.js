let coffees = [];
let nextId = 1;

// GET all coffee items
exports.getAllCoffees = (req, res) => res.json(coffees);

// GET coffee by ID
exports.getCoffeeById = (req, res) => {
    const coffee = coffees.find(c => c.id == req.params.coffeeId);
    res.json(coffee || {});
};

// POST create new coffee
exports.createCoffee = (req, res) => {
    const coffee = { id: nextId++, ...req.body };
    coffees.push(coffee);
    res.json(coffee);
};

// PUT update coffee
exports.updateCoffee = (req, res) => {
    let coffee = coffees.find(c => c.id == req.params.coffeeId);
    if (coffee) Object.assign(coffee, req.body);
    res.json(coffee || {});
};

// DELETE coffee
exports.deleteCoffee = (req, res) => {
    coffees = coffees.filter(c => c.id != req.params.coffeeId);
    res.json({ message: 'Deleted' });
};
