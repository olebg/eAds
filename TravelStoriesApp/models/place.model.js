class Place {
    static isValid(model) {
        // return typeof model !== 'undefined' &&
        //     typeof model.name === 'string' &&
        //     typeof model.name.length >1;
     }

    get id() {
        return this._id;
    }

    static toViewModel(model) {
        const viewModel = new Place();
        Object.keys(model)
            .forEach((prop) => {
                viewModel[prop] = model[prop];
            });

        return viewModel;
    }
}

module.exports = Place;
