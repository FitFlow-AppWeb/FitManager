/**
 * This file contains the definition of the Data class.
 * The class is used to model a data entity that represents a single
 * dashboard metric or statistic with relevant display information.
 *
 * Attributes:
 * - title:    The name or label of the metric
 * - value:    The numeric or textual value of the metric
 * - change:   A string indicating how the value has changed (e.g., "+5%", "-2")
 * - period:   The time frame for the reported change (e.g., "last week")
 * - image:    Path to an icon or image that visually represents the metric
 * //
 * Author: Tomio Nakamurakare
 */

export class Data {
    constructor(title = "", value = "", change = "", period = "", image = "") {
        this.title = title;
        this.value = value;
        this.change = change;
        this.period = period;
        this.image = image;
    }
}
