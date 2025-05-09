/**
 * This file contains the definition of the Data class.
 * The class is used to model the data entity, including information such as title, value, change, period, and an image.
 *
 * Tomio Nakamurakare
 */

export class Data {
    constructor({
                    title = "",
                    value = "",
                    change = "",
                    period = "",
                    image = ""
                }) {
        this.title = title;
        this.value = value;
        this.change = change;
        this.period = period;
        this.image = image;
    }
}
